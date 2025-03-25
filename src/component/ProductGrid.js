import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Masque en bois",
    image: "/1.jpg",
    oldPrice: 85000,
    discount: 10,
    price: 6750,
    reviews: 97,
  },
  {
    name: "Produit mystère",
    image: "/b3.png",
    oldPrice: 8000,
    discount: 5,
    price: 8000,
    reviews: 89,
  },
  {
    name: "Boisson",
    image: "/boisson1.png",
    oldPrice: 8000,
    discount: 8,
    price: 8000,
    reviews: 110,
  },
  {
    name: "Décoration",
    image: "/d1.png",
    oldPrice: 20.000,
    discount: 15,
    price: 20.000,
    reviews: 76,
  },
  {
    name: "Cosmétique",
    image: "/g1.png",
    oldPrice: 18.500,
    discount: 7,
    price:18.500,
    reviews: 102,
  },
  {
    name: "Huile",
    image: "/h1.png",
    oldPrice: 8.000,
    discount: 12,
    price: 8.000,
    reviews: 135,
  },
  {
    name: "Gingembre",
    image: "/gin1.png",
    oldPrice: 10.000,
    discount: 6,
    price: 10.000,
    reviews: 92,
  },
  {
    name: "Infusion",
    image: "/inf5.png",
    oldPrice: 10.000,
    discount: 10,
    price: 10.000,
    reviews: 113,
  },
  {
    name: "Miel",
    image: "/miel2.png",
    oldPrice: 6500,
    discount: 9,
    price: 6.500,
    reviews: 88,
  },
  {
    name: "Épices",
    image: "/p1.png",
    oldPrice: 3.900,
    discount: 11,
    price: 3.900,
    reviews: 120,
  },
  {
    name: "Savon",
    image: "/s1.png",
    oldPrice: 2.500,
    discount: 5,
    price: 2.500,
    reviews: 140,
  },
  {
    name: "Veilleuse",
    image: "/v1.jpg",
    oldPrice: 94.500,
    discount: 20,
    price: 94.000,
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
