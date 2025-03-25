export default function NewsletterSection() {
    return (
      <section className="bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto text-center p-6">
          <h3 className="text-lg font-bold">Sign up to our bi-monthly newsletter</h3>
          <p className="text-sm text-gray-600 mt-2">
            Stories and insights about the latest in culture, technology and heritage.
          </p>
          <div className="mt-4">
            <img src="/newsletter-banner.jpg" alt="Newsletter" className="mx-auto w-64" />
          </div>
        </div>
      </section>
    );
  }
  