import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Perfeito para iniciantes — não precisa de nenhuma experiência prévia",
  "Custo super baixo para começar: apenas papel, impressora e cola",
  "Alto potencial de lucro — cada cone pode render até R$ 15,00",
  "Demanda altíssima na Páscoa — venda rápida garantida",
  "Trabalhe de casa, no seu ritmo, sem chefe",
  "Material pronto — é só imprimir, montar e vender",
];

const Benefits = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
        Por Que Escolher Nosso Material?
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Centenas de pessoas já transformaram papel em renda extra com nossos
        moldes. Veja por que esse é o caminho mais fácil para lucrar nesta Páscoa:
      </p>
      <div className="max-w-2xl mx-auto space-y-4">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
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
