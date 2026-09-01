import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { firm } from '../mock';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import Seo, { BASE } from '../components/Seo';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const Blog = () => {
  const [featured, ...rest] = blogPosts;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${firm.name} Blog`,
    description: 'Plain-English guides on Illinois personal injury and civil rights law from Chicago trial attorney Cameron J. Tober.',
    url: `${BASE}/blog`,
    blogPost: blogPosts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      url: `${BASE}/blog/${p.slug}`,
    })),
  };

  return (
    <div>
      <Seo
        title={`Personal Injury & Civil Rights Blog | ${firm.name}`}
        description="Clear, practical guides on Illinois personal injury and civil rights law — car accidents, construction injuries, deadlines, contingency fees, and more — from a Chicago trial attorney."
        path="/blog"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative pt-[74px] bg-[#16304f] dot-texture overflow-hidden">
        <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-[#2e6fb0]/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-[#d9bd7a]">Insights & Guides</p>
            <h1 className="font-serif text-white text-4xl md:text-[3.2rem] font-semibold tracking-tight leading-[1.08] mt-4">
              The Tober Law Blog
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Straight answers to the questions injured people actually ask — written in plain English, not legalese.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl border border-[#e8eef5] overflow-hidden hover:shadow-[0_24px_60px_rgba(32,73,127,0.14)] transition-all duration-300">
              <div className="h-64 lg:h-[380px] overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 lg:pr-12 lg:py-10">
                <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.16em]">
                  <span className="text-[#b8933f]">{featured.category}</span>
                  <span className="text-[#c3d2e3]">•</span>
                  <span className="text-[#8593a3]">{featured.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl md:text-[2.2rem] font-semibold text-[#16304f] tracking-tight mt-4 leading-tight group-hover:text-[#20497f] transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[16px] text-[#5c6b7d] leading-relaxed">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 text-[#20497f] font-bold">
                  Read article
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#f5f9fd] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link to={`/blog/${p.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-[#e8eef5] shadow-[0_2px_16px_rgba(32,73,127,0.04)] hover:shadow-[0_18px_44px_rgba(32,73,127,0.13)] hover:-translate-y-1 transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.16em]">
                      <span className="text-[#b8933f]">{p.category}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#16304f] mt-3 leading-snug group-hover:text-[#20497f] transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] text-[#5c6b7d] leading-relaxed line-clamp-3">{p.excerpt}</p>
                    <div className="mt-auto pt-5 flex items-center justify-between text-[12.5px] text-[#8593a3]">
                      <span>{formatDate(p.date)}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{p.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Blog;
