// src/components/NewsletterSignup.jsx
export default function NewsLetterSignup() {
  return (
    <section className="px-4 py-10 mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <div className=""></div>
          <div className="">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg mb-4">Stay updated with the latest posts and insights.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-4 py-2 rounded border bg-[var(--light-bg)] border-[var(--dark-bg)]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-[var(--light-text)] rounded hover:bg-[var(--dark-bg)] transition"
              >
                Subscribe
              </button>
            </form>
        </div>
        <div className=""></div>
        </div>
      </div>
    </section>
  );
}