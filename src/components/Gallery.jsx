import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "../data/menuData";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <section className="py-24 px-4 md:px-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm gold-text mb-4 tracking-widest">AMBIANCE</div>
          <h2 className="text-5xl font-bold mb-6">Experience the Atmosphere</h2>
          <div className="h-1 w-20 gold-gradient mx-auto"></div>
        </div>
        <div className="relative">
          <div
            className="overflow-hidden rounded-lg relative"
            style={{ height: "500px" }}
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`gallery-slide absolute inset-0 ${
                  idx === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage:
                    idx % 2 === 0
                      ? "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80')"
                      : "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full transition-all border gold-border"
          >
            <ChevronLeft className="gold-text" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full transition-all border gold-border"
          >
            <ChevronRight className="gold-text" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
