import { motion } from "framer-motion";

const MissionSection = () => {
  const missions = [
    {
      title: "Valoriser l’Artisanat Gabonais",
      description:
        "Aku cocok menggunakan produk night cream white secret dari wardah ini. Buat kulit wajahku terasa lem",
    },
    {
      title: "Soutenir les Artisans Locaux",
      description:
        "Aku cocok menggunakan produk night cream white secret dari wardah ini. Buat kulit wajahku terasa lem",
    },
    {
      title: "Promouvoir une Consommation Responsable",
      description:
        "Aku cocok menggunakan produk night cream white secret dari wardah ini. Buat kulit wajahku terasa lem",
    },
    {
      title: "Faciliter l’Accès à l’Artisanat",
      description:
        "Aku cocok menggunakan produk night cream white secret dari wardah ini. Buat kulit wajahku terasa lem",
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nos missions
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cartes des missions */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold">{mission.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{mission.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image animée */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/tisse.png"
              alt="Artisanat Gabonais"
              className="rounded-lg   w-full max-w-sm object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
