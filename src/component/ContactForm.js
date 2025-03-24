import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    location: "Essassa",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Formulaire */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 flex flex-col justify-center h-[450px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Entrez votre email"
              required
            />
          </div>

          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block text-gray-700">Prénom</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="John"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Nom</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Lieux</label>
            <div className="relative">
              <FaLocationDot className="absolute left-3 top-3 text-gray-500" />
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 pl-8 border rounded-lg"
              >
                <option value="Essassa">Essassa</option>
                <option value="Libreville">Libreville</option>
                <option value="Owendo">Owendo</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Laissez un message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Dites-nous ce que vous pensez..."
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
          >
            Envoyer ➡️
          </button>
        </form>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center h-[450px]">
        <img
          src="/MEL.png"
          alt="Femme en tenue traditionnelle"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ContactForm;
