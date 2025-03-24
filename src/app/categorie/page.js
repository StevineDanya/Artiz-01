"use client";

import Header from "./../../component/Header";
import Footer from "./../../component/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Banner() {
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const products = new Array(12).fill({
    name: "Apple iPhone 15 Pro",
    price: "$899.00",
    oldPrice: "$999.00",
    discount: "-10%",
    image: "/Frame-37379.png",
    rating: 5,
    reviews: 97,
  });

  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Liste des images du carrousel (assure-toi qu'elles sont bien dans le dossier public/)
  const images = ["/cat.jpg", "/cat3.jpg", "/savon.jpg", "/MEL.jpg", "/tisse.png"];
  const [currentImage, setCurrentImage] = useState(0);

  // Changer automatiquement d'image toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Carrousel */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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

        {/* Overlay noir semi-transparent */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Contenu au-dessus du carrousel */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Découvrez l’âme du Gabon à travers des créations uniques. Chaque pièce raconte une histoire, chaque achat soutient un artisan.
          </h1>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition">
            Inscrivez-vous maintenant
          </button>
        </div>
      </div>

      {/* Menu de tri */}
      <div className="flex justify-end p-4">
        <label className="mr-2">Trier par :</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded p-2"
        >
          <option value="default">Par défaut</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
          <option value="popular">Popularité</option>
        </select>
      </div>

      {/* Liste des produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {paginatedProducts.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <Image src={product.image} alt={product.name} width={300} height={200} className="rounded" />
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

      <Footer />
    </div>
  );
}
