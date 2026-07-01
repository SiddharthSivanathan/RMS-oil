import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, CheckCircle2, Leaf, ShieldCheck } from "lucide-react";
import { Seo } from "../components/Seo";
import {
  PageShell,
  SectionHeading,
  Eyebrow,
  CtaLink,
  AnimatedCounter,
  Marquee,
  ParallaxImage,
  RevealOnScroll,
  GlassCard,
  GoldDivider,
  ScrollIndicator
} from "../components/ui";
import { baseUrl, products, features, reviews } from "../data/site";

/* ── Floating Particles (reduced count for perf) ── */
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 10,
    size: 1.5 + Math.random() * 2,
    duration: 8 + Math.random() * 8
  }));
  return (
    <div className="hero-particles">
      {particles.map((p) => (
        <span
          key={p.id}
          className="hero-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }}
        />
      ))}
    </div>
  );
}

const productImages: Record<string, string> = {
  "groundnut-oil": "/images/groundnut-oil.png",
  "sesame-oil": "/images/sesame-oil.png",
  "coconut-oil": "/images/coconut-oil.png",
  "castor-oil": "/images/hero-bottle.png"
};

export function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 120]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.5], [1, 1.05]);

  return (
    <PageShell>
      <Seo
        title="RMS Gold | Premium Cold Pressed Oils — Crafted by Tradition"
        description="RMS Gold crafts premium cold pressed groundnut, sesame, coconut and castor oils with timeless tradition and uncompromising purity. By Manimaran Oil Mill."
        keywords={["Cold Pressed Oil", "Wood Pressed Oil", "Premium Cooking Oil", "Oil Manufacturer Tamil Nadu"]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Brand",
          name: "RMS Gold",
          slogan: "Crafted by Tradition. Chosen by Generations.",
          url: baseUrl
        }}
      />

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section ref={heroRef} className="hero-section">
        {/* Background Image */}
        <motion.div
          className="hero-bg"
          style={{
            backgroundImage: "url(/images/hero-bottle.png)",
            y: heroY,
            scale: heroScale
          }}
        />
        <div className="hero-overlay" />
        <Particles />

        {/* Golden glow orb — positioned away from text */}
        <motion.div
          className="pointer-events-none absolute right-[5%] top-[15%] hidden h-[350px] w-[350px] rounded-full opacity-15 lg:block"
          style={{
            background: "radial-gradient(circle, rgba(201,154,53,0.35) 0%, transparent 70%)"
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content — properly contained */}
        <motion.div
          className="container-luxury relative z-10 flex items-center py-32 md:py-40"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="eyebrow"
            >
              By Manimaran Oil Mill
            </motion.p>

            <motion.h1
              className="mt-7 headline-xl text-ivory"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Crafted by{" "}
              <span className="text-gold">Tradition.</span>
              <br />
              Chosen by{" "}
              <em className="font-display italic text-gold/80">Generations.</em>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-lg body-lg-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              Cold pressed oils made with timeless craftsmanship and
              uncompromising purity — for families who taste the difference.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              <Link to="/products" className="magnetic-btn magnetic-btn-gold">
                Explore Collection
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/our-story"
                className="magnetic-btn magnetic-btn-outline !border-ivory/15 !text-ivory/60 hover:!border-gold hover:!text-gold"
              >
                Watch Our Story
                <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-10 flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.7 }}
            >
              {[
                ["Chemical Free", ShieldCheck],
                ["Wood Pressed", Leaf],
                ["4.9 ★ Rating", Star]
              ].map(([label, Icon]) => (
                <div
                  key={label as string}
                  className="flex items-center gap-2"
                >
                  <Icon size={14} className="text-gold/70" />
                  <span className="text-[0.8125rem] font-medium text-ivory/40">
                    {label as string}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <ScrollIndicator />
      </section>

      {/* ═══════════ BRAND MARQUEE ═══════════ */}
      <section className="border-b border-forest/6 bg-cream">
        <Marquee
          items={[
            "Purity",
            "Tradition",
            "Craftsmanship",
            "Heritage",
            "Wellness",
            "Nature",
            "Elegance",
            "Trust"
          ]}
        />
      </section>

      {/* ═══════════ BRAND STATEMENT ═══════════ */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="mx-auto max-w-3xl text-center">
            <RevealOnScroll>
              <GoldDivider />
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-8 font-display text-2xl leading-relaxed text-forest md:text-3xl md:leading-[1.5] lg:text-4xl lg:leading-[1.45]">
                Not just oil.{" "}
                <em className="text-gold">A commitment to purity</em>{" "}
                that begins in the field and ends at your family table.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="mt-6 body-lg mx-auto max-w-xl">
                Every bottle of RMS Gold carries the aroma of slow pressing,
                the discipline of traditional craft, and the quiet confidence
                of a mill that has earned family trust for generations.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ PARALLAX IMAGE BREAK ═══════════ */}
      <section className="container-luxury pb-4">
        <ParallaxImage
          src="/images/oil-pour.png"
          alt="Golden cold pressed oil being poured"
          className="h-[45vh] rounded-xl md:h-[60vh]"
        />
      </section>

      {/* ═══════════ PRODUCT SHOWCASE ═══════════ */}
      <section className="section-luxury">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Signature Collection"
            title="Four oils. Each a luxury campaign."
            copy="Every RMS Gold oil is designed around one idea: preserve the character of the seed, then bottle it with elegance."
          />

          <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
            {products.map((product, i) => (
              <RevealOnScroll key={product.slug}>
                <div
                  className={`grid items-center gap-8 lg:gap-14 ${
                    i % 2 === 0
                      ? "lg:grid-cols-[1fr_1.1fr]"
                      : "lg:grid-cols-[1.1fr_1fr]"
                  }`}
                >
                  {/* Image */}
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={productImages[product.slug]}
                        alt={product.name}
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent" />
                      {/* Floating badge */}
                      <motion.div
                        className="absolute bottom-4 left-4 glass-panel-dark rounded-full px-3.5 py-1.5"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-gold">
                          0{i + 1}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    <Eyebrow>{product.ingredients}</Eyebrow>
                    <h3 className="mt-4 headline-md text-forest">
                      {product.name}
                    </h3>
                    <p className="mt-4 body-lg max-w-md">
                      {product.summary}
                    </p>

                    {/* Benefits pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.benefits.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-forest/8 bg-cream px-3.5 py-1.5 text-[0.75rem] font-medium text-forest"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Sizes */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.sizes.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-gold/15 px-3.5 py-1.5 text-[0.75rem] font-semibold text-gold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <CtaLink to="/products">
                        Discover {product.name.split(" ")[0]}
                      </CtaLink>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CRAFTSMANSHIP ═══════════ */}
      <section className="section-dark section-luxury">
        <div className="container-luxury">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div>
              <Eyebrow light>The Art of Cold Pressing</Eyebrow>
              <RevealOnScroll>
                <h2 className="mt-5 headline-lg text-ivory">
                  Purity is a{" "}
                  <em className="font-display italic text-gold">process,</em>{" "}
                  not a claim.
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <p className="mt-5 body-lg-light max-w-md">
                  From farm-fresh seeds to hygienic bottling, every step is
                  designed to earn family trust before the first pour. No
                  shortcuts. No solvents. No compromise.
                </p>
              </RevealOnScroll>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {features.slice(0, 4).map(({ title, copy, Icon }, i) => (
                  <RevealOnScroll key={title} delay={0.1 + i * 0.04}>
                    <GlassCard dark className="!p-5">
                      <Icon className="text-gold" size={20} />
                      <h3 className="mt-3 font-serif text-lg text-ivory">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-[0.8125rem] leading-6 text-ivory/40">
                        {copy}
                      </p>
                    </GlassCard>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Image */}
            <RevealOnScroll direction="right">
              <div className="relative">
                <ParallaxImage
                  src="/images/wood-press.png"
                  alt="Traditional wood pressing craft"
                  className="h-[45vh] rounded-xl md:h-[55vh]"
                  speed={0.15}
                />
                {/* Overlay stat */}
                <div className="absolute -bottom-4 left-4 glass-panel-dark rounded-xl px-5 py-3 md:left-6">
                  <p className="font-serif text-2xl font-bold text-gold">
                    100%
                  </p>
                  <p className="text-[0.6875rem] uppercase tracking-widest text-ivory/40">
                    Chemical Free
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS COUNTER ═══════════ */}
      <section className="section-forest" style={{ padding: "4rem 0" }}>
        <div className="container-luxury">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            <AnimatedCounter end={4.9} label="Star Rating" />
            <AnimatedCounter end={96} suffix="+" label="Reviews" />
            <AnimatedCounter end={4} label="Premium Oils" />
            <AnimatedCounter end={8} label="Pack Sizes" />
          </div>
        </div>
      </section>

      {/* ═══════════ LIFESTYLE ═══════════ */}
      <section className="section-luxury">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Lifestyle"
            title="Where tradition meets the modern table."
            copy="RMS Gold oils are crafted for kitchens that value depth of flavor — from traditional South Indian cooking to modern healthy living."
          />

          <div className="mt-12 grid gap-3 md:grid-cols-3 md:mt-16">
            <RevealOnScroll className="md:row-span-2">
              <div className="fullscreen-image h-[350px] !rounded-xl md:!h-full">
                <img
                  src="/images/hero-bottle.png"
                  alt="Premium oil bottle in luxury setting"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-widest text-gold">
                    Premium Living
                  </p>
                  <h3 className="mt-1.5 font-serif text-xl text-ivory leading-snug">
                    Designed for kitchens that value tradition
                  </h3>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <div className="fullscreen-image !h-[250px] !rounded-xl md:!h-full">
                <img
                  src="/images/groundnut-oil.png"
                  alt="Groundnut oil with fresh ingredients"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                <p className="absolute bottom-5 left-5 text-[0.8125rem] font-semibold text-ivory">
                  Traditional Cooking
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.12}>
              <div className="fullscreen-image !h-[250px] !rounded-xl md:!h-full">
                <img
                  src="/images/sesame-oil.png"
                  alt="Sesame oil for wellness rituals"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                <p className="absolute bottom-5 left-5 text-[0.8125rem] font-semibold text-ivory">
                  Wellness Rituals
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.16} className="md:col-span-2">
              <div className="fullscreen-image !h-[250px] !rounded-xl">
                <img
                  src="/images/coconut-oil.png"
                  alt="Coconut oil for family care"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                <p className="absolute bottom-5 left-5 text-[0.8125rem] font-semibold text-ivory">
                  Family Care
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ REVIEWS ═══════════ */}
      <section className="section-luxury section-cream">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Customer Love"
            title="Trusted by families returning to real oil."
            copy="4.9 star average from 96+ verified customer experiences."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
            {reviews.map((review, i) => (
              <RevealOnScroll key={review.name} delay={i * 0.04}>
                <div className="premium-card p-6 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={13}
                        className="star-gold"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className="mt-4 flex-1 text-[0.8125rem] leading-7 text-charcoal/55">
                    "{review.copy}"
                  </p>

                  <div className="mt-5 border-t border-forest/6 pt-4">
                    <p className="text-sm font-semibold text-forest">
                      {review.name}
                    </p>
                    <p className="text-[0.75rem] text-charcoal/35">
                      {review.city} · {review.product}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Trust badges */}
          <RevealOnScroll>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              {[
                ["4.9", "Average Rating"],
                ["96+", "Verified Reviews"],
                ["100%", "Recommended"]
              ].map(([val, label]) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="font-serif text-xl font-bold text-gold">
                    {val}
                  </span>
                  <span className="text-[0.6875rem] uppercase tracking-widest text-charcoal/35">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="relative overflow-hidden" style={{ padding: "6rem 0" }}>
        <div className="absolute inset-0 bg-charcoal" />
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: "url(/images/oil-pour.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/92 to-charcoal/75" />

        {/* Decorative glow */}
        <motion.div
          className="pointer-events-none absolute right-[15%] top-1/2 hidden h-[300px] w-[300px] -translate-y-1/2 rounded-full lg:block"
          style={{
            background: "radial-gradient(circle, rgba(201,154,53,0.12) 0%, transparent 70%)"
          }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-luxury relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <RevealOnScroll>
              <CheckCircle2 className="mx-auto text-gold" size={32} />
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <h2 className="mt-5 headline-lg text-ivory">
                Bring traditional purity{" "}
                <em className="font-display italic text-gold">
                  back to your kitchen.
                </em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}>
              <p className="mt-5 body-lg-light mx-auto max-w-lg">
                Whether you're ordering for your home, retail shelves,
                restaurant kitchen, or distribution network — we're ready.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.22}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CtaLink to="/contact" variant="gold">
                  Start an enquiry
                </CtaLink>
                <CtaLink to="/products" variant="outline">
                  View products
                </CtaLink>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
