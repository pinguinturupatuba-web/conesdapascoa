import { motion } from "framer-motion";
import { Music2, Brain, Zap } from "lucide-react";

const items = [
  {
    icon: Music2,
    title: "+100 músicas guiadas",
    desc: "Tradução, pronúncia e ritmo. Você entende cada verso como um nativo entenderia.",
  },
  {
    icon: Brain,
    title: "Neuroaprendizado",
    desc: "Ouvir e cantar ativa várias áreas do cérebro ao mesmo tempo — a memória fixa muito mais rápido.",
  },
  {
    icon: Zap,
    title: "Resultados rápidos",
    desc: "Em poucas músicas você já começa a entender, falar e até pensar em inglês.",
  },
];

const Examples = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="text-center mb-10">
        <span className="inline-block text-accent font-display font-bold text-sm tracking-wider mb-3">
          🎧 OPORTUNIDADE EXCLUSIVA
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary mb-4">
          O momento ideal para garantir o seu guia
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          As condições perfeitas para transformar música em fluência — sem aula chata,
          sem enrolação e sem gastar muito.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            className="bg-card rounded-2xl p-6 shadow-card text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
              <it.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-lg text-secondary mb-2">{it.title}</h3>
            <p className="text-muted-foreground text-sm">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Examples;
