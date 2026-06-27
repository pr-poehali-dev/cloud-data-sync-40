interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-[0.3em] font-medium">VESTEX</div>
        <nav className="flex gap-8">
          <a
            href="#collection"
            className="text-white/70 hover:text-white transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
          >
            Коллекция
          </a>
          <a
            href="#about"
            className="text-white/70 hover:text-white transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
          >
            Философия
          </a>
          <a
            href="#contact"
            className="text-white/70 hover:text-white transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}