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

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[80vh] overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "url(/images/wood-press.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />

        <div className="container-luxury relative z-10 flex min-h-[80vh] flex-col justify-center">
          <div className="max-w-3xl">
            <motion.div
              className="eyebrow"
              style={{ color: "var(--gold)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our Story
            </motion.div>
            <motion.h1
              className="mt-8 headline-xl text-ivory"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              A mill tradition,{" "}
              <em className="font-display italic text-gold">bottled for modern living.</em>
            </motion.h1>
            <motion.p
              className="mt-8 body-lg-light max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              RMS Gold is not an industrial label. It is a product-first brand built on the
              quiet confidence of Manimaran Oil Mill — purity, patient craft, and oils
              that families recognize by aroma.
            </motion.p>
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
