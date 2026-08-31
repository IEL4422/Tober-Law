import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { practiceAreas, firm } from '../mock';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';

const PracticeAreas = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Page hero */}
      <section className="relative pt-[74px] bg-[#16304f] dot-texture overflow-hidden">
        <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-[#2e6fb0]/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-[#d9bd7a]">What We Handle</p>
            <h1 className="font-serif text-white text-4xl md:text-[3.2rem] font-semibold tracking-tight leading-[1.08] mt-4">
              Practice Areas
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Focused, high-stakes injury and civil rights representation — handled personally by {firm.attorney}, never handed down to a junior associate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {practiceAreas.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.slug} delay={(i % 2) * 90}>
                  <div className="group flex gap-5 h-full bg-white rounded-2xl p-7 border border-[#e8eef5] shadow-[0_2px_16px_rgba(32,73,127,0.04)] hover:shadow-[0_18px_44px_rgba(32,73,127,0.13)] hover:border-[#d9bd7a]/40 transition-all duration-300">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-[#eaf1f9] flex items-center justify-center group-hover:bg-[#20497f] transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#2e6fb0] group-hover:text-[#d9bd7a] transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#16304f]">{p.name}</h3>
                      <p className="mt-2.5 text-[15px] text-[#5c6b7d] leading-relaxed">{p.desc}</p>
                      <button onClick={() => navigate('/contact')} className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#20497f] hover:text-[#b8933f] transition-colors">
                        Discuss your case <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Why note */}
          <Reveal className="mt-16 rounded-2xl bg-[#f5f9fd] border border-[#e8eef5] p-8 md:p-11">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="eyebrow">The Difference</p>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#16304f] mt-3">Handled personally, start to finish</h3>
              </div>
              <ul className="space-y-3">
                {['Direct access to the attorney\u2019s personal cell','No fees unless we win — contingency only','Real trial experience, not just settlement mills','Serving all of Illinois'].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] text-[#3a4a5e]">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#20497f] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#d9bd7a]" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default PracticeAreas;
