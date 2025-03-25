import ArticleCard from "./ArticleCard";

export default function ArticlesSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <ArticleCard
          image="/article1.jpg"
          date="March 10, 2025"
          category="Community / News / Talks"
          title="Archiving In Flow, Through Deep Listening, And By Practicing Refusal"
          description="A deep conversation featuring the artist Ethel Tawe."
        />
        <ArticleCard
          image="/article2.jpg"
          date="February 16, 2025"
          category="News / Talks / Culture Catch Up"
          title="Culture Catch Up With Ethel-Ruth Tawe"
          description="Exploring anti-disciplinary approaches to archival practice."
        />
        <ArticleCard
          image="/article3.jpg"
          date="October 30, 2024"
          category="Community / News / Talks"
          title="Writing, Dreaming, And Speaking New Worlds Into Being"
          description="World-building as a speculative practice for the future."
        />
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-4 py-2 border border-gray-400 rounded-md">1</button>
        <button className="px-4 py-2 border border-gray-400 rounded-md mx-2">2</button>
        <button className="px-4 py-2 border border-gray-400 rounded-md">3</button>
        <button className="px-4 py-2 border border-gray-400 rounded-md mx-2">14</button>
        <button className="px-4 py-2 bg-black text-white rounded-md">NEXT</button>
      </div>
    </section>
  );
}
