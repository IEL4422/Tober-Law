import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aboutBio, badges, firm, attorneyHeadshot } from '../mock';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import Seo from '../components/Seo';

const About = () => {
  const navigate = useNavigate();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: firm.attorney,
    jobTitle: 'Founder & Trial Lawyer',
    worksFor: { '@type': 'LegalService', name: firm.name },
    description: aboutBio.join(' '),
    areaServed: 'Chicago, Illinois',
    url: 'https://tober-law.com/about',
  };
  return (
    <div>
      <Seo
        title={`About ${firm.attorney} | Chicago Trial Lawyer | ${firm.name}`}
        description="Meet Cameron J. Tober, founder of Tober Law \u2014 a Chicago trial lawyer with deep catastrophic-injury and civil-rights experience who handles every case personally."
        path="/about"
        jsonLd={jsonLd}
      />
      {/* Page hero */}
      <section className="relative pt-[74px] bg-[#16304f] dot-texture overflow-hidden">
        <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-[#2e6fb0]/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-[#d9bd7a]">Meet Your Attorney</p>
            <h1 className="font-serif text-white text-4xl md:text-[3.2rem] font-semibold tracking-tight leading-[1.08] mt-4">
              {firm.attorney}
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Founder &amp; trial lawyer serving injured people across Chicagoland.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#d9bd7a]/40" />
              <img
                src={attorneyHeadshot}
                alt={firm.attorney}
                className="relative rounded-2xl w-full h-[440px] object-cover object-top shadow-[0_20px_50px_rgba(32,73,127,0.18)]"
              />
            </div>
            <p className="mt-4 text-[12px] text-[#98a5b5] italic">Placeholder portrait — attorney headshot to be added.</p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <p className="eyebrow">About</p>
            <h2 className="font-serif text-[#16304f] text-3xl md:text-[2.5rem] font-semibold tracking-tight mt-3">
              A personal, hands-on advocate
            </h2>
            <div className="gold-rule mt-5" />
            <div className="mt-7 space-y-5 text-[17px] text-[#3a4a5e] leading-relaxed">
              {aboutBio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#20497f] text-white px-7 py-3.5 text-[15px] font-bold shadow-[0_10px_30px_rgba(32,73,127,0.25)] hover:bg-[#1a3c6a] transition-all duration-300 hover:-translate-y-0.5"
            >
              Work With Cam
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f5f9fd] py-16 border-y border-[#e8eef5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((b, i) => (
            <Reveal key={b.title} delay={i * 90} className="text-center">
              <div className="font-serif text-3xl md:text-[2.2rem] font-semibold text-[#20497f]">{b.title}</div>
              <div className="mt-2 text-[14px] text-[#6b7a8d] font-medium">{b.sub}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
