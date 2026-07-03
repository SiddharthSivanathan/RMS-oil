import { motion } from "framer-motion";
import { Seo } from "../components/Seo";
import {
  PageShell,
  Eyebrow,
  RevealOnScroll,
  ParallaxImage,
  GoldDivider,
  CtaLink,
  Marquee
} from "../components/ui";

const timeline = [
  {
    era: "Heritage",
    title: "Rooted in tradition",
    copy: "Manimaran Oil Mill began as a humble family operation, rooted in the belief that the best oils come from patience — not machinery. Generations of knowledge passed down through hands that understood the language of seeds.",
    image: "/images/wood-press.png"
  },
  {
    era: "Craft",
    title: "The art of wood pressing",
    copy: "Our cold pressing method uses traditional wooden ghani mechanisms that extract oil slowly, preserving every molecule of natural aroma, color, and nutrition. No heat. No chemicals. Just the quiet patience of an ancient craft.",
    image: "/images/oil-pour.png"
  },
  {
    era: "Quality",
    title: "Discipline in every batch",
    copy: "Hygienic manufacturing, careful filtration, and responsible bottling ensure that every bottle leaving our mill meets the same exacting standard. We test for clarity, fragrance, and purity — because your family deserves consistency.",
    image: "/images/groundnut-oil.png"
  },
  {
    era: "Today",
    title: "A modern premium brand",
    copy: "RMS Gold brings traditional oil craft into a refined lifestyle format. Elegant packaging, premium presentation, and a digital-first approach — designed for today's homes while honoring yesterday's wisdom.",
    image: "/images/hero-bottle.png"
  }
];

const values = [
  { title: "Purity", copy: "No compromises in extraction, filtration, or bottling." },
  { title: "Patience", copy: "Slow pressing preserves what speed destroys." },
  { title: "Trust", copy: "Earned one bottle at a time, across generations." },
  { title: "Elegance", copy: "Traditional craft deserves premium presentation." }
];

export function Story() {
  return (
    <PageShell>
      <Seo
        title="Our Story | RMS Gold — Heritage, Craft & Purity"
        description="Discover the heritage, wooden pressing craft, hygienic manufacturing and family trust behind RMS Gold oils by Manimaran Oil Mill."
        path="/our-story"
        keywords={["Traditional Oil", "Wood Pressed Oil", "Oil Manufacturer Tamil Nadu", "Cold Pressed Heritage"]}
      />

      {/* ═══════════ OUR STORY — HERITAGE ═══════════ */}
      <section className="story-heritage flex min-h-screen items-center py-24 md:py-32">
        <div
          className="story-heritage-bg"
          style={{ backgroundImage: "url(/images/wood-press.png)" }}
        />
        <div className="story-heritage-overlay" />

        <div className="container-luxury relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <motion.p
              className="eyebrow"
              style={{ color: "var(--gold)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Our Story
            </motion.p>

            {/* Ornamental motif */}
            <motion.div
              className="story-ornament mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="story-ornament-line" />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden="true"
              >
                <path d="M12 2 L14.4 9.6 L22 12 L14.4 14.4 L12 22 L9.6 14.4 L2 12 L9.6 9.6 Z" />
                <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
              </svg>
              <span className="story-ornament-line" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mt-8 headline-xl text-ivory"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Before machines measured speed,{" "}
              <em className="font-display italic text-gold">
                our ancestors measured patience.
              </em>
            </motion.h1>

            {/* Opening narrative */}
            <motion.p
              className="mx-auto mt-10 max-w-2xl body-lg-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Long before steel and steam, there was the slow turn of the wooden{" "}
              <span className="text-gold">Chekku</span> — a gentle giant of stone
              and timber that coaxed oil from seed without haste or heat. Beneath
              its quiet rhythm, every seed surrendered its{" "}
              <span className="text-gold">purest essence</span>, drop by unhurried
              drop.
            </motion.p>
          </div>

          {/* Heritage pull-quote */}
          <RevealOnScroll className="mx-auto mt-16 max-w-2xl">
            <blockquote className="story-quote">
              <p className="font-display text-xl italic leading-relaxed text-ivory/80 md:text-2xl md:leading-relaxed">
                What began as a family tradition has become a promise carried
                through generations — a promise to preserve nature's purity,
                authentic flavour, and honest nutrition.
              </p>
            </blockquote>
          </RevealOnScroll>

          {/* Closing narrative */}
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <RevealOnScroll delay={0.05}>
              <p className="body-lg-light">
                That knowledge was never written down. It lived in the hands of
                our elders, in the patience of the press, in a quiet reverence for{" "}
                <span className="text-gold">seed, soil and season</span> — passed
                from one generation to the next, for some things are far too
                precious to hurry.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-6 body-lg-light">
                Today, <span className="text-gold">RMS Gold</span> carries that
                same wood-pressed soul into modern homes. We still choose patience
                over speed, purity over shortcuts, and craft over convenience — so
                that every bottle you open holds the honest aroma of a{" "}
                <span className="text-gold">heritage kept whole.</span>
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}>
              <p className="mt-10 font-display text-[0.8125rem] uppercase tracking-[0.28em] text-gold/70">
                Woven from the traditions of Manimaran Oil Mill
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ VALUES MARQUEE ═══════════ */}
      <section className="border-b border-forest/8 bg-cream">
        <Marquee items={["Heritage", "Purity", "Patience", "Craft", "Trust", "Elegance", "Nature"]} />
      </section>

      {/* ═══════════ TIMELINE ═══════════ */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="mx-auto max-w-4xl text-center">
            <RevealOnScroll>
              <GoldDivider />
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="mt-8 headline-lg text-forest">
                Generations of expertise,{" "}
                <em className="font-display italic text-gold">refined one bottle at a time.</em>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="mt-24 space-y-32">
            {timeline.map((item, i) => (
              <div
                key={item.era}
                className={`grid items-center gap-12 lg:gap-20 ${
                  i % 2 === 0 ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
                }`}
              >
                <RevealOnScroll
                  direction={i % 2 === 0 ? "left" : "right"}
                  className={i % 2 !== 0 ? "lg:order-2" : ""}
                >
                  <ParallaxImage
                    src={item.image}
                    alt={item.title}
                    className="h-[40vh] rounded-2xl md:h-[55vh]"
                    speed={0.15}
                  />
                </RevealOnScroll>

                <RevealOnScroll
                  direction={i % 2 === 0 ? "right" : "left"}
                  className={i % 2 !== 0 ? "lg:order-1" : ""}
                >
                  <div>
                    <span className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                      {item.era}
                    </span>
                    <h3 className="mt-6 headline-md text-forest">{item.title}</h3>
                    <p className="mt-5 body-lg max-w-lg">{item.copy}</p>
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ VALUES ═══════════ */}
      <section className="section-dark section-luxury">
        <div className="container-luxury">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow light>Our Values</Eyebrow>
            <RevealOnScroll>
              <h2 className="mt-6 headline-lg text-ivory">
                What we stand for
              </h2>
            </RevealOnScroll>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.05}>
                <div className="glass-panel-dark rounded-2xl p-8 text-center">
                  <h3 className="font-serif text-2xl text-gold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ivory/45">{v.copy}</p>
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
              <h2 className="headline-md text-forest">
                Experience the difference that{" "}
                <em className="font-display italic text-gold">patience makes.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <CtaLink to="/products" variant="primary">Explore the collection</CtaLink>
                <CtaLink to="/contact" variant="outline">Get in touch</CtaLink>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
