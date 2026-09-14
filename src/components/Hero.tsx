import { motion } from "framer-motion";
import { ArrowDown, Heart, Mail } from "lucide-react";
import { HER_NAME } from "../data/content";

const letters = HER_NAME.split("");

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const letterAnim = {
  hidden: { y: "110%", rotate: 8, opacity: 0 },
  show: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <header className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6">
      {/* soft drifting glows */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-16 h-[26rem] w-[26rem] rounded-full bg-roselight/40 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-28 bottom-24 h-[24rem] w-[24rem] rounded-full bg-gold/20 blur-3xl"
        animate={{ x: [0, -36, 0], y: [0, 26, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-blush/70 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* giant ghost S */}
      <span
        aria-hidden
        className="text-stroke-rose pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[38rem] italic leading-none opacity-60 md:text-[46rem]"
      >
        S
      </span>

      {/* floating mini hearts */}
      {[
        { top: "18%", left: "12%", d: 0, s: 18 },
        { top: "26%", right: "14%", d: 0.8, s: 14 },
        { bottom: "24%", left: "18%", d: 1.6, s: 12 },
        { bottom: "30%", right: "20%", d: 0.4, s: 16 },
      ].map((pos, i) => (
        <motion.span
          key={i}
          className="absolute hidden text-rose/50 md:block"
          style={{ top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom }}
          animate={{ y: [0, -14, 0], rotate: [0, 8, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: pos.d, ease: "easeInOut" }}
        >
          <Heart style={{ width: pos.s, height: pos.s }} className="fill-rose/40" strokeWidth={1} />
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.45em] text-plum/60 sm:text-[11px]"
      >
        <span className="h-px w-10 bg-rose/60" />
        something small, made for someone enormous
        <span className="h-px w-10 bg-rose/60" />
      </motion.div>

      {/* her name */}
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex select-none font-display text-[clamp(4.5rem,16vw,13rem)] font-medium italic leading-none tracking-tight"
        aria-label={HER_NAME}
      >
        {letters.map((ch, i) => (
          <span key={i} className="overflow-hidden pb-5 -mb-5">
            <motion.span
              variants={letterAnim}
              whileHover={{ y: -14, rotate: -4, transition: { type: "spring", stiffness: 300, damping: 10 } }}
              className="inline-block cursor-default bg-gradient-to-br from-rosedeep via-rose to-gold bg-clip-text text-transparent"
            >
              {ch}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative -mt-2 font-script text-4xl text-plum/90 sm:text-5xl"
      >
        my favourite hello, my hardest goodbye
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-12 flex flex-col items-center gap-4 sm:flex-row"
      >
        <motion.button
          onClick={() => scrollTo("letter")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          className="group flex items-center gap-3 rounded-full bg-rosedeep px-8 py-4 text-sm font-semibold tracking-wide text-cream shadow-lg shadow-rose/40 transition-colors hover:bg-plum"
        >
          <Mail className="h-4 w-4 transition-transform group-hover:-rotate-12" />
          open my heart
        </motion.button>
        <motion.button
          onClick={() => scrollTo("moments")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          className="flex items-center gap-3 rounded-full border border-rose/50 bg-cream/60 px-8 py-4 text-sm font-semibold tracking-wide text-rosedeep backdrop-blur transition-colors hover:border-rosedeep hover:bg-blush"
        >
          our little moments
          <Heart className="h-4 w-4 fill-rose text-rose" />
        </motion.button>
      </motion.div>

      <motion.button
        onClick={() => scrollTo("meaning")}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-plum/50 transition-colors hover:text-rosedeep"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        scroll, love
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </header>
  );
}
