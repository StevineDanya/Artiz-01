import EventCard from "./EventCard";

export default function EventsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Histoire du Gabon</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <EventCard
            image="/event1.jpg"
            title="En mars au musée"
            date="28 février 2025"
          />
          <EventCard
            image="/event2.jpg"
            title="Autour de l'exposition « Trop forts ! »"
            date="21 février 2025"
          />
          <EventCard
            image="/event3.jpg"
            title="En famille pour les vacances d'hiver !"
            date="07 février 2025"
          />
          <EventCard
            image="/event4.jpg"
            title="En février au musée"
            date="31 janvier 2025"
          />
        </div>
      </div>
    </section>
  );
}
