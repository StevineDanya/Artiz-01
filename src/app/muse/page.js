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
import NewsletterSection from "../../component/NewsletterSection";
import Footer from "../../component/Footer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const projects = [
    {
      title: "Histoire du Masque Punu",
      date: "JANVIER 15, 2024",
      description:
        "AfricLe masque Mukudji est un masque traditionnel gabonais, originaire du groupe ethnique Punu dans les régions de la Ngounié et de la Nyanga (Gabon).",
      image: "/punu.jpg",
    },
    {
      title: "Masque Massango",
      date: "JULLET 31, 2023",
      description:
        "Les Myènè sont une population bantoue d'Afrique centrale établie au Gabon, sur le littoral (entre Libreville et la lagune Fernan Vaz) et le long de l'Ogooué jusqu'à Lambaréné .",
      image: "/mas.jpg",
    },
    {
      title: "Masque Myene",
      date: "MARS 31, 2023",
      description: "Les Myènè sont une population bantoue d'Afrique centrale établie au Gabon, sur le littoral (entre Libreville et la lagune Fernan Vaz) et le long de l'Ogooué jusqu'à Lambaréné .",
      image: "/mas2.jpg",
    },
    {
      title: "Masque Massango",
      date: "JULLET 31, 2023",
      description:
        "Les Myènè sont une population bantoue d'Afrique centrale établie au Gabon, sur le littoral (entre Libreville et la lagune Fernan Vaz) et le long de l'Ogooué jusqu'à Lambaréné .",
      image: "/mas.jpg",
    },
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

      {/* Section vidéo */}
      <section className="bg-white py-10">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center p-6">
    {/* Vidéo */}
    <div className="w-full md:w-1/2">
      <div
        className="relative w-full max-w-md mx-auto cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <div className="relative">
            <Image
              src="/video-thumbnail.jpg"
              alt="Femme Gabonaise"
              width={500}
              height={500}
              className="w-full h-auto object-cover drop-shadow-lg rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <button className="bg-white text-black px-5 py-2 text-lg font-bold rounded-full">
                ▶ Play
              </button>
            </div>
          </div>
        ) : (
          <video
            src="/video.mp4"
            controls
            autoPlay
            className="w-full h-auto rounded-lg drop-shadow-lg"
          />
        )}
      </div>
    </div>

    {/* Texte */}
    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12">
      <h2 className="text-4xl md:text-3xl font-bold leading-snug text-gray-900">
        Nous fusionnons la <span className="text-yellow-500">culture</span> et la{" "}
        <span className="text-yellow-500">technologie</span> pour préserver
        l’histoire avec des outils numériques innovants.
      </h2>
      <p className="mt-3 text-md text-gray-700">
        Découvrez comment nous utilisons la technologie pour protéger et mettre en valeur le patrimoine culturel africain.
      </p>
      <button className="mt-5 bg-black hover:bg-white hover:text-black text-white px-5 py-2 rounded-lg text-md font-semibold transition duration-300">
        En savoir plus
      </button>
    </div>
  </div>
</section>


      {/* Section Projets */}
      <section className="py-12 bg-gray-200">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Histoire des masques Gabonais</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <Image
                src="/fang.jpg"
                alt="Objets Parlants"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 bg-white p-4">
                <h3 className="font-bold text-lg">
                  Histoire0 – Construire Des Archives Numériques...
                </h3>
                <p>
                Le masque fang est un masque en bois exotique blanchi au kaolin issu de l'art traditionnel du Gabon. Créé à une date inconnue par un ou des sculpteurs fangs anonymes, il est acheté en France par le peintre Maurice de Vlaminck en 1904.
                </p>
                <button className="mt-2 bg-black text-white px-4 py-2 rounded">
                  Voir plus
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="flex space-x-4 items-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-gray-500">{project.date}</p>
                    <h3 className="font-bold">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
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
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
