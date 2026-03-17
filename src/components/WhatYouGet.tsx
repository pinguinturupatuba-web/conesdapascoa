import { motion } from "framer-motion";
import { FileText, Printer, PlayCircle, TrendingUp } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "500 Moldes Exclusivos",
    desc: "Moldes prontos de cones de Páscoa em alta qualidade, com designs variados e encantadores.",
  },
  {
    icon: Printer,
    title: "Arquivos Digitais Fáceis de Usar",
    desc: "Formatos prontos para imprimir em qualquer impressora comum. É só baixar, imprimir e montar!",
  },
  {
    icon: PlayCircle,
    title: "Aulas Passo a Passo",
    desc: "Vídeo-aulas detalhadas ensinando como montar, decorar e finalizar cada cone perfeitamente.",
  },
  {
    icon: TrendingUp,
    title: "Dicas de Venda Comprovadas",
    desc: "Estratégias testadas para você vender rápido e ter lucro máximo nesta Páscoa.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const WhatYouGet = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
        O Que Você Vai Receber
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Tudo o que você precisa para começar a lucrar com cones de Páscoa — mesmo
        que nunca tenha feito artesanato antes.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className="bg-background rounded-2xl p-6 shadow-card flex gap-4"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-secondary mb-1">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-base">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouGet;
