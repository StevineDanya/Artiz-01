import { useRouter } from "next/router";

export default function SignupPage() {
  const router = useRouter(); // Permet la navigation

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          Formulaire d'inscription
        </h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Nom"
            className="p-3 rounded bg-white text-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="e-mail"
            className="p-3 rounded bg-white text-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="mot de passe"
            className="p-3 rounded bg-white text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black p-3 rounded font-semibold hover:bg-gray-200"
          >
            Soumettre
          </button>
        </form>

        {/* Bouton Retour */}
        <button
          className="mt-4 text-gray-400 hover:text-gray-200 block mx-auto"
          onClick={() => router.push("/")}
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
