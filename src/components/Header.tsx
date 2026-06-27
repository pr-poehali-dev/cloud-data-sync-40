import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Коллекция", href: "#collection" },
  { label: "Философия", href: "#philosophy" },
  { label: "Манифест", href: "#manifesto" },
  { label: "Контакт", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-vestex-950/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 h-20">
        <a
          href="#top"
          className="font-display text-white text-lg tracking-[0.35em] font-bold"
        >
          VESTEX
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/60 hover:text-white transition-colors duration-300 text-xs uppercase tracking-[0.25em]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white"
          aria-label="Меню"
        >
          <Icon name={open ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden overflow-hidden bg-vestex-950/95 backdrop-blur-xl border-t border-white/5"
        >
          <div className="flex flex-col px-6 py-6 gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-[0.25em]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
