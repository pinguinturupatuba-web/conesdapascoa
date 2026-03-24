import { useEffect, useState } from "react";

const scrollToOffer = () => {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
};

const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-card/90 backdrop-blur border-t border-border md:hidden">
      <button
        onClick={scrollToOffer}
        className="w-full gradient-cta shadow-cta text-primary-foreground font-display font-bold text-base py-3 rounded-full"
      >
        🎯 QUERO LUCRAR COM CONES AGORA
      </button>
    </div>
  );
};

export default StickyCTA;
