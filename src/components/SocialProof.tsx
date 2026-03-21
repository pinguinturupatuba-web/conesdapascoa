import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const names = [
  "Maria", "Ana", "Patrícia", "Camila", "Juliana",
  "Fernanda", "Beatriz", "Larissa", "Carla", "Renata",
];
const cities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte",
  "Curitiba", "Salvador", "Fortaleza", "Recife", "Porto Alegre",
];

const SocialProof = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      setNotification(`${name} de ${city} acabou de garantir o kit!`);
      setVisible(true);
      setTimeout(() => setVisible(false), 3500);
    };

    const id = setInterval(show, 8000);
    const first = setTimeout(show, 4000);
    return () => {
      clearInterval(id);
      clearTimeout(first);
    };
  }, []);

  return (
    <div className="fixed top-4 left-4 z-50">
      <AnimatePresence>
        {visible && notification && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-card shadow-card rounded-xl px-4 py-3 flex items-center gap-3 text-sm max-w-xs"
          >
            <span className="text-xl">🛒</span>
            <span className="text-secondary font-medium">{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialProof;
