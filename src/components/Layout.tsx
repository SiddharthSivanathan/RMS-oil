import { useState, useEffect, useRef, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight, Mail, MapPin, ArrowRight } from "lucide-react";
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

/* ── Social Icons (inline SVG — brand-accurate) ── */
type IconProps = { className?: string };

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" className={className} aria-hidden="true">
    <path d="M14 8.5V6.8c0-.8.2-1.2 1.4-1.2H17V2.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v1.9H8v3h2.6V22H14v-8.5h2.5l.4-3H14z" />
  </svg>
);
const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" className={className} aria-hidden="true">
    <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.3 8.5h3.28V22H3.3V8.5zM9.4 8.5h3.15v1.85h.05c.44-.83 1.5-1.7 3.1-1.7 3.3 0 3.9 2.17 3.9 5V22h-3.27v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5V22H9.4V8.5z" />
  </svg>
);
const YoutubeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22.5 7.2a2.8 2.8 0 0 0-1.97-2C18.8 4.75 12 4.75 12 4.75s-6.8 0-8.53.45a2.8 2.8 0 0 0-1.97 2A29 29 0 0 0 1.05 12a29 29 0 0 0 .45 4.8 2.8 2.8 0 0 0 1.97 2c1.73.45 8.53.45 8.53.45s6.8 0 8.53-.45a2.8 2.8 0 0 0 1.97-2 29 29 0 0 0 .45-4.8 29 29 0 0 0-.45-4.8zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" />
  </svg>
);
const WhatsappIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.16-1.35a9.9 9.9 0 0 0 4.88 1.25h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2zm0 1.67c2.2 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.84c0 4.58-3.72 8.3-8.3 8.3a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.06.8.82-2.98-.2-.31a8.2 8.2 0 0 1-1.27-4.38c0-4.58 3.72-8.3 8.3-8.3zm-2.7 4.5c-.14 0-.37.05-.56.26-.2.2-.75.73-.75 1.78s.77 2.07.88 2.21c.1.14 1.5 2.3 3.65 3.22.51.22.9.35 1.22.45.51.16.98.14 1.35.08.41-.06 1.27-.52 1.45-1.02.18-.5.18-.93.13-1.02-.05-.09-.2-.14-.41-.25-.21-.1-1.27-.63-1.46-.7-.2-.07-.34-.1-.48.11-.14.2-.55.7-.68.85-.12.14-.25.16-.46.05-.21-.1-.9-.33-1.7-1.05-.63-.56-1.06-1.26-1.18-1.47-.13-.2-.01-.32.09-.42.09-.09.2-.24.31-.36.1-.12.14-.2.2-.34.07-.14.03-.26-.02-.36-.05-.1-.47-1.16-.65-1.58-.17-.42-.35-.36-.48-.36l-.4-.01z" />
  </svg>
);

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { name: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { name: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
  { name: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
  { name: "WhatsApp", href: "https://wa.me/919876543210", Icon: WhatsappIcon }
];

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

      {/* Editorial Gallery */}
      <section className="container-luxury border-t border-ivory/6 py-14 md:py-16">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.25em] text-gold">
            The Gallery
          </p>
          <span className="h-px flex-1 bg-gradient-to-r from-gold/25 to-transparent" />
        </div>
        <motion.div
          className="footer-gallery"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            "/images/hero-bottle.png",
            "/images/groundnut-oil.png",
            "/images/sesame-oil.png",
            "/images/coconut-oil.png",
            "/images/oil-pour.png",
            "/images/wood-press.png"
          ].map((src, i) => (
            <div key={i} className="footer-gallery-item">
              <img src={src} alt={`RMS Gold gallery ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Footer Links */}
      <section className="container-luxury border-t border-ivory/6 py-16 md:py-20">
        <motion.div
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr] lg:gap-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3.5">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/30 font-serif text-2xl font-bold text-gold shadow-gold-sm">
                R
              </span>
              <div>
                <p className="font-serif text-2xl leading-tight text-gold">RMS Gold</p>
                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.28em] text-ivory/30">
                  Manimaran Oil Mill
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-7 text-ivory/40">
              Premium cold pressed oils crafted for families, retailers and
              conscious kitchens that value aroma, nutrition and trust.
            </p>
            {/* Social icons */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label={name}
                >
                  <Icon />
                </a>
              ))}
            </div>
            {/* Certification capsules */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["FSSAI", "ISO 22000", "GMP"].map((badge) => (
                <span key={badge} className="footer-badge">
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
              ["Gallery", "/gallery"]
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

          {/* Newsletter + Contact */}
          <div>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Stay Connected
            </p>
            <p className="mt-3.5 text-sm leading-7 text-ivory/40">
              Join our list for new harvests, recipes and seasonal collections —
              crafted for those who value purity.
            </p>
            <form
              className="footer-newsletter mt-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-ivory outline-none placeholder:text-ivory/25"
                placeholder="Your email address"
              />
              <button
                type="submit"
                className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gold px-5 py-3 text-[0.6875rem] font-bold uppercase tracking-wider text-charcoal transition-colors duration-300 hover:bg-gold-light"
                aria-label="Subscribe"
              >
                Join
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>
            </form>
            {/* Contact details */}
            <div className="mt-8 flex flex-col gap-4">
              <a href="tel:+919876543210" className="footer-contact">
                <span className="footer-contact-icon">
                  <Phone size={15} />
                </span>
                +91 98765 43210
              </a>
              <a href="mailto:orders@rmsgold.in" className="footer-contact">
                <span className="footer-contact-icon">
                  <Mail size={15} />
                </span>
                orders@rmsgold.in
              </a>
              <div className="footer-contact">
                <span className="footer-contact-icon">
                  <MapPin size={15} />
                </span>
                <span className="leading-relaxed">
                  Manimaran Oil Mill, Madurai,
                  <br className="hidden sm:block" /> Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom Bar */}
      <section className="container-luxury py-7">
        <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[0.6875rem] tracking-wide text-ivory/25">
            © {new Date().getFullYear()} RMS Gold by Manimaran Oil Mill. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.6875rem] tracking-wide text-ivory/30 transition-colors duration-300 hover:text-gold"
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
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold">
        {title}
      </p>
      <div className="mt-5 flex flex-col gap-3.5">
        {links.map(([label, href]) => (
          <Link key={href} className="footer-link" to={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
