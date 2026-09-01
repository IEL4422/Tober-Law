import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Scale, CheckCircle2 } from 'lucide-react';
import { badges, practiceAreas, results, galleryImages, firm } from '../mock';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import Seo from '../components/Seo';

const Home = () => {
  const navigate = useNavigate();
  const galleryRef = useRef(null);

  const homeJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: firm.name,
      description: firm.blurb,
      url: 'https://tober-law.com/',
      email: firm.email,
      areaServed: 'Chicago, Illinois',
      priceRange: 'Contingency fee \u2014 $0 upfront',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '125 S. Wacker Dr., Ste. 300',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        postalCode: '60606',
        addressCountry: 'US',
      },
      founder: { '@type': 'Attorney', name: firm.attorney },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: firm.name,
      url: 'https://tober-law.com/',
    },
  ];

  const scrollGallery = (dir) => {
    const el = galleryRef.current;
    if (el) el.scrollBy({ left: dir * 420, behavior: 'smooth' });
  };

  const topResults = results.filter((r) => r.figure).slice(0, 4);

  return (
    <div>
      <Seo
        title={`${firm.name} | Chicago Personal Injury & Civil Rights Attorney`}
        description="Chicago personal injury and civil rights trial lawyer Cameron J. Tober. Serious injury litigation handled personally \u2014 $0 upfront, direct attorney access, serving all of Illinois."
        path="/"
        jsonLd={homeJsonLd}
      />
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          poster={galleryImages[0]}
        >
          <source src="/media/chicago-hero.mp4" type="video/mp4" />
        </video>
        {/* Airy blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2744]/70 via-[#20497f]/45 to-[#2e6fb0]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-transparent" />

        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 pt-24">
          <div className="max-w-xl bg-white/85 backdrop-blur-md rounded-2xl p-8 sm:p-11 shadow-[0_30px_80px_rgba(15,39,68,0.35)] border border-white/60">
            <p className="eyebrow">Chicago Personal Injury &amp; Civil Rights</p>
            <h1 className="font-serif text-[#16304f] text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.05] tracking-tight mt-4">
              You focus on healing. <span className="text-[#2e6fb0]">We handle the rest.</span>
            </h1>
            <p className="mt-5 text-[17px] text-[#3a4a5e] leading-relaxed">
              Serious injury and civil rights litigation — handled personally by {firm.attorney}, never handed down.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#20497f] text-white px-7 py-3.5 text-[15px] font-bold shadow-[0_10px_30px_rgba(32,73,127,0.35)] hover:bg-[#1a3c6a] transition-all duration-300 hover:-translate-y-0.5"
              >
                Tell Us About Your Case
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <Link
                to="/results"
                className="inline-flex items-center justify-center rounded-full border border-[#20497f]/25 text-[#20497f] px-7 py-3.5 text-[15px] font-bold hover:border-[#d9bd7a] hover:text-[#b8933f] transition-all duration-300"
              >
                See Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BADGES */}
      <section className="bg-white border-b border-[#e8eef5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#eef2f7]">
          {badges.map((b, i) => (
            <Reveal key={b.title} delay={i * 90} className="px-5 py-8 text-center">
              <div className="font-serif text-2xl md:text-[1.7rem] font-semibold text-[#20497f]">{b.title}</div>
              <div className="mt-1.5 text-[13.5px] text-[#6b7a8d] font-medium">{b.sub}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="bg-[#f5f9fd] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What We Handle</p>
            <h2 className="font-serif text-[#16304f] text-3xl md:text-[2.6rem] font-semibold tracking-tight mt-3">
              Practice Areas
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-[17px] text-[#4a5a6d] leading-relaxed">
              Focused, high-stakes injury and civil rights representation — handled personally by {firm.attorney}.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.slug} delay={(i % 4) * 80}>
                  <Link
                    to={`/practice-areas/${p.slug}`}
                    className="group block h-full bg-white rounded-2xl p-6 border border-[#e8eef5] shadow-[0_2px_16px_rgba(32,73,127,0.04)] hover:shadow-[0_18px_44px_rgba(32,73,127,0.14)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#eaf1f9] flex items-center justify-center group-hover:bg-[#20497f] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#2e6fb0] group-hover:text-[#d9bd7a] transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#16304f] mt-5">{p.name}</h3>
                    <p className="mt-2 text-[14.5px] text-[#5c6b7d] leading-relaxed">{p.desc}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTS HIGHLIGHT */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Case Results</p>
              <h2 className="font-serif text-[#16304f] text-3xl md:text-[2.6rem] font-semibold tracking-tight mt-3">
                Results that speak for themselves
              </h2>
              <div className="gold-rule mt-5" />
            </Reveal>
            <Reveal>
              <Link to="/results" className="group inline-flex items-center gap-2 text-[#20497f] font-bold hover:text-[#b8933f] transition-colors">
                View all results
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topResults.map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full rounded-2xl bg-gradient-to-b from-[#20497f] to-[#16304f] p-7 text-white relative overflow-hidden">
                  <Scale className="absolute -right-3 -bottom-3 w-24 h-24 text-white/5" />
                  <div className="font-serif text-4xl font-semibold text-[#d9bd7a]">{r.figure}</div>
                  <div className="mt-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white/55">{r.category}</div>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/80 line-clamp-4">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-[13px] text-[#8593a3]">Prior results do not guarantee a similar outcome. Every case is different.</p>
        </div>
      </section>

      {/* SERVING CHICAGOLAND */}
      <section className="bg-[#f5f9fd] py-20 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Local &amp; Personal</p>
              <h2 className="font-serif text-[#16304f] text-3xl md:text-[2.6rem] font-semibold tracking-tight mt-3">
                Serving Chicagoland
              </h2>
              <div className="gold-rule mt-5" />
            </div>
            <div className="hidden sm:flex gap-2">
              <button onClick={() => scrollGallery(-1)} className="w-11 h-11 rounded-full border border-[#20497f]/20 flex items-center justify-center text-[#20497f] hover:bg-[#20497f] hover:text-white transition-all duration-300">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollGallery(1)} className="w-11 h-11 rounded-full border border-[#20497f]/20 flex items-center justify-center text-[#20497f] hover:bg-[#20497f] hover:text-white transition-all duration-300">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </Reveal>
        </div>
        <div ref={galleryRef} className="mt-12 flex gap-5 overflow-x-auto no-scrollbar px-5 sm:px-8 snap-x snap-mandatory">
          {galleryImages.map((src, i) => (
            <div key={i} className="snap-start shrink-0 w-[300px] sm:w-[380px] h-[320px] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(32,73,127,0.12)] group">
              <img src={src} alt="Chicago cityscape" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Home;
