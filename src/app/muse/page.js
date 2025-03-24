"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
const radius = 150; // Rayon du cercle
const totalImages = images.length;
const angleStep = 360 / totalImages;

export default function RotatingCarousel() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative w-[400px] h-[400px]">
        {/* Conteneur qui tourne */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute w-full h-full"
        >
          {images.map((src, index) => {
            const angle = index * angleStep;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={index}
                className="absolute w-[100px] h-[100px] rounded-lg overflow-hidden shadow-lg"
                style={{
                  left: `calc(50% + ${x}px - 50px)`,
                  top: `calc(50% + ${y}px - 50px)`,
                }}
              >
                <Image src={src} alt={`Image ${index + 1}`} width={100} height={100} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}