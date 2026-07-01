import { motion } from "framer-motion";
import {
  Sprout, ShieldCheck, Factory, Leaf, Star, PackageCheck, CookingPot, Truck
} from "lucide-react";
import { Seo } from "../components/Seo";
import {
  PageShell,
  RevealOnScroll,
  GoldDivider,
  CtaLink,
  Eyebrow,
  ParallaxImage
} from "../components/ui";
import { journey } from "../data/site";

const stepImages = [
  "/images/groundnut-oil.png",
  "/images/sesame-oil.png",
  "/images/wood-press.png",
  "/images/oil-pour.png",
  "/images/coconut-oil.png",
  "/images/hero-bottle.png",
  "/images/groundnut-oil.png",
  "/images/hero-bottle.png"
];

export function Journey() {
  return (
    <PageShell>
      <Seo
        title="Manufacturing Journey | RMS Gold — Seed to Bottle"
        description="Follow RMS Gold's 8-step manufacturing journey — from seed selection to delivery. Every step is designed to preserve purity and earn family trust."
        path="/manufacturing-journey"
        keywords={["Oil Manufacturing", "Cold Press Process", "Seed to Bottle", "Quality Oil"]}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[70vh] overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "url(/images/oil-pour.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal" />

        <div className="container-luxury relative z-10 flex min-h-[70vh] flex-col justify-center text-center">
          <motion.div
            className="eyebrow mx-auto"
            style={{ color: "var(--gold)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Seed to Bottle
          </motion.div>
          <motion.h1
            className="mt-6 headline-xl text-ivory"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A journey you can{" "}
            <em className="font-display italic text-gold">trust.</em>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-xl body-lg-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Eight careful steps between nature's finest seeds and your family's table.
            No shortcuts. No compromises. Just honest craft.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ JOURNEY STEPS ═══════════ */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="space-y-28 md:space-y-36">
            {journey.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`grid items-center gap-10 lg:gap-20 ${
                    isEven ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]"
                  }`}
                >
                  {/* Image */}
                  <RevealOnScroll
                    direction={isEven ? "left" : "right"}
                    className={isEven ? "" : "lg:order-2"}
                  >
                    <div className="relative">
                      <ParallaxImage
                        src={stepImages[i]}
                        alt={step.title}
                        className="h-[35vh] rounded-2xl md:h-[45vh]"
                        speed={0.1}
                      />
                      {/* Step number badge */}
                      <div className="absolute -right-3 -top-3 grid h-14 w-14 place-items-center rounded-full bg-forest font-serif text-xl font-bold text-gold shadow-deep md:-right-6 md:-top-6">
                        0{i + 1}
                      </div>
                    </div>
                  </RevealOnScroll>

                  {/* Content */}
                  <RevealOnScroll
                    direction={isEven ? "right" : "left"}
                    className={isEven ? "" : "lg:order-1"}
                  >
                    <div>
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-gold">
                        <step.Icon size={16} />
                        Step {i + 1} of 8
                      </span>
                      <h2 className="mt-5 headline-md text-forest">{step.title}</h2>
                      <p className="mt-4 body-lg max-w-lg">{step.copy}</p>

                      {/* Progress bar */}
                      <div className="mt-8">
                        <div className="h-[2px] w-full rounded-full bg-forest/8">
                          <motion.div
                            className="h-full rounded-full bg-gold"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${((i + 1) / 8) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                          />
                        </div>
                        <p className="mt-2 text-xs text-charcoal/35">
                          {Math.round(((i + 1) / 8) * 100)}% of journey
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ FULLSCREEN IMAGE ═══════════ */}
      <section className="container-luxury pb-8">
        <RevealOnScroll>
          <ParallaxImage
            src="/images/wood-press.png"
            alt="Traditional cold pressing craft"
            className="h-[50vh] rounded-2xl md:h-[65vh]"
          />
        </RevealOnScroll>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="section-forest section-luxury">
        <div className="container-luxury">
          <div className="mx-auto max-w-3xl text-center">
            <RevealOnScroll>
              <GoldDivider />
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="mt-8 headline-md text-ivory">
                From nature's best seeds to your{" "}
                <em className="font-display italic text-gold">family's table.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="mt-6 body-lg-light">
                Ready to experience oils crafted with this level of care?
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <CtaLink to="/products" variant="gold">View collection</CtaLink>
                <CtaLink to="/contact" variant="outline">Contact us</CtaLink>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
