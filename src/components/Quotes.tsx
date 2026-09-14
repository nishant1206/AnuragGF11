import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { QUOTES } from "../data/content";
import Reveal, { Eyebrow } from "./Reveal";

export default function Quotes() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((i) => (i + dir + QUOTES.length) % QUOTES.length);
    },
    []
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/50 blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Reveal>
          <Eyebrow>things i keep whispering</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-rose shadow-lg shadow-rose/20">
            <Quote className="h-6 w-6 fill-rose/20" />
          </div>
        </Reveal>

        <div className="relative mt-8 flex min-h-[16rem] w-full items-center justify-center sm:min-h-[13rem]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: direction * -60, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 mx-auto max-w-3xl"
            >
              <p className="font-display text-2xl font-light italic leading-relaxed text-plum sm:text-4xl sm:leading-snug">
                “{QUOTES[index]}”
              </p>
              <footer className="mt-6 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-rosedeep/80">
                <span className="h-px w-8 bg-rose/50" />
                me, about you
                <span className="h-px w-8 bg-rose/50" />
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <motion.button
            onClick={() => go(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-rose/40 text-rosedeep transition-colors hover:bg-blush"
            aria-label="Previous quote"
          >
            <ChevronLeft className="h-4 w-4" />
          </motion.button>

          <div className="flex gap-2.5">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to quote ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-rosedeep" : "w-2 bg-rose/30 hover:bg-rose/60"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={() => go(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-rose/40 text-rosedeep transition-colors hover:bg-blush"
            aria-label="Next quote"
          >
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
