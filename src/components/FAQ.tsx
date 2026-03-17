import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter experiência em artesanato?",
    a: "Não! O material foi criado especialmente para iniciantes. As aulas passo a passo ensinam tudo desde o zero, de forma simples e prática. Você vai conseguir fazer cones perfeitos mesmo que nunca tenha feito artesanato antes.",
  },
  {
    q: "Como vou receber o material?",
    a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link de acesso à área de membros. Lá você encontra todos os 500 moldes para download, as vídeo-aulas e os bônus. O acesso é vitalício!",
  },
  {
    q: "Funciona mesmo para quem é iniciante?",
    a: "Com certeza! A maioria das nossas alunas começou do absoluto zero. Os moldes já vêm prontos — você só precisa imprimir, recortar e colar. As aulas mostram cada detalhe. É impossível errar!",
  },
  {
    q: "Quanto posso lucrar vendendo os cones?",
    a: "Cada cone custa aproximadamente R$ 1,50 para fazer e pode ser vendido por R$ 10 a R$ 25, dependendo da decoração e recheio. Com 500 moldes diferentes, você tem variedade para atender todos os tipos de clientes. Muitas alunas faturam mais de R$ 3.000 só na semana da Páscoa!",
  },
  {
    q: "Tem suporte caso eu tenha dúvidas?",
    a: "Sim! Oferecemos suporte completo por e-mail e WhatsApp. Nossa equipe está pronta para te ajudar com qualquer dúvida, seja sobre os moldes, sobre montagem ou sobre estratégias de venda.",
  },
];

const FAQ = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-4">
        Perguntas Frequentes
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Tire suas dúvidas antes de garantir sua vaga:
      </p>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-xl shadow-card border-0 px-6"
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
