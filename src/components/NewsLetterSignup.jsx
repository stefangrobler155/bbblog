// src/components/NewsletterSignup.jsx
export default function NewsLetterSignup() {
  return (
    <section className="p-8 bg-gray-100 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--dark-text)" }}>
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mb-6">Stay updated with the latest posts and insights.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded border border-gray-300"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-accent text-light-text rounded hover:bg-opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}