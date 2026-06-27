import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const pieces = [
  {
    name: "Monolith Coat",
    category: "Outerwear",
    price: "от 84 000 ₽",
    image:
      "https://cdn.poehali.dev/projects/402b0c87-66ca-4ece-b085-05487bcec252/files/f5893f6c-eee1-4ca2-9c1a-7eae8eb4521e.jpg",
  },
  {
    name: "Axis Blazer",
    category: "Tailoring",
    price: "от 62 000 ₽",
    image:
      "https://cdn.poehali.dev/projects/402b0c87-66ca-4ece-b085-05487bcec252/files/85e388c5-53e7-4707-971c-fa3e582b8665.jpg",
  },
  {
    name: "Drape Series",
    category: "Statement",
    price: "от 71 000 ₽",
    image:
      "https://cdn.poehali.dev/projects/402b0c87-66ca-4ece-b085-05487bcec252/files/be14c66b-29ea-4736-be43-819cb59274eb.jpg",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="bg-vestex-950 px-6 lg:px-16 py-24 lg:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-4">
            Коллекция / 01
          </p>
          <h2 className="font-display text-white text-4xl md:text-6xl font-bold tracking-tight">
            FW / ENGINEERED
          </h2>
        </div>
        <a
          href="#contact"
          className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs uppercase tracking-[0.25em]"
        >
          Вся коллекция
          <Icon
            name="ArrowRight"
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {pieces.map((piece, i) => (
          <motion.article
            key={piece.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden bg-vestex-900 aspect-[3/4]">
              <img
                src={piece.image}
                alt={piece.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vestex-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-[0.2em]">
                  Смотреть
                  <Icon name="Plus" size={14} />
                </span>
              </div>
            </div>
            <div className="flex items-start justify-between mt-5">
              <div>
                <h3 className="text-white text-base tracking-wide">{piece.name}</h3>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mt-1">
                  {piece.category}
                </p>
              </div>
              <p className="text-white/70 text-sm">{piece.price}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
