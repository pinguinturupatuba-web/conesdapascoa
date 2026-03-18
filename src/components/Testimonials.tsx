import { motion } from "framer-motion";
import { Star } from "lucide-react";
const testimonials = [
{
  name: "Maria Silva",
  location: "São Paulo, SP",
  text: "Fiz minhas primeiras vendas em 2 dias! Nunca pensei que seria tão fácil. Os moldes são lindos e o passo a passo é super claro. Já recuperei o investimento e estou lucrando!",
  stars: 5
},
{
  name: "Ana Oliveira",
  location: "Belo Horizonte, MG",
  text: "Recuperei o investimento muito rápido! Comecei vendendo para amigas e vizinhas, e em uma semana já tinha encomendas de mais de 100 cones. Material incrível!",
  stars: 5
},
{
  name: "Patrícia Santos",
  location: "Curitiba, PR",
  text: "Muito fácil de fazer, amei! Sou completamente iniciante e consegui montar cones perfeitos logo na primeira tentativa. As aulas explicam tudinho. Super recomendo!",
  stars: 5
}];


const Testimonials = () =>
<section className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
        O Que Nossos Clientes Dizem
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Junte-se a centenas de pessoas que já estão lucrando com nossos moldes:
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) =>
      <motion.div
        key={t.name}
        className="bg-card rounded-2xl p-6 shadow-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15 }}>
        
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.stars }).map((_, j) =>
          <Star
            key={j}
            className="w-5 h-5 fill-primary text-primary" />

          )}
            </div>
            <p className="text-secondary text-base mb-4 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              

          
              <div>
                <p className="font-display font-bold text-secondary text-sm">
                  {t.name}
                </p>
                <p className="text-muted-foreground text-sm">{t.location}</p>
              </div>
            </div>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default Testimonials;