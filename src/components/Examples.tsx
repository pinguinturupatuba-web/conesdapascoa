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

export default Examples;
