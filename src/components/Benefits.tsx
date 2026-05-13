import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Letras completas com tradução lado a lado e pronúncia simplificada",
  "Método baseado em repetição auditiva — listening melhora em poucas semanas",
  "Estrutura progressiva: do básico ao avançado, no ritmo da sua playlist",
  "Acesso vitalício com atualizações gratuitas e novas músicas",
  "Compatível com celular, tablet e computador — estude onde quiser",
  "Exercícios curtos de pronúncia e interpretação para cada faixa",
];

const Benefits = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
        Por que esse método funciona <span className="text-primary">tão rápido</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Cantar e ouvir ativam várias áreas do cérebro ao mesmo tempo — por isso
        a retenção de vocabulário aumenta drasticamente quando você aprende
        com música.
      </p>
      <div className="max-w-2xl mx-auto space-y-3">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 text-accent-foreground" />
            </div>
            <p className="text-secondary font-medium text-base">{b}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
