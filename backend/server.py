from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging first
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Email config
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '').strip()
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'Tober Law <onboarding@resend.dev>')
FIRM_EMAIL = os.environ.get('FIRM_EMAIL', 'firm@tober-law.com')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


class InquiryCreate(BaseModel):
    name: Optional[str] = ""
    email: EmailStr
    phone: Optional[str] = ""
    message: Optional[str] = ""
    attachments: Optional[List[str]] = []

class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = ""
    email: str
    phone: str = ""
    message: str = ""
    attachments: List[str] = []
    email_sent: bool = False
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


def _build_inquiry_html(inq: Inquiry) -> str:
    def esc(v: str) -> str:
        return (v or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    msg = esc(inq.message).replace("\n", "<br/>") or "<em>(no message provided)</em>"
    files = ", ".join(esc(f) for f in inq.attachments) or "None"
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f9fd;padding:24px;font-family:Arial,Helvetica,sans-serif;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e8eef5;border-radius:12px;overflow:hidden;">
          <tr><td style="background:#20497f;padding:20px 28px;">
            <span style="color:#ffffff;font-size:18px;font-weight:bold;">New Website Inquiry</span>
            <span style="color:#d9bd7a;font-size:13px;display:block;margin-top:4px;">Tober Law &mdash; Contact Form</span>
          </td></tr>
          <tr><td style="padding:24px 28px;color:#1f2b3a;font-size:15px;line-height:1.6;">
            <p style="margin:0 0 12px;"><strong>Name:</strong> {esc(inq.name) or '&mdash;'}</p>
            <p style="margin:0 0 12px;"><strong>Email:</strong> <a href="mailto:{esc(inq.email)}" style="color:#20497f;">{esc(inq.email)}</a></p>
            <p style="margin:0 0 12px;"><strong>Phone:</strong> {esc(inq.phone) or '&mdash;'}</p>
            <p style="margin:0 0 6px;"><strong>What happened:</strong></p>
            <p style="margin:0 0 12px;padding:12px 14px;background:#f5f9fd;border-radius:8px;">{msg}</p>
            <p style="margin:0 0 12px;"><strong>Attachments:</strong> {files}</p>
            <p style="margin:16px 0 0;color:#8593a3;font-size:12px;">Received {inq.created_at.strftime('%b %d, %Y at %I:%M %p UTC')}</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


async def _send_inquiry_email(inq: Inquiry) -> bool:
    """Send the inquiry to the firm via Resend. Returns True on success."""
    if not RESEND_API_KEY:
        logger.warning("RESEND_API_KEY not set - inquiry saved but email not sent.")
        return False
    params = {
        "from": SENDER_EMAIL,
        "to": [FIRM_EMAIL],
        "reply_to": inq.email,
        "subject": f"New inquiry from {inq.name or inq.email}",
        "html": _build_inquiry_html(inq),
    }
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Inquiry email sent: {result.get('id') if isinstance(result, dict) else result}")
        return True
    except Exception as e:
        logger.error(f"Failed to send inquiry email: {e}")
        return False



# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact", response_model=Inquiry)
async def create_inquiry(payload: InquiryCreate):
    inquiry = Inquiry(
        name=payload.name or "",
        email=payload.email,
        phone=payload.phone or "",
        message=payload.message or "",
        attachments=payload.attachments or [],
    )
    # Attempt to email the firm; store the outcome regardless.
    sent = await _send_inquiry_email(inquiry)
    inquiry.email_sent = sent

    doc = inquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.inquiries.insert_one(doc)

    return inquiry

@api_router.get("/contact", response_model=List[Inquiry])
async def list_inquiries():
    items = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()