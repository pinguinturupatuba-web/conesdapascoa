import { motion } from "framer-motion";
import { Gift, ShoppingBag, Megaphone, Calculator, BookOpen, Palette } from "lucide-react";

const bonuses = [
  {
    icon: ShoppingBag,
    title: "Lista de Fornecedores Baratos",
    desc: "Economize até 60% nos materiais com nossa lista secreta de fornecedores com os melhores preços do Brasil.",
    value: "R$ 47,00",
  },
  {
    icon: Megaphone,
    title: "Estratégias para Vender Todos os Dias",
    desc: "Aprenda técnicas comprovadas de vendas para não depender só da Páscoa — venda o ano inteiro!",
    value: "R$ 67,00",
  },
  {
    icon: Gift,
    title: "Modelos Prontos de Divulgação",
    desc: "Artes profissionais para Instagram, WhatsApp e Facebook prontas para usar. É só postar e vender!",
    value: "R$ 37,00",
  },
  {
    icon: Calculator,
    title: "Planilha de Precificação e Lucros",
    desc: "Calcule exatamente quanto cobrar e quanto vai lucrar em cada cone. Nunca mais venda no prejuízo!",
    value: "R$ 29,00",
  },
  {
    icon: BookOpen,
    title: "E-book: Como Montar Seu Negócio em Casa",
    desc: "Guia completo para começar do zero, organizar sua produção e escalar suas vendas sem sair de casa.",
    value: "R$ 57,00",
  },
  {
    icon: Palette,
    title: "Pack de Etiquetas e Embalagens",
    desc: "Modelos exclusivos de etiquetas, tags e embalagens para deixar seus cones com visual profissional.",
    value: "R$ 39,00",
  },
  {
    icon: Video,
    title: "Aulas de Fotografia para Produtos",
    desc: "Aprenda a tirar fotos incríveis dos seus cones usando apenas o celular e venda muito mais!",
    value: "R$ 47,00",
  },
];

const Bonuses = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
        🎁 Bônus Exclusivos{" "}
        <span className="text-primary">100% GRÁTIS</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Além dos 500 moldes e das aulas, você ainda vai receber esses bônus
        incríveis para acelerar seus resultados:
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {bonuses.map((b, i) => (
          <motion.div
            key={b.title}
            className="bg-background rounded-2xl p-6 shadow-card text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-xl">
              GRÁTIS
            </div>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-lg text-secondary mb-2">
              {b.title}
            </h3>
            <p className="text-muted-foreground text-base mb-3">{b.desc}</p>
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
