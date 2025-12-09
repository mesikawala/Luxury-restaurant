import React from "react";
import { menuItems } from "../data/menuData";

const Menu = ({ isvisible }) => {
  return (
    <section className="py-24 px-4 md:px-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm gold-text mb-4 tracking-widest">
            EXQUISITE FLAVORS
          </div>
          <h2 className="text-5xl font-bold mb-6">Our Signature Menu</h2>
          <div className="h-1 w-20 gold-gradient mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`menu-card bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 ${
                isvisible ? "animate-zoom-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-xs gold-text mb-3 tracking-widest">
                {item.name}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
              <div className="text-2xl gold-text font-bold">{item.pice}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;