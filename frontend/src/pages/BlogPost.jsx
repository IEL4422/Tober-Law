import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { getPost, blogPosts } from '../data/blog';
import { firm } from '../mock';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import Seo, { BASE } from '../components/Seo';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const Block = ({ block }) => {
  if (block.type === 'h2')
    return <h2 className="font-serif text-2xl md:text-[1.9rem] font-semibold text-[#16304f] tracking-tight mt-10 mb-4">{block.text}</h2>;
  if (block.type === 'ul')
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
  return <p className="text-[17px] text-[#3a4a5e] leading-[1.75] my-5">{block.text}</p>;
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.keywords.join(', '),
    author: { '@type': 'Person', name: firm.attorney },
    publisher: { '@type': 'Organization', name: firm.name },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${slug}` },
  };

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
      <section className="relative pt-[74px] bg-[#16304f] dot-texture overflow-hidden">
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
