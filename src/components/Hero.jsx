import Image from 'next/image';
import Link from 'next/link';

// const heroData = {
//     title: 'Welcome to Brew & Beyond',
//     subtitle: 'Discover the art of brewing',
//     cta: {
//       title: 'Read More!',
//       link: '/blog',
//       target: '_self',
//     },
//     image: {
//       url:'http://bbblog.local/wp-content/uploads/2025/09/hero.jpg',
//       alt: 'Hero'
//     }
//   }


export default function Hero({ data }) {
    
  return (
    <section className="bg-secondary-accent px-4">
      <div className="max-w-7xl container mx-auto py-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="">
          <h1 className="text-5xl font-bold text-dark-text">{data.acf?.hero_title}</h1>
          <p className="mt-4 text-2xl text-dark-text">{data.acf?.hero_subtitle}</p>
          <Link
            href={data.acf.hero_cta?.url.url || '#'}
            target={'_self'}
            className="mt-8 inline-block bg-accent text-light-text px-6 py-3 rounded hover:bg-[var(--dark-bg)] hover:text-[var(--light-text)] transition"
          >
            {data.acf.hero_cta.url.title || 'Learn More'}
          </Link>
        </div>
        <div className="">
          <Image
            src={data.acf?.hero_image}
            alt={data.acf?.hero_title || 'Hero Image'}
            width={600}
            height={750}
            className="mt-8 rounded-lg shadow-lg w-full h-auto"
            priority
          />
        </div>
          
          
      </div>
    </section>
  );
}