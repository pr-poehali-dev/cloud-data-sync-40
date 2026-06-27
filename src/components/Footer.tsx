export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div id="contact" className="bg-[#050505] py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-white/40 text-xs tracking-[0.2em]">Бренд</h3>
                <a
                  href="#collection"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Коллекция
                </a>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Философия
                </a>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Связаться
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-white/40 text-xs tracking-[0.2em]">Соцсети</h3>
                <a
                  href="#instagram"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Instagram
                </a>
                <a
                  href="#telegram"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Telegram
                </a>
                <a
                  href="#press"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Пресса
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-[0.02em]">
                VESTEX
              </h1>
              <p className="text-white/50 text-sm sm:text-base tracking-wide">© {new Date().getFullYear()} VESTEX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}