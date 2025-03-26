"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "../../component/Header";
import Footer from "../../component/Footer"

export default function ProduitPage() {
  const [data, setData] = useState([]);
  const router = useRouter();

  /** CAROUSEL **/
  const images = ["/sav.png", "/d1.png", "/savon.png", "/p1.png", "/2.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleProduitClick = (id) => {
    router.push(`/produit/${id}`);
  };

  /** PRODUITS **/
  const produits = [
    { id: 1, name: "Masque couleur", image: "/cat.jpg", price: "75.000 FCFA" },
    { id: 2, name: "Masque couleur", image: "/cat2.jpg", price: "75.000 FCFA" },
    { id: 3, name: "Masque couleur", image: "/cat3.jpg", price: "75.000 FCFA" },
    { id: 4, name: "Décoration de plante naturelle avec un pot tissé en raphia", image: "/d1.png", price: "40 000 FCFA" },
    { id: 5, name: "Décoration florale sur vase en verre ", image: "/d2.jpg", price: "40000 FCFA" },
    { id: 6, name: "Veilleuse composée en raphia", image: "/d3.jpg", price: "42 000 FCFA" },
    { id: 7, name: "Gamme de lait de corps + savon naturel au beurre de moabi + savon naturel huile de palm et argile rouge + Glycérine (moabi", image: "/g1.png", price: "18.500 FCFA" },
    { id: 8, name: "Gamme de lait de corps + savon naturel au beurre de moabi + savon naturel huile de palm et argile rouge + Glycérine (moabi", image: "/g2.png", price: "18.500 FCFA" },
    { id: 9, name: "Sachet de GINGEMBRE pour massage", image: "/gin1.png", price: "7500 FCFA" },
    { id: 10, name: "Lait de soin de corps Huile de palme - Moabi - Argile rouge", image: "/h1.png", price: "13.000 FCFA" },
    { id: 11, name: "Huile", image: "/h2.png", price: "10.000 FCFA" },
    { id: 12, name: "Huile", image: "/h3.png",  price: "10.000 FCFA" },
    { id: 13, name: "Savon Moringa", image: "/mo1.png", price: "3.500 FCFA" },
    { id: 14, name: "Miel", image: "/miel.png", price: "3.000 FCFA" },
    { id: 15, name: "Infusion", image: "/inf1.png", price: "10.000 FCFA" },
    { id: 16, name: "Infusion", image: "/inf2.png", price: "10.000FCFA" },
    { id: 17, name: "Infusion", image: "/inf3.png", price: "10.000 FCFA" },
    { id: 18, name: "Infusion", image: "/inf4.png",price: "10.000 FCFA" },
    { id: 19, name: "Savon naturel EXFOLIANT", image: "/s1.png",price: "2.500FCFA" },
    { id: 20, name: "SAVON ANTIBACTERIEN MOABI-MORINGA", image: "/s2.png",price: "2.500 FCFA" },
    { id: 21, name: "SAVON NATUREL ILLUMINATEUR Carotte - curcuma - MOABI", image: "/s3.png",price: "2.500 FCFA" },
    { id: 22, name: "Mélange d'épices bio poisson et crustacés", image: "/p3.png",price:"4700 FCFA" },
    { id: 23, name: "Mélange d'épices volaille", image: "/p2.png",price: "4700 FCFA" },
    { id: 24, name: "Mélange d'épices viandes et légumes", image: "/p1.png", price: "4700 FCFA" },
    {id:  25, name: "Veilleuse en raphia", image:"/5.jpg",price: "20 000 FCFA"},
    {id:  26, name: "Veilleuse composée en raphia", image:"/d3.jpg",price: "40 000 FCFA"},
    {id:  27, name: "Veilleuse support en bois", image:"/v1.jpg",price: "35000 FCFA"},
    {id:  28, name: "Sirop", image:"/sirp1.png",price: "25.000 FCFA"},
    {id:  29, name: "Sculpture", image:"/sc1.png",price: "175.000 FCFA"},
    {id:  30, name: "Décoration de plante naturelle avec un pot tissé en raphia", image:"/d1.png",price: "40.000 FCFA"},
    {id:  31, name: "Renne de Noël en raphia du Gabon", image:"/d4.JPG",price: "94.500"},
    {id:  32, name: "Sac à main tissé", image:"/2.jpg",price: "30.000 FCFA"},
  ];
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(produits.length / itemsPerPage);
  const paginatedProduits = produits.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePagination = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "next") return Math.min(prev + 1, totalPages);
      if (direction === "prev") return Math.max(prev - 1, 1);
      return prev;
    });
  };

  /** Tri des produits **/
  const handleSort = (e) => {
    const value = e.target.value;
    let sortedProduits = [...produits];

    if (value === "price-asc") {
      sortedProduits.sort(
        (a, b) =>
          parseFloat(a.price.replace(" FCFA", "").replace(".", "")) -
          parseFloat(b.price.replace(" FCFA", "").replace(".", ""))
      );
    } else if (value === "price-desc") {
      sortedProduits.sort(
        (a, b) =>
          parseFloat(b.price.replace(" FCFA", "").replace(".", "")) -
          parseFloat(a.price.replace(" FCFA", "").replace(".", ""))
      );
    }
    setProduits(sortedProduits);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Tri des produits */}
      <div className="flex justify-end p-4">
        <select
          onChange={handleSort}
          className="border p-2 rounded-md bg-white shadow"
        >
          <option value="">Trier par</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
        </select>
      </div>

      {/* Grille de produits */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {paginatedProduits.map((produit) => (
          <div
            key={produit.id}
            className="border p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleProduitClick(produit.id)}
          >
            <Image
              src={produit.image}
              alt={produit.name}
              width={300}
              height={300}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">{produit.name}</h3>
            <div className="text-lg font-bold text-red-500 mt-2">{produit.price}</div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-6 p-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          onClick={() => handlePagination("prev")}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span className="self-center">{currentPage} / {totalPages}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          onClick={() => handlePagination("next")}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>

      <Footer />
    </div>
  );
}