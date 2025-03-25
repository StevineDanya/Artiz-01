import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Masque en bois",
    image: "/1.jpg",
    price: 6750,
    reviews: 97,
  },
  {
    name: "Produit mystère",
    image: "/b3.png",
    price: 2500,
    reviews: 89,
  },
  {
    name: "Boisson",
    image: "/boisson1.png",
    price: 2500,
    reviews: 110,
  },
  {
    name: "Décoration",
    image: "/d1.png",
    price: 20000,
    reviews: 76,
  },
  {
    name: "Cosmétique",
    image: "/g1.png",
    price: 18500,
    reviews: 102,
  },
  {
    name: "Huile",
    image: "/h1.png",
    price: 8000,
    reviews: 135,
  },
  {
    name: "Gingembre",
    image: "/gin1.png",
    price: 10000,
    reviews: 92,
  },
  {
    name: "Infusion",
    image: "/inf5.png",
    price: 10000,
    reviews: 113,
  },
  {
    name: "Miel",
    image: "/miel2.png",
    price: 6500,
    reviews: 88,
  },
  {
    name: "Épices",
    image: "/p1.png",
    price: 3900,
    reviews: 120,
  },
  {
    name: "Savon",
    image: "/s1.png",
    price: 2500,
    reviews: 140,
  },
  {
    name: "Veilleuse",
    image: "/v1.jpg",
    price: 94000,
    reviews: 80,
  },
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
            key={product.name}
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
