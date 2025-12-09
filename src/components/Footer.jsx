import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-16 px-4 md:px-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-3xl font-bold gold-text mb-4">La Maison d'Or</h3>
          <p className="text-gray-400 mb-4">
            Elevating fine dining to an art form since 1985.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="gold-text hover:text-white transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="gold-text hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="gold-text hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 gold-text">Contact</h4>
          <div className="space-y-3 text-gray-400">
            <p className="flex items-start">
              <MapPin size={20} className="mr-2 gold-text mt-1" />
              123 Luxury Avenue, Metropolitan City, 10001
            </p>
            <p className="flex items-center">
              <Phone size={20} className="mr-2 gold-text" />
              +1 (555) 123-4567
            </p>
            <p className="flex items-center">
              <Mail size={20} className="mr-2 gold-text" />
              reserve@lamaisondor.com
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 gold-text">Opening Hours</h4>
          <div className="space-y-2 text-gray-400">
            <p>Monday - Thursday: 6:00 PM - 11:00 PM</p>
            <p>Friday - Saturday: 6:00 PM - 12:00 AM</p>
            <p>Sunday: 5:00 PM - 10:00 PM</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>© 2025 La Maison d'Or. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
