import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const testimonials = [
  {
    name: "Clara Ferreira",
    when: "2h",
    text: "Sempre ouvi música em inglês, mas nunca entendia nada. Com o guia, comecei a entender as letras e minha pronúncia melhorou demais! 🎶",
    likes: 128,
    initial: "C",
    color: "bg-pink-500",
  },
  {
    name: "João Pedro Martins",
    when: "4h",
    text: "Nunca imaginei que aprender inglês com música fosse tão natural. Hoje escuto minhas playlists já entendendo boa parte. 🔥",
    likes: 96,
    initial: "J",
    color: "bg-blue-500",
  },
  {
    name: "Bruno Costa",
    when: "1d",
    text: "Minha maior dificuldade sempre foi pronúncia. Cantando junto com as músicas eu destravei completamente. 💯",
    likes: 73,
    initial: "B",
    color: "bg-emerald-500",
  },
  {
    name: "Sandra Nunes",
    when: "2d",
    text: "Achei que seria só mais um PDF, mas mudou totalmente o meu jeito de estudar inglês. Muito leve e prático. 👏",
    likes: 65,
    initial: "S",
    color: "bg-amber-500",
  },
  {
    name: "Eduardo Lima",
    when: "4d",
    text: "Valeu cada centavo. Hoje aprendo inglês ouvindo música no carro, em casa e até no fone do trabalho. 👊",
    likes: 81,
    initial: "E",
    color: "bg-purple-500",
  },
];

const Testimonials = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
        O que estão falando do <span className="text-primary">Guia Inglês com Música</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Veja relatos reais de quem já está destravando o inglês ouvindo as
        músicas que ama:
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-background rounded-2xl p-5 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`${t.color} w-11 h-11 rounded-full flex items-center justify-center text-white font-display font-bold`}>
                {t.initial}
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-secondary text-sm leading-tight">
                  {t.name}
                </p>
                <p className="text-muted-foreground text-xs">{t.when} • Público</p>
              </div>
            </div>
            <p className="text-secondary text-sm mb-4 leading-relaxed">{t.text}</p>
            <div className="flex items-center gap-4 text-muted-foreground text-xs border-t border-border pt-3">
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-destructive text-destructive" />
                {t.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5" />
                Responder
              </span>
              <span className="flex items-center gap-1">
                <Share2 className="w-3.5 h-3.5" />
                Compartilhar
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
