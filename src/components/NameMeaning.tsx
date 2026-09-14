import { Sparkles } from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";

export default function NameMeaning() {
  return (
    <section id="meaning" className="relative flex flex-col items-center px-6 py-28 sm:py-36">
      <Reveal>
        <Eyebrow>her name, defined</Eyebrow>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 w-full max-w-2xl">
        <div className="group relative overflow-hidden rounded-[2rem] border border-blushdeep/70 bg-white/70 p-10 text-center shadow-[0_20px_60px_-20px_rgba(179,92,116,0.25)] backdrop-blur transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_rgba(179,92,116,0.4)] sm:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-roselight/30 blur-2xl transition-transform duration-700 group-hover:scale-150" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gold/15 blur-2xl transition-transform duration-700 group-hover:scale-150" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blush text-rosedeep">
              <Sparkles className="h-5 w-5" />
            </div>

            <h3 className="font-display text-5xl font-medium italic text-rosedeep sm:text-6xl">
              sandhya
            </h3>
            <p className="mt-2 text-sm text-plum/60">
              संध्या <span className="mx-2 text-rose">·</span> /sun-dhyā/ <span className="mx-2 text-rose">·</span> noun, Sanskrit
            </p>

            <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-rose/60 to-transparent" />

            <p className="mx-auto max-w-md font-display text-xl font-light leading-relaxed text-plum sm:text-2xl">
              twilight — the golden hour when day leans into night
              and the whole sky blushes at once.
            </p>

            <p className="mt-8 font-script text-3xl leading-snug text-rosedeep/90 sm:text-4xl">
              how perfectly you are named — one look at you,
              <br className="hidden sm:block" /> and my whole sky does the same
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
