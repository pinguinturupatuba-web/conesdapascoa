import { motion } from "framer-motion";
import { ShieldCheck, Headphones } from "lucide-react";
import heroImg from "@/assets/hero-ingles-musica.jpg";

const scrollToOffer = () => {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/15 text-accent font-display font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-6"
          >
            <Headphones className="w-4 h-4" />
            +17.000 alunos já estão aprendendo com música
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-secondary leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Chega de <span className="text-primary">estudar inglês do jeito errado</span> — comece a falar de verdade ouvindo as músicas que você ama
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Você não nasceu sem dom para idiomas — só ninguém te mostrou o caminho certo. Com o <strong className="text-secondary">Guia Inglês com Música</strong>, cada refrão vira vocabulário, pronúncia e fluência. Sem aulas chatas, sem decoreba, sem perder tempo.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={scrollToOffer}
              className="gradient-cta shadow-cta text-primary-foreground font-display font-extrabold text-base md:text-lg px-8 py-4 rounded-full animate-pulse-cta hover:brightness-110 transition"
            >
              🎧 QUERO GARANTIR MEU ACESSO AGORA
            </button>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent" /> Acesso vitalício e suporte garantido
            </p>
          </motion.div>

          <motion.div
            className="mt-10 md:mt-14"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <img
              src={heroImg}
              alt="Guia Inglês com Música — e-book digital com fones e celular"
              width={1024}
              height={1024}
              className="rounded-2xl shadow-card w-full max-w-xl mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
