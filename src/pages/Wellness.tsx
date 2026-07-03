import { motion } from "framer-motion";
import {
  Hammer,
  ShieldCheck,
  Leaf,
  Sprout,
  PackageCheck,
  Users,
  Check,
  X
} from "lucide-react";
import { Seo } from "../components/Seo";
import {
  PageShell,
  RevealOnScroll,
  GoldDivider,
  CtaLink
} from "../components/ui";

const reasons = [
  {
    icon: Hammer,
    title: "Traditional Wooden Cold Press",
    copy: "Every seed is pressed slowly in a wooden ghani, without heat or haste. This unhurried extraction protects the delicate nutrients and authentic flavour that speed and machinery destroy."
  },
  {
    icon: ShieldCheck,
    title: "100% Pure & Chemical-Free",
    copy: "No refining, no bleaching, no deodorising. No preservatives or artificial additives of any kind — only honest oil, exactly as nature intended it to be."
  },
  {
    icon: Leaf,
    title: "Rich in Natural Nutrients",
    copy: "Because we never over-process, our oils keep their naturally occurring antioxidants, vitamins, and healthy fats — the quiet nourishment refining strips away."
  },
  {
    icon: Sprout,
    title: "Farm to Bottle Quality",
    copy: "We responsibly source seeds from trusted growers and follow strict quality checks at every stage — from field to press to the bottle on your table."
  },
  {
    icon: PackageCheck,
    title: "Freshly Produced in Small Batches",
    copy: "We choose freshness over volume. Each small batch is pressed, filtered, and bottled with care, so every drop reaches you with its full aroma intact."
  },
  {
    icon: Users,
    title: "Trusted by Thousands of Families",
    copy: "Consistency, authenticity, and heritage have earned us a place in kitchens across generations — a trust we honour with every single bottle."
  }
];

const comparison = [
  ["Extraction Method", "Traditional wooden press", "Chemical solvent extraction"],
  ["Heat Used", "None — truly cold pressed", "High-heat processing"],
  ["Nutrient Retention", "Fully preserved", "Largely stripped away"],
  ["Natural Aroma", "Rich & authentic", "Neutralised & deodorised"],
  ["Chemical Processing", "None whatsoever", "Bleached & refined"],
  ["Shelf Quality", "Fresh, small-batch", "Mass-produced, long-stored"],
  ["Taste", "Pure & full-bodied", "Flat & characterless"],
  ["Purity", "100% natural", "Additives & preservatives"]
];

const trustBadges = [
  "100% Natural",
  "Cold Pressed",
  "Chemical Free",
  "Premium Quality",
  "Farm Fresh",
  "Traditional Method"
];

