import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  if (!product) return <p className="text-red-500">Erreur : produit non disponible</p>;

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-[220px] flex flex-col items-center border">
      {/* Image du produit */}
      <div className="relative w-full h-[120px]">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Infos du produit */}
      <div className="text-center mt-3 w-full">
        <h3 className="font-semibold text-sm">{product.name}</h3>

        {/* Étoiles et avis */}
        <div className="flex items-center justify-center gap-1 text-yellow-500 mt-1">
          {Array(5)
            .fill("⭐")
            .map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
        </div>

        {/* Prix et réduction */}
        <div className="mt-1 flex items-center justify-center gap-2 text-sm">
          <span className="text-gray-400 line-through">{product.oldPrice}Fcfa</span>
          <span className="bg-blue-100 text-blue-600 px-2 rounded text-xs">
            -{product.discount}%
          </span>
        </div>
        <p className="text-lg font-bold mt-1">{product.price}Fcfa</p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-3">
        <button className="text-gray-600 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
          <AiOutlineHeart size={18} />
        </button>
        <button className="text-green-600 bg-green-100 p-2 rounded-full hover:bg-green-200 transition">
          <IoLogoWhatsapp size={18} />
        </button>
        <button className="text-blue-600 bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition">
          <FaShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
