import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Icon from "@/components/ui/icon";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div
      id="top"
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-vestex-950"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/402b0c87-66ca-4ece-b085-05487bcec252/files/be14c66b-29ea-4736-be43-819cb59274eb.jpg"
          alt="VESTEX — luxury fashion editorial"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vestex-950/60 via-vestex-950/30 to-vestex-950" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.5em] mb-8"
        >
          Engineered Elegance
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-[0.08em] leading-none"
        >
          VESTEX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-8 text-white/70 text-sm md:text-base font-light max-w-md mx-auto tracking-wide"
        >
          Дом моды, где одежда становится инженерным искусством.
          Безупречная точность кроя и вечный дизайн.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
          Скролл
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <Icon name="ChevronDown" size={18} className="text-white/40" />
        </motion.div>
      </motion.div>
    </div>
  );
}
