import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const principles = [
  {
    icon: "Ruler",
    title: "Точность",
    text: "Каждый шов выверен до миллиметра. Крой как инженерный чертёж.",
  },
  {
    icon: "Minimize2",
    title: "Минимализм",
    text: "Ничего лишнего. Только чистые линии и выверенные пропорции.",
  },
  {
    icon: "Infinity",
    title: "Вечность",
    text: "Дизайн вне трендов. Изделия, которые остаются актуальными годами.",
  },
  {
    icon: "Gem",
    title: "Материалы",
    text: "Технические ткани премиум-класса. Долговечность и тактильность.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-vestex-900 grid grid-cols-1 lg:grid-cols-2"
    >
      <div className="relative h-[60vh] lg:h-auto lg:min-h-[700px] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/402b0c87-66ca-4ece-b085-05487bcec252/files/85e388c5-53e7-4707-971c-fa3e582b8665.jpg"
          alt="VESTEX philosophy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-vestex-950/20" />
      </div>

      <div className="flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-24">
        <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-6">
          Философия
        </p>
        <h2 className="font-display text-white text-3xl md:text-5xl font-bold tracking-tight mb-14 leading-tight">
          Форма следует
          <br />
          за функцией
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Icon name={p.icon} size={22} className="text-white mb-4" />
              <h3 className="text-white text-lg mb-2 tracking-wide">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
