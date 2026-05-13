import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, Zap, Crown, Star } from "lucide-react";

const TOTAL_SECONDS = 15 * 60;

const essentialFeatures = [
  "Guia completo: letras, pronúncia e tradução",
  "Checklist de rotina musical",
  "Plano de 7 dias para destravar o listening",
  "Mini desafio diário de expressões",
  "Playlist secreta com hits populares",
  "Acesso vitalício + atualizações",
];

const premiumExtras = [
  "🎙️ Guia em áudio (versão podcast)",
  "🎬 Guia Inglês com Filmes Famosos",
  "📈 Trilha avançada de speaking",
  "📲 Pacote de expressões para o dia a dia",
  "💬 Grupo VIP com novas músicas toda semana",
  "⚡ Suporte prioritário por 30 dias",
  "🔄 Atualizações grátis por 1 ano",
];

const Offer = () => {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  const utm =
    "utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}";

  return (
    <section id="oferta" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-destructive/15 border border-destructive/30 rounded-xl p-3 mb-10 flex items-center justify-center gap-2">
          <Clock className="w-5 h-5 text-destructive" />
          <span className="font-display font-bold text-destructive text-lg">
            OFERTA EXPIRA EM: {mins}:{secs}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary text-center mb-2">
          🔥 Últimas ofertas — escolha agora antes que acabe
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Mais de <strong className="text-primary">4.500 alunos</strong> já garantiram. 97% recomendam imediatamente.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Plano Essencial */}
          <motion.div
            className="bg-card rounded-3xl shadow-card p-8 text-center relative overflow-hidden border-2 border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-display font-bold text-primary text-lg uppercase tracking-wide">
                Guia Essencial
              </span>
            </div>

            <div className="my-4">
              <p className="text-muted-foreground text-base line-through">De R$ 49,90</p>
              <p className="text-5xl font-display font-black text-primary">R$ 9,97</p>
              <p className="text-muted-foreground mt-1 text-sm">Pagamento único • Acesso imediato</p>
            </div>

            <ul className="text-left space-y-2 mb-8">
              {essentialFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2 text-secondary">
                  <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              className="inline-block bg-primary text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-full hover:brightness-110 transition w-full"
              href={`https://www.ggcheckout.com/checkout/v5/B1OgIv1BMtkdFVYPBNkV?${utm}`}
            >
              ESSA SERVE PRA MIM!
            </a>

            <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-xs">
              <ShieldCheck className="w-4 h-4" />
              Compra 100% segura — Acesso imediato
            </div>
          </motion.div>

          {/* Plano Premium */}
          <motion.div
            className="bg-card rounded-3xl shadow-card p-8 text-center relative overflow-hidden border-2 border-primary ring-2 ring-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-xs font-display font-bold py-1.5 uppercase tracking-wider">
              ⭐ Mais vendido — melhor custo-benefício
            </div>

            <div className="flex items-center justify-center gap-2 mb-4 mt-6">
              <Crown className="w-5 h-5 text-primary" />
              <span className="font-display font-bold text-primary text-lg uppercase tracking-wide">
                Premium + 8 Bônus
              </span>
            </div>

            <div className="my-4">
              <p className="text-muted-foreground text-base line-through">De R$ 129,70</p>
              <p className="text-5xl font-display font-black text-primary">R$ 16,97</p>
              <p className="text-muted-foreground mt-1 text-sm">Acesso completo • Todos os bônus</p>
            </div>

            <div className="bg-accent/15 rounded-xl px-4 py-2 mb-3">
              <p className="text-sm font-display font-bold text-accent">
                ✅ TUDO DO GUIA ESSENCIAL +
              </p>
            </div>

            <ul className="text-left space-y-2 mb-8">
              {premiumExtras.map((item) => (
                <li key={item} className="flex items-center gap-2 text-secondary">
                  <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              className="inline-block gradient-cta shadow-cta text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-full animate-pulse-cta hover:brightness-110 transition w-full"
              href={`https://www.ggcheckout.com/checkout/v5/gp8EL6J3RSTTK44Kdkrk?${utm}`}
            >
              🚀 QUERO A PREMIUM AGORA
            </a>

            <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-xs">
              <ShieldCheck className="w-4 h-4" />
              Compra 100% segura — Acesso imediato
            </div>
          </motion.div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          🛡️ Compra 100% segura. Ou você ama, ou devolvemos seu dinheiro.
        </p>
      </div>
    </section>
  );
};

export default Offer;
