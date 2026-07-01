import { useState, useEffect, useRef, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { navLinks } from "../data/site";
import { ScrollProgress, Marquee } from "./ui";

/* ── Layout ───────────────────────────────────── */
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-ivory text-charcoal">
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

/* ── Header ───────────────────────────────────── */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > lastY.current && y > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "glass-panel shadow-luxury" : "bg-transparent"
        }`}
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className="container-luxury flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 shrink-0"
            aria-label="RMS Gold home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-forest font-serif text-base font-bold text-gold shadow-gold-sm transition-transform duration-300 group-hover:scale-105">
              R
            </span>
            <span className="hidden sm:block">
              <span className="block font-serif text-lg leading-tight text-forest">
                RMS Gold
              </span>
              <span className="block text-[0.55rem] font-medium uppercase tracking-[0.22em] text-stone">
                Manimaran Oil Mill
              </span>
            </span>
          </Link>

          {/* Desktop Nav — evenly spaced */}
          <div className="hidden items-center gap-6 xl:gap-7 lg:flex">
            {navLinks.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                className={({ isActive }) =>
                  `relative py-1 text-[0.8125rem] font-medium transition-colors duration-300 hover:text-gold ${
                    isActive ? "text-gold" : "text-charcoal/70"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full bg-gold"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              to="/contact"
              className="magnetic-btn magnetic-btn-primary magnetic-btn-sm hidden md:inline-flex"
            >
              Enquire Now
              <ArrowUpRight size={13} />
            </Link>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-forest/10 text-forest transition-colors duration-300 hover:border-gold hover:text-gold lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mobile-nav-overlay"
          >
            <div className="flex h-16 items-center justify-between">
              <span className="font-serif text-lg text-gold">RMS Gold</span>
              <button
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/12 text-ivory transition-colors hover:text-gold"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="mt-10 flex flex-col">
              {navLinks.map(([label, href], i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                >
                  <NavLink
                    to={href}
                    onClick={() => setOpen(false)}
                    className="mobile-nav-link"
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 pb-4 pt-6 border-t border-ivory/6">
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-ivory/25 mb-1">
                Get in touch
              </p>
              <a href="tel:+919876543210" className="text-base text-gold">
                +91 98765 43210
              </a>
              <a href="mailto:orders@rmsgold.in" className="text-sm text-ivory/40">
                orders@rmsgold.in
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── WhatsApp Button ──────────────────────────── */
function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      href="https://wa.me/919876543210"
      className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-forest text-gold shadow-deep transition-transform duration-300 hover:scale-110"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      aria-label="Chat on WhatsApp"
    >
      <Phone size={20} />
    </motion.a>
  );
}

/* ── Footer ───────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Brand Marquee */}
      <div className="border-b border-ivory/6">
        <Marquee
          items={[
            "Cold Pressed",
            "Chemical Free",
            "Wood Pressed",
            "Traditional Craft",
            "Pure Aroma",
            "Family Trust",
            "Premium Quality"
          ]}
        />
      </div>

      {/* Manifesto */}
      <section className="container-luxury py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            className="font-display text-base italic leading-relaxed text-ivory/25 md:text-lg md:leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            "We believe that oils should be honest — pressed slowly from
            nature's best seeds, bottled with discipline, and served to
            families who recognize purity by its aroma. Every bottle of
            RMS Gold carries a promise: tradition without compromise."
          </motion.p>
          <motion.p
            className="mt-5 text-[0.6875rem] font-semibold uppercase tracking-[0.25em] text-gold/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            — The Manimaran Oil Mill Family
          </motion.p>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="border-t border-ivory/6">
        <div className="insta-grid">
          {[
            "/images/hero-bottle.png",
            "/images/groundnut-oil.png",
            "/images/sesame-oil.png",
            "/images/coconut-oil.png",
            "/images/oil-pour.png",
            "/images/wood-press.png"
          ].map((src, i) => (
            <div key={i} className="insta-grid-item">
              <img src={src} alt={`RMS Gold gallery ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Links */}
      <section className="container-luxury border-t border-ivory/6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/25 font-serif text-base font-bold text-gold">
                R
              </span>
              <div>
                <p className="font-serif text-xl text-gold leading-tight">RMS Gold</p>
                <p className="text-[0.55rem] uppercase tracking-[0.22em] text-ivory/25">
                  Manimaran Oil Mill
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-ivory/35">
              Premium cold pressed oils crafted for families, retailers and
              conscious kitchens that value aroma, nutrition and trust.
            </p>
            {/* Trust badges */}
            <div className="mt-5 flex gap-2">
              {["FSSAI", "ISO", "GMP"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-ivory/8 px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-widest text-ivory/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <FooterCol
            title="Explore"
            links={[
              ["Products", "/products"],
              ["Our Story", "/our-story"],
              ["Gallery", "/gallery"],
              ["Manufacturing", "/manufacturing-journey"]
            ]}
          />

          {/* Learn */}
          <FooterCol
            title="Learn"
            links={[
              ["Health & Wellness", "/health-wellness"],
              ["Journal", "/blog"],
              ["Reviews", "/reviews"],
              ["Contact", "/contact"]
            ]}
          />

          {/* Newsletter */}
          <div>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold">
              Stay Connected
            </p>
            <p className="mt-2.5 text-sm leading-6 text-ivory/30">
              Receive updates on new products, recipes and seasonal collections.
            </p>
            <label className="mt-4 flex overflow-hidden rounded-full border border-ivory/8 bg-white/[0.03]">
              <span className="sr-only">Email address</span>
              <input
                type="email"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-ivory outline-none placeholder:text-ivory/20"
                placeholder="Your email"
              />
              <button className="shrink-0 rounded-full bg-gold px-4 py-2.5 text-[0.6875rem] font-bold uppercase tracking-wider text-charcoal transition-colors hover:bg-gold-light">
                Join
              </button>
            </label>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="container-luxury border-t border-ivory/6 py-5">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[0.6875rem] text-ivory/20">
            © {new Date().getFullYear()} RMS Gold by Manimaran Oil Mill. All
            rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.6875rem] text-ivory/20 transition-colors hover:text-gold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}

/* ── Footer Column ────────────────────────────── */
function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold">
        {title}
      </p>
      <div className="mt-3.5 flex flex-col gap-2.5">
        {links.map(([label, href]) => (
          <Link
            key={href}
            className="text-sm text-ivory/35 transition-colors hover:text-gold"
            to={href}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
