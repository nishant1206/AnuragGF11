import { AnimatePresence, motion } from "framer-motion";
import { Heart, Infinity as InfinityIcon, MousePointerClick } from "lucide-react";
import { useState } from "react";
import { HER_NAME } from "../data/content";
import Reveal from "./Reveal";

export default function Finale() {
  const [taps, setTaps] = useState(0);

  return (
    <section className="relative flex flex-col items-center overflow-hidden px-6 pb-24 pt-28 text-center sm:pt-36">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-blush/60 blur-3xl" />

      <Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-rosedeep/80">
          one last thing
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-display text-4xl font-medium italic text-ink sm:text-6xl">
          tap the heart, {HER_NAME.toLowerCase()}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-plum/70">
          <MousePointerClick className="h-4 w-4 text-rosedeep" />
          every tap delivers one tiny heart straight to you
        </p>
      </Reveal>

      <motion.button
        onClick={() => setTaps((t) => t + 1)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.82, rotate: -6 }}
        className="relative mt-12 outline-none"
        aria-label="Send a heart"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1, 1.08, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-roselight via-rose to-rosedeep shadow-[0_25px_60px_-15px_rgba(179,92,116,0.6)] sm:h-44 sm:w-44"
        >
          <Heart className="h-16 w-16 fill-cream text-cream drop-shadow-lg sm:h-20 sm:w-20" strokeWidth={0} />
        </motion.div>
        <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-rose/30 [animation-duration:2.4s]" />
      </motion.button>

      <div className="mt-8 h-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={taps}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="font-script text-3xl text-rosedeep sm:text-4xl"
          >
            {taps === 0
              ? "go on, try one"
              : `${taps} little ${taps === 1 ? "heart" : "hearts"} sent to ${HER_NAME.toLowerCase()}`}
          </motion.p>
        </AnimatePresence>
      </div>

      {taps > 0 && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 max-w-md font-display text-lg font-light italic leading-relaxed text-plum sm:text-xl"
        >
          “keep tapping, keep smiling — but know this: no number of hearts on
          this little site could ever out-count how much I love you.”
        </motion.p>
      )}

      {/* footer */}
      <footer className="mt-28 flex w-full max-w-4xl flex-col items-center gap-6 border-t border-blushdeep/60 pt-10">
        <div className="flex items-center gap-3 font-script text-3xl text-rosedeep">
          made with all my love
          <Heart className="h-5 w-5 fill-rose text-rose animate-heartbeat" strokeWidth={0} />
        </div>
        <p className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-plum/50">
          <span>only for</span>
          <span className="font-display text-sm normal-case italic tracking-normal text-rosedeep">
            {HER_NAME}
          </span>
          <InfinityIcon className="h-4 w-4 text-rose" strokeWidth={1.5} />
          <span>est. the day you said yes</span>
        </p>
      </footer>
    </section>
  );
}
