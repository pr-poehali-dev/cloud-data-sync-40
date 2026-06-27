import { motion } from "framer-motion";
import SplitText from "@/components/atmosphere/SplitText";
import VineButton from "@/components/atmosphere/VineButton";
import Fog from "@/components/atmosphere/Fog";
import Particles from "@/components/atmosphere/Particles";

const socials = [
  { label: "Instagram", href: "#instagram" },
  { label: "Telegram", href: "#telegram" },
  { label: "Pinterest", href: "#pinterest" },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative bg-vestex-950 px-6 lg:px-16 pt-28 pb-10 overflow-hidden"
    >
      <Fog />
      <Particles density={40} />

      <div className="relative z-10">
        <div className="max-w-5xl">
          <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-8">
            Свяжитесь с нами
          </p>
          <h2 className="font-display text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-12">
            <SplitText text="Запишитесь на приватный" />
            <br />
            <SplitText text="показ коллекции" delay={0.2} />
          </h2>

          <VineButton href="mailto:atelier@vestex.studio" variant="ghost">
            atelier@vestex.studio
          </VineButton>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mt-28">
          <div className="flex gap-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group relative text-white/50 hover:text-white transition-colors text-xs uppercase tracking-[0.2em]"
              >
                {s.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-400 group-hover:w-full" />
              </a>
            ))}
          </div>
          <p className="text-white/30 text-xs tracking-wide">
            © {new Date().getFullYear()} VESTEX — Engineered Elegance
          </p>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white/95 text-[22vw] leading-[0.8] font-bold tracking-tight mt-16 select-none"
        >
          VESTEX
        </motion.h1>
      </div>
    </footer>
  );
}
