import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Hammer,
  ShieldCheck,
  Wind,
  Sprout,
  Droplets,
  Package,
  Leaf,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { PageShell, RevealOnScroll, GoldDivider, CtaLink } from "../components/ui";
import { products } from "../data/site";

const ease = [0.16, 1, 0.3, 1] as const;

const productImages: Record<string, string> = {
  "groundnut-oil": "/images/groundnut-oil.png",
  "sesame-oil": "/images/sesame-oil.png",
  "coconut-oil": "/images/coconut-oil.png",
  "castor-oil": "/images/hero-bottle.png"
};

const productMeta: Record<string, { tagline: string; idealFor: string; aroma: string; storage: string }> = {
  "groundnut-oil": {
    tagline: "The soul of Indian kitchens",
    idealFor: "Everyday frying, gravies & festive cooking",
    aroma: "Warm, nutty & deeply golden",
    storage: "Store cool & dark; seal the cap after each use"
  },
  "sesame-oil": {
    tagline: "Heritage in every drop",
    idealFor: "Pickles, tempering & wellness rituals",
    aroma: "Bold, toasty & earthy",
    storage: "Keep away from heat & direct sunlight"
  },
  "coconut-oil": {
    tagline: "Nature's gentle versatility",
    idealFor: "Regional cooking, hair & skin care",
    aroma: "Mellow, sweet & tropical",
    storage: "Room temperature; may solidify when cool"
  },
  "castor-oil": {
    tagline: "The ancient wellness elixir",
    idealFor: "Hair care, massage & home wellness",
    aroma: "Mild, clean & botanical",
    storage: "Keep tightly sealed, cool & dry"
  }
};

const categories = [
  { label: "All Products", slug: "all" },
  { label: "Groundnut Oil", slug: "groundnut-oil" },
  { label: "Sesame Oil", slug: "sesame-oil" },
  { label: "Coconut Oil", slug: "coconut-oil" },
  { label: "Castor Oil", slug: "castor-oil" }
];

const cardBadges = ["Cold Pressed", "100% Natural", "Wooden Chekku", "Chemical Free"];

const highlights = [
  { icon: Hammer, label: "Traditional Wooden Cold Pressed" },
  { icon: ShieldCheck, label: "No Chemicals" },
  { icon: Wind, label: "Rich Natural Aroma" },
  { icon: Sprout, label: "Farm Fresh Seeds" },
  { icon: Droplets, label: "Nutrient Retention" },
  { icon: Package, label: "Small Batch Production" }
];

const trustItems = [
  { icon: Leaf, label: "100% Natural" },
  { icon: Droplets, label: "Cold Pressed" },
  { icon: ShieldCheck, label: "Chemical Free" },
  { icon: Sprout, label: "Farm Fresh" },
  { icon: Award, label: "Premium Quality" },
  { icon: Hammer, label: "Traditional Method" }
];

