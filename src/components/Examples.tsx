import img1 from "@/assets/example-1.png";

const Examples = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
          Veja Exemplos do Material
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          São mais de 500 designs únicos — confira a qualidade e a variedade dos
          nossos moldes:
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-card bg-muted">
            <img
              src={img1}
              alt="Cones temáticos variados"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Examples = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
          Veja Exemplos do Material
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          São mais de 500 designs únicos — confira a qualidade e a variedade dos
          nossos moldes:
        </p>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-card aspect-[4/3] bg-muted">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
              />
            </AnimatePresence>
          </div>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur shadow-card flex items-center justify-center hover:bg-card transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-secondary" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur shadow-card flex items-center justify-center hover:bg-card transition"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-secondary" />
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
