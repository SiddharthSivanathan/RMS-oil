import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import {
  PageShell,
  SectionHeading,
  Eyebrow,
  CtaLink,
  RevealOnScroll,
  ParallaxImage,
  GoldDivider,
  Marquee,
  Bottle
} from "../components/ui";
import { products } from "../data/site";

const productImages: Record<string, string> = {
  "groundnut-oil": "/images/groundnut-oil.png",
  "sesame-oil": "/images/sesame-oil.png",
  "coconut-oil": "/images/coconut-oil.png",
  "castor-oil": "/images/hero-bottle.png"
};

const productStories: Record<string, { tagline: string; story: string; scene: string }> = {
  "groundnut-oil": {
    tagline: "The soul of Indian kitchens",
    story: "Imagine the aroma of freshly pressed groundnuts filling your kitchen at dawn. This is the oil that generations of families have trusted for their most cherished recipes — from festival sweets to everyday gravies.",
    scene: "Freshly harvested groundnuts, warm sunlight, golden aroma"
  },
  "sesame-oil": {
    tagline: "Heritage in every drop",
    story: "In South Indian tradition, sesame oil is more than an ingredient — it's a ritual. Used in temple cooking, traditional massage, and the most authentic pickles, its bold nutty profile carries centuries of wisdom.",
    scene: "White sesame seeds, dark stone, ancient tradition"
  },
  "coconut-oil": {
    tagline: "Nature's gentle versatility",
    story: "From the tropical groves of South India comes an oil that nourishes everything it touches. Whether it's a Kerala curry, a morning hair ritual, or gentle skin care — coconut oil is the family's most versatile companion.",
    scene: "Fresh coconuts, tropical leaves, morning light"
  },
  "castor-oil": {
    tagline: "The ancient wellness elixir",
    story: "Dense, pure, and deeply traditional. Castor oil has been a cornerstone of Indian home remedies for centuries. Every drop is crafted without shortcuts — thick, honest, and ready for your family's wellness rituals.",
    scene: "Dark botanical setting, traditional wellness"
  }
};

export function Products() {
  const schema = products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `RMS Gold ${product.name}`,
    description: product.summary,
    brand: { "@type": "Brand", name: "RMS Gold" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "96" }
  }));

  return (
    <PageShell>
      <Seo
        title="Premium Cold Pressed Oil Collection | RMS Gold"
        description="Explore RMS Gold's signature collection — cold pressed groundnut oil, pure sesame oil, virgin coconut oil and traditional castor oil. Each bottle is a luxury campaign."
        path="/products"
        keywords={["Groundnut Oil", "Sesame Oil", "Coconut Oil", "Premium Oil Bottles", "Cold Pressed"]}
        schema={schema}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[70vh] overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(/images/oil-pour.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />

        <div className="container-luxury relative z-10 flex min-h-[70vh] flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="eyebrow"
            style={{ color: "var(--gold)" }}
          >
            The Collection
          </motion.div>
          <motion.h1
            className="mt-6 headline-xl text-ivory"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Four oils.
            <br />
            <em className="font-display italic text-gold">Each a masterpiece.</em>
          </motion.h1>
          <motion.p
            className="mt-6 body-lg-light mx-auto max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Every bottle is designed to communicate purity before it is opened and
            traditional depth after it is poured.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ PRODUCT STORIES ═══════════ */}
      <div className="bg-ivory">
        {products.map((product, index) => {
          const story = productStories[product.slug];
          const isEven = index % 2 === 0;

          return (
            <section key={product.slug} className="border-b border-forest/6">
              {/* Fullscreen Product Image */}
              <div className="container-luxury py-8">
                <RevealOnScroll>
                  <div className="relative overflow-hidden rounded-2xl">
                    <ParallaxImage
                      src={productImages[product.slug]}
                      alt={product.name}
                      className="h-[50vh] md:h-[70vh]"
                      speed={0.15}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
                      <p className="text-xs font-bold uppercase tracking-[0.4em] text-gold">
                        0{index + 1} — {story.scene}
                      </p>
                      <h2 className="mt-4 headline-lg text-ivory">{product.name}</h2>
                      <p className="mt-2 font-display text-xl italic text-ivory/60">
                        {story.tagline}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Story + Details */}
              <div className="container-luxury py-16 md:py-24">
                <div
                  className={`grid items-start gap-14 lg:gap-24 ${
                    isEven ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-[1fr_1.2fr]"
                  }`}
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <RevealOnScroll>
                      <p className="body-lg max-w-lg !text-charcoal/80 !leading-[1.9]">
                        {story.story}
                      </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.1}>
                      <div className="mt-10">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                          Ingredients
                        </p>
                        <p className="mt-2 text-sm leading-7 text-charcoal/60">
                          {product.ingredients}
                        </p>
                      </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.15}>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {product.sizes.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-gold/20 bg-gold/5 px-5 py-2.5 text-sm font-semibold text-gold"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.2}>
                      <div className="mt-10">
                        <CtaLink to="/contact">
                          Enquire about {product.name}
                        </CtaLink>
                      </div>
                    </RevealOnScroll>
                  </div>

                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="grid gap-5 sm:grid-cols-3">
                      <InfoCard
                        icon={<Sparkles className="text-gold" size={20} />}
                        title="Health Benefits"
                        items={product.benefits}
                        delay={0}
                      />
                      <InfoCard
                        icon={<Check className="text-gold" size={20} />}
                        title="Best Uses"
                        items={product.uses}
                        delay={0.05}
                      />
                      <InfoCard
                        icon={<Sparkles className="text-gold" size={20} />}
                        title="Nutrition"
                        items={product.nutrition}
                        delay={0.1}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ═══════════ CTA ═══════════ */}
      <section className="section-dark section-luxury">
        <div className="container-luxury">
          <div className="mx-auto max-w-3xl text-center">
            <RevealOnScroll>
              <GoldDivider />
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="mt-8 headline-md text-ivory">
                Every bottle tells a story of{" "}
                <em className="font-display italic text-gold">patience and purity.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="mt-6 body-lg-light">
                Ready to experience the difference? Contact us for home orders,
                retail supply, or bulk distribution.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <CtaLink to="/contact" variant="gold">Start an enquiry</CtaLink>
                <CtaLink to="/our-story" variant="outline">Our story</CtaLink>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function InfoCard({
  icon,
  title,
  items,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay: number;
}) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="premium-card !rounded-2xl p-6">
        {icon}
        <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-forest">
          {title}
        </h3>
        <ul className="mt-4 space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-6 text-charcoal/55">
              <Check className="mt-0.5 shrink-0 text-olive" size={14} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </RevealOnScroll>
  );
}
