import React, { useState } from "react";
import { Clock, Users, Calendar } from "lucide-react";

const Booking = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests.`
    );
  };

  return (
    <section className="py-24 px-4 md:px-16 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm gold-text mb-4 tracking-widest">
            RESERVATION
          </div>
          <h2 className="text-5xl font-bold mb-6">Book Your Experience</h2>
          <div className="h-1 w-20 gold-gradient mx-auto mb-6"></div>
          <p className="text-gray-400">
            Secure your table at La Maison d'Or and prepare for an unforgettable
            evening
          </p>
        </div>
        <div
          className={`space-y-6 ${isVisible ? "animate-zoom-in" : "opacity-0"}`}
        >
          <div>
            <label className="block text-sm gold-text mb-2 tracking-wide">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg text-white"
              placeholder="John Doe"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm gold-text mb-2 tracking-wide flex items-center">
                <Calendar size={16} className="mr-2" /> Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm gold-text mb-2 tracking-wide flex items-center">
                <Clock size={16} className="mr-2" /> Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg text-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm gold-text mb-2 tracking-wide flex items-center">
              <Users size={16} className="mr-2" /> Number of Guests
            </label>
            <select
              value={formData.guests}
              onChange={(e) =>
                setFormData({ ...formData, guests: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg text-white"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSubmit}
            className="btn-primary w-full text-black font-semibold py-4 rounded-lg text-lg relative"
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Booking;
