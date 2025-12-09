import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom-in"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')",
          filter: "brightness(0.4)",
        }}
      ></div>
      <div className="relative z-20 text-center px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gold-text tracking-wider">
          La Masion d'Or
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
          Where Culinary Art Meets Elegance
        </p>
        <div className="h-1 w-32 gold-gradient mx-auto mb-8"></div>
        <a
          href="#booking"
          className="btn-primary text-black font-semibold px-10 py-4 rounded-full inline-block relative z-10"
        >
          Reserve Your Table
        </a>
      </div>
    </section>
  );
};

export default Hero;