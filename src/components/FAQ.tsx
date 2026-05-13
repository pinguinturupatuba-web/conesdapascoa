import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "📘 O que é o Guia Inglês com Música?",
    a: "É um material digital em PDF que ensina inglês usando letras de músicas, com pronúncia simplificada e tradução lado a lado para acelerar vocabulário e listening.",
  },
  {
    q: "🧠 Para quem serve?",
    a: "Para iniciantes e intermediários que querem aprender de forma leve, prática e divertida — mesmo com rotina corrida e sem base de gramática.",
  },
  {
    q: "🎧 Preciso saber cantar ou entender de música?",
    a: "Não. As músicas são um atalho de memorização. Você acompanha as letras, repete expressões e melhora a pronúncia naturalmente.",
  },
  {
    q: "📥 Como recebo o material?",
    a: "O link de acesso é enviado para o seu e-mail imediatamente após a confirmação do pagamento. Confira também as abas de Promoções e Spam.",
  },
  {
    q: "💻 Em qual formato o material é entregue?",
    a: "Em PDF e áudio, compatível com celular, tablet e computador. Acesse de onde quiser, quando quiser.",
  },
  {
    q: "💸 O pagamento é único ou tem mensalidade?",
    a: "Pagamento único. Sem mensalidades, sem renovação automática e sem taxas escondidas.",
  },
  {
    q: "🛡️ É seguro comprar?",
    a: "Sim. O processamento é feito por plataformas de pagamento 100% seguras, com criptografia em todas as etapas.",
  },
  {
    q: "⏳ Essa oferta é por tempo limitado?",
    a: "Sim. O valor promocional pode sair do ar a qualquer momento. Garanta seu acesso hoje mesmo.",
  },
];

const FAQ = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
        ❓ Tire suas dúvidas
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Respostas rápidas para as perguntas mais comuns antes de garantir o seu acesso:
      </p>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-background rounded-xl shadow-card border-0 px-6"
            >
              <AccordionTrigger className="text-secondary font-display font-bold text-left text-base py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
