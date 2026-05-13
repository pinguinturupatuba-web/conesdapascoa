import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const Guarantee = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <motion.div
        className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-card rounded-3xl p-8 md:p-12 shadow-card border border-accent/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-32 h-32 flex-shrink-0 rounded-full bg-accent/15 flex items-center justify-center border-4 border-accent/40">
          <ShieldCheck className="w-16 h-16 text-accent" />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-secondary mb-3">
            Garantia incondicional de 7 dias
          </h2>
          <p className="text-muted-foreground text-base mb-4">
            Sua compra é 100% protegida. Se em até 7 dias você sentir que o guia não é
            pra você, basta enviar um e-mail e nós devolvemos{" "}
            <strong className="text-secondary">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
          </p>
          <div className="flex items-center gap-2 text-accent font-display font-bold">
            <ShieldCheck className="w-5 h-5" />
            Risco zero pra você
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Guarantee;
