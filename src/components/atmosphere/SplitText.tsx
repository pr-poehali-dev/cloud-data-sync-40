import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  once = true,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ y: "0.6em", opacity: 0, rotateX: -40 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              viewport={{ once, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: delay + (wi * 6 + ci) * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
