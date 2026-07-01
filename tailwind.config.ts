import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fffaf0",
        cream: "#f7f1e7",
        gold: "#c99a35",
        "gold-light": "#e8c060",
        forest: "#173f2d",
        "forest-light": "#1f5a3e",
        olive: "#687447",
        charcoal: "#171612",
        clay: "#8b5e3c",
        beige: "#e8dfd2",
        stone: "#a69882",
        "wood-brown": "#6b4226"
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "serif"],
        display: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(23, 22, 18, 0.14)",
        deep: "0 40px 120px rgba(23, 22, 18, 0.22)",
        glow: "0 0 60px rgba(201, 154, 53, 0.2)",
        "glow-strong": "0 0 100px rgba(201, 154, 53, 0.35)",
        "gold-sm": "0 4px 24px rgba(201, 154, 53, 0.2)"
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        scaleIn: "scaleIn 0.8s ease-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 30s linear infinite",
        marquee: "marquee 35s linear infinite"
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem"
      },
      backdropBlur: {
        xs: "2px",
        "2xl": "40px",
        "3xl": "64px"
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem"
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
} satisfies Config;
