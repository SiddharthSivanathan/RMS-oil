import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageShell } from "../components/ui";
import { baseUrl, blogPosts } from "../data/site";

export function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    author: { "@type": "Organization", name: "RMS Gold" },
    publisher: { "@type": "Organization", name: "RMS Gold" },
    mainEntityOfPage: `${baseUrl}/blog/${post.slug}`
  };

  return (
    <PageShell>
      <Seo title={`${post.title} | RMS Gold Blog`} description={post.excerpt} path={`/blog/${post.slug}`} keywords={post.keywords} schema={schema} />
      <article className="mx-auto max-w-4xl px-4 pb-24 pt-32 md:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-charcoal/55" aria-label="Breadcrumb">
          <Link to="/">Home</Link><ChevronRight size={15} /><Link to="/blog">Blog</Link><ChevronRight size={15} /><span>{post.category}</span>
        </nav>
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold">{post.category} · {post.readTime}</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-forest md:text-7xl">{post.title}</h1>
        <p className="mt-6 text-xl leading-8 text-charcoal/70">{post.excerpt}</p>
        <div className="mt-10 h-80 rounded-lg bg-forest shadow-luxury" aria-hidden="true" />
        <div className="prose prose-lg mt-12 max-w-none prose-headings:font-serif prose-headings:text-forest prose-p:text-charcoal/72">
          {post.body.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.copy}</p>
            </section>
          ))}
          <section>
            <h2>Frequently asked question</h2>
            <p>For everyday Indian cooking, choose cold pressed oils by recipe, freshness, aroma and manufacturing transparency.</p>
          </section>
        </div>
      </article>
    </PageShell>
  );
}
