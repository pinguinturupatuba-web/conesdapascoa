import { useEffect, useState, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Gift, AlertTriangle, Clock, Zap, ChevronRight } from "lucide-react";

type Stage = "idle" | "exit" | "upsell" | "downsell" | "closed";

const ExitIntentPopup = () => {
  const [stage, setStage] = useState<Stage>("idle");

  const handleExitIntent = useCallback((e: MouseEvent) => {
    if (e.clientY <= 5 && stage === "idle") {
      setStage("exit");
      // Only trigger once
      document.removeEventListener("mouseout", handleExitIntent);
    }
  }, [stage]);

  useEffect(() => {
    // Delay registering to avoid firing on page load
    const timeout = setTimeout(() => {
      document.addEventListener("mouseout", handleExitIntent);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseout", handleExitIntent);
    };
  }, [handleExitIntent]);

  // Mobile: trigger after 45s of inactivity or scroll-up pattern
  useEffect(() => {
    if (stage !== "idle") return;

    let inactivityTimer: ReturnType<typeof setTimeout>;
    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setStage("exit");
      }, 45000);
    };

    window.addEventListener("scroll", resetTimer);
    window.addEventListener("touchstart", resetTimer);
    resetTimer();

    return () => {
      clearTimeout(inactivityTimer);
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
    };
  }, [stage]);

  const scrollToOffer = () => {
    setStage("closed");
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  const goToUpsell = () => setStage("upsell");
  const goToDownsell = () => setStage("downsell");
  const close = () => setStage("closed");

  const isOpen = stage === "exit" || stage === "upsell" || stage === "downsell";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="max-w-md p-0 border-0 overflow-hidden rounded-2xl gap-0 bg-card">
        {/* ── EXIT POPUP ── */}
        {stage === "exit" && (
          <div className="relative">
            {/* Top urgency bar */}
            <div className="bg-destructive text-destructive-foreground text-center py-2 px-4 text-sm font-bold font-display flex items-center justify-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              ESPERA! NÃO SAIA AINDA!
              <AlertTriangle className="w-4 h-4" />
            </div>

            <div className="p-6 text-center space-y-4">
              <DialogTitle className="text-2xl md:text-3xl font-display font-black text-foreground leading-tight">
                Você está prestes a perder a chance de{" "}
                <span className="text-primary">lucrar na Páscoa!</span>
              </DialogTitle>

              <p className="text-muted-foreground text-base">
                Milhares de pessoas já estão lucrando com cones personalizados.{" "}
                <strong className="text-foreground">Você vai ficar de fora?</strong>
              </p>

              <div className="bg-muted rounded-xl p-4 space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Clock className="w-4 h-4 text-destructive" />
                  Essa oferta pode sair do ar a qualquer momento
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Zap className="w-4 h-4 text-primary" />
                  500+ moldes prontos por apenas R$ 10,00
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Gift className="w-4 h-4 text-accent" />
                  Bônus exclusivos inclusos GRÁTIS
                </div>
              </div>

              <button
                onClick={scrollToOffer}
                className="w-full gradient-cta shadow-cta text-primary-foreground font-display font-bold text-lg py-4 rounded-full animate-pulse-cta flex items-center justify-center gap-2"
              >
                🎯 QUERO COMEÇAR A LUCRAR AGORA
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={goToUpsell}
                className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
              >
                Quero ver uma oferta ainda melhor →
              </button>
            </div>
          </div>
        )}

        {/* ── UPSELL ── */}
        {stage === "upsell" && (
          <div className="relative">
            <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm font-bold font-display flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              OFERTA ESPECIAL — SÓ AGORA!
              <Zap className="w-4 h-4" />
            </div>

            <div className="p-6 text-center space-y-4">
              <DialogTitle className="text-2xl md:text-3xl font-display font-black text-foreground leading-tight">
                Que tal <span className="text-primary">DOBRAR seus lucros</span> com o Kit Premium?
              </DialogTitle>

              <p className="text-muted-foreground text-base">
                Você ia sair com 500 moldes… mas e se levasse{" "}
                <strong className="text-foreground">mais de 1.000 moldes + estratégias de venda + suporte?</strong>
              </p>

              <div className="bg-muted rounded-xl p-4 space-y-2 text-left text-sm">
                <p className="font-bold text-foreground mb-2">✅ Tudo do Plano Essencial +</p>
                {[
                  "🎯 1.000+ moldes exclusivos prontos pra imprimir",
                  "🎁 Moldes temáticos pro ano inteiro",
                  "📈 Estratégias prontas de vendas (Instagram, WhatsApp)",
                  "📲 Artes prontas para postar",
                  "💰 Planilha de controle de lucros",
                  "⚡ Suporte prioritário por 30 dias",
                  "🔄 Atualizações grátis por 1 ano",
                ].map((item) => (
                  <p key={item} className="text-foreground">{item}</p>
                ))}
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground line-through">De R$ 97,00</p>
                <p className="text-3xl font-display font-black text-primary">
                  R$ 27,90
                </p>
                <p className="text-xs text-muted-foreground">Pagamento único · Acesso imediato</p>
              </div>

              <button
                onClick={scrollToOffer}
                className="w-full gradient-cta shadow-cta text-primary-foreground font-display font-bold text-lg py-4 rounded-full animate-pulse-cta flex items-center justify-center gap-2"
              >
                🚀 QUERO O KIT PREMIUM AGORA
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={goToDownsell}
                className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
              >
                Tá caro pra mim, tem algo mais barato?
              </button>
            </div>
          </div>
        )}

        {/* ── DOWNSELL ── */}
        {stage === "downsell" && (
          <div className="relative">
            <div className="bg-secondary text-secondary-foreground text-center py-2 px-4 text-sm font-bold font-display flex items-center justify-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              ÚLTIMA CHANCE — PREÇO MÍNIMO!
              <AlertTriangle className="w-4 h-4" />
            </div>

            <div className="p-6 text-center space-y-4">
              <DialogTitle className="text-2xl md:text-3xl font-display font-black text-foreground leading-tight">
                Olha, vou ser sincero com você…
              </DialogTitle>

              <p className="text-muted-foreground text-base leading-relaxed">
                Se você não consegue investir <strong className="text-foreground">R$ 10 pra mudar de vida</strong>,
                talvez você nunca comece. Pensa comigo: um único cone personalizado já se paga.{" "}
                <strong className="text-primary">Imagina 500 moldes prontos nas suas mãos?</strong>
              </p>

              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 text-left space-y-2">
                <p className="font-bold text-destructive text-sm">⚠️ O que você PERDE saindo agora:</p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>❌ 500+ moldes prontos pra imprimir</li>
                  <li>❌ 6 bônus exclusivos (valor real: R$ 200+)</li>
                  <li>❌ A chance de faturar já nessa Páscoa</li>
                  <li>❌ Esse preço NUNCA mais será tão baixo</li>
                </ul>
              </div>

              <div className="space-y-1">
                <p className="text-4xl font-display font-black text-primary">
                  R$ 10,00
                </p>
                <p className="text-sm text-muted-foreground font-semibold">
                  Menos que um lanche no shopping 🍔
                </p>
              </div>

              <button
                onClick={scrollToOffer}
                className="w-full gradient-cta shadow-cta text-primary-foreground font-display font-bold text-lg py-4 rounded-full animate-pulse-cta flex items-center justify-center gap-2"
              >
                😤 TÁ BOM, EU QUERO POR R$ 10!
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={close}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Não, prefiro continuar sem ganhar dinheiro
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
