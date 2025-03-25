import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TextAnimation() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  const texts = [
    "L'histoire prend vie",
    "Les récits oubliés",
    "Un voyage à travers le temps",
    "Découvrez nos archives",
    "Patrimoine et mémoire",
    "Les voix du passé",
    "Explorer, comprendre, transmettre",
    "Un héritage à préserver",
    "Témoins du temps",
    "Écho des ancêtres",
    "Racines profondes",
    "L'Afrique en mémoire",
    "L'histoire prend vie",
    "Les récits oubliés",
    "Un voyage à travers le temps",
    "Découvrez nos archives",
    "Patrimoine et mémoire",
    "Les voix du passé",
    "Explorer, comprendre, transmettre",
    "Un héritage à préserver",
    "Témoins du temps",
    "Écho des ancêtres",
    "Racines profondes",
    "L'Afrique en mémoire",
  ];

  if (!windowDimensions.width || !windowDimensions.height) {
    return null; // Ne rien rendre avant d'avoir les dimensions de la fenêtre
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🌍 Image de fond assombrie */}
      <img
        src="/gabon.gif"
        alt="Carte du Gabon"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      
      {/* Filtre sombre pour encore plus de contraste */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 📜 Affichage des textes animés */}
      {texts.map((text, index) => (
        <motion.p
          key={index}
          className="absolute text-white text-2xl font-bold"
          initial={{
            opacity: 0,
            x: Math.random() * windowDimensions.width, // Position X aléatoire
            y: Math.random() * windowDimensions.height, // Position Y aléatoire
          }}
          animate={{
            opacity: [0, 1, 1, 0], // Apparition -> Stable -> Disparition
            x: Math.random() * windowDimensions.width, // Nouvelle position X
            y: Math.random() * windowDimensions.height, // Nouvelle position Y
          }}
          transition={{
            duration: Math.random() * 10 + 5, // Durée aléatoire entre 5s et 10s
            repeat: Infinity, // Animation infinie
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
}
