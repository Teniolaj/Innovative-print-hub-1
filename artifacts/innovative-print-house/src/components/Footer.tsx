import React from "react";
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import logoPath from "@assets/logo_1778860608571.jpg";

export default function Footer() {
  return (
    <footer id="contact" className="bg-background pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <img src={logoPath} alt="Innovative Print House Logo" className="h-12 w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Where bold ideas become tangible reality. We provide professional printing, branding, and publication services across Ghana.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Services</a></li>
              <li><a href="#works" className="text-gray-400 hover:text-primary transition-colors text-sm">Portfolio</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-primary transition-colors text-sm">Customer Reviews</a></li>
              <li><a href="#quote" className="text-gray-400 hover:text-primary transition-colors text-sm">Get a Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Corporate Branding</li>
              <li className="text-gray-400 text-sm">Graphic Design</li>
              <li className="text-gray-400 text-sm">Digital Printing</li>
              <li className="text-gray-400 text-sm">T-shirt Printing</li>
              <li className="text-gray-400 text-sm">Souvenirs & Gifts</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-0.5" size={18} />
                <span className="text-gray-400 text-sm">SIC Building,<br />Kumasi, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary" size={18} />
                <span className="text-gray-400 text-sm">024 342 0953</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-primary" size={18} />
                <span className="text-gray-400 text-sm">Open 24 Hours</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Innovative Print House. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
