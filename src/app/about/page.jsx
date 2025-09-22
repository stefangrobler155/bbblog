import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[var(--secondary-accent)] flex py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" style={{ color: "var(--dark-text)" }}>About Coffee & Beyond</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 text-lg text-[var(--dark-text)] leading-relaxed">
          <p>
            Coffee & Beyond is dedicated to celebrating the art and soul of coffee, bringing together enthusiasts and novices alike to explore the rich world of coffee culture. Founded with a passion for exceptional brews, our mission is to inspire and educate through expertly curated tips on brewing the perfect cup, from selecting the finest beans to mastering techniques like pour-over, French press, and espresso. We believe coffee is more than just a beverage—it's a ritual, a moment of connection, and a gateway to creativity and mindfulness.
          </p>
          <p>
            At Coffee & Beyond, we dive deep into the global tapestry of coffee culture, sharing stories of its traditions, innovations, and the communities it brings together. From the bustling cafés of Paris to the vibrant coffee farms of Ethiopia, we explore how coffee shapes lifestyles and fosters connections across the world. Our platform offers insights into the latest trends, sustainable practices, and the evolving coffee scene, ensuring every sip tells a story of craftsmanship and heritage.
          </p>
          <p>
            Our commitment to the coffee lifestyle extends beyond the cup, encouraging a holistic appreciation of the moments coffee creates. Whether you're a home barista honing your skills or someone seeking to infuse your daily routine with intention, Coffee & Beyond is your guide to living boldly and authentically through coffee. Join us in embracing the journey of discovery, where every brew is an opportunity to connect, create, and savor life’s simple pleasures.
          </p>
        </div>
        <div className="">
            <Image
              src="https://bb.sfgweb.co.za/wp-content/uploads/2025/09/about_image.jpg"
              alt="About Coffee & Beyond"
                width={750}
                height={600}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;