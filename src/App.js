import React, { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import "./styles/animation.css";
import "App.css";

function App() {
  const [isVisible, setIsVisible] = useState({});
  const sectionsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionsRef.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Hero />
      <div id="about" ref={(el) => (sectionsRef.current.about = el)}>
        <About isVisible={isVisible.about} />
      </div>
      <div id="menu" ref={(el) => (sectionsRef.current.menu = el)}>
        <Menu isVisible={isVisible.menu} />
      </div>
      <div id="gallery" ref={(el) => (sectionsRef.current.gallery = el)}>
        <Gallery />
      </div>
      <div id="booking" ref={(el) => (sectionsRef.current.booking = el)}>
        <Booking isVisible={isVisible.booking} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
