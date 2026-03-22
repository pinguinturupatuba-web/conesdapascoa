import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Zap, Crown, Star } from "lucide-react";

const TOTAL_SECONDS = 15 * 60;

const Offer = () => {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(id);
  }, []);

  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return (
    <section id="oferta" className="py-16 md:py-24">
      <div className="container">
        {/* Timer bar */}
        <div className="max-w-4xl mx-auto bg-destructive/10 rounded-xl p-3 mb-10 flex items-center justify-center gap-2">
          <Clock className="w-5 h-5 text-destructive" />
          <span className="font-display font-bold text-destructive text-lg">
            OFERTA EXPIRA EM: {mins}:{secs}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-2">
          Escolha o Plano Ideal Para Você
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Oferta Especial por Tempo Limitado
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
          {/* Plano Básico - Neutro/Cinza */}
          <motion.div
            className="rounded-3xl p-8 text-center relative overflow-hidden border-2 border-border opacity-90 bg-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-muted-foreground" />
              <span className="font-display font-bold text-lg uppercase tracking-wide text-accent">
                PACOTE BÁSICO
              </span>
            </div>

            <div className="my-4">
              <p className="text-muted-foreground text-base line-through">
                De R$ 97,00
              </p>
              <p className="text-5xl font-display font-black text-accent">
                R$ 10<span className="text-2xl">,00</span>
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                Pagamento único
              </p>
            </div>

            <ul className="text-left space-y-2 mb-8">
              {[
              "500 moldes de cones exclusivos",
              "Aulas passo a passo completas",
              "Arquivos prontos para imprimir",
              "Dicas de venda e precificação",
              "Bônus: Lista de fornecedores",
              "Garantia incondicional de 7 dias"].
              map((item) =>
              <li key={item} className="flex items-center gap-2 text-secondary">
                  <Zap className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              )}
            </ul>

            <a
              href="https://www.ggcheckout.com/checkout/v5/B1OgIv1BMtkdFVYPBNkV?utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}"
              className="inline-block text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-full transition w-full bg-accent">
              
              QUERO ESSA OFERTA
            </a>
          </motion.div>

          {/* Plano Premium - Verde Destacado */}
          <motion.div
            className="bg-card rounded-3xl shadow-card p-8 text-center relative overflow-hidden border-[3px] ring-2 ring-opacity-30"
            style={{
              borderColor: "#16a34a",
              boxShadow: "0 8px 40px -8px rgba(22, 163, 74, 0.25)"
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}>
            
            {/* Selo MAIS ESCOLHIDO */}
            <div
              className="absolute top-0 left-0 right-0 text-primary-foreground text-xs font-display font-bold py-2 uppercase tracking-wider text-center"
              style={{ backgroundColor: "#16a34a" }}>
              
              ⭐ MAIS ESCOLHIDO — MELHOR CUSTO-BENEFÍCIO
            </div>

            <div className="flex items-center justify-center gap-2 mb-4 mt-8">
              <Crown className="w-6 h-6" style={{ color: "#16a34a" }} />
              <span
                className="font-display font-bold text-lg uppercase tracking-wide"
                style={{ color: "#16a34a" }}>
                
                PACOTE AVANÇADO
              </span>
            </div>

            <div className="my-4">
              <p className="text-muted-foreground text-base line-through">
                De R$ 297,00
              </p>
              <p className="text-5xl font-display font-black" style={{ color: "#16a34a" }}>
                R$ 19<span className="text-2xl">,90</span>
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                ou 2x de R$ 9,97 sem juros
              </p>
            </div>

            {/* Tudo do básico */}
            <div
              className="rounded-xl px-4 py-2.5 mb-4"
              style={{ backgroundColor: "rgba(22, 163, 74, 0.1)" }}>
              
              <p className="text-sm font-display font-bold" style={{ color: "#16a34a" }}>
                ✅ VOCÊ RECEBE TUDO DO BÁSICO + MUITO MAIS:
              </p>
            </div>

            <ul className="text-left space-y-2 mb-5">
              {[
              "🎯 1.000+ moldes de cones exclusivos",
              "🎁 Moldes temáticos para o ano inteiro",
              "🎨 Aulas avançadas de personalização",
              "📈 Estratégias prontas de vendas",
              "📲 Artes prontas para postar",
              "💰 Planilha de controle de lucros",
              "⚡ Suporte prioritário por 30 dias",
              "🔄 Atualizações grátis por 1 ano"].
              map((item) =>
              <li key={item} className="flex items-center gap-2 text-secondary">
                  <span className="text-sm">{item}</span>
                </li>
              )}
            </ul>

            {/* Bônus */}
            <div className="bg-primary/10 rounded-xl px-4 py-2.5 mb-4">
              <p className="text-xs font-display font-bold text-primary">
                🎁 BÔNUS EXCLUSIVOS (HOJE):
              </p>
            </div>

            <ul className="text-left space-y-2 mb-5">
              {[
              "🎁 +200 frases prontas para WhatsApp",
              "🎁 Lista de fornecedores baratos",
              "🎁 Ideias de combos lucrativos",
              '🎁 Guia "primeira venda em 24h"'].
              map((item) =>
              <li key={item} className="flex items-center gap-2 text-secondary">
                  <span className="text-sm">{item}</span>
                </li>
              )}
            </ul>

            {/* Diferenciais */}
            <div
              className="rounded-xl px-4 py-2.5 mb-4"
              style={{ backgroundColor: "rgba(22, 163, 74, 0.08)" }}>
              
              <p className="text-xs font-display font-bold" style={{ color: "#16a34a" }}>
                🆕 DIFERENCIAIS:
              </p>
            </div>

            <ul className="text-left space-y-2 mb-8">
              {[
              "🎓 Certificado de conclusão profissional",
              "📊 Método validado para iniciantes",
              "🔒 Acesso imediato e vitalício",
              "💵 Possibilidade de lucro rápido nas primeiras vendas"].
              map((item) =>
              <li key={item} className="flex items-center gap-2 text-secondary">
                  <span className="text-sm">{item}</span>
                </li>
              )}
            </ul>

            <a
              href="https://www.ggcheckout.com/checkout/v5/gp8EL6J3RSTTK44Kdkrk?utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}"
              className="inline-block text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-full animate-pulse-cta hover:brightness-110 transition w-full"
              style={{ backgroundColor: "#16a34a", boxShadow: "0 8px 30px -8px rgba(22, 163, 74, 0.5)" }}>🚀 QUERO ESSA OFERTA


            </a>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default Offer;