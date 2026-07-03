import { motion } from "framer-motion";
import { Sprout, Hammer, Droplets, ShieldCheck, PackageCheck, Home } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageShell, RevealOnScroll } from "../components/ui";

const ease = [0.16, 1, 0.3, 1] as const;

type Item = {
  img: string;
  cat: string;
  title: string;
  caption: string;
  ar: "tall" | "square" | "wide";
};

const items: Item[] = [
  { img: "wood-press", cat: "Traditional Oil Mill", title: "Traditional Wooden Chekku", caption: "The heart of the mill, turning slow and true.", ar: "tall" },
  { img: "oil-pour", cat: "Cold Press Process", title: "Every Drop Crafted with Care", caption: "Liquid gold, drawn without haste or heat.", ar: "square" },
  { img: "sesame-oil", cat: "Seeds & Ingredients", title: "Freshly Harvested Sesame Seeds", caption: "Sun-ripened seeds, chosen at their peak.", ar: "wide" },
  { img: "groundnut-oil", cat: "Farming & Harvest", title: "Golden Harvest", caption: "From trusted fields to the pressing floor.", ar: "square" },
  { img: "coconut-oil", cat: "Seeds & Ingredients", title: "Nature's Pure Ingredients", caption: "Mature coconuts — nothing added, nothing lost.", ar: "tall" },
  { img: "hero-bottle", cat: "Packaging", title: "Heritage in Every Bottle", caption: "Tradition, sealed for the modern home.", ar: "wide" },
  { img: "wood-press", cat: "Cold Press Process", title: "Handcrafted Extraction", caption: "The unhurried art of the cold press.", ar: "square" },
  { img: "groundnut-oil", cat: "Packaging", title: "Premium Bottling", caption: "Small batches, finished with discipline.", ar: "tall" },
  { img: "sesame-oil", cat: "Farming & Harvest", title: "The Season's Best", caption: "Harvested by hand, honoured by craft.", ar: "square" },
  { img: "coconut-oil", cat: "Customer Moments", title: "At the Family Table", caption: "A purity that generations return to.", ar: "wide" },
  { img: "hero-bottle", cat: "Customer Moments", title: "Chosen for Generations", caption: "A name families trust and keep.", ar: "square" },
  { img: "oil-pour", cat: "Traditional Oil Mill", title: "Liquid Heritage", caption: "The mill's promise, poured pure.", ar: "tall" }
];

const journeySteps = [
  { icon: Sprout, title: "Seed Selection", copy: "Only clean, aroma-rich seeds are chosen." },
  { icon: Hammer, title: "Traditional Cold Press", copy: "Pressed slowly in a wooden ghani." },
  { icon: Droplets, title: "Natural Filtration", copy: "Sediment settles the honest way." },
  { icon: ShieldCheck, title: "Quality Inspection", copy: "Clarity, aroma and purity are checked." },
  { icon: PackageCheck, title: "Premium Bottling", copy: "Sealed fresh in small batches." },
  { icon: Home, title: "Delivered to Families", copy: "Carried to homes across generations." }
];

export function Gallery() {
  return (
    <PageShell>
      <Seo
        title="Gallery of Heritage | RMS Gold — Tradition & Craftsmanship"
        description="A luxury heritage gallery of RMS Gold — traditional wooden oil mills, natural ingredients, the cold-press process, premium packaging and family moments."
        path="/gallery"
        keywords={["Premium Oil Gallery", "Traditional Oil Mill", "Cold Pressed Craftsmanship", "Heritage Brand"]}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="g-parchment px-4 pb-16 pt-32 text-center md:px-8 md:pb-20 md:pt-36">
        <div className="container-luxury">
          <motion.p
            className="eyebrow mx-auto"
            style={{ color: "var(--gold)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            Gallery
          </motion.p>
          <motion.h1
            className="mx-auto mt-7 max-w-3xl headline-xl text-forest"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease }}
          >
            Gallery of{" "}
            <em className="font-display italic text-gold">Heritage</em>
          </motion.h1>
          <motion.div
            className="g-ornament mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease }}
          >
            <span className="g-ornament-line" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
              <path d="M12 2 L14.4 9.6 L22 12 L14.4 14.4 L12 22 L9.6 14.4 L2 12 L9.6 9.6 Z" />
              <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
            </svg>
            <span className="g-ornament-line" />
          </motion.div>
          <motion.p
            className="mx-auto mt-8 max-w-2xl font-display text-lg italic leading-relaxed text-charcoal/55 md:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Every image preserves a story of tradition, craftsmanship, and the
            timeless journey from nature to your home.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ MASONRY ═══════════ */}
      <section className="g-parchment px-4 pb-24 md:px-8">
        <div className="container-luxury">
          <div className="g-masonry mx-auto max-w-6xl">
            {items.map((item, i) => (
              <motion.figure
                key={`${item.title}-${i}`}
                className={`g-card g-ar-${item.ar}`}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.05, 0.5), duration: 0.6, ease }}
                tabIndex={0}
              >
                <img src={`/images/${item.img}.png`} alt={item.title} loading="lazy" />
                <span className="g-card-frame" />
                <figcaption className="g-card-overlay">
                  <span className="g-card-cat">{item.cat}</span>
                  <span className="g-card-line" />
                  <span className="g-card-title">{item.title}</span>
                  <span className="g-card-caption">{item.caption}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HERITAGE QUOTE ═══════════ */}
      <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: "url(/images/wood-press.png)", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/80 to-charcoal" />
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <blockquote className="g-quote mx-auto max-w-3xl text-center">
              <p className="font-display text-2xl italic leading-relaxed text-ivory/85 md:text-3xl md:leading-[1.5]">
                Every bottle carries not only the richness of nature, but also the
                wisdom of{" "}
                <span className="text-gold">generations.</span>
              </p>
              <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold/70">
                — The Manimaran Oil Mill Family
              </p>
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ HERITAGE TIMELINE ═══════════ */}
      <section className="section-luxury section-cream">
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center">
            <RevealOnScroll>
              <p className="eyebrow justify-center">The Journey</p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <h2 className="mt-5 headline-md text-forest">
                From seed to{" "}
                <em className="font-display italic text-gold">family table.</em>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="g-timeline mx-auto mt-16 max-w-6xl">
            {journeySteps.map((step, i) => (
              <RevealOnScroll key={step.title} delay={i * 0.08}>
                <div className="g-step">
                  <div className="g-step-icon">
                    <step.icon size={26} />
                  </div>
                  <p className="mt-5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-gold/70">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-2 font-serif text-lg text-forest">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/55">{step.copy}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
