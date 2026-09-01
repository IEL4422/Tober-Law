#!/usr/bin/env python3
"""
Backend API Tests for Tober Law Contact Inquiry Endpoints
Tests POST /api/contact and GET /api/contact endpoints
"""

import requests
import json
from datetime import datetime

# Get backend URL from frontend .env
BACKEND_URL = "https://law-firm-redesign.preview.emergentagent.com/api"

def test_hello_world():
    """Test the existing GET /api/ endpoint"""
    print("\n" + "="*80)
    print("TEST 1: GET /api/ - Hello World endpoint")
    print("="*80)
    
    try:
        response = requests.get(f"{BACKEND_URL}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        assert data.get("message") == "Hello World", f"Expected 'Hello World', got {data.get('message')}"
        
        print("✅ PASSED: Hello World endpoint working correctly")
        return True
    except Exception as e:
        print(f"❌ FAILED: {str(e)}")
        return False


def test_post_contact_valid():
    """Test POST /api/contact with valid data"""
    print("\n" + "="*80)
    print("TEST 2: POST /api/contact - Valid inquiry submission")
    print("="*80)
    
    payload = {
        "name": "Test User",
        "email": "test.user@example.com",
        "phone": "(312) 555-0100",
        "message": "I was in a car accident and need help.",
        "attachments": ["photo1.jpg"]
    }
    
    try:
        print(f"Sending payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BACKEND_URL}/contact", json=payload)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        
        # Verify required fields
        assert "id" in data, "Response missing 'id' field"
        assert data["id"], "id field is empty"
        assert isinstance(data["id"], str), f"id should be string, got {type(data['id'])}"
        
        assert data["email"] == payload["email"], f"Email mismatch: expected {payload['email']}, got {data['email']}"
        
        assert "email_sent" in data, "Response missing 'email_sent' field"
        assert data["email_sent"] == False, f"email_sent should be False (RESEND_API_KEY not configured), got {data['email_sent']}"
        
        assert "created_at" in data, "Response missing 'created_at' field"
        assert data["created_at"], "created_at field is empty"
        
        # Verify other fields
        assert data["name"] == payload["name"], f"Name mismatch"
        assert data["phone"] == payload["phone"], f"Phone mismatch"
        assert data["message"] == payload["message"], f"Message mismatch"
        assert data["attachments"] == payload["attachments"], f"Attachments mismatch"
        
        # Verify no MongoDB _id field leaked
        assert "_id" not in data, "MongoDB _id field should not be in response"
        
        print("✅ PASSED: Valid inquiry saved successfully with email_sent=False")
        return True, data["id"]
    except Exception as e:
        print(f"❌ FAILED: {str(e)}")
        return False, None


def test_post_contact_invalid_email():
    """Test POST /api/contact with invalid email"""
    print("\n" + "="*80)
    print("TEST 3: POST /api/contact - Invalid email validation")
    print("="*80)
    
    payload = {
        "email": "not-an-email"
    }
    
    try:
        print(f"Sending payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BACKEND_URL}/contact", json=payload)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        assert response.status_code == 422, f"Expected 422 (validation error), got {response.status_code}"
        
        print("✅ PASSED: Invalid email correctly rejected with 422")
        return True
    except Exception as e:
        print(f"❌ FAILED: {str(e)}")
        return False


def test_post_contact_minimal():
    """Test POST /api/contact with minimal valid body"""
    print("\n" + "="*80)
    print("TEST 4: POST /api/contact - Minimal valid payload (email only)")
    print("="*80)
    
    payload = {
        "email": "minimal@example.com"
    }
    
    try:
        print(f"Sending payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BACKEND_URL}/contact", json=payload)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        
        # Verify required fields
        assert "id" in data and data["id"], "Response missing or empty 'id' field"
        assert data["email"] == payload["email"], f"Email mismatch"
        assert data["email_sent"] == False, f"email_sent should be False"
        assert "created_at" in data and data["created_at"], "Response missing or empty 'created_at' field"
        
        # Optional fields should have default values
        assert data["name"] == "", f"name should default to empty string, got {data['name']}"
        assert data["phone"] == "", f"phone should default to empty string, got {data['phone']}"
        assert data["message"] == "", f"message should default to empty string, got {data['message']}"
        assert data["attachments"] == [], f"attachments should default to empty list, got {data['attachments']}"
        
        print("✅ PASSED: Minimal payload accepted with proper defaults")
        return True, data["id"]
    except Exception as e:
        print(f"❌ FAILED: {str(e)}")
        return False, None


def test_get_contact():
    """Test GET /api/contact - List all inquiries"""
    print("\n" + "="*80)
    print("TEST 5: GET /api/contact - List inquiries")
    print("="*80)
    
    try:
        response = requests.get(f"{BACKEND_URL}/contact")
        print(f"Status Code: {response.status_code}")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        print(f"Response: Found {len(data)} inquiries")
        
        assert isinstance(data, list), f"Expected list, got {type(data)}"
        
        if len(data) > 0:
            print(f"\nFirst inquiry: {json.dumps(data[0], indent=2)}")
            
            # Verify no MongoDB _id field
            for inquiry in data:
                assert "_id" not in inquiry, "MongoDB _id field should not be in response"
            
            # Verify sorting by created_at descending
            if len(data) > 1:
                for i in range(len(data) - 1):
                    current = datetime.fromisoformat(data[i]["created_at"].replace('Z', '+00:00'))
                    next_item = datetime.fromisoformat(data[i+1]["created_at"].replace('Z', '+00:00'))
                    assert current >= next_item, f"Inquiries not sorted by created_at descending"
                print("✅ Inquiries correctly sorted by created_at descending")
            
            # Verify structure of first inquiry
            first = data[0]
            required_fields = ["id", "email", "email_sent", "created_at", "name", "phone", "message", "attachments"]
            for field in required_fields:
                assert field in first, f"Missing field '{field}' in inquiry"
            
            print("✅ All inquiries have correct structure")
        else:
            print("⚠️  No inquiries found in database (this is OK if database is empty)")
        
        print("✅ PASSED: GET /api/contact working correctly")
        return True
    except Exception as e:
        print(f"❌ FAILED: {str(e)}")
        return False


def main():
    """Run all tests"""
    print("\n" + "="*80)
    print("TOBER LAW CONTACT INQUIRY BACKEND TESTS")
    print("="*80)
    print(f"Backend URL: {BACKEND_URL}")
    print("="*80)
    
    results = []
    
    # Test 1: Hello World
    results.append(("GET /api/", test_hello_world()))
    
    # Test 2: Valid inquiry
    result, inquiry_id = test_post_contact_valid()
    results.append(("POST /api/contact (valid)", result))
    
    # Test 3: Invalid email
    results.append(("POST /api/contact (invalid email)", test_post_contact_invalid_email()))
    
    # Test 4: Minimal payload
    result, minimal_id = test_post_contact_minimal()
    results.append(("POST /api/contact (minimal)", result))
    
    # Test 5: Get all inquiries
    results.append(("GET /api/contact", test_get_contact()))
    
    # Summary
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    
    passed = sum(1 for _, result in results if result)
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{status}: {test_name}")
    
    print("="*80)
    print(f"TOTAL: {passed}/{total} tests passed")
    print("="*80)
    
    return passed == total


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
