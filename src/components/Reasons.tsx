import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { REASONS } from "../data/content";
import Reveal from "./Reveal";

export default function Reasons() {
  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        {/* sticky intro */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-rosedeep/80">
              <span className="h-px w-8 bg-rose/50" />
              count on your fingers
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-medium italic leading-tight text-ink sm:text-6xl">
              a few of the
              <span className="block bg-gradient-to-r from-rosedeep to-gold bg-clip-text text-transparent">
                million reasons
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-sm font-light leading-relaxed text-plum/80">
              I tried to write them all down once. I ran out of paper,
              then I ran out of words — so here are just eight, to start.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex items-center gap-2 font-script text-3xl text-rose">
              and counting
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="h-5 w-5 fill-rose text-rose" strokeWidth={0} />
              </motion.span>
              <span className="font-display text-3xl not-italic text-rosedeep">∞</span>
            </div>
          </Reveal>
        </div>

        {/* the list */}
        <ul className="flex flex-col">
          {REASONS.map((reason, i) => (
            <Reveal key={i} delay={0.05 * i} y={30}>
              <li className="group relative cursor-default overflow-hidden border-b border-blushdeep/70 py-7 transition-colors duration-500 first:border-t hover:border-rose/60 sm:py-9">
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blush/0 via-blush/80 to-blush/0 transition-transform duration-700 ease-out group-hover:translate-x-0"
                />
                <span className="relative flex items-baseline gap-6 transition-transform duration-500 group-hover:translate-x-4 sm:gap-10">
                  <span className="font-script text-2xl text-rose/90 sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl font-light leading-snug text-plum transition-colors duration-500 group-hover:text-rosedeep sm:text-3xl">
                    {reason}
                  </span>
                </span>
                <Heart
                  className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-rose opacity-0 transition-all duration-500 group-hover:fill-rose group-hover:opacity-100"
                  strokeWidth={1.5}
                />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
