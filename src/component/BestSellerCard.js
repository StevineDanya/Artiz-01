import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const BestSellerCard = ({ product }) => {
  if (!product) return <p className="text-red-500">Erreur : produit non disponible</p>;

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center w-full max-w-xs md:max-w-sm">
      {/* Image du produit */}
      <div className="relative w-40 h-40">
        <Image
          src={product.image}
          alt={product.name}
          width={160}
          height={160}
          className="rounded-lg object-cover"
        />
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
        <button className="text-green-600 bg-green-100 p-3 rounded-full hover:bg-green-200 transition">
          <IoLogoWhatsapp size={20} />
        </button>
        <button className="text-blue-600 bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition">
          <FaShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default BestSellerCard;
