"use client"; 
import { useState } from "react";
import Image from "next/image";

const ProductPage = () => {
  const product = {
    title: "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
    price: 1699,
    oldPrice: 1999,
    discount: 21,
    availability: "In Stock",
    category: "Electronics Devices",
    memoryOptions: ["16GB unified memory"],
    sizeOptions: ["14-inch Liquid Retina XDR display"],
    storageOptions: ["1TB SSD Storage"],
    images: [
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg",
      "/5.jpg",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`Bonjour, je souhaite commander : ${product.title} au prix de ${product.price}$.`);
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* Image Section */}
      <div className="flex flex-col w-full md:w-1/2">
        <div className="border-2 border-green-400 p-2">
          <Image src={selectedImage} 
          alt="Product Image" 
          width={500} 
          height={500} 
          className="rounded-lg" />
        </div>
        <div className="flex gap-2 mt-4 overflow-auto">
          {product.images.map((img, index) => (
            <button key={index} onClick={() => setSelectedImage(img)}>
              <Image src={img} alt="Thumbnail" width={80} height={80} className="border p-1 rounded" />
            </button>
          ))}
        </div>
      </div>
      
      {/* Product Details */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-green-500 font-semibold mt-1">Availability: {product.availability}</p>
        <p className="text-gray-500">Category: {product.category}</p>
        
        {/* Pricing */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-3xl font-bold text-blue-600">Fcfa{product.price}</span>
          <span className="text-gray-400 line-through">Fcfa{product.oldPrice}</span>
          <span className="bg-yellow-300 text-gray-800 px-2 py-1 text-sm font-bold rounded">{product.discount}% OFF</span>
        </div>

        {/* Options */}
        <div className="mt-4">
          <label className="font-semibold">Memory:</label>
          <select className="block border rounded p-2 w-full mt-1">
            {product.memoryOptions.map((memory, index) => (
              <option key={index}>{memory}</option>
            ))}
          </select>
        </div>
        
        <div className="mt-4">
          <label className="font-semibold">Size:</label>
          <select className="block border rounded p-2 w-full mt-1">
            {product.sizeOptions.map((size, index) => (
              <option key={index}>{size}</option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label className="font-semibold">Storage:</label>
          <select className="block border rounded p-2 w-full mt-1">
            {product.storageOptions.map((storage, index) => (
              <option key={index}>{storage}</option>
            ))}
          </select>
        </div>
        
        {/* Actions */}
        <div className="flex gap-4 mt-6">
        <button className="bg-black text-white px-6 py-2 rounded-2xl">AJOUTER À LA CARTE</button>
          <button onClick={handleWhatsAppOrder} className="bg-green-500 text-white px-6 py-2 rounded-2xl flex items-center gap-2">
            <Image src="/whatsapp-logo.png" alt="WhatsApp" width={20} height={20} />
            Commander via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
