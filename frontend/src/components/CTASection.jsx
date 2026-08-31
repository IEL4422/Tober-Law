import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#20497f] dot-texture">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2e6fb0]/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#16304f]/60 blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-20 md:py-24 text-center">
        <Reveal>
          <div className="gold-rule mx-auto mb-7" />
          <h2 className="font-serif text-white text-4xl md:text-5xl font-semibold tracking-tight">
            Talk to Cam today.
          </h2>
          <p className="mt-5 text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Reach the attorney who will handle your case directly — free, confidential, and no obligation.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-[#d9bd7a] text-[#20497f] px-8 py-4 text-base font-bold tracking-tight shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-[#e8d29a] transition-all duration-300 hover:-translate-y-0.5"
          >
            Tell Us About Your Case
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
