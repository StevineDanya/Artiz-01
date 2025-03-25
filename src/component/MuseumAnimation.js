import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MuseumAnimation() {
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    // Lancer l'explosion après un court délai
    setTimeout(() => setExplode(true), 1000);
  }, []);

  // Animation de l’image en morceaux
  const pieceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      x: [0, (i % 2 === 0 ? 100 : -100) * Math.random()],
      y: [0, (i % 2 === 0 ? -100 : 100) * Math.random()],
      rotate: [0, Math.random() * 360],
      transition: { duration: 1.5, ease: "easeOut" },
    }),
  };

  // Animation de la vague
  const waveVariants = {
    hidden: { y: "100%" },
    visible: { y: "0%", transition: { duration: 2, ease: "easeInOut" } },
  };

  // Texte animé qui apparaît progressivement
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center">
      {/* Conteneur de l'image qui se brise */}
      <div className="relative w-64 h-64">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1/3 h-1/3 bg-cover bg-center"
            style={{
              backgroundImage: "url('/cat.jpg')",
              backgroundPosition: `${(i % 3) * 33.3}% ${Math.floor(i / 3) * 33.3}%`,
              left: `${(i % 3) * 33.3}%`,
              top: `${Math.floor(i / 3) * 33.3}%`,
            }}
            custom={i}
            initial="hidden"
            animate={explode ? "visible" : "hidden"}
            variants={pieceVariants}
          />
        ))}
      </div>

      {/* Vague animée */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-48 bg-blue-500"
        initial="hidden"
        animate="visible"
        variants={waveVariants}
      />

      {/* Texte animé */}
      <motion.h1
        className="absolute bottom-20 text-white text-4xl font-bold"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        Explorez l'histoire du musée
      </motion.h1>
    </div>
  );
}
