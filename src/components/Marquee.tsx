import { Heart } from "lucide-react";
import { MARQUEE_WORDS } from "../data/content";

interface MarqueeProps {
  reverse?: boolean;
}

export default function Marquee({ reverse = false }: MarqueeProps) {
  const words = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div
      className={`relative overflow-hidden border-y border-blushdeep/60 bg-petal/70 py-4 ${
        reverse ? "marquee-reverse" : ""
      }`}
    >
      <div className="marquee-track flex w-max items-center gap-8">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8" aria-hidden={half === 1}>
            {words.map((word, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-8">
                <span
                  className={
                    i % 2 === 0
                      ? "font-script text-3xl leading-none text-rosedeep"
                      : "font-display text-lg font-light italic tracking-wide text-plum/70"
                  }
                >
                  {word}
                </span>
                <Heart
                  className="h-3.5 w-3.5 shrink-0 fill-rose text-rose"
                  strokeWidth={0}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
