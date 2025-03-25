import HighlightItem from "./HighlightItem";

export default function HighlightSection() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Mettre en lumière</h2>
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <HighlightItem 
          image="/highlight1.jpg"
          organization="Museum of British Colonialism"
          title="Documenting and visualizing detention camps in Kenya"
          description="Tracing and mapping the history of detention during the 1950s Mau Mau revolt."
        />
        <HighlightItem 
          image="/highlight2.jpg"
          organization="Open Restitution Africa"
          title="Mapping restitution data across the African continent"
          description="Providing information on the international status of restitution debates."
        />
      </div>
    </section>
  );
}
