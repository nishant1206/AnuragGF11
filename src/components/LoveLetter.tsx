import { AnimatePresence, motion } from "framer-motion";
import { Heart, MailOpen, Stamp } from "lucide-react";
import { useState } from "react";
import { HER_NAME, LETTER } from "../data/content";
import Reveal, { Eyebrow } from "./Reveal";

export default function LoveLetter() {
  const [open, setOpen] = useState(false);

  return (
    <section id="letter" className="relative flex flex-col items-center px-6 py-28 sm:py-36">
      <Reveal>
        <Eyebrow>read this slowly</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-center font-display text-4xl font-medium italic text-ink sm:text-6xl">
          a letter, sealed with
          <span className="bg-gradient-to-r from-rosedeep to-gold bg-clip-text text-transparent"> love</span>
        </h2>
      </Reveal>

      <div className="mt-14 flex w-full max-w-2xl justify-center">
        <AnimatePresence mode="wait">
          {!open ? (
            /* ---------------- sealed state ---------------- */
            <motion.div
              key="sealed"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.45 } }}
              className="relative w-full overflow-hidden rounded-[2rem] border border-blushdeep/70 bg-gradient-to-br from-petal via-cream to-blush p-12 text-center shadow-[0_20px_60px_-20px_rgba(179,92,116,0.3)] sm:p-16"
            >
              {/* envelope seams */}
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-rose/40 to-transparent" />
                <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-rose/40 to-transparent" />
              </div>

              <Stamp className="absolute right-6 top-6 h-9 w-9 rotate-12 text-rose/40" strokeWidth={1.5} />

              <div className="text-[11px] font-semibold uppercase tracking-[0.4em] text-plum/50">
                to {HER_NAME.toLowerCase()}, from me
              </div>

              {/* wax seal */}
              <motion.button
                onClick={() => setOpen(true)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                className="group relative mx-auto mt-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rosedeep to-rose text-cream shadow-xl shadow-rosedeep/40 outline-none ring-4 ring-blushdeep/80 ring-offset-4 ring-offset-cream transition-transform"
                aria-label="Open the letter"
              >
                <span className="absolute inset-2 rounded-full border border-cream/30" />
                <span className="font-script text-4xl leading-none">S</span>
                <span className="absolute -bottom-14 w-max text-[11px] font-semibold uppercase tracking-[0.3em] text-rosedeep transition-colors group-hover:text-plum">
                  break the seal
                </span>
              </motion.button>

              <p className="mt-20 text-sm text-plum/60">
                kind words inside — handle with care
              </p>
            </motion.div>
          ) : (
            /* ---------------- open letter ---------------- */
            <motion.div
              key="open"
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full rounded-[2rem] border border-blushdeep/70 bg-white/85 p-8 shadow-[0_30px_80px_-24px_rgba(179,92,116,0.35)] backdrop-blur sm:p-14"
            >
              <MailOpen className="absolute right-6 top-6 h-8 w-8 text-rose/40" strokeWidth={1.5} />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="font-script text-4xl text-rosedeep sm:text-5xl"
              >
                {LETTER.greeting}
              </motion.p>

              <div className="mt-8 space-y-6">
                {LETTER.body.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-lg font-light leading-relaxed text-plum sm:text-xl"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + LETTER.body.length * 0.28, duration: 0.8 }}
                className="mt-12 text-right"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-plum/50">{LETTER.signoff}</p>
                <p className="mt-2 flex items-center justify-end gap-3 font-script text-5xl text-rosedeep">
                  the one who adores you
                  <Heart className="h-6 w-6 fill-rose text-rose animate-heartbeat" strokeWidth={0} />
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
