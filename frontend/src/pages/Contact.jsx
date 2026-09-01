import React, { useState } from 'react';
import { Mail, MapPin, MessageSquare, Clock, Paperclip, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { firm, hours, referralBlocks } from '../mock';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';

const initialForm = { name: '', email: '', phone: '', message: '' };

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${firm.name}`,
  description: 'Free, confidential consultation with a Chicago personal injury and civil rights attorney.',
  url: 'https://tober-law.com/contact',
  mainEntity: {
    '@type': 'LegalService',
    name: firm.name,
    email: firm.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '125 S. Wacker Dr., Ste. 300',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60606',
      addressCountry: 'US',
    },
  },
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.email) {
      toast.error('Please enter your email so we can reach you.');
      return;
    }
    // Frontend-only mock submission (stored to browser for now)
    try {
      const prev = JSON.parse(localStorage.getItem('tober_leads') || '[]');
      prev.push({ ...form, files: files.map((f) => f.name), at: new Date().toISOString() });
      localStorage.setItem('tober_leads', JSON.stringify(prev));
    } catch (_) {}
    setSubmitted(true);
    toast.success('Thanks — your message has been received. Cam will get right back to you.');
    setForm(initialForm);
    setFiles([]);
  };

  return (
    <div>
      <Seo
        title={`Free Consultation | Contact ${firm.name}`}
        description="Tell us about your case. Free, confidential consultation with Chicago injury and civil rights attorney Cameron J. Tober \u2014 no cost, no obligation. Text or call anytime."
        path="/contact"
        jsonLd={contactJsonLd}
      />
      {/* Page hero */}
      <section className="relative pt-[74px] bg-[#16304f] dot-texture overflow-hidden">
        <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-[#2e6fb0]/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-[#d9bd7a]">Free Consultation</p>
            <h1 className="font-serif text-white text-4xl md:text-[3.2rem] font-semibold tracking-tight leading-[1.08] mt-4">
              Tell us about your case
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Share what happened and we'll get right back to you. There's no cost to talk — confidential and no obligation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + contact */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <Reveal>
            <div className="bg-[#f5f9fd] rounded-2xl border border-[#e8eef5] p-8 md:p-10">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#16304f]">Tell us about your case.</h2>
              <div className="gold-rule mt-4 mb-7" />

              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[#20497f] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#d9bd7a]" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#16304f] mt-5">Message received</h3>
                  <p className="mt-2 text-[15px] text-[#5c6b7d] max-w-sm">Thanks for reaching out. Cam will personally review your case and get right back to you.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-[#20497f] font-bold hover:text-[#b8933f] transition-colors">Send another message</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[13px] font-bold text-[#33455a] mb-1.5">Name</label>
                    <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Your name"
                      className="w-full rounded-xl border border-[#d9e2ee] bg-white px-4 py-3 text-[15px] text-[#1f2b3a] placeholder:text-[#9aa8b8] focus:outline-none focus:ring-2 focus:ring-[#2e6fb0]/40 focus:border-[#2e6fb0] transition" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#33455a] mb-1.5">Email <span className="text-[#b8933f]">*</span></label>
                    <input name="email" value={form.email} onChange={onChange} type="email" required placeholder="you@email.com"
                      className="w-full rounded-xl border border-[#d9e2ee] bg-white px-4 py-3 text-[15px] text-[#1f2b3a] placeholder:text-[#9aa8b8] focus:outline-none focus:ring-2 focus:ring-[#2e6fb0]/40 focus:border-[#2e6fb0] transition" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#33455a] mb-1.5">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={onChange} type="tel" placeholder="(000) 000-0000"
                      className="w-full rounded-xl border border-[#d9e2ee] bg-white px-4 py-3 text-[15px] text-[#1f2b3a] placeholder:text-[#9aa8b8] focus:outline-none focus:ring-2 focus:ring-[#2e6fb0]/40 focus:border-[#2e6fb0] transition" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#33455a] mb-1.5">What happened?</label>
                    <textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder="Please explain what happened to you or how we can help"
                      className="w-full rounded-xl border border-[#d9e2ee] bg-white px-4 py-3 text-[15px] text-[#1f2b3a] placeholder:text-[#9aa8b8] focus:outline-none focus:ring-2 focus:ring-[#2e6fb0]/40 focus:border-[#2e6fb0] transition resize-none" />
                  </div>
                  <label className="flex items-center gap-2.5 text-[14px] text-[#4a5a6d] cursor-pointer">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-[#c3d2e3] px-4 py-2.5 hover:border-[#2e6fb0] transition">
                      <Paperclip className="w-4 h-4 text-[#2e6fb0]" />
                      Attach files
                    </span>
                    <span className="text-[#8593a3]">Attachments ({files.length})</span>
                    <input type="file" multiple className="hidden" onChange={(e) => setFiles(Array.from(e.target.files || []))} />
                  </label>
                  <button type="submit" className="group w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#20497f] text-white px-7 py-4 text-[15px] font-bold shadow-[0_10px_30px_rgba(32,73,127,0.25)] hover:bg-[#1a3c6a] transition-all duration-300">
                    <Send className="w-4 h-4 text-[#d9bd7a] group-hover:translate-x-0.5 transition-transform" />
                    Send
                  </button>
                  <p className="text-[12px] text-[#98a5b5] leading-relaxed">By submitting, you agree to be contacted about your inquiry. This does not create an attorney-client relationship.</p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={120} className="space-y-8">
            <div>
              <p className="eyebrow">Direct Access</p>
              <h3 className="font-serif text-2xl md:text-[1.9rem] font-semibold text-[#16304f] mt-3 leading-snug">
                Direct access to your attorney.
              </h3>
              <p className="mt-3 text-[16px] text-[#4a5a6d] leading-relaxed">
                All clients get the handling attorney's personal cell. Text anytime. Call during business hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#e8eef5] p-5">
                <Mail className="w-5 h-5 text-[#b8933f]" />
                <div className="mt-3 text-[12px] font-bold uppercase tracking-wider text-[#8593a3]">Email us</div>
                <a href={`mailto:${firm.email}`} className="mt-1 block text-[15px] font-semibold text-[#20497f] hover:text-[#b8933f] transition-colors">{firm.email}</a>
              </div>
              <div className="rounded-2xl border border-[#e8eef5] p-5">
                <MessageSquare className="w-5 h-5 text-[#b8933f]" />
                <div className="mt-3 text-[12px] font-bold uppercase tracking-wider text-[#8593a3]">Text or call</div>
                <div className="mt-1 text-[15px] font-semibold text-[#20497f]">{firm.phoneNote}</div>
              </div>
              <div className="rounded-2xl border border-[#e8eef5] p-5 sm:col-span-2">
                <MapPin className="w-5 h-5 text-[#b8933f]" />
                <div className="mt-3 text-[12px] font-bold uppercase tracking-wider text-[#8593a3]">Office</div>
                <div className="mt-1 text-[15px] font-semibold text-[#33455a]">{firm.address}</div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#f5f9fd] border border-[#e8eef5] p-6">
              <div className="flex items-center gap-2 text-[#20497f]">
                <Clock className="w-5 h-5 text-[#b8933f]" />
                <span className="font-serif text-lg font-semibold">Hours</span>
              </div>
              <ul className="mt-4 divide-y divide-[#e8eef5]">
                {hours.map(([day, time]) => (
                  <li key={day} className="flex items-center justify-between py-2 text-[14.5px]">
                    <span className="text-[#4a5a6d]">{day}</span>
                    <span className={`font-semibold ${time === 'Closed' ? 'text-[#9aa8b8]' : 'text-[#33455a]'}`}>{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Referral partners */}
      <section className="bg-[#16304f] dot-texture py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-[#d9bd7a]">For Attorneys</p>
            <h2 className="font-serif text-white text-3xl md:text-[2.5rem] font-semibold tracking-tight mt-3">
              Referral Partners &amp; Litigation Solutions
            </h2>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              We welcome referrals and co-counsel relationships on serious injury and civil rights matters. Reach out to discuss.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {referralBlocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/[0.08] transition-colors duration-300">
                  {b.image && (
                    <div className="h-40 overflow-hidden">
                      <img src={b.image} alt={b.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-white">{b.title}</h3>
                    <p className="mt-3 text-[14.5px] text-white/70 leading-relaxed">{b.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
