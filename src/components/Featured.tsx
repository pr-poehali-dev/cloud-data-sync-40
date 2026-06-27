export default function Featured() {
  return (
    <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 lg:px-16 py-16 lg:py-0 bg-[#0a0a0a]">
      <div className="flex-1 h-[400px] lg:h-[760px] mb-10 lg:mb-0 lg:order-2 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/402b0c87-66ca-4ece-b085-05487bcec252/files/81f84a4d-a3c7-460b-8d20-09c51f5d46e5.jpg"
          alt="VESTEX — sculptural minimalist coat"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[760px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-6 text-xs tracking-[0.3em] text-white/40">Философия бренда</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-white leading-snug font-light">
          Каждое изделие VESTEX — результат инженерной точности и минималистичной
          эстетики. Чистые линии, выверенные пропорции и материалы, созданные,
          чтобы оставаться вне времени.
        </p>
        <button className="bg-white text-black border border-white px-8 py-3 text-xs transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer w-fit uppercase tracking-[0.2em]">
          Узнать больше
        </button>
      </div>
    </div>
  );
}