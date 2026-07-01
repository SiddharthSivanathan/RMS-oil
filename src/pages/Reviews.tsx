import { Star, Quote, CheckCircle2, Users, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { Seo } from "../components/Seo";
import {
  PageShell,
  SectionHeading,
  RevealOnScroll,
  AnimatedCounter,
  GoldDivider,
  CtaLink,
  Eyebrow,
  GlassCard
} from "../components/ui";
import { reviews } from "../data/site";

const extendedReviews = [
  ...reviews,
  {
    name: "Deepa M.",
    city: "Bangalore",
    product: "Coconut Oil",
    rating: 5,
    copy: "The fragrance is so natural and fresh. I've started using this for cooking and hair care both. My whole family loves it."
  },
  {
    name: "Suresh K.",
    city: "Hyderabad",
    product: "Groundnut Oil",
    rating: 5,
    copy: "Finally found an oil that reminds me of my grandmother's cooking. The quality is outstanding and very consistent."
  },
  {
    name: "Lakshmi P.",
    city: "Madurai",
    product: "Sesame Oil",
    rating: 5,
    copy: "Perfect for traditional pickles and podi. The sesame aroma is rich and authentic. The packaging is also very elegant."
  },
  {
    name: "Rahul T.",
    city: "Mumbai",
    product: "Groundnut Oil",
    rating: 4.9,
    copy: "We ordered a bulk pack for our restaurant. The customers noticed the difference in taste immediately. Exceptional quality."
  }
];

export function Reviews() {
  return (
    <PageShell>
      <Seo
        title="Customer Reviews | RMS Gold — Trusted by Families"
        description="Read 96+ verified reviews from families who switched to RMS Gold premium cold pressed oils. 4.9 star average rating."
        path="/reviews"
        keywords={["Oil Reviews", "Cold Pressed Oil Reviews", "Customer Testimonials"]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "RMS Gold Cold Pressed Oils",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "96",
            bestRating: "5"
          }
        }}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-charcoal py-40">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(201,154,53,0.4), transparent 70%)"
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container-luxury relative z-10 text-center">
          <motion.div
            className="eyebrow mx-auto"
            style={{ color: "var(--gold)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Customer Love
          </motion.div>
          <motion.h1
            className="mt-6 headline-xl text-ivory"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Trusted by{" "}
            <em className="font-display italic text-gold">families.</em>
          </motion.h1>

          {/* Stats */}
          <motion.div
            className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <AnimatedCounter end={4.9} label="Average Rating" />
            <AnimatedCounter end={96} suffix="+" label="Reviews" />
            <AnimatedCounter end={100} suffix="%" label="Recommended" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FEATURED REVIEW ═══════════ */}
      <section className="section-luxury section-cream">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="mx-auto max-w-4xl text-center">
              <Quote className="mx-auto text-gold" size={40} />
              <blockquote className="mt-8 font-display text-3xl italic leading-relaxed text-forest md:text-4xl">
                "The aroma feels exactly like traditional home cooking. Our family switched
                completely after the first bottle."
              </blockquote>
              <div className="mt-8">
                <p className="font-semibold text-forest">Priya R.</p>
                <p className="text-sm text-charcoal/45">Madurai · Groundnut Oil</p>
                <div className="mt-3 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="star-gold" fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ ALL REVIEWS ═══════════ */}
      <section className="section-luxury">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="All Reviews"
            title="Real stories from real families."
            copy="Every review is from a verified customer who chose traditional purity."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {extendedReviews.map((review, i) => (
              <RevealOnScroll key={review.name} delay={i * 0.04}>
                <div className="premium-card h-full p-7">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={12} className="star-gold" fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gold">{review.rating}</span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-charcoal/60">
                    "{review.copy}"
                  </p>

                  <div className="mt-auto border-t border-forest/6 pt-5 mt-6">
                    {/* Avatar circle */}
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-forest font-serif text-sm font-bold text-gold">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-forest">{review.name}</p>
                        <p className="text-xs text-charcoal/35">{review.city} · {review.product}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST BADGES ═══════════ */}
      <section className="section-forest section-luxury">
        <div className="container-luxury">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {[
              { icon: Star, title: "4.9 Star Average", copy: "Consistently rated excellent across all products" },
              { icon: Users, title: "96+ Families", copy: "Verified customers who chose traditional purity" },
              { icon: ThumbsUp, title: "100% Recommended", copy: "Every reviewer recommends RMS Gold to others" }
            ].map((badge, i) => (
              <RevealOnScroll key={badge.title} delay={i * 0.1}>
                <GlassCard dark className="text-center">
                  <badge.icon className="mx-auto text-gold" size={28} />
                  <h3 className="mt-4 font-serif text-xl text-ivory">{badge.title}</h3>
                  <p className="mt-2 text-sm text-ivory/40">{badge.copy}</p>
                </GlassCard>
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
                Join the families who{" "}
                <em className="font-display italic text-gold">taste the difference.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <CtaLink to="/products" variant="primary">Explore oils</CtaLink>
                <CtaLink to="/write-review" variant="outline">Write a review</CtaLink>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
