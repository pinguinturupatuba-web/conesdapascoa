import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, Zap } from "lucide-react";

const TOTAL_SECONDS = 15 * 60;

const Offer = () => {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return (
    <section id="oferta" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto bg-card rounded-3xl shadow-card p-8 md:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Timer bar */}
          <div className="bg-destructive/10 rounded-xl p-3 mb-8 flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-destructive" />
            <span className="font-display font-bold text-destructive text-lg">
              OFERTA EXPIRA EM: {mins}:{secs}
            </span>
          </div>

          <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
            Oferta Especial por Tempo Limitado
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary mt-2 mb-2">
            Leve Tudo Isso Por Apenas:
          </h2>

          <div className="my-6">
            <p className="text-muted-foreground text-lg line-through">
              De R$ 197,00
            </p>
            <p className="text-5xl md:text-6xl font-display font-black text-accent">
              R$ 27
              <span className="text-3xl">,90</span>
            </p>
            <p className="text-muted-foreground mt-1">
              ou 3x de R$ 9,97 sem juros
            </p>
          </div>

          <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
            {[
              "500 moldes de cones exclusivos",
              "Aulas passo a passo completas",
              "Bônus: Lista de fornecedores",
              "Bônus: Estratégias de vendas",
              "Bônus: Artes prontas para redes sociais",
              "Garantia incondicional de 7 dias",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-secondary">
                <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-block gradient-cta shadow-cta text-primary-foreground font-display font-bold text-xl px-10 py-5 rounded-full animate-pulse-cta hover:brightness-110 transition w-full md:w-auto"
          >
            🛒 GARANTIR MINHA VAGA AGORA
          </a>

          <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
            <ShieldCheck className="w-4 h-4" />
            Compra 100% segura — Acesso imediato
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
