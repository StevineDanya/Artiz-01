"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function HomePage() {
  /** CAROUSEL **/
  const images = ["/sav.png", "/d1.png", "/savon.png", "/p1.png", "/2.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /** PRODUCTS **/
  const products = [
    { id: 1, name: "Masque en bois", image: "/cat.jpg", price: "85 000 FCFA" },
    { id: 2, name: "Masque en bois", image: "/cat2.jpg", price: "85 000 FCFA" },
    { id: 3, name: "Masque en bois", image: "/cat3.jpg", price: "85 000 FCFA" },
    { id: 4, name: "Decoration", image: "/d1.png", price: "38 000 FCFA" },
    { id: 5, name: "Decoration", image: "/d2.jpg", price: "37 500 FCFA" },
    { id: 6, name: "Decoration", image: "/d3.jpg", price: "42 000 FCFA" },
    { id: 7, name: "Gamme de produits", image: "/g1.png", price: "18 500 FCFA" },
    { id: 8, name: "Gamme de produits", image: "/g2.png", price: "18 500 FCFA" },
    { id: 9, name: "Gingembre", image: "/gin1.png", price: "10 000 FCFA" },
    { id: 10, name: "Huile", image: "/h1.png", price: "10 000 FCFA" },
    { id: 11, name: "Huile", image: "/h2.png", price: "10 000 FCFA" },
    { id: 12, name: "Huile", image: "/h3.png",  price: "10 000 FCFA" },
    { id: 13, name: "Moringa", image: "/mo1.png", price: "3 500 FCFA" },
    { id: 14, name: "Miel", image: "/miel.png", price: "3 000 FCFA" },
    { id: 15, name: "Infusion", image: "/inf1.png", price: "10 000 FCFA" },
    { id: 16, name: "Infusion", image: "/inf2.png", price: "10 000FCFA" },
    { id: 17, name: "Infusion", image: "/inf3.png", price: "10 000 FCFA" },
    { id: 18, name: "Infusion", image: "/inf4.png",price: "10 000 FCFA" },
    { id: 19, name: "Savon ", image: "/s1.png",price: "2 500FCFA" },
    { id: 20, name: "Savon", image: "/s2.png",price: "2 500 FCFA" },
    { id: 21, name: "Savon", image: "/s3.png",price: "2 500 FCFA" },
    { id: 22, name: "Epices", image: "/p3.png",price:"2 000 FCFA" },
    { id: 23, name: "Epices", image: "/p2.png",price: "2 000 FCFA" },
    { id: 24, name: "Epices", image: "/p1.png", price: "2 000 FCFA" },
    {id:  25, name: "Veilleuse", image:"/5.jpg",price: "95 000 FCFA"},
    {id:  26, name: "Veilleuse", image:"/d3.jpg",price: "95 000 FCFA"},
    {id:  27, name: "Veilleuse", image:"/v1.jpg",price: "95 000 FCFA"},
    {id:  28, name: "Sirop", image:"/sirp1.png",price: "25 000 FCFA"},
    {id:  29, name: "Sculpture", image:"/sc1.png",price: "175 000 FCFA"},
    {id:  30, name: "Decoration florale", image:"/d1.png",price: "20 000 FCFA"},
    {id:  31, name: "Renne de Noël en raphia du Gabon", image:"/d4.JPG",price: "94 500"},
    {id:  32, name: "Sac à main tissé", image:"/2.jpg",price: "30 000 FCFA"},
  ];

  const itemsPerPage = 16; // Adjust based on your UI design
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePagination = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "next") {
        return Math.min(prev + 1, totalPages);
      } else if (direction === "prev") {
        return Math.max(prev - 1, 1);
      }
    });
  };

  /** Sorting **/
  const handleSort = (e) => {
    const value = e.target.value;
    if (value === "price-asc") {
      products.sort((a, b) => parseFloat(a.price.replace(" FCFA", "").replace(".", "")) - parseFloat(b.price.replace(" FCFA", "").replace(".", "")));
    } else if (value === "price-desc") {
      products.sort((a, b) => parseFloat(b.price.replace(" FCFA", "").replace(".", "")) - parseFloat(a.price.replace(" FCFA", "").replace(".", "")));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Carousel */}
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

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Carousel Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Découvrez l’âme du Gabon <br /> à travers des créations uniques. <br /> Chaque pièce raconte une histoire, <br /> chaque achat soutient un artisan.
          </h1>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition">
            Inscrivez-vous maintenant
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform items-center -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentImage === index ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="p-6">
        <div className="text-xl flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Nos Produits</h2>
          <select
            className="p-2 border rounded mb-2"
            onChange={handleSort}
          >
            <option value="default">Trier par défaut</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <div className="text-lg font-bold text-red-500 mt-2">{product.price}</div>
              {product.oldPrice && (
                <div className="text-sm line-through text-gray-500 mt-1">{product.oldPrice}</div>
              )}
              {product.discount && (
                <div className="text-sm text-green-500 mt-1">{product.discount}</div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => handlePagination("prev")}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <span className="self-center">{currentPage} / {totalPages}</span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => handlePagination("next")}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