export function Products() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? products : products.filter((p) => p.slug === active);

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
        description="Explore RMS Gold's signature collection — cold pressed groundnut oil, pure sesame oil, virgin coconut oil and traditional castor oil, crafted with the wooden Chekku method."
        path="/products"
        keywords={["Groundnut Oil", "Sesame Oil", "Coconut Oil", "Premium Oil Bottles", "Cold Pressed"]}
        schema={schema}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="p-parchment px-4 pb-16 pt-32 text-center md:px-8 md:pb-20 md:pt-36">
        <div className="container-luxury">
          <motion.p
            className="eyebrow mx-auto"
            style={{ color: "var(--gold)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            The Collection
          </motion.p>
          <motion.h1
            className="mx-auto mt-7 max-w-4xl headline-xl text-forest"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease }}
          >
            Crafted by Tradition.{" "}
            <em className="font-display italic text-gold">Perfected by Nature.</em>
          </motion.h1>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.9 }}
          >
            <div className="divider-gold" />
          </motion.div>
          <motion.p
            className="mx-auto mt-8 max-w-2xl font-display text-lg italic leading-relaxed text-charcoal/55 md:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            Every bottle of RMS Gold Cold Pressed Oil is carefully extracted using
            traditional wooden Chekku methods, preserving nature's purity, authentic
            flavour, and essential nutrients for generations of healthy living.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ FILTERS + PRODUCT GRID ═══════════ */}
      <section className="p-parchment px-4 pb-24 md:px-8">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Product categories">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  role="tab"
                  aria-selected={active === cat.slug}
                  className={`p-filter ${active === cat.slug ? "is-active" : ""}`}
                  onClick={() => setActive(cat.slug)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <div
            className={`mx-auto mt-14 grid gap-8 ${
              filtered.length === 1 ? "max-w-xl" : "max-w-6xl lg:grid-cols-2"
            }`}
          >
            {filtered.map((product, i) => {
              const meta = productMeta[product.slug];
              return (
                <motion.article
                  key={product.slug}
                  className="p-card"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: Math.min(i * 0.08, 0.24), duration: 0.65, ease }}
                >
                  {/* Media */}
                  <div className="p-card-media">
                    <img src={productImages[product.slug]} alt={product.name} loading="lazy" />
                    <motion.span
                      className="p-float-badge"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      Cold Pressed
                    </motion.span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
                    {/* Header */}
                    <div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-gold/80">
                        0{i + 1} · Signature Oil
                      </p>
                      <h2 className="mt-2.5 font-serif text-2xl leading-tight text-forest md:text-[1.7rem]">
                        {product.name}
                      </h2>
                      <p className="mt-1.5 font-display text-base italic text-charcoal/45">
                        {meta.tagline}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-charcoal/60">
                        {product.summary}
                      </p>
                    </div>

                    {/* Sizes */}
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-gold/20 bg-gold/5 px-3.5 py-1.5 text-xs font-semibold text-gold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      {cardBadges.map((b) => (
                        <span key={b} className="p-badge">
                          <Check size={11} />
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="divider-gold-wide" />

                    {/* Key Benefits */}
                    <div>
                      <p className="p-detail-label">Key Benefits</p>
                      <ul className="mt-3 space-y-2">
                        {product.benefits.map((benefit) => (
                          <li key={benefit} className="flex gap-2.5 text-sm leading-6 text-charcoal/60">
                            <Check className="mt-0.5 shrink-0 text-olive" size={14} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlight chips */}
                    <div className="flex flex-wrap gap-2">
                      {highlights.map((h) => (
                        <span key={h.label} className="p-chip">
                          <h.icon size={13} />
                          {h.label}
                        </span>
                      ))}
                    </div>

                    <div className="divider-gold-wide" />

                    {/* Detail preview */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="p-detail">
                        <p className="p-detail-label">Ideal For</p>
                        <p className="p-detail-text">{meta.idealFor}</p>
                      </div>
                      <div className="p-detail">
                        <p className="p-detail-label">Best Uses</p>
                        <p className="p-detail-text">{product.uses.slice(0, 3).join(" · ")}</p>
                      </div>
                      <div className="p-detail">
                        <p className="p-detail-label">Aroma Profile</p>
                        <p className="p-detail-text">{meta.aroma}</p>
                      </div>
                      <div className="p-detail">
                        <p className="p-detail-label">Storage Advice</p>
                        <p className="p-detail-text">{meta.storage}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-1">
                      <Link
                        to="/contact"
                        className="magnetic-btn magnetic-btn-gold w-full"
                        aria-label={`Explore ${product.name}`}
                      >
                        Explore Product
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <section className="section-luxury section-cream">
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center">
            <RevealOnScroll>
              <p className="eyebrow justify-center">Our Promise</p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <h2 className="mt-5 headline-md text-forest">
                Held to a{" "}
                <em className="font-display italic text-gold">higher standard.</em>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {trustItems.map((item, i) => (
              <RevealOnScroll key={item.label} delay={i * 0.06}>
                <div className="p-trust">
                  <div className="p-trust-icon">
                    <item.icon size={22} />
                  </div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-forest">
                    {item.label}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

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
