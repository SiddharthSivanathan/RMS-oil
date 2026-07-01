import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background glow */}
          <motion.div
            className="absolute h-[300px] w-[300px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(201,154,53,0.12) 0%, transparent 70%)"
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Logo */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Monogram */}
            <motion.div
              className="grid h-20 w-20 place-items-center rounded-full border border-gold/30"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="font-serif text-3xl font-bold"
                style={{ color: "var(--gold)" }}
              >
                R
              </span>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1
                className="font-serif text-4xl font-semibold tracking-wide md:text-5xl"
                style={{ color: "var(--gold)" }}
              >
                RMS Gold
              </h1>
              <p
                className="text-xs font-medium uppercase tracking-[0.4em]"
                style={{ color: "rgba(255,250,240,0.35)" }}
              >
                Manimaran Oil Mill
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-4 h-[1px] overflow-hidden rounded-full"
              style={{ width: 100, background: "rgba(201,154,53,0.15)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--gold)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.p
            className="absolute bottom-10 text-center text-xs tracking-[0.3em]"
            style={{ color: "rgba(255,250,240,0.2)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            CRAFTED BY TRADITION
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
