import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  { id: 12, name: "Huile", image: "/h3.png", price: "10.000 FCFA" },
  { id: 13, name: "Savon Moringa", image: "/mo1.png", price: "3.500 FCFA" },
  { id: 14, name: "Miel", image: "/miel.png", price: "3.000 FCFA" },
  { id: 15, name: "Infusion", image: "/inf1.png", price: "10.000 FCFA" },
  { id: 16, name: "Infusion", image: "/inf2.png", price: "10.000 FCFA" },
  { id: 17, name: "Infusion", image: "/inf3.png", price: "10.000 FCFA" },
  { id: 18, name: "Infusion", image: "/inf4.png", price: "10.000 FCFA" },
  { id: 19, name: "Savon naturel EXFOLIANT", image: "/s1.png", price: "2.500 FCFA" },
  { id: 20, name: "SAVON ANTIBACTERIEN MOABI-MORINGA", image: "/s2.png", price: "2.500 FCFA" },
  { id: 21, name: "SAVON NATUREL ILLUMINATEUR Carotte - curcuma - MOABI", image: "/s3.png", price: "2.500 FCFA" },
  { id: 22, name: "Mélange d'épices bio poisson et crustacés", image: "/p3.png", price: "4.700 FCFA" },
  { id: 23, name: "Mélange d'épices volaille", image: "/p2.png", price: "4.700 FCFA" },
  { id: 24, name: "Mélange d'épices viandes et légumes", image: "/p1.png", price: "4.700 FCFA" }
];

const ProductGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center">
      {/* Titre avec animation */}
      <motion.h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nos articles
      </motion.h2>

      {/* Grille des produits centrée */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full place-items-center">
        {products.map((product, index) => (
          <motion.div
            key={product.id} // ✅ Correction ici
            className="w-full max-w-[250px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
