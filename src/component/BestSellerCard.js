import { useState } from "react";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const products = [
  {
    id: 1,
    name: "Masque en bois",
    images: ["/sc1.png", "/s5.png", "/images/shoes3.jpg"],
    price: 49.99,
    oldPrice: 59.99,
    discount: 20,
    reviews: 120,
    whatsappLink: "https://wa.me/1234567890",
  },
  {
    id: 2,
    name: "Montre de luxe",
    images: ["/images/watch1.jpg", "/images/watch2.jpg", "/images/watch3.jpg"],
    price: 149.99,
    oldPrice: 199.99,
    discount: 25,
    reviews: 85,
    whatsappLink: "https://wa.me/9876543210",
  },
  {
    id: 3,
    name: "Sac à dos en cuir",
    images: ["/images/bag1.jpg", "/images/bag2.jpg", "/images/bag3.jpg"],
    price: 89.99,
    oldPrice: 109.99,
    discount: 18,
    reviews: 60,
    whatsappLink: "https://wa.me/1122334455",
  },
];

const ProductCard = ({ product, isFeatured }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div
      className={`bg-white shadow-lg rounded-xl p-4 flex flex-col items-center ${
        isFeatured ? "w-full max-w-md" : "w-full max-w-xs"
      }`}
    >
      {/* Image principale */}
      <div className="relative w-40 h-40">
        <Image
          src={selectedImage}
          alt={product.name}
          width={160}
          height={160}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Miniatures */}
      <div className="flex gap-2 mt-3">
        {product.images.map((img, index) => (
          <button key={index} onClick={() => setSelectedImage(img)}>
            <Image
              src={img}
              alt={`Miniature ${index + 1}`}
              width={40}
              height={40}
              className={`rounded-md object-cover border ${
                selectedImage === img ? "border-blue-500" : "border-gray-300"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Infos du produit */}
      <div className="text-center mt-4 w-full">
        <h3 className="font-semibold text-lg">{product.name}</h3>

        {/* Étoiles et avis */}
        <div className="flex items-center justify-center gap-1 text-yellow-500 mt-2">
          {Array(5)
            .fill("⭐")
            .map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
        </div>

        {/* Prix et réduction */}
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
          <span className="bg-blue-100 text-blue-600 px-2 rounded text-xs">
            -{product.discount}%
          </span>
        </div>
        <p className="text-xl font-bold mt-1">${product.price}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-4">
        <button className="text-gray-600 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition">
          <AiOutlineHeart size={20} />
        </button>
        <a
          href={product.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 bg-green-100 p-3 rounded-full hover:bg-green-200 transition flex items-center"
        >
          <IoLogoWhatsapp size={20} />
        </a>
      </div>
    </div>
  );
};

export default function ProductsPage() {
  // Sélectionne le premier produit comme "Meilleure Vente"
  const bestSellingProduct = products[0];
  const otherProducts = products.slice(1);

  return (
    <div className="min-h-screen w-full bg-gray-100 py-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4  ">Meilleures Ventes</h2>
    {/* Section Produits (Incluant Meilleure Vente) */}
    <section className="w-full max-w-6xl ">
      
      
      <div className="flex justify-center gap-8 flex-wrap">
        {/* Meilleure Vente - Toujours en première position */}
        <div className="w-80 h-auto">
          <ProductCard product={bestSellingProduct} isFeatured />
        </div>

        {/* Autres Produits */}
        {otherProducts.map((product) => (
          <div key={product.id} className="w-80 h-auto">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
</div>

  
  );
}
