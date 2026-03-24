import { motion } from "framer-motion";

const scrollToOffer = () => {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-8 md:py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}>
            
            <span className="inline-block bg-accent/10 text-accent font-display font-bold text-sm px-4 py-1.5 rounded-full mb-3">
              🐰 Edição Limitada — Páscoa 2026
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-secondary leading-tight mb-3">
              Lucre com Cones de Páscoa:{" "}
              <span className="text-primary">
                500 Moldes Prontos
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-5 max-w-md mx-auto md:mx-0">
              Imprima, monte e venda. Sem experiência. Comece a lucrar hoje.
            </p>

            <button
              onClick={scrollToOffer}
              className="gradient-cta shadow-cta text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-full animate-pulse-cta hover:brightness-110 transition">
              🎯 QUERO COMEÇAR A LUCRAR AGORA
            </button>

            <p className="text-xs text-muted-foreground mt-3">
              +4.380 pessoas já compraram • Acesso imediato
            </p>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            
            <img
              alt="Cones de Páscoa prontos para vender"
              className="rounded-2xl shadow-card w-full max-w-lg mx-auto"
              src="/lovable-uploads/71a25cbe-cd23-4720-8b5e-10bce025bf84.png" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;