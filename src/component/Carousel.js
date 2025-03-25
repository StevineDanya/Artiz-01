"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { src: "/d1.png", alt: "Décoration" },
  { src: "/sc1.png", alt: "Sculpture" },
  { src: "/g1.png", alt: "Cosmétique" },
  { src: "/inf1.png", alt: "Bien-etre" },
  { src: "/p1.png", alt: "Alimentation" },
  { src: "/boisson1.png", alt: "Boisson" },
  { src: "/cat.jpg", alt: "Livre" },
  { src: "/cat.jpg", alt: "Masque" },
  { src: "/cat.jpg", alt: "Décoration" },
  { src: "/cat.jpg", alt: "Accessoires" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const visibleItems = 5; // Nombre d'images visibles en même temps

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-6">
      {/* En-tête avec Titre et Bouton Voir Plus */}
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-4xl font-semibold text-gray-800">Catégories</h2>
        <button className="bg-transparent border border-yellow-400 text-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">
          Voir plus
        </button>
      </div>

      {/* Conteneur du Carrousel */}
      <div className="relative flex items-center space-x-4 overflow-hidden px-8">
        {/* Bouton Gauche */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-10 bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600 transition"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Animation du carrousel */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex space-x-4"
            initial={{ x: 0 }}
            animate={{ x: `-${index * (100 / visibleItems)}%` }} // Animation glissante
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {categories.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-1/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={100}
                  height={70}
                  className="rounded-lg shadow-md transition-transform transform hover:scale-105"
                />
                <p className="text-center text-gray-700 text-sm mt-2">{item.alt}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bouton Droit */}
        <button
          onClick={nextSlide}
          className="absolute right-2 z-10 bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600 transition"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}
