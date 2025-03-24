import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Masque en bois",
    image: "/1.jpg",
    oldPrice: 7500,
    discount: 10,
    price: 6750,
    reviews: 97,
  },
  {
    name: "Produit mystère",
    image: "/b3.png",
    oldPrice: 6200,
    discount: 5,
    price: 5890,
    reviews: 89,
  },
  {
    name: "Boisson",
    image: "/boisson1.png",
    oldPrice: 5500,
    discount: 8,
    price: 5060,
    reviews: 110,
  },
  {
    name: "Décoration",
    image: "/d1.png",
    oldPrice: 9800,
    discount: 15,
    price: 8330,
    reviews: 76,
  },
  {
    name: "Cosmétique",
    image: "/g1.png",
    oldPrice: 7200,
    discount: 7,
    price: 6690,
    reviews: 102,
  },
  {
    name: "Huile",
    image: "/h1.png",
    oldPrice: 6800,
    discount: 12,
    price: 5984,
    reviews: 135,
  },
  {
    name: "Gingembre",
    image: "/gin1.png",
    oldPrice: 5300,
    discount: 6,
    price: 4982,
    reviews: 92,
  },
  {
    name: "Infusion",
    image: "/inf5.png",
    oldPrice: 8800,
    discount: 10,
    price: 7920,
    reviews: 113,
  },
  {
    name: "Miel",
    image: "/miel2.png",
    oldPrice: 6500,
    discount: 9,
    price: 5915,
    reviews: 88,
  },
  {
    name: "Épices",
    image: "/p1.png",
    oldPrice: 7400,
    discount: 11,
    price: 6586,
    reviews: 120,
  },
  {
    name: "Savon",
    image: "/s1.png",
    oldPrice: 5700,
    discount: 5,
    price: 5415,
    reviews: 140,
  },
  {
    name: "Veilleuse",
    image: "/v1.jpg",
    oldPrice: 9900,
    discount: 20,
    price: 7920,
    reviews: 80,
  },
];

const ProductGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <motion.h2
        className="text-2xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nos articles
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 ">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            className="w-[160px] md:w-[180px] lg:w-[200px]"
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
