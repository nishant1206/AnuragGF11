import { AnimatePresence, motion, useScroll } from "framer-motion";
import Lenis from "lenis";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

import Finale from "./components/Finale";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LoveLetter from "./components/LoveLetter";
import Marquee from "./components/Marquee";
import NameMeaning from "./components/NameMeaning";
import PetalCanvas from "./components/PetalCanvas";
import Preloader from "./components/Preloader";
import Quotes from "./components/Quotes";
import Reasons from "./components/Reasons";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Nav() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8"
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-blushdeep/70 bg-cream/70 font-script text-2xl text-rosedeep shadow-sm backdrop-blur transition-colors hover:bg-blush"
        aria-label="Back to top"
      >
        S
      </button>

      <div className="pointer-events-auto hidden items-center gap-1 rounded-full border border-blushdeep/70 bg-cream/70 p-1.5 shadow-sm backdrop-blur sm:flex">
        {[
          ["meaning", "her name"],
          ["letter", "letter"],
          ["moments", "moments"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-plum/70 transition-colors hover:bg-blush hover:text-rosedeep"
          >
            {label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}

function ScrollHeart() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 md:block">
      <div className="relative">
        <Heart className="h-8 w-8 text-blushdeep" strokeWidth={1.5} />
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ scaleY: scrollYProgress, transformOrigin: "bottom" }}
        >
          <Heart className="h-8 w-8 fill-rose text-rose" strokeWidth={1.5} />
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="grain relative min-h-svh overflow-x-hidden">
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      <PetalCanvas />
      <Nav />
      <ScrollHeart />

      <main className="relative">
        <Hero />
        <Marquee />
        <NameMeaning />
        <LoveLetter />
        <Marquee reverse />
        <Quotes />
        <Reasons />
        <Gallery />
        <Finale />
      </main>
    </div>
  );
}
