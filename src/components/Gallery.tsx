import { motion } from "framer-motion";
import { Camera, ImagePlus } from "lucide-react";
import { PHOTOS } from "../data/content";
import Reveal, { Eyebrow } from "./Reveal";

const rotations = [-2.5, 1.8, -1.2, 2.4, -2, 1.4];

export default function Gallery() {
  return (
    <section id="moments" className="relative px-6 py-28 sm:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[24rem] w-[24rem] rounded-full bg-roselight/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[24rem] w-[24rem] rounded-full bg-gold/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>moments in frames</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-center font-display text-4xl font-medium italic text-ink sm:text-6xl">
            her smile has an
            <span className="bg-gradient-to-r from-rosedeep to-gold bg-clip-text text-transparent"> archive</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-center font-light leading-relaxed text-plum/80">
            every picture here is a memory — little fragments of time where
            everything felt perfectly complete.
          </p>
        </Reveal>



        {/* photo wall */}
        <div className="mt-16 mx-auto max-w-4xl columns-1 gap-8 sm:columns-2">
          {PHOTOS.map((photo, i) => (
            <Reveal key={i} delay={0.06 * i} y={50} className="mb-8 break-inside-avoid">
              <motion.figure
                style={{ rotate: rotations[i % rotations.length] }}
                whileHover={{ rotate: 0, scale: 1.03, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="group relative rounded-2xl border border-blushdeep/50 bg-white p-3 shadow-[0_18px_45px_-18px_rgba(179,92,116,0.35)]"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rosedeep/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-3 top-3 rounded-full bg-cream/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-rosedeep opacity-0 shadow backdrop-blur transition-all duration-500 group-hover:opacity-100">
                    <Camera className="mr-1 inline h-3 w-3" />
                    captured
                  </span>
                </div>
                <figcaption className="px-2 pb-2 pt-4 text-center">
                  <span className="block font-script text-2xl leading-snug text-rosedeep">
                    {photo.caption}
                  </span>
                  <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.35em] text-plum/50">
                    {photo.tag}
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