export function Wellness() {
  return (
    <PageShell>
      <Seo
        title="Why Choose RMS Gold | Pure Cold Pressed Oils You Can Trust"
        description="Discover why families trust RMS Gold — traditional wooden cold-press extraction, 100% chemical-free purity, natural nutrients, farm-to-bottle quality, and small-batch freshness."
        path="/health-wellness"
        keywords={["Cold Pressed Oil Benefits", "Chemical Free Oil", "Wood Pressed Oil", "Pure Natural Cooking Oil"]}
      />

      {/* ═══════════ HERO / HEADING ═══════════ */}
      <section className="relative overflow-hidden bg-charcoal py-28 md:py-36">
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: "url(/images/wood-press.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/80 to-charcoal" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-2/3"
          style={{ background: "radial-gradient(70% 60% at 50% 0%, rgba(201,154,53,0.10), transparent 60%)" }}
        />

        <div className="container-luxury relative z-10 text-center">
          <motion.p
            className="eyebrow mx-auto"
            style={{ color: "var(--gold)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Why Choose RMS Gold?
          </motion.p>

          <motion.h1
            className="mx-auto mt-8 max-w-4xl headline-xl text-ivory"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Why Families Trust{" "}
            <em className="font-display italic text-gold">RMS Gold</em>
          </motion.h1>

          <motion.p
            className="mx-auto mt-7 max-w-xl font-display text-lg italic leading-relaxed text-ivory/55 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Crafted with tradition. Protected by purity. Chosen for generations.
          </motion.p>

          <motion.div
            className="mx-auto mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            <div className="divider-gold" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════ REASON GRID ═══════════ */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center">
            <RevealOnScroll>
              <p className="eyebrow justify-center">The RMS Gold Difference</p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <h2 className="mt-5 headline-md text-forest">
                Six reasons our oil belongs in your{" "}
                <em className="font-display italic text-gold">family kitchen.</em>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <RevealOnScroll key={r.title} delay={i * 0.05}>
                <div className="premium-card h-full p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/8">
                    <r.icon className="text-gold" size={24} />
                  </div>
                  <h3 className="mt-6 font-serif text-xl leading-snug text-forest">
                    {r.title}
                  </h3>
                  <p className="mt-3.5 text-sm leading-7 text-charcoal/55">
                    {r.copy}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COLD PRESSED VS REFINED ═══════════ */}
      <section className="section-dark section-luxury">
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center">
            <RevealOnScroll>
              <p className="eyebrow justify-center" style={{ color: "var(--gold)" }}>
                The Honest Comparison
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <h2 className="mt-5 headline-lg text-ivory">
                Cold Pressed vs.{" "}
                <em className="font-display italic text-gold">Refined Oils</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.14}>
              <p className="mx-auto mt-5 max-w-lg body-lg-light">
                The same seed, two very different journeys. See exactly what sets a
                traditionally pressed oil apart from an industrially refined one.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.1} className="mx-auto mt-14 max-w-4xl">
            <div className="compare-table">
              {/* Header */}
              <div className="hidden border-b border-gold/12 px-8 py-5 md:grid md:grid-cols-[1.1fr_1fr_1fr] md:gap-x-6">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ivory/40">
                  Comparison
                </p>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
                  RMS Gold · Cold Pressed
                </p>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ivory/40">
                  Conventional Refined
                </p>
              </div>

              {comparison.map(([attr, rms, refined]) => (
                <div
                  key={attr}
                  className="compare-row grid gap-x-6 gap-y-3 border-b border-ivory/6 px-6 py-5 last:border-0 md:grid-cols-[1.1fr_1fr_1fr] md:items-center md:px-8"
                >
                  <p className="font-serif text-base text-ivory">{attr}</p>

                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15">
                      <Check size={12} className="text-gold" />
                    </span>
                    <div>
                      <span className="mb-0.5 block text-[0.6rem] font-bold uppercase tracking-widest text-gold/70 md:hidden">
                        RMS Gold
                      </span>
                      <span className="text-sm leading-6 text-ivory/80">{rms}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ivory/8">
                      <X size={12} className="text-ivory/30" />
                    </span>
                    <div>
                      <span className="mb-0.5 block text-[0.6rem] font-bold uppercase tracking-widest text-ivory/30 md:hidden">
                        Refined
                      </span>
                      <span className="text-sm leading-6 text-ivory/45">{refined}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ TRUST INDICATORS ═══════════ */}
      <section className="section-luxury section-cream">
        <div className="container-luxury">
          <div className="mx-auto max-w-3xl text-center">
            <RevealOnScroll>
              <GoldDivider />
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <h2 className="mt-8 headline-md text-forest">
                A promise you can{" "}
                <em className="font-display italic text-gold">taste and trust.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.14}>
              <p className="mx-auto mt-5 max-w-lg body-lg">
                Every bottle of RMS Gold carries the same standard of purity,
                freshness, and heritage — held to the values below, without exception.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.1}>
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3.5">
              {trustBadges.map((badge) => (
                <span key={badge} className="trust-pill">
                  <span className="trust-dot" />
                  {badge}
                </span>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="mt-14 flex flex-wrap justify-center gap-4">
              <CtaLink to="/products" variant="primary">Explore the collection</CtaLink>
              <CtaLink to="/our-story" variant="outline">Our heritage</CtaLink>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
