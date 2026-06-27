import { motion } from "framer-motion";

interface BranchProps {
  className?: string;
  flip?: boolean;
}

export default function Branch({ className = "", flip = false }: BranchProps) {
  return (
    <motion.svg
      viewBox="0 0 200 400"
      fill="none"
      className={`pointer-events-none absolute ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.path
        d="M100 400 C100 320 90 280 70 240 C50 200 60 160 90 120 C110 92 100 50 100 0"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1 },
        }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
      />
      {[
        "M70 240 C50 230 36 232 22 222",
        "M90 120 C112 110 126 112 140 100",
        "M78 190 C60 184 48 186 36 178",
        "M96 70 C116 62 128 64 142 54",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.8"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1 },
          }}
          transition={{ duration: 1.6, delay: 0.6 + i * 0.25, ease: "easeInOut" }}
        />
      ))}
    </motion.svg>
  );
}
