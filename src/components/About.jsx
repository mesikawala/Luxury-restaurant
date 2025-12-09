import React from "react";

const About = ({ isVisible }) => {
  return (
    <section className="py-24 px-4 md:px-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className={isVisible ? "animate-slide-right" : "opacity-0"}>
          <div className="text-sm gold-text mb-4 tracking-widest">
            SINCE 1985
          </div>
          <h2 className="text-5xl font-bold mb-6">A Legacy of Excellence</h2>
          <div className="h-1 w-20 gold-gradient mb-8"></div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Nestled in the heart of the city, La Maison d'Or has been the
            pinnacle of fine dining for over three decades. Our Michelin-starred
            chef combines traditional techniques with modern innovation to
            create an unforgettable gastronomic journey.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Each dish is a masterpiece, crafted with the finest ingredients
            sourced from around the world. Our commitment to excellence extends
            beyond the plate to every aspect of your dining experience.
          </p>
        </div>
        <div className={isVisible ? "animate-slide-left" : "opacity-0"}>
          <div className="relative">
            <div className="absolute -inset-4 gold-gradient opacity-20 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
              alt="Restaurant interior"
              className="relative rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
