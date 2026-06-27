import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
  "Мы создаём не одежду,",
  "а инженерные конструкции",
  "для тела. Точность.",
  "Минимализм. Вечность.",
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <section
      id="manifesto"
      ref={ref}
      className="bg-vestex-950 px-6 lg:px-16 py-32 lg:py-48"
    >
      <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-12">
        Манифест
      </p>
      <div className="max-w-5xl">
        {lines.map((line, i) => {
          const start = i / lines.length;
          const end = start + 1 / lines.length;
          return <ManifestoLine key={i} progress={scrollYProgress} range={[start, end]}>{line}</ManifestoLine>;
        })}
      </div>
    </section>
  );
}

function ManifestoLine({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.p
      style={{ opacity }}
      className="font-display text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
    >
      {children}
    </motion.p>
  );
}
