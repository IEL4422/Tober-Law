import React, { useMemo, useState } from 'react';
import { Gavel, Search, X } from 'lucide-react';
import { results, firm } from '../mock';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import Seo from '../components/Seo';

const Results = () => {
  const categories = useMemo(() => {
    const set = ['All', ...Array.from(new Set(results.map((r) => r.category)))];
    return set;
  }, []);
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return results.filter((r) => {
      const matchesCat = active === 'All' || r.category === active;
      const haystack = `${r.desc} ${r.category} ${r.figure || 'appeal appellate verdict'}`.toLowerCase();
      const matchesQuery = q === '' || haystack.includes(q);
      return matchesCat && matchesQuery;
    });
  }, [active, query]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Case Results | ${firm.name}`,
    description: 'Verdicts and settlements obtained in Illinois personal injury and civil rights cases.',
    url: 'https://tober-law.com/results',
  };

  return (
    <div>
      <Seo
        title={`Case Results | Verdicts & Settlements | ${firm.name}`}
        description="Real Illinois & Missouri personal injury and civil rights case results \u2014 from a $12M highway wrongful-death settlement to construction, trucking, premises, and civil rights recoveries. Prior results do not guarantee future ones."
        path="/results"
        jsonLd={jsonLd}
      />
      {/* Page hero */}
      <section className="relative pt-[96px] bg-[#16304f] dot-texture overflow-hidden">
        <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-[#2e6fb0]/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-[#d9bd7a]">Case Results</p>
            <h1 className="font-serif text-white text-4xl md:text-[3.2rem] font-semibold tracking-tight leading-[1.08] mt-4">
              Results that speak for themselves
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Every result below reflects a real client whose life was disrupted by someone else's negligence. Each case has its own unique set of circumstances; prior results do not guarantee future ones.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="bg-white pt-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="relative max-w-xl mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9aa8b8]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search results by keyword — try "truck", "fall", or "worker"'
              className="w-full rounded-full border border-[#dfe7f0] bg-white pl-12 pr-11 py-3.5 text-[15px] text-[#1f2b3a] placeholder:text-[#9aa8b8] focus:outline-none focus:ring-2 focus:ring-[#2e6fb0]/40 focus:border-[#2e6fb0] transition"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-[#8593a3] hover:bg-[#f0f5fa] hover:text-[#20497f] transition"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-[13.5px] font-semibold border transition-all duration-300 ${
                  active === c
                    ? 'bg-[#20497f] text-white border-[#20497f]'
                    : 'bg-white text-[#4a5a6d] border-[#dfe7f0] hover:border-[#2e6fb0] hover:text-[#20497f]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="mt-5 text-[13.5px] text-[#8593a3]">
            Showing <span className="font-bold text-[#20497f]">{filtered.length}</span> of {results.length} results
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-[#e8eef5] bg-[#f5f9fd] p-10 text-center">
              <Search className="w-8 h-8 text-[#c3d2e3] mx-auto" />
              <h3 className="font-serif text-2xl font-semibold text-[#16304f] mt-4">No results match your search</h3>
              <p className="mt-2 text-[15px] text-[#5c6b7d]">Try a different keyword or clear the filters to see every case result.</p>
              <button onClick={() => { setQuery(''); setActive('All'); }} className="mt-5 inline-flex items-center rounded-full bg-[#20497f] text-white px-6 py-3 text-[14px] font-bold hover:bg-[#1a3c6a] transition-colors">
                Reset filters
              </button>
            </div>
          ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <Reveal key={`${r.category}-${i}`} delay={(i % 3) * 70}>
                <div className="group relative h-full rounded-2xl bg-gradient-to-b from-[#20497f] to-[#132a45] p-7 text-white overflow-hidden hover:-translate-y-1 transition-transform duration-300 shadow-[0_10px_30px_rgba(32,73,127,0.15)]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#2e6fb0]/15 transition-opacity duration-300" />
                  <div className="relative">
                    {r.figure ? (
                      <div className="font-serif text-[2.6rem] leading-none font-semibold text-[#d9bd7a]">{r.figure}</div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-[#d9bd7a]/15 flex items-center justify-center">
                        <Gavel className="w-7 h-7 text-[#d9bd7a]" />
                      </div>
                    )}
                    <div className="mt-4 text-[11.5px] font-bold uppercase tracking-[0.2em] text-white/55">{r.category}</div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/85">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          )}
          <p className="mt-10 text-[13px] text-[#8593a3]">Prior results do not guarantee a similar outcome. Every case is different.</p>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Results;
