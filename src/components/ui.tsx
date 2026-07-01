import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ── Shared easing ────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as const;

/* ── Page Shell with premium transitions ──────── */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ── Scroll Progress Bar ──────────────────────── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

/* ── Eyebrow with decorative line ─────────────── */
export function Eyebrow({
  children,
  light
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <motion.p
      className="eyebrow"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease }}
      style={light ? { color: "var(--gold)" } : undefined}
    >
      {children}
    </motion.p>
  );
}

/* ── Section Heading with scroll reveal ───────── */
export function SectionHeading({
  eyebrow,
  title,
  copy,
  light,
  align = "center"
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <motion.h2
        className={`mt-5 headline-lg ${light ? "text-ivory" : "text-forest"}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.08, ease }}
      >
        {title}
      </motion.h2>
      {copy && (
        <motion.p
          className={`mt-4 ${light ? "body-lg-light" : "body-lg"}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          {copy}
        </motion.p>
      )}
    </div>
  );
}

/* ── CTA Link (Premium) ──────────────────────── */
export function CtaLink({
  to,
  children,
  variant = "primary"
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "gold";
}) {
  return (
    <Link to={to} className={`magnetic-btn magnetic-btn-${variant}`}>
      {children}
      <ArrowRight size={15} />
    </Link>
  );
}

/* ── Bottle Component (Enhanced) ──────────────── */
export function Bottle({
  className = "",
  small
}: {
  className?: string;
  small?: boolean;
}) {
  return (
    <motion.div
      className={`product-bottle ${small ? "!w-[9rem]" : ""} ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}

/* ── Animated Counter ─────────────────────────── */
export function AnimatedCounter({
  end,
  suffix = "",
  label,
  duration = 2
}: {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="counter-value">
        {count % 1 === 0 ? count : count.toFixed(1)}
        {suffix}
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
}

/* ── Marquee (Infinite Scroll Banner) ─────────── */
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-6">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Parallax Image ───────────────────────────── */
export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.3
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 80}px`, `${speed * 80}px`]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

/* ── Reveal Animation Wrapper ─────────────────── */
export function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className = ""
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const offsets = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 }
  };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ── Glass Card ───────────────────────────────── */
export function GlassCard({
  children,
  className = "",
  dark
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`${
        dark ? "glass-panel-dark" : "glass-panel"
      } rounded-xl p-6 ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Scroll Indicator ─────────────────────────── */
export function ScrollIndicator() {
  return (
    <div className="scroll-indicator">
      <span className="text-[0.625rem] font-semibold uppercase tracking-[0.25em]">
        Scroll
      </span>
      <ChevronDown size={14} />
      <div className="scroll-indicator-line" />
    </div>
  );
}

/* ── Divider ──────────────────────────────────── */
export function GoldDivider({ wide }: { wide?: boolean }) {
  return (
    <motion.div
      className={wide ? "divider-gold-wide" : "divider-gold mx-auto"}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
    />
  );
}
