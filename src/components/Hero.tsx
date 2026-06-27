import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/402b0c87-66ca-4ece-b085-05487bcec252/files/db2e669b-bcaf-403e-a3b8-e3aeaeffe502.jpg"
          alt="VESTEX — premium fashion editorial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-8 text-white/60">
          Engineered Elegance
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-[0.05em] mb-8 leading-none">
          VESTEX
        </h1>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-80 font-light tracking-wide">
          Одежда как инженерное искусство. Безупречная точность кроя,
          вечный дизайн и premium-материалы.
        </p>
      </div>
    </div>
  );
}