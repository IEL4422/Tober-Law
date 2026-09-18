import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar, Lightbulb, HelpCircle, BookOpen } from 'lucide-react';
import { getPost, blogPosts } from '../data/blog';
import { firm } from '../mock';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import Seo, { BASE } from '../components/Seo';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// Render a paragraph that may contain inline internal links (parts array).
const renderParts = (parts) =>
  parts.map((seg, i) =>
    typeof seg === 'string' ? (
      <React.Fragment key={i}>{seg}</React.Fragment>
    ) : (
      <Link
        key={i}
        to={seg.link}
        className="text-[#20497f] font-semibold underline decoration-[#d9bd7a]/60 underline-offset-2 hover:text-[#b8933f] hover:decoration-[#b8933f] transition-colors"
      >
        {seg.text}
      </Link>
    )
  );

const Block = ({ block }) => {
  switch (block.type) {
    case 'h2':
      return <h2 className="font-serif text-2xl md:text-[1.9rem] font-semibold text-[#16304f] tracking-tight mt-11 mb-4 scroll-mt-24">{block.text}</h2>;
    case 'h3':
      return <h3 className="font-serif text-xl md:text-[1.4rem] font-semibold text-[#20497f] mt-7 mb-3">{block.text}</h3>;
    case 'ul':
      return (
        <ul className="my-5 space-y-2.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3 text-[17px] text-[#3a4a5e] leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#b8933f] shrink-0" />
              {it}
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div className="my-8 rounded-2xl border border-[#e0e9f4] bg-[#f5f9fd] p-6 md:p-7">
          <div className="flex items-center gap-2.5 text-[#20497f]">
            <Lightbulb className="w-5 h-5 text-[#b8933f]" />
            <span className="font-serif text-lg font-semibold">{block.title}</span>
          </div>
          <ul className="mt-4 space-y-2.5">
            {block.items.map((it, i) => (
              <li key={i} className="flex items-start gap-3 text-[15.5px] text-[#3a4a5e] leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#20497f] shrink-0" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      );
    case 'faq':
      return (
        <div className="mt-12">
          <div className="flex items-center gap-2.5 mb-5">
            <HelpCircle className="w-6 h-6 text-[#b8933f]" />
            <h2 className="font-serif text-2xl md:text-[1.9rem] font-semibold text-[#16304f] tracking-tight">Frequently asked questions</h2>
          </div>
          <div className="divide-y divide-[#e8eef5] border-y border-[#e8eef5]">
            {block.items.map((f, i) => (
              <div key={i} className="py-5">
                <h3 className="font-serif text-lg font-semibold text-[#20497f]">{f.q}</h3>
                <p className="mt-2 text-[16px] text-[#3a4a5e] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 'related':
      return (
        <div className="my-10 rounded-2xl bg-white border border-[#e8eef5] p-6 md:p-7">
          <div className="flex items-center gap-2.5 text-[#20497f] mb-4">
            <BookOpen className="w-5 h-5 text-[#b8933f]" />
            <span className="font-serif text-lg font-semibold">Related reading</span>
          </div>
          <ul className="space-y-2.5">
            {block.items.map((r, i) => (
              <li key={i}>
                <Link to={r.to} className="group inline-flex items-center gap-2 text-[16px] font-semibold text-[#20497f] hover:text-[#b8933f] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#b8933f] transition-transform group-hover:translate-x-1" />
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return (
        <p className="text-[17px] text-[#3a4a5e] leading-[1.75] my-5">
          {block.parts ? renderParts(block.parts) : block.text}
        </p>
      );
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Collect FAQ items for FAQPage structured data.
  const faqItems = post.content
    .filter((b) => b.type === 'faq')
    .flatMap((b) => b.items);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      image: post.image,
      datePublished: post.date,
      dateModified: post.date,
      keywords: post.keywords.join(', '),
      articleSection: post.category,
      author: { '@type': 'Person', name: firm.attorney },
      publisher: { '@type': 'Organization', name: firm.name },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${slug}` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE}/blog/${slug}` },
      ],
    },
  ];
  if (faqItems.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <div>
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${slug}`}
        image={post.image}
        type="article"
        keywords={post.keywords.join(', ')}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative pt-[96px] bg-[#16304f] dot-texture overflow-hidden">
        <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-[#2e6fb0]/30 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-white/60 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </Link>
          <Reveal>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.16em]">
              <span className="text-[#d9bd7a]">{post.category}</span>
            </div>
            <h1 className="font-serif text-white text-3xl md:text-[2.9rem] font-semibold tracking-tight leading-[1.1] mt-4">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-[13.5px] text-white/60">
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#d9bd7a]" />{formatDate(post.date)}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#d9bd7a]" />{post.readTime}</span>
              <span>By {firm.attorney}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured image */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 -mt-8 md:-mt-12">
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(32,73,127,0.18)]">
            <img src={post.image} alt={post.title} className="w-full h-64 md:h-[420px] object-cover" />
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          <div className="mt-12 rounded-2xl bg-[#f5f9fd] border border-[#e8eef5] p-7">
            <p className="text-[13px] text-[#8593a3] leading-relaxed">
              This article is general information about Illinois law and is not legal advice. Every case is different; prior results do not guarantee a similar outcome. Reading this page does not create an attorney-client relationship.
            </p>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-[#f5f9fd] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#16304f] mb-8">Keep reading</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-[#e8eef5] hover:shadow-[0_18px_44px_rgba(32,73,127,0.13)] hover:-translate-y-1 transition-all duration-300">
                <div className="h-40 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#b8933f]">{p.category}</span>
                  <h3 className="font-serif text-lg font-semibold text-[#16304f] mt-2 leading-snug group-hover:text-[#20497f] transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default BlogPost;
