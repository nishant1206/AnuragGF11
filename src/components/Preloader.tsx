import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.83, 0, 0.17, 1] } }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.15 }}
      >
        <Heart className="h-10 w-10 fill-rose text-rose" strokeWidth={1} />
      </motion.div>

      <div className="mt-6 overflow-hidden">
        <motion.p
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="font-script text-5xl text-rosedeep sm:text-6xl"
        >
          for Sandhya
        </motion.p>
      </div>

      <div className="mt-4 overflow-hidden">
        <motion.p
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="px-6 text-center text-[11px] uppercase tracking-[0.35em] text-plum/60"
        >
          a tiny corner of the internet, made only for you
        </motion.p>
      </div>

      <motion.div
        className="mt-10 h-px w-40 origin-left bg-gradient-to-r from-transparent via-rose to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
      />
    </motion.div>
  );
}
