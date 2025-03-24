import { FaTruck, FaCreditCard, FaLock, FaPhone } from "react-icons/fa";

const ServiceSection = () => {
  const services = [
    {
      icon: <FaTruck size={30} />,
      title: "Livraison",
      description:
        "Offrir des options d’expédition accélérées et assurer une livraison rapide des commandes, avec des informations de suivi disponibles pour les clients.",
    },
    {
      icon: <FaCreditCard size={30} />,
      title: "Commande",
      description:
        "Vous avez la possibilité de payer une avance avant la livraison et payer le reste plus tard.",
    },
    {
      icon: <FaLock size={30} />,
      title: "Paiement Sécurisé",
      description:
        "Vous avez la possibilité de payer via Airtel Money, Mobile Cash ou par carte bancaire.",
    },
    {
      icon: <FaPhone size={30} />,
      title: "24/7 Support",
      description: "Phone and Email support",
    },
  ];

  return (
    <section className="bg-gray-100 py-10"
    style={{ backgroundImage: "url('/font.png')" }}>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <div className="text-black">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
