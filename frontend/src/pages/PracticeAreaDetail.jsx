import React from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Gavel, ChevronRight } from 'lucide-react';
import { practiceAreas, practiceDetails, results, firm } from '../mock';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import Seo, { BASE } from '../components/Seo';

const PracticeAreaDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const area = practiceAreas.find((p) => p.slug === slug);
  const detail = practiceDetails[slug];

  if (!area || !detail) return <Navigate to="/practice-areas" replace />;

  const Icon = area.icon;
  const related = results.filter((r) => detail.resultCategories.includes(r.category)).slice(0, 6);
  const others = practiceAreas.filter((p) => p.slug !== slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${area.name} \u2014 ${firm.name}`,
    description: detail.overview,
    areaServed: 'Chicago, Illinois',
    url: `${BASE}/practice-areas/${slug}`,
    provider: { '@type': 'Attorney', name: firm.attorney },
  };

  return (
    <div>
      <Seo
        title={`${area.name} Lawyer in Chicago | ${firm.name}`}
        description={detail.overview}
        path={`/practice-areas/${slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative pt-[74px] bg-[#16304f] dot-texture overflow-hidden">
        <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-[#2e6fb0]/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[13px] text-white/55 mb-7" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white/90">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/practice-areas" className="hover:text-white/90">Practice Areas</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#d9bd7a]">{area.name}</span>
          </nav>
          <Reveal className="max-w-3xl">
            <div className="w-14 h-14 rounded-xl bg-[#d9bd7a]/15 flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-[#d9bd7a]" />
            </div>
            <p className="eyebrow text-[#d9bd7a]">Practice Area</p>
            <h1 className="font-serif text-white text-4xl md:text-[3.2rem] font-semibold tracking-tight leading-[1.08] mt-4">
              {area.name}
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">{detail.overview}</p>
          </Reveal>
        </div>
      </section>

      {/* Overview + what we handle */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow">Our Approach</p>
            <h2 className="font-serif text-[#16304f] text-3xl md:text-[2.4rem] font-semibold tracking-tight mt-3">
              Handled personally, start to finish
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-6 text-[17px] text-[#3a4a5e] leading-relaxed">
              {area.desc} When you hire Tober Law, {firm.attorney} takes on your case directly — investigating what happened, dealing with the insurers, and preparing every matter as if it will go to trial. That preparation is what drives results.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#20497f] text-white px-7 py-3.5 text-[15px] font-bold shadow-[0_10px_30px_rgba(32,73,127,0.25)] hover:bg-[#1a3c6a] transition-all duration-300 hover:-translate-y-0.5"
            >
              Discuss Your Case — Free
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="rounded-2xl bg-[#f5f9fd] border border-[#e8eef5] p-7">
              <h3 className="font-serif text-xl font-semibold text-[#16304f]">What we handle</h3>
              <ul className="mt-5 space-y-3.5">
                {detail.handles.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[15px] text-[#3a4a5e]">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#20497f] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#d9bd7a]" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related results */}
      <section className="bg-[#f5f9fd] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Case Results</p>
            <h2 className="font-serif text-[#16304f] text-3xl md:text-[2.4rem] font-semibold tracking-tight mt-3">
              Results in this area
            </h2>
            <div className="gold-rule mt-5" />
          </Reveal>

          {related.length > 0 ? (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={i} delay={(i % 3) * 70}>
                  <div className="h-full rounded-2xl bg-gradient-to-b from-[#20497f] to-[#132a45] p-7 text-white shadow-[0_10px_30px_rgba(32,73,127,0.15)]">
                    {r.figure ? (
                      <div className="font-serif text-[2.4rem] leading-none font-semibold text-[#d9bd7a]">{r.figure}</div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-[#d9bd7a]/15 flex items-center justify-center">
                        <Gavel className="w-6 h-6 text-[#d9bd7a]" />
                      </div>
                    )}
                    <div className="mt-4 text-[11.5px] font-bold uppercase tracking-[0.2em] text-white/55">{r.category}</div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/85">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mt-10 rounded-2xl bg-white border border-[#e8eef5] p-8">
              <p className="text-[16px] text-[#4a5a6d] leading-relaxed">
                Every case is unique, and many civil-rights matters are resolved confidentially. Reach out for a free, confidential consultation to discuss outcomes relevant to your situation.
              </p>
              <Link to="/results" className="group mt-5 inline-flex items-center gap-2 text-[#20497f] font-bold hover:text-[#b8933f] transition-colors">
                Browse all firm results
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          )}
          <p className="mt-8 text-[13px] text-[#8593a3]">Prior results do not guarantee a similar outcome. Every case is different.</p>
        </div>
      </section>

      {/* Other practice areas */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-serif text-2xl font-semibold text-[#16304f] mb-8">Explore other practice areas</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => {
              const OIcon = p.icon;
              return (
                <Link key={p.slug} to={`/practice-areas/${p.slug}`} className="group flex items-center gap-3 rounded-xl border border-[#e8eef5] px-4 py-3.5 hover:border-[#d9bd7a]/50 hover:bg-[#f5f9fd] transition-all duration-300">
                  <OIcon className="w-5 h-5 text-[#2e6fb0] group-hover:text-[#b8933f] transition-colors" />
                  <span className="text-[14.5px] font-semibold text-[#33455a]">{p.name}</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-[#c3d2e3] group-hover:text-[#20497f] group-hover:translate-x-0.5 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default PracticeAreaDetail;
