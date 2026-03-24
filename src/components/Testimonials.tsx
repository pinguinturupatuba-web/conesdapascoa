import { motion } from "framer-motion";
import { Star } from "lucide-react";
import photo1 from "@/assets/testimonial-1.png";
import photo2 from "@/assets/testimonial-2.png";
import photo3 from "@/assets/testimonial-3.png";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Fiz minhas primeiras vendas em 2 dias! Nunca pensei que seria tão fácil.",
    highlight: "Fiz minha primeira venda em 2 dias!",
    stars: 5,
    photo: photo1,
  },
  {
    name: "Ana Oliveira",
    location: "Belo Horizonte, MG",
    text: "Comecei vendendo para amigas e em uma semana já tinha mais de 100 encomendas!",
    highlight: "Recuperei o investimento na primeira semana!",
    stars: 5,
    photo: photo2,
  },
  {
    name: "Patrícia Santos",
    location: "Curitiba, PR",
    text: "Sou completamente iniciante e consegui montar cones perfeitos na primeira tentativa!",
    highlight: "Consegui montar cones perfeitos logo de primeira!",
    stars: 5,
    photo: photo3,
  },
];

const Testimonials = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
        Veja Quem Já Está Lucrando
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        +4.380 pessoas já começaram do zero e estão vendendo:
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-card rounded-2xl p-6 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}>
            
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-primary font-display font-bold text-sm mb-2">
              "{t.highlight}"
            </p>
            <p className="text-secondary text-base mb-4 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-display font-bold text-secondary text-sm">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
