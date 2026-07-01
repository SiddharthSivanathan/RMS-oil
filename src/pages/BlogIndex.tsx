import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageShell, SectionHeading } from "../components/ui";
import { blogPosts } from "../data/site";

export function BlogIndex() {
  return (
    <PageShell>
      <Seo title="SEO Blog | RMS Gold Cold Pressed Oil Guides" description="Read RMS Gold articles on healthy living, cooking tips, traditional oils, recipes, nutrition, organic lifestyle and wellness." path="/blog" keywords={["Healthy Living", "Cooking Tips", "Traditional Oils", "Recipes", "Nutrition"]} />
      <section className="px-4 pb-14 pt-32 md:px-8">
        <SectionHeading eyebrow="SEO Blog" title="Guides for healthier Indian cooking." copy="Search-friendly education that helps families compare oils, cook better and understand traditional nutrition." />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
        <label className="mx-auto mb-10 flex max-w-xl items-center gap-3 rounded-full border border-forest/12 bg-white/80 px-5 py-3">
          <Search size={18} className="text-gold" />
          <span className="sr-only">Search articles</span>
          <input className="min-w-0 flex-1 bg-transparent text-sm outline-none" placeholder="Search cold pressed oil guides" />
        </label>
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-lg bg-white/75 p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{post.category} · {post.readTime}</p>
              <h2 className="mt-4 font-serif text-4xl text-forest">{post.title}</h2>
              <p className="mt-4 leading-7 text-charcoal/68">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => <span key={keyword} className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-forest">{keyword}</span>)}
              </div>
              <Link className="mt-7 inline-flex items-center gap-2 font-semibold text-forest hover:text-gold" to={`/blog/${post.slug}`}>Read article <ArrowRight size={17} /></Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
