import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
  {
    name: "Apple iPhone 15 Pro",
    image: "/images/product.png",
    oldPrice: 999,
    discount: 10,
    price: 899,
    reviews: 97,
  },
];

const ProductGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        className="text-2xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nos articles
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {products.map((product, index) => (
          <motion.div
            key={index}
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
