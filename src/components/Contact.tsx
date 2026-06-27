import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const socials = [
  { label: "Instagram", href: "#instagram" },
  { label: "Telegram", href: "#telegram" },
  { label: "Pinterest", href: "#pinterest" },
];

export default function Contact() {
  return (
    <footer id="contact" className="bg-vestex-950 px-6 lg:px-16 pt-28 pb-10">
      <div className="max-w-5xl">
        <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-8">
          Свяжитесь с нами
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-12"
        >
          Запишитесь на приватный
          <br />
          показ коллекции
        </motion.h2>

        <a
          href="mailto:atelier@vestex.studio"
          className="group inline-flex items-center gap-3 text-white text-lg md:text-2xl tracking-wide border-b border-white/20 hover:border-white pb-2 transition-colors"
        >
          atelier@vestex.studio
          <Icon
            name="ArrowUpRight"
            size={24}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mt-28">
        <div className="flex gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-[0.2em]"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="text-white/30 text-xs tracking-wide">
          © {new Date().getFullYear()} VESTEX — Engineered Elegance
        </p>
      </div>

      <h1 className="font-display text-white/95 text-[22vw] leading-[0.8] font-bold tracking-tight mt-16 select-none">
        VESTEX
      </h1>
    </footer>
  );
}
