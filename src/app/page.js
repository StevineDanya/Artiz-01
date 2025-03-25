"use client"; 
import Header from './../component/Header';
import Carousel from "./../component/Carousel";
import BestSellerCard from "./../component/BestSellerCard";
import { motion } from "framer-motion";
import Image from 'next/image';
import ProductGrid from "./../component/ProductGrid";
import ServiceSection from "./../component/ServiceSection";
import MissionSection from "./../component/MissionSection";
import Testimonials from "./../component/Testimonials";
import ContactForm from "./../component/ContactForm";
import Footer from "./../component/Footer";

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

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <section 
  className="relative w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/planche.png')" }} // Image de fond principale
>
  {/* Filtre sombre */}  
  <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div> 

  {/* Image en arrière-plan pour mobile & tablette uniquement */}
  <div 
    className="absolute inset-0 bg-cover bg-center md:block lg:hidden" // S'affiche en md, disparaît en lg
    style={{ backgroundImage: "url('/logos.png')" }} 
  >
    <div className="absolute inset-0 bg-black/40"></div> {/* Filtre sombre */}
  </div>

  {/* Contenu principal */}
  <div className="relative flex flex-col md:flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto px-6 md:px-12 py-6 gap-6 md:gap-8">
    
    {/* Image en avant-plan uniquement en desktop */}
    <div className="hidden lg:flex w-full lg:w-1/2">
      <img
        src="/logos.png" 
        alt="Femme Gabonaise"
        width={500}
        height={500}
        className="object-cover drop-shadow-xl"
      />
    </div>

    {/* Texte & Animation */}
    <div className="w-full lg:w-1/2 text-white text-center relative z-10">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight flex flex-col items-center text-center">
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
          className="text-black bg-white px-6 py-2 inline-block text-6xl md:text-7xl lg:text-8xl mt-2"
        >
          ARTIZ
        </motion.span>
      </h1>

      <div className="text-center flex flex-col items-center">
        <motion.p
          variants={textAnimation}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-6 text-lg md:text-3xl lg:text-2xl max-w-2xl"
        >
          L’artisanat, une histoire dans chaque pièce. Des créations qui parlent du Gabon.
        </motion.p>

        <motion.button
          variants={textAnimation}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-8 bg-black text-white px-6 md:px-10 py-3 md:py-5 rounded-lg text-lg md:text-2xl hover:bg-gray-800 transition"
        >
          Inscrivez-vous maintenant
        </motion.button>
      </div>
    </div>
  </div>
</section>

    <div className="flex flex-col items-center justify-center h-64 text-white">
     
      <Carousel />
    </div>

    <section className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
     
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-4xl font-bold mb-4">À Propos d'Artiz</h2>
          <p className="text-lg leading-relaxed">
            Artiz, bien plus qu’une plateforme : une passion pour l’artisanat gabonais.
            <br />
            Chez Artiz, nous croyons en la richesse et la beauté de l’artisanat gabonais. 
            Notre plateforme a été créée avec une mission simple mais puissante : 
            <strong> valoriser et promouvoir</strong> le savoir-faire des artisans locaux, tout en vous offrant 
            des créations uniques et authentiques.
          </p>
        </div>

        {/* Image stylisée avec effet de cadre */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="relative">
            {/* Bordure blanche en arrière-plan */}
            <div className="absolute -top-6 -left-5 w-full h-full border-4 border-white rounded-lg"></div>

     
            <Image
              src="/groupe.jpg" // Assure-toi que le chemin est correct
              alt="Photo de Artiz"
              width={500}
              height={400}
              className="rounded-lg object-cover relative z-10 shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>

    <div className="p-3 bg-stone-600">



  <div className=" gap-6 place-items-center flex justify-center">
    <BestSellerCard product={bestSellers[0]} />
   
  </div>
</div>


<main className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <ProductGrid />
      </div>
    </main>

    <div>
      
      <ServiceSection />
    </div>

    <div>
      <MissionSection />
    </div>

    
    <div>
    <Testimonials />
    </div>  

    <div className="w-full flex flex-col items-center justify-center gap-5">
  <ContactForm />
</div>

<div>
<Footer />
    </div>

    

  
    </div>
  );
}
