import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import guaranteeBadge from "@/assets/guarantee-badge.png";

const Guarantee = () =>
<section className="py-16 md:py-24 bg-card">
    <div className="container">
      <motion.div
      className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-background rounded-3xl p-8 md:p-12 shadow-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>
      
        <img

        alt="Selo de Garantia 7 dias"
        className="w-32 h-32 flex-shrink-0" src="/lovable-uploads/bc0c6dff-4cc5-48a1-9ecd-373fe8de6547.png" />
      
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-secondary mb-3">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Sua compra é 100% protegida. Se por qualquer motivo você não ficar
            satisfeito(a) com o material, basta nos enviar um e-mail em até 7
            dias que devolvemos{" "}
            <strong className="text-secondary">100% do seu dinheiro</strong>.
            Sem perguntas, sem burocracia.
          </p>
          <div className="flex items-center gap-2 text-accent font-display font-bold">
            <ShieldCheck className="w-5 h-5" />
            Risco zero para você!
          </div>
        </div>
      </motion.div>
    </div>
  </section>;


export default Guarantee;