export default function Hero({ hero }) {
        
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center bg-gray-900 text-white">
      <img
        src={hero.image}
        alt={hero.title}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold">{hero.title}</h1>
        <p className="mt-4 text-lg text-gray-200">{hero.subtitle}</p>
        {hero.cta?.url && (
          <a
            href={hero.cta.url}
            target={hero.cta.target || "_self"}
            className="inline-block mt-6 bg-[var(--accent)] text-white px-6 py-3 rounded-md hover:bg-opacity-70"
          >
            {hero.cta.label || "Read More"}
          </a>
        )}
      </div>
    </section>
  );
}
