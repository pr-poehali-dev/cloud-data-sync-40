import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import Fog from "@/components/atmosphere/Fog";
import Particles from "@/components/atmosphere/Particles";
import SplitText from "@/components/atmosphere/SplitText";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div
      id="top"
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-vestex-950"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/402b0c87-66ca-4ece-b085-05487bcec252/files/bc0d4445-4bae-4838-b503-c3efba2bc9a0.jpg"
          alt="VESTEX — gothic fashion editorial"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vestex-950/80 via-vestex-950/40 to-vestex-950" />
        <div className="absolute inset-0 bg-vestex-950/20" />
      </motion.div>

      <Fog className="z-[1]" />
      <Particles density={70} className="z-[2]" />

      <motion.div
        style={{ y: titleY, opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.div style={{ y: midY }}>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ delay: 0.4, duration: 1.4 }}
            className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.5em] mb-8"
          >
            Engineered Elegance
          </motion.p>

          <h1 className="font-display text-white text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-[0.08em] leading-none">
            <SplitText text="VESTEX" delay={0.5} once={false} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 text-white/70 text-sm md:text-base font-light max-w-md mx-auto tracking-wide"
          >
            Дом моды, где одежда становится инженерным искусством.
            Безупречная точность кроя и вечный дизайн.
          </motion.p>
        </motion.div>
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