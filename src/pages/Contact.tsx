import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Store, Truck, Clock, ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { Seo } from "../components/Seo";
import {
  PageShell,
  RevealOnScroll,
  GoldDivider,
  Eyebrow,
  GlassCard
} from "../components/ui";

type ContactForm = { name: string; phone: string; email: string; enquiry: string; message: string };

export function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactForm>();

  return (
    <PageShell>
      <Seo
        title="Contact RMS Gold | Dealer, Retail & Bulk Oil Enquiries"
        description="Contact RMS Gold by Manimaran Oil Mill for WhatsApp, phone, email, dealer enquiries, retail supply and bulk orders."
        path="/contact"
        keywords={["Oil Supplier India", "Oil Manufacturer Tamil Nadu", "Bulk orders", "Dealer Enquiry"]}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-charcoal py-40">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(201,154,53,0.4), transparent 70%)"
          }}
        />
        <div className="container-luxury relative z-10 text-center">
          <motion.div
            className="eyebrow mx-auto"
            style={{ color: "var(--gold)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get in Touch
          </motion.div>
          <motion.h1
            className="mt-6 headline-xl text-ivory"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Let's{" "}
            <em className="font-display italic text-gold">connect.</em>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-xl body-lg-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            For homes, retail shelves, restaurants, and distribution —
            we're ready to serve.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ CONTACT CARDS + FORM ═══════════ */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-5">
              {[
                { icon: Phone, title: "WhatsApp", detail: "+91 98765 43210", sub: "Available 9am — 8pm IST" },
                { icon: Mail, title: "Email", detail: "orders@rmsgold.in", sub: "We respond within 24 hours" },
                { icon: MapPin, title: "Location", detail: "Tamil Nadu, India", sub: "Manufacturing hub & HQ" },
                { icon: Store, title: "Retail Supply", detail: "Premium shelf partnerships", sub: "For modern retail & grocery" },
                { icon: Truck, title: "Bulk Orders", detail: "Food service & dealer packs", sub: "Competitive wholesale pricing" }
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 0.05}>
                  <div className="premium-card flex items-start gap-5 !rounded-2xl p-6">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/8">
                      <item.icon className="text-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium text-charcoal/70">{item.detail}</p>
                      <p className="text-xs text-charcoal/35">{item.sub}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Form */}
            <RevealOnScroll direction="right">
              <form
                onSubmit={handleSubmit(() => reset())}
                className="rounded-3xl bg-forest p-8 text-ivory shadow-deep md:p-12"
              >
                <Eyebrow light>Send an Enquiry</Eyebrow>
                <h2 className="mt-4 font-serif text-3xl text-ivory">
                  We'd love to hear from you.
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <FormField label="Name" {...register("name", { required: true })} />
                  <FormField label="Phone" type="tel" {...register("phone", { required: true })} />
                </div>

                <div className="mt-5">
                  <FormField label="Email" type="email" {...register("email")} />
                </div>

                <div className="mt-5">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ivory/60">
                      Enquiry Type
                    </span>
                    <select
                      {...register("enquiry")}
                      className="rounded-xl border border-ivory/10 bg-white/5 px-5 py-3.5 text-sm text-ivory outline-none transition focus:border-gold"
                    >
                      <option value="home">Home Order</option>
                      <option value="retail">Retail Enquiry</option>
                      <option value="dealer">Dealer Enquiry</option>
                      <option value="bulk">Bulk Order</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>

                <div className="mt-5">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ivory/60">
                      Message
                    </span>
                    <textarea
                      {...register("message", { required: true })}
                      rows={5}
                      className="rounded-xl border border-ivory/10 bg-white/5 px-5 py-3.5 text-sm text-ivory outline-none transition focus:border-gold"
                      placeholder="Tell us about your requirements..."
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="magnetic-btn magnetic-btn-gold mt-8 w-full justify-center"
                >
                  Send Enquiry
                  <ArrowUpRight size={16} />
                </button>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ MAP PLACEHOLDER ═══════════ */}
      <section className="container-luxury pb-16">
        <RevealOnScroll>
          <div className="relative h-80 overflow-hidden rounded-2xl bg-cream">
            <div className="absolute inset-0 bg-gradient-to-br from-forest/5 to-transparent" />
            <div className="grid h-full place-items-center text-center">
              <div>
                <MapPin className="mx-auto text-gold" size={32} />
                <h3 className="mt-4 font-serif text-3xl text-forest">Tamil Nadu, India</h3>
                <p className="mt-2 text-sm text-charcoal/40">
                  Manufacturing hub & corporate headquarters
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </PageShell>
  );
}

/* ── Form Field ───────────────────────────────── */
function FormField({
  label,
  type = "text",
  ...props
}: {
  label: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-ivory/60">
        {label}
      </span>
      <input
        type={type}
        className="rounded-xl border border-ivory/10 bg-white/5 px-5 py-3.5 text-sm text-ivory outline-none transition focus:border-gold"
        {...props}
      />
    </label>
  );
}
