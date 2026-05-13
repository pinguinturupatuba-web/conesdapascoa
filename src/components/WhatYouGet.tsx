import { motion } from "framer-motion";
import { Brain, Clock, Mic, Frown, Rocket, Music } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Quem já travou tentando aprender",
    desc: "Fez curso, estudou regras e mesmo assim não consegue formar uma frase. Aqui o inglês flui de forma natural.",
  },
  {
    icon: Music,
    title: "Quem aprende melhor ouvindo",
    desc: "Se você decora refrão de música em dois dias, esse método foi feito pra você. Ouviu, entendeu, aprendeu.",
  },
  {
    icon: Clock,
    title: "Quem tem rotina apertada",
    desc: "Estude no carro, na academia ou no fone enquanto trabalha. Sem aulas longas, sem horário fixo.",
  },
  {
    icon: Mic,
    title: "Quem trava na hora de falar",
    desc: "Foco em vocabulário real e pronúncia repetida — você ganha confiança sem nem perceber.",
  },
  {
    icon: Frown,
    title: "Quem odeia inglês tradicional",
    desc: "Nada de gramática solta nem decoreba. O inglês passa a fazer sentido porque você ouve em contexto.",
  },
  {
    icon: Rocket,
    title: "Quem quer resultado rápido",
    desc: "Aprendizado ativo desde o primeiro dia. Em poucas músicas você já começa a sentir a diferença.",
  },
];

const WhatYouGet = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
        Para quem é o <span className="text-primary">Guia Inglês com Música</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Um método pensado pra quem quer falar de verdade — destravar a pronúncia e
        aprender com prazer usando algo que você já ama.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className="bg-background rounded-2xl p-6 shadow-card flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-secondary mb-1">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouGet;
