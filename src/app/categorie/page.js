"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../component/Header";
import Footer from "../../component/Footer";



export default function HomePage() {
  /** CARROUSEL **/
  const images = ["/sav.png", "/d1.png", "/savon.png", "/p1.png", "/2.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /** PRODUITS **/
  const products = [
    { id: 1, name: "Produit 1", image: "/prod1.jpg", oldPrice: "20 000 FCFA", discount: "-10%", price: "18 000 FCFA" },
    { id: 2, name: "Produit 2", image: "/prod2.jpg", oldPrice: "25 000 FCFA", discount: "-15%", price: "21 250 FCFA" },
    { id: 3, name: "Produit 3", image: "/prod3.jpg", oldPrice: "30 000 FCFA", discount: "-20%", price: "24 000 FCFA" },
    { id: 4, name: "Produit 4", image: "/prod4.jpg", oldPrice: "40 000 FCFA", discount: "-5%", price: "38 000 FCFA" },
    { id: 5, name: "Produit 5", image: "/prod5.jpg", oldPrice: "50 000 FCFA", discount: "-25%", price: "37 500 FCFA" },
    { id: 6, name: "Produit 6", image: "/prod6.jpg", oldPrice: "60 000 FCFA", discount: "-30%", price: "42 000 FCFA" },
    { id: 7, name: "Produit 7", image: "/prod7.jpg", oldPrice: "35 000 FCFA", discount: "-10%", price: "31 500 FCFA" },
    { id: 8, name: "Produit 8", image: "/prod8.jpg", oldPrice: "28 000 FCFA", discount: "-15%", price: "23 800 FCFA" },
    { id: 1, name: "Produit 1", image: "/prod1.jpg", oldPrice: "20 000 FCFA", discount: "-10%", price: "18 000 FCFA" },
    { id: 2, name: "Produit 2", image: "/prod2.jpg", oldPrice: "25 000 FCFA", discount: "-15%", price: "21 250 FCFA" },
    { id: 3, name: "Produit 3", image: "/prod3.jpg", oldPrice: "30 000 FCFA", discount: "-20%", price: "24 000 FCFA" },
    { id: 4, name: "Produit 4", image: "/prod4.jpg", oldPrice: "40 000 FCFA", discount: "-5%", price: "38 000 FCFA" },
    { id: 5, name: "Produit 5", image: "/prod5.jpg", oldPrice: "50 000 FCFA", discount: "-25%", price: "37 500 FCFA" },
    { id: 6, name: "Produit 6", image: "/prod6.jpg", oldPrice: "60 000 FCFA", discount: "-30%", price: "42 000 FCFA" },
    { id: 7, name: "Produit 7", image: "/prod7.jpg", oldPrice: "35 000 FCFA", discount: "-10%", price: "31 500 FCFA" },
    { id: 8, name: "Produit 8", image: "/prod8.jpg", oldPrice: "28 000 FCFA", discount: "-15%", price: "23 800 FCFA" },
    { id: 1, name: "Produit 1", image: "/prod1.jpg", oldPrice: "20 000 FCFA", discount: "-10%", price: "18 000 FCFA" },
    { id: 2, name: "Produit 2", image: "/prod2.jpg", oldPrice: "25 000 FCFA", discount: "-15%", price: "21 250 FCFA" },
    { id: 3, name: "Produit 3", image: "/prod3.jpg", oldPrice: "30 000 FCFA", discount: "-20%", price: "24 000 FCFA" },
    { id: 4, name: "Produit 4", image: "/prod4.jpg", oldPrice: "40 000 FCFA", discount: "-5%", price: "38 000 FCFA" },
    { id: 5, name: "Produit 5", image: "/prod5.jpg", oldPrice: "50 000 FCFA", discount: "-25%", price: "37 500 FCFA" },
    { id: 6, name: "Produit 6", image: "/prod6.jpg", oldPrice: "60 000 FCFA", discount: "-30%", price: "42 000 FCFA" },
    { id: 7, name: "Produit 7", image: "/prod7.jpg", oldPrice: "35 000 FCFA", discount: "-10%", price: "31 500 FCFA" },
    { id: 8, name: "Produit 8", image: "/prod8.jpg", oldPrice: "28 000 FCFA", discount: "-15%", price: "23 800 FCFA" },
    { id: 1, name: "Produit 1", image: "/prod1.jpg", oldPrice: "20 000 FCFA", discount: "-10%", price: "18 000 FCFA" },
    { id: 2, name: "Produit 2", image: "/prod2.jpg", oldPrice: "25 000 FCFA", discount: "-15%", price: "21 250 FCFA" },
    { id: 3, name: "Produit 3", image: "/prod3.jpg", oldPrice: "30 000 FCFA", discount: "-20%", price: "24 000 FCFA" },
    { id: 4, name: "Produit 4", image: "/prod4.jpg", oldPrice: "40 000 FCFA", discount: "-5%", price: "38 000 FCFA" },
    { id: 5, name: "Produit 5", image: "/prod5.jpg", oldPrice: "50 000 FCFA", discount: "-25%", price: "37 500 FCFA" },
    { id: 6, name: "Produit 6", image: "/prod6.jpg", oldPrice: "60 000 FCFA", discount: "-30%", price: "42 000 FCFA" },
    { id: 7, name: "Produit 7", image: "/prod7.jpg", oldPrice: "35 000 FCFA", discount: "-10%", price: "31 500 FCFA" },
    { id: 8, name: "Produit 8", image: "/prod8.jpg", oldPrice: "28 000 FCFA", discount: "-15%", price: "23 800 FCFA" },
    { id: 1, name: "Produit 1", image: "/prod1.jpg", oldPrice: "20 000 FCFA", discount: "-10%", price: "18 000 FCFA" },
    { id: 2, name: "Produit 2", image: "/prod2.jpg", oldPrice: "25 000 FCFA", discount: "-15%", price: "21 250 FCFA" },
    { id: 3, name: "Produit 3", image: "/prod3.jpg", oldPrice: "30 000 FCFA", discount: "-20%", price: "24 000 FCFA" },
    { id: 4, name: "Produit 4", image: "/prod4.jpg", oldPrice: "40 000 FCFA", discount: "-5%", price: "38 000 FCFA" },
    { id: 5, name: "Produit 5", image: "/prod5.jpg", oldPrice: "50 000 FCFA", discount: "-25%", price: "37 500 FCFA" },
    { id: 6, name: "Produit 6", image: "/prod6.jpg", oldPrice: "60 000 FCFA", discount: "-30%", price: "42 000 FCFA" },
    { id: 7, name: "Produit 7", image: "/prod7.jpg", oldPrice: "35 000 FCFA", discount: "-10%", price: "31 500 FCFA" },
    { id: 8, name: "Produit 8", image: "/prod8.jpg", oldPrice: "28 000 FCFA", discount: "-15%", price: "23 800 FCFA" },
    { id: 1, name: "Produit 1", image: "/prod1.jpg", oldPrice: "20 000 FCFA", discount: "-10%", price: "18 000 FCFA" },
    { id: 2, name: "Produit 2", image: "/prod2.jpg", oldPrice: "25 000 FCFA", discount: "-15%", price: "21 250 FCFA" },
    { id: 3, name: "Produit 3", image: "/prod3.jpg", oldPrice: "30 000 FCFA", discount: "-20%", price: "24 000 FCFA" },
    { id: 4, name: "Produit 4", image: "/prod4.jpg", oldPrice: "40 000 FCFA", discount: "-5%", price: "38 000 FCFA" },
    { id: 5, name: "Produit 5", image: "/prod5.jpg", oldPrice: "50 000 FCFA", discount: "-25%", price: "37 500 FCFA" },
    { id: 6, name: "Produit 6", image: "/prod6.jpg", oldPrice: "60 000 FCFA", discount: "-30%", price: "42 000 FCFA" },
    { id: 7, name: "Produit 7", image: "/prod7.jpg", oldPrice: "35 000 FCFA", discount: "-10%", price: "31 500 FCFA" },
    { id: 8, name: "Produit 8", image: "/prod8.jpg", oldPrice: "28 000 FCFA", discount: "-15%", price: "23 800 FCFA" },
  ];

  const itemsPerPage = 30;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Carrousel */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt={`Image ${currentImage + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Texte du carrousel */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Découvrez l’âme du Gabon <br /> à travers des créations uniques. <br /> Chaque pièce raconte une histoire, <br /> chaque achat soutient un artisan.
          </h1>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition">
            Inscrivez-vous maintenant
          </button>
        </div>

        

        {/* Indicateurs */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full {
                currentImage === index ? "bg-white" : "bg-gray-500"
              }Fcfa`}
            ></div>
          ))}
        </div>
      </div>

      
      <div className="p-6">
      <div className="text-xl flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Nos Produits</h2>
        <select
      className="p-2 border rounded mb-2"
    >
      <option value="default">Trier par défaut</option>
      <option value="price-asc">Prix croissant</option>
      <option value="price-desc">Prix décroissant</option>
    </select>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.map((product, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md bg-white">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <div className="text-gray-500 line-through">{product.oldPrice}</div>
              <div className="text-red-500">{product.discount}</div>
              <div className="text-xl font-bold">{product.price}</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2 p-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
