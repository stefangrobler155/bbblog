import Image from 'next/image';
import Link from 'next/link';

const heroData = {
    title: 'Welcome to Brew & Beyond',
    subtitle: 'Discover the art of brewing',
    cta: {
      title: 'Read More!',
      link: '/blog',
      target: '_self',
    },
    image: {
      url:'http://bbblog.local/wp-content/uploads/2025/09/hero.jpg',
      alt: 'Hero'
    }
  }


export default function Hero() {
  return (
    <section className="bg-secondary-accent py-20 text-center">
      <div className="max-w-7xl container mx-auto px-4">
        <h1 className="text-5xl font-bold text-accent">{heroData.title}</h1>
        <p className="mt-4 text-2xl text-dark-text">{heroData.subtitle}</p>
          <Image
            src={heroData.image.url}
            alt={heroData.image.alt}
            width={1360}
            height={600}
            className="mt-8 rounded-lg shadow-lg"
            priority
          />
          <Link
            href={heroData.cta.link}
            target={heroData.cta.target}
            className="mt-8 inline-block bg-accent text-light-text px-6 py-3 rounded-full hover:bg-dark-bg"
          >
            {heroData.cta.title}
          </Link>
      </div>
    </section>
  );
}