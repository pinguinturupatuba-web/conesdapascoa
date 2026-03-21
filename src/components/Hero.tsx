import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroCones from "@/assets/hero-cones-new.png";

const scrollToOffer = () => {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}>
            
            <span className="inline-block bg-accent/10 text-accent font-display font-bold text-sm px-4 py-1.5 rounded-full mb-4">
              🐰 Edição Limitada — Páscoa 2026
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-secondary leading-tight mb-6">
              Transforme Papel em Lucro:{" "}
              <span className="text-primary">
                Conquiste sua Renda Extra nesta Páscoa
              </span>{" "}
              com 500 Moldes de Cones
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">Receba 500 moldes prontos para imprimir + aulas passo a passo e comece a VENDER cones de Páscoa ainda hoje. Sem experiência !



            </p>

            <button
              onClick={scrollToOffer}
              className="gradient-cta shadow-cta text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-full animate-pulse-cta hover:brightness-110 transition">
              🎯 QUERO GARANTIR MEU ACESSO AGORA
            </button>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            
            <img

              alt="Cones de Páscoa lindos e coloridos prontos para vender"
              className="rounded-2xl shadow-card w-full max-w-lg mx-auto" src="/lovable-uploads/71a25cbe-cd23-4720-8b5e-10bce025bf84.png" />
            
          </motion.div>
        </div>
      </div>
    </section>);

};

export default Hero;