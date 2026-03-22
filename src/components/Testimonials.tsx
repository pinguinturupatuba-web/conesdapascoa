import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Users } from "lucide-react";
import photo1 from "@/assets/testimonial-1.png";
import photo2 from "@/assets/testimonial-2.png";
import photo3 from "@/assets/testimonial-3.png";
import cri1 from "@/assets/cri1.png";
import cri2 from "@/assets/cri2.png";
import cri3 from "@/assets/cri3.png";

const conversationCards = [
  { id: 0, image: cri1, alt: "Conversa com ju.rodrigues sobre moldes de Páscoa" },
  { id: 1, image: cri2, alt: "Conversa com Fernanda sobre cones de Páscoa" },
  { id: 2, image: cri3, alt: "Conversa no Grupo Moldes Páscoa" },
];

const textTestimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Fiz minhas primeiras vendas em 2 dias! Nunca pensei que seria tão fácil. Os moldes são lindos e o passo a passo é super claro. Já recuperei o investimento e estou lucrando!",
    stars: 5,
    photo: photo1,
  },
  {
    name: "Ana Oliveira",
    location: "Belo Horizonte, MG",
    text: "Recuperei o investimento muito rápido! Comecei vendendo para amigas e vizinhas, e em uma semana já tinha encomendas de mais de 100 cones. Material incrível!",
    stars: 5,
    photo: photo2,
  },
  {
    name: "Patrícia Santos",
    location: "Curitiba, PR",
    text: "Muito fácil de fazer, amei! Sou completamente iniciante e consegui montar cones perfeitos logo na primeira tentativa. As aulas explicam tudinho. Super recomendo!",
    stars: 5,
    photo: photo3,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [dragStartX, setDragStartX] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + conversationCards.length) % conversationCards.length);
  }, []);

  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number } }) => {
      if (info.offset.x < -50) goTo(activeIndex + 1);
      else if (info.offset.x > 50) goTo(activeIndex - 1);
    },
    [activeIndex, goTo]
  );

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalized =
      ((diff + conversationCards.length) % conversationCards.length) -
      (diff > 1 ? conversationCards.length : diff < -1 ? -conversationCards.length : 0);
    const actualDiff =
      normalized > 1 ? normalized - conversationCards.length : normalized < -1 ? normalized + conversationCards.length : normalized;

    if (actualDiff === 0) {
      return {
        x: "0%",
        scale: 1.05,
        rotateY: 0,
        zIndex: 30,
        opacity: 1,
        filter: "blur(0px)",
      };
    }
    if (actualDiff === 1 || actualDiff === -(conversationCards.length - 1)) {
      return {
        x: "60%",
        scale: 0.85,
        rotateY: -15,
        zIndex: 20,
        opacity: 0.6,
        filter: "blur(2px)",
      };
    }
    return {
      x: "-60%",
      scale: 0.85,
      rotateY: 15,
      zIndex: 20,
      opacity: 0.6,
      filter: "blur(2px)",
    };
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Resultados Reais de Quem Já Comprou
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Veja as conversas reais de clientes que já estão lucrando:
        </motion.p>

        {/* 3D Carousel */}
        <div
          className="relative mx-auto mb-16 max-w-lg"
          style={{ perspective: "1000px" }}
        >
          <div className="relative h-[500px] md:h-[550px] flex items-center justify-center">
            {conversationCards.map((card, index) => {
              const style = getCardStyle(index);
              return (
                <motion.div
                  key={card.id}
                  className="absolute w-[260px] md:w-[300px] cursor-grab active:cursor-grabbing"
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    rotateY: style.rotateY,
                    zIndex: style.zIndex,
                    opacity: style.opacity,
                    filter: style.filter,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={handleDragEnd}
                  onClick={() => goTo(index)}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-card border border-border bg-card">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => goTo(activeIndex - 1)}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border shadow-card flex items-center justify-center text-secondary hover:bg-card transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => goTo(activeIndex + 1)}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border shadow-card flex items-center justify-center text-secondary hover:bg-card transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {conversationCards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeIndex
                    ? "bg-primary scale-125"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Badge */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-5 py-2.5">
            <Users className="w-5 h-5 text-accent" />
            <span className="text-sm md:text-base font-semibold text-secondary">
              +4.380 pessoas já começaram do zero e estão vendendo
            </span>
          </div>
        </motion.div>

        {/* Text Testimonials */}
        <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary text-center mb-8">
          O Que Nossos Clientes Dizem
        </h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {textTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-secondary text-base mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display font-bold text-secondary text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-sm">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
