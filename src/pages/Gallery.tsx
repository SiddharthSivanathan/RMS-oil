import { Seo } from "../components/Seo";
import { PageShell, SectionHeading } from "../components/ui";

const gallery = ["Oil bottle", "Golden pour", "Groundnut seeds", "Sesame craft", "Coconut purity", "Wood press", "Quality table", "Premium packaging", "Kitchen lifestyle"];

export function Gallery() {
  return (
    <PageShell>
      <Seo title="Gallery | RMS Gold Bottles, Ingredients and Manufacturing" description="View a luxury gallery of RMS Gold oil bottles, packaging, natural ingredients, traditional extraction and lifestyle photography." path="/gallery" keywords={["Premium Oil Bottles", "Natural Oils", "Traditional extraction"]} />
      <section className="px-4 pb-14 pt-32 md:px-8">
        <SectionHeading eyebrow="Gallery" title="A visual language of purity." copy="Product, ingredient and manufacturing imagery arranged like a premium editorial lookbook." />
      </section>
      <section className="masonry mx-auto max-w-7xl px-4 pb-24 md:px-8">
        {gallery.map((item, index) => (
          <article key={item} className="rounded-lg bg-cream p-4 shadow-sm">
            <div className="grid place-items-center rounded-md bg-forest/95 p-8" style={{ minHeight: `${220 + (index % 3) * 70}px` }}>
              <div className="h-28 w-28 rounded-full border border-gold/40 bg-gold/20" />
            </div>
            <h2 className="mt-4 font-serif text-2xl text-forest">{item}</h2>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
