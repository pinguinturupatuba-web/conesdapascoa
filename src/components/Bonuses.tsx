import { motion } from "framer-motion";
import { Headphones, ListChecks, Calendar, MessageCircle, Film, Mic2 } from "lucide-react";

const bonuses = [
  {
    icon: Headphones,
    title: "Playlist Secreta com 100+ Hits",
    desc: "Seleção curada de músicas populares organizadas por nível de dificuldade — do iniciante ao avançado.",
    value: "R$ 47,00",
  },
  {
    icon: ListChecks,
    title: "Checklist de Rotina Musical",
    desc: "Um plano simples de 15 minutos por dia para você criar o hábito e ver evolução real toda semana.",
    value: "R$ 29,00",
  },
  {
    icon: Calendar,
    title: "Plano de 7 Dias para Destravar o Listening",
    desc: "Roteiro guiado de uma semana para você começar a entender música e diálogos sem precisar de tradução.",
    value: "R$ 39,00",
  },
  {
    icon: MessageCircle,
    title: "Mini Desafio Diário de Expressões",
    desc: "Uma expressão nova por dia, com áudio e exemplo de uso real — direto no seu celular.",
    value: "R$ 37,00",
  },
  {
    icon: Film,
    title: "Guia Inglês com Filmes Famosos",
    desc: "Aprenda inglês também assistindo cenas marcantes, com roteiros e expressões explicadas.",
    value: "R$ 57,00",
  },
  {
    icon: Mic2,
    title: "Guia em Áudio (Podcasts)",
    desc: "Versão em áudio do guia para você consumir enquanto dirige, treina ou caminha.",
    value: "R$ 47,00",
  },
];

const Bonuses = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
        🎁 Bônus exclusivos <span className="text-primary">100% GRÁTIS</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Além do guia completo, hoje você ainda leva esse pacote extra para acelerar
        de vez a sua fluência:
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {bonuses.map((b, i) => (
          <motion.div
            key={b.title}
            className="bg-background rounded-2xl p-6 shadow-card text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-xl">
              GRÁTIS
            </div>
            <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-lg text-secondary mb-2">
              {b.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-3">{b.desc}</p>
            <p className="text-muted-foreground text-sm line-through">
              Valor: {b.value}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Bonuses;
