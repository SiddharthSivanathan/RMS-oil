import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Story } from "./pages/Story";
import { Journey } from "./pages/Journey";
import { Wellness } from "./pages/Wellness";
import { Reviews } from "./pages/Reviews";
import { WriteReview } from "./pages/WriteReview";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogArticle } from "./pages/BlogArticle";
import { NotFound } from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/our-story" element={<Story />} />
          <Route path="/manufacturing-journey" element={<Journey />} />
          <Route path="/health-wellness" element={<Wellness />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/write-review" element={<WriteReview />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
