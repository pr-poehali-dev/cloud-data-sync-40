import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Fog from "@/components/atmosphere/Fog";
import Particles from "@/components/atmosphere/Particles";
import SplitText from "@/components/atmosphere/SplitText";

export default function Landscape() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={ref}
      className="relative h-[120vh] overflow-hidden bg-vestex-950 flex items-center justify-center"
    >
      <motion.div style={{ y: bgY, scale }} className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/402b0c87-66ca-4ece-b085-05487bcec252/files/b6ce076c-f485-4a01-824c-f382ec805787.jpg"
          alt="VESTEX — gothic foggy forest"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-vestex-950/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-vestex-950 via-transparent to-vestex-950" />
      </motion.div>

      <Fog className="z-[1]" />
      <Particles density={90} className="z-[2]" />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <p className="text-white/40 text-xs uppercase tracking-[0.4em] mb-8">
          Между светом и тенью
        </p>
        <h2 className="font-gothic text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-wide">
          <SplitText text="Рождённые во мгле" />
          <br />
          <SplitText text="созданные на века" delay={0.3} />
        </h2>
        <p className="mt-10 text-white/60 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
          Каждое изделие VESTEX несёт в себе тишину туманных лесов
          и строгость древних гор. Красота, рождённая из тьмы.
        </p>
      </motion.div>
    </section>
  );
}
