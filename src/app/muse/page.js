"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Header from "../../component/Header";
import MuseumAnimation from "../../component/MuseumAnimation";
import MuseumPage from "../../component/MuseumPage";
import ResourcesSection from "../../component/ResourcesSection";
import HighlightSection from "../../component/HighlightSection";
import ArticlesSection from "../../component/ArticlesSection";
import EventsSection from "../../component/EventsSection";
import Footer from "../../component/Footer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const projects = [
    {
      title: "Histoire du Masque Punu",
      date: "JANVIER 15, 2024",
      description:
        "Le masque Mukudji est un masque traditionnel gabonais, originaire du groupe ethnique Punu dans les régions de la Ngounié et de la Nyanga (Gabon).",
      image: "/punu.jpg",
    },
    {
      title: "Masque Massango",
      date: "JUILLET 31, 2023",
      description:
        "Les Myènè sont une population bantoue d'Afrique centrale établie au Gabon, sur le littoral et le long de l'Ogooué jusqu'à Lambaréné .",
      image: "/mas.jpg",
    },
    {
      title: "Masque Myene",
      date: "MARS 31, 2023",
      description:
        "Les Myènè sont une population bantoue d'Afrique centrale établie au Gabon, sur le littoral et le long de l'Ogooué jusqu'à Lambaréné .",
      image: "/mas2.jpg",
    },
    {
      title: "Histoire du Masque Punu",
      date: "JANVIER 15, 2024",
      description:
        "Le masque Mukudji est un masque traditionnel gabonais, originaire du groupe ethnique Punu dans les régions de la Ngounié et de la Nyanga (Gabon).",
      image: "/punu.jpg",
    },
    {
      title: "Masque Massango",
      date: "JUILLET 31, 2023",
      description:
        "Les Myènè sont une population bantoue d'Afrique centrale établie au Gabon, sur le littoral et le long de l'Ogooué jusqu'à Lambaréné .",
      image: "/mas.jpg",
    },
    {
      title: "Masque Myene",
      date: "MARS 31, 2023",
      description:
        "Les Myènè sont une population bantoue d'Afrique centrale établie au Gabon, sur le littoral et le long de l'Ogooué jusqu'à Lambaréné .",
      image: "/mas2.jpg",
    }
    
  ];

  return (
    <div>
      <Head>
        <title>African Digital Heritage</title>
        <meta
          name="description"
          content="Intersection de la culture et de la technologie pour le patrimoine africain."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md">
        <Header />
      </header>

      {/* Animation de musée */}
      <div>
        <MuseumAnimation
          imageSrc="/path-to-your-image.jpg"
          title="L'artefact ancien"
          description="Ce que vous découvrirez change à chaque regard..."
        />
      </div>

      {/* Section Projets avec animation */}
      <section className="py-12 bg-gray-200">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Histoire des masques Gabonais</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/pu.jpg"
                alt="Objets Parlants"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 bg-white p-4">
                <h3 className="font-bold text-lg">
                  Histoire du Masque disponible pour vous !
                </h3>
                <p>
                  Le masque fang est un masque en bois exotique blanchi au kaolin issu de l'art traditionnel du Gabon.
                </p>
                <button className="mt-2 bg-black text-white px-4 py-2 rounded">
                  Voir plus
                </button>
              </div>
            </motion.div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex space-x-4 items-center bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-gray-500">{project.date}</p>
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sections supplémentaires */}
      <MuseumPage />
      <ResourcesSection />
      <HighlightSection />
      <ArticlesSection />
      <EventsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}