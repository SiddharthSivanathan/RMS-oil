import { motion } from "framer-motion";
import { HeartPulse, Leaf, Sun, Droplets, Brain, Shield } from "lucide-react";
import { Seo } from "../components/Seo";
import {
  PageShell,
  SectionHeading,
  RevealOnScroll,
  GoldDivider,
  CtaLink,
  Eyebrow,
  ParallaxImage,
  GlassCard
} from "../components/ui";

const benefits = [
  {
    icon: HeartPulse,
    title: "Heart-Friendly Fats",
    copy: "Cold pressed oils are naturally rich in monounsaturated and polyunsaturated fats, which support cardiovascular wellness as part of a balanced diet."
  },
  {
    icon: Shield,
    title: "Natural Antioxidants",
    copy: "Without excessive heat processing, cold pressed oils retain vitamin E, sesamol, and other naturally occurring antioxidants."
  },
  {
    icon: Leaf,
    title: "Chemical Free",
    copy: "No solvents, no bleaching, no artificial preservatives. Just pure oil extracted by mechanical pressure."
  },
  {
    icon: Sun,
    title: "Natural Aroma & Color",
    copy: "The slow extraction process preserves the distinctive aroma and rich golden color that refined oils lose."
  },
  {
    icon: Droplets,
    title: "Better Nutrient Retention",
    copy: "Low-temperature pressing helps preserve essential fatty acids, vitamins, and minerals in their natural form."
  },
  {
    icon: Brain,
    title: "Traditional Wisdom",
    copy: "Ayurvedic and traditional Indian nutrition have valued cold pressed oils for their balancing, nourishing properties for centuries."
  }
];

const oilGuide = [
  {
    oil: "Groundnut Oil",
    best: "Everyday cooking, frying, gravies",
    ayurveda: "Warming, grounding",
    nutrition: "Vitamin E, healthy fats"
  },
  {
    oil: "Sesame Oil",
    best: "Pickles, tempering, massage",
    ayurveda: "Balancing, strengthening",
    nutrition: "Sesamol, Vitamin K, lignans"
  },
  {
    oil: "Coconut Oil",
    best: "Regional cooking, hair & skin care",
    ayurveda: "Cooling, nourishing",
    nutrition: "MCTs, lauric acid"
  },
  {
    oil: "Castor Oil",
    best: "Hair care, massage, wellness",
    ayurveda: "Cleansing, lubricating",
    nutrition: "Ricinoleic acid, fatty acids"
  }
];

export function Wellness() {
  return (
    <PageShell>
      <Seo
        title="Health & Wellness | RMS Gold — Benefits of Cold Pressed Oils"
        description="Discover the health benefits of cold pressed oils — natural antioxidants, heart-friendly fats, chemical-free processing, and Ayurvedic wellness traditions."
        path="/health-wellness"
        keywords={["Health Benefits Oil", "Cold Pressed Oil Benefits", "Ayurveda Oil", "Natural Cooking Oil"]}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[70vh] overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/images/coconut-oil.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 to-charcoal" />

        <div className="container-luxury relative z-10 flex min-h-[70vh] flex-col justify-center text-center">
          <motion.div
            className="eyebrow mx-auto"
            style={{ color: "var(--gold)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Health & Wellness
          </motion.div>
          <motion.h1
            className="mt-6 headline-xl text-ivory"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Nature's nutrition,{" "}
            <em className="font-display italic text-gold">preserved.</em>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-xl body-lg-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Cold pressed oils retain what modern refining removes — aroma, color,
            vitamins, and the honest character of every seed.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ BENEFITS ═══════════ */}
      <section className="section-luxury">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Benefits"
            title="Why cold pressed oils matter."
            copy="Understanding the science and tradition behind natural extraction."
          />

          <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <RevealOnScroll key={b.title} delay={i * 0.05}>
                <div className="premium-card h-full p-8">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/8">
                    <b.icon className="text-gold" size={22} />
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-forest">{b.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/55">{b.copy}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PARALLAX BREAK ═══════════ */}
      <section className="container-luxury">
        <ParallaxImage
          src="/images/oil-pour.png"
          alt="Golden oil being poured"
          className="h-[40vh] rounded-2xl md:h-[55vh]"
        />
      </section>

      {/* ═══════════ COLD PRESSED VS REFINED ═══════════ */}
      <section className="section-dark section-luxury">
        <div className="container-luxury">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow light>Understanding the Difference</Eyebrow>
              <RevealOnScroll>
                <h2 className="mt-6 headline-lg text-ivory">
                  Cold pressed vs.{" "}
                  <em className="font-display italic text-gold">refined.</em>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <p className="mt-6 body-lg-light max-w-lg">
                  Refined oils undergo chemical solvent extraction, high heat treatment,
                  bleaching, and deodorizing — stripping away natural nutrients and character.
                  Cold pressing uses only mechanical pressure at controlled temperatures,
                  preserving everything nature intended.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Cold Pressed", ["Natural aroma", "Full nutrients", "No chemicals", "Traditional"]],
                    ["Refined", ["Neutral taste", "Nutrients lost", "Solvents used", "Industrial"]]
                  ].map(([title, items]) => (
                    <div
                      key={title as string}
                      className={`rounded-2xl p-6 ${
                        title === "Cold Pressed"
                          ? "border border-gold/20 bg-gold/5"
                          : "border border-ivory/6 bg-white/3"
                      }`}
                    >
                      <h3 className={`font-serif text-lg ${
                        title === "Cold Pressed" ? "text-gold" : "text-ivory/40"
                      }`}>
                        {title as string}
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {(items as string[]).map((item) => (
                          <li key={item} className="text-sm text-ivory/45">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll direction="right">
              <ParallaxImage
                src="/images/wood-press.png"
                alt="Traditional cold pressing"
                className="h-[50vh] rounded-2xl"
                speed={0.15}
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ OIL GUIDE TABLE ═══════════ */}
      <section className="section-luxury section-cream">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Oil Guide"
            title="Choose the right oil for your need."
          />

          <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-forest/8 bg-white/70">
            {/* Header */}
            <div className="hidden border-b border-forest/8 bg-forest/3 px-8 py-4 md:grid md:grid-cols-4 md:gap-6">
              {["Oil", "Best For", "Ayurveda", "Key Nutrients"].map((h) => (
                <p key={h} className="text-xs font-bold uppercase tracking-widest text-forest/50">{h}</p>
              ))}
            </div>

            {oilGuide.map((row, i) => (
              <RevealOnScroll key={row.oil} delay={i * 0.05}>
                <div className="grid gap-3 border-b border-forest/6 px-8 py-6 last:border-0 md:grid-cols-4 md:gap-6">
                  <p className="font-serif text-lg font-semibold text-forest">{row.oil}</p>
                  <p className="text-sm text-charcoal/55">{row.best}</p>
                  <p className="text-sm italic text-charcoal/45">{row.ayurveda}</p>
                  <p className="text-sm text-charcoal/55">{row.nutrition}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="mx-auto max-w-3xl text-center">
            <RevealOnScroll>
              <GoldDivider />
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="mt-8 headline-md text-forest">
                Nourish your family with{" "}
                <em className="font-display italic text-gold">nature's best.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <CtaLink to="/products" variant="primary">Explore oils</CtaLink>
                <CtaLink to="/blog" variant="outline">Read journal</CtaLink>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
