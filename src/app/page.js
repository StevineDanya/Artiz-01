"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from './../component/Header';
import Carousel from "./../component/Carousel";
import BestSellerCard from "./../component/BestSellerCard";
import ProductGrid from "./../component/ProductGrid";
import ServiceSection from "./../component/ServiceSection";
import MissionSection from "./../component/MissionSection";
import Testimonials from "./../component/Testimonials";
import ContactForm from "./../component/ContactForm";
import Footer from "./../component/Footer";
import Image from 'next/image';

// Animation du texte
const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const bestSellers = [
  {
    id: 1,
    name: "Masque Gabonais",
    image: "/sav.png",
    oldPrice: 999,
    price: 899,
    discount: 10,
    reviews: 97,
  },
  {
    id: 2,
    name: "Statue en bois",
    image: "/sav.png",
    oldPrice: 1200,
    price: 950,
    discount: 20,
    reviews: 54,
  },
  {
    id: 3,
    name: "Tissu traditionnel",
    image: "/sav.png",
    oldPrice: 300,
    price: 250,
    discount: 15,
    reviews: 32,
  },
];

// Formulaire en overlay
function FormOverlay({ handleClose }) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 flex items-center justify-center z-50"
  >
    <div className="bg-transparent bg-opacity-20 backdrop-blur-sm p-6 rounded-lg w-150 h-92"> {/* Taille réduite et effet de transparence */}
      <h2 className=" font-bold text-5xl text-center">Formulaire d'inscription</h2>
      <form className="flex flex-col space-y-4 mt-4">
        <input
          type="text"
          placeholder="Nom"
          className="p-2 rounded bg-gray-400 text-black focus:outline-none"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="p-2 rounded bg-gray-400 text-black focus:outline-none"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="p-2 rounded bg-gray-400 text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gray-400 text-black p-2 rounded font-semibold hover:bg-gray-200"
        >
          Soumettre
        </button>
      </form>
      <button
        onClick={handleClose}
        className="mt-4 text-black underline block mx-auto"
      >
        Fermer
      </button>
    </div>
  </motion.div>
  
  );
}

export default function Layout({ children }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();  // Empêche la navigation par défaut
    setIsOverlayVisible(true);  // Affiche l'overlay
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);  // Ferme l'overlay
  };

  return (
    <div>
      <Header />
      <main>{children}</main>
      <section
        className="relative w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/planche.png')" }} // Image de fond principale
      >
        {/* Filtre sombre */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/20"></div>

        {/* Image de la femme en fond uniquement sur mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:hidden" 
          style={{ backgroundImage: "url('/logos.png')" }} 
        >
          <div className="absolute inset-0 bg-black/50"></div> {/* Filtre sombre */}
        </div>

        {/* Contenu principal */}
        <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 md:px-12 py-6 gap-6 md:gap-12">
          {/* Image sur grand écran */}
          <div className="hidden md:flex  w-full md:w-1/2">
            <img
              src="/logos.png"
              alt="Femme Gabonaise"
              width={700}
              height={900}
              className="object-cover drop-shadow-xl"
            />
          </div>

          {/* Texte & Animation */}
          <div className="w-full md:w-1/2 text-white text-center md:text-right relative z-10">
            <h1 className="text-7xl md:text-8xl font-bold leading-tight flex flex-col items-center text-center">
              <motion.span 
                variants={textAnimation} 
                initial="hidden" 
                animate="visible"
                className="block"
              >
                Bienvenue sur
              </motion.span>
              <motion.span
                variants={textAnimation}
                initial="hidden"
                animate="visible"
                className="text-black bg-white px-4 py-1 inline-block text-7xl mt-2"
              >
                ARTIZ
              </motion.span>
            </h1>

            <p className="mt-4 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
        Découvrez l'art et l'artisanat gabonais sous un nouveau jour. 
        Rejoignez notre communauté et explorez un patrimoine riche en histoire et en créativité.
      </p>

            <div className="text-center mt-12 flex flex-col items-center">
            <Link href="/form">
  <motion.a
    variants={textAnimation}
    initial="hidden"
    animate="visible"
    custom={4}
    className="mt-6 bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl hover:bg-gray-800 transition"
  >
    Inscrivez-vous maintenant
  </motion.a>
</Link>

            </div>
          </div>
        </div>
      </section>

      {/* Affichage du carousel */}
      <div className="flex flex-col items-center justify-center h-64 text-white">
        <Carousel />
      </div>

      {/* À propos */}
      <section className="bg-black text-white py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos d'Artiz</h2>
            <p className="text-lg leading-relaxed">
              Artiz, bien plus qu’une plateforme : une passion pour l’artisanat gabonais.
              <br />
              Chez Artiz, nous croyons en la richesse et la beauté de l’artisanat gabonais. 
              Notre plateforme a été créée avec une mission simple mais puissante : 
              <strong> valoriser et promouvoir</strong> le savoir-faire des artisans locaux, tout en vous offrant 
              des créations uniques et authentiques.
            </p>
          </div>

          <div className="md:w-1/2 relative flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-5 w-full h-full border-4 border-white rounded-lg"></div>
              <Image
                src="/groupe.jpg" 
                alt="Photo de Artiz"
                width={500}
                height={400}
                className="rounded-lg object-cover relative z-10 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meilleures Ventes */}
      <div className="p-3 bg-stone-600">
        <div className="gap-6 place-items-center flex justify-center">
          <BestSellerCard product={bestSellers[0]} />
        </div>
      </div>

      {/* Grid de produits */}
      <main className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <ProductGrid />
        </div>
      </main>

      {/* Sections supplémentaires */}
      <div><ServiceSection /></div>
      <div><MissionSection /></div>
      <div><Testimonials /></div>

      {/* Formulaire de Contact */}
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <ContactForm />
      </div>

      {/* Footer */}
      <div><Footer /></div>

      {/* Affichage de l'overlay si nécessaire */}
      {isOverlayVisible && <FormOverlay handleClose={handleCloseOverlay} />}
    </div>
  );
}
