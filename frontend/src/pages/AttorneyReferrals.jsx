import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Handshake, Scale, Users, Phone, Printer, Mail, Check } from 'lucide-react';
import { referralBlocks, firm } from '../mock';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import Seo, { BASE } from '../components/Seo';

const icons = [Handshake, Scale, Users];

const AttorneyReferrals = () => {
  const navigate = useNavigate();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${firm.name} — Attorney Referrals`,
    description:
      'Co-counsel, trial counsel, litigation consulting, and referral partnerships with Tober Law across Illinois and Missouri.',
    areaServed: 'Illinois and Missouri',
    url: `${BASE}/attorney-referrals`,
    email: firm.email,
    telephone: firm.phone,
    provider: { '@type': 'Attorney', name: firm.attorney },
  };

  return (
    <div>
      <Seo
        title={`Attorney Referrals & Co-Counsel | ${firm.name}`}
        description="Refer a case or partner as co-counsel with Tober Law. Co-counsel and trial-counsel arrangements, litigation consulting, and referral partnerships on serious injury and civil rights matters across Illinois and Missouri."
        path="/attorney-referrals"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative pt-[96px] bg-[#16304f] dot-texture overflow-hidden">
        <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-[#2e6fb0]/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-[#d9bd7a]">For Attorneys</p>
            <h1 className="font-serif text-white text-4xl md:text-[3.2rem] font-semibold tracking-tight leading-[1.08] mt-4">
              Attorney Referrals &amp; Co-Counsel
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Tober Law partners with lawyers across Illinois and Missouri on serious injury and civil rights matters — from full referrals to co-counsel and trial-counsel arrangements. We protect your relationship with your client and honor every referral.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#d9bd7a] text-[#20497f] px-7 py-3.5 text-[15px] font-bold shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-[#e8d29a] transition-all duration-300 hover:-translate-y-0.5"
            >
              Refer a Case
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Ways we partner */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">How We Work Together</p>
            <h2 className="font-serif text-[#16304f] text-3xl md:text-[2.5rem] font-semibold tracking-tight mt-3">
              Ways we partner
            </h2>
            <div className="gold-rule mt-5" />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {referralBlocks.map((b, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={b.title} delay={i * 100}>
                  <div className="h-full rounded-2xl bg-white border border-[#e8eef5] overflow-hidden shadow-[0_2px_16px_rgba(32,73,127,0.04)] hover:shadow-[0_18px_44px_rgba(32,73,127,0.13)] hover:-translate-y-1 transition-all duration-300">
                    {b.image ? (
                      <div className="h-44 overflow-hidden">
                        <img src={b.image} alt={b.title} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="h-44 bg-gradient-to-b from-[#20497f] to-[#16304f] flex items-center justify-center">
                        <Icon className="w-12 h-12 text-[#d9bd7a]" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-5 h-5 text-[#b8933f]" />
                        <h3 className="font-serif text-xl font-semibold text-[#16304f]">{b.title}</h3>
                      </div>
                      <p className="mt-3 text-[14.5px] text-[#5c6b7d] leading-relaxed">{b.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why refer + contact */}
      <section className="bg-[#f5f9fd] py-20 md:py-24 border-y border-[#e8eef5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <p className="eyebrow">Why Refer to Tober Law</p>
            <h2 className="font-serif text-[#16304f] text-3xl md:text-[2.4rem] font-semibold tracking-tight mt-3">
              Your client is in trusted hands
            </h2>
            <div className="gold-rule mt-5" />
            <ul className="mt-7 space-y-3.5">
              {[
                'Real trial experience on catastrophic injury and civil rights cases',
                'Every referred case handled personally by the attorney',
                'Fair, transparent fee-sharing consistent with the Rules of Professional Conduct',
                'Frequent updates so you always know where your client stands',
                'Flexible arrangements — full referral, co-counsel, or trial counsel',
                'Serving clients throughout Illinois and Missouri',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[16px] text-[#3a4a5e] leading-relaxed">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#20497f] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#d9bd7a]" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl bg-white border border-[#e8eef5] p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#16304f]">Discuss a referral</h3>
              <p className="mt-3 text-[15px] text-[#5c6b7d] leading-relaxed">
                Reach out directly to talk through a potential referral or co-counsel arrangement. We respond to attorneys promptly.
              </p>
              <div className="mt-6 space-y-3">
                <a href={firm.phoneHref} className="flex items-center gap-3 rounded-xl border border-[#e8eef5] p-4 hover:border-[#b8933f]/50 transition-colors">
                  <Phone className="w-5 h-5 text-[#b8933f]" />
                  <div>
                    <div className="text-[12px] font-bold uppercase tracking-wider text-[#8593a3]">Call</div>
                    <div className="text-[15px] font-semibold text-[#20497f]">{firm.phone}</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-[#e8eef5] p-4">
                  <Printer className="w-5 h-5 text-[#b8933f]" />
                  <div>
                    <div className="text-[12px] font-bold uppercase tracking-wider text-[#8593a3]">Fax</div>
                    <div className="text-[15px] font-semibold text-[#33455a]">{firm.fax}</div>
                  </div>
                </div>
                <a href={`mailto:${firm.email}`} className="flex items-center gap-3 rounded-xl border border-[#e8eef5] p-4 hover:border-[#b8933f]/50 transition-colors">
                  <Mail className="w-5 h-5 text-[#b8933f]" />
                  <div>
                    <div className="text-[12px] font-bold uppercase tracking-wider text-[#8593a3]">Email</div>
                    <div className="text-[15px] font-semibold text-[#20497f]">{firm.email}</div>
                  </div>
                </a>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="group mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#20497f] text-white px-7 py-3.5 text-[15px] font-bold shadow-[0_10px_30px_rgba(32,73,127,0.25)] hover:bg-[#1a3c6a] transition-all duration-300"
              >
                Send Referral Details
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default AttorneyReferrals;
