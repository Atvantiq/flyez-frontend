'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="bg-gradient-to-b from-[#070e1b] to-[#03070f] text-white pt-20 pb-10 relative overflow-hidden border-t border-white/5"
    >
      {/* Dynamic Ambient Background Glow */}
      <div 
        className="absolute bottom-[-10%] left-[5%] w-[35%] h-[60%] rounded-full bg-radial from-brand-accent/8 to-transparent pointer-events-none"
      />

      <div className="premium-container relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 mb-14">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <a href="/" className="flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-108 group-hover:rotate-3"
              >
                <svg width="34" height="34" viewBox="35 18 38 42" fill="none">
                  {/* White "F" + Top Swoop */}
                  <path d="M38 58 L38 37 C38 27, 48 22, 70 20 C60 26, 45 32, 43 37 L43 43 L57 43 L52 48 L43 48 L43 53 Z" fill="#ffffff" />
                  {/* Orange Feathers */}
                  <path d="M45 35.5 C50 35.5, 58 33, 71 23 C63 29, 56 32, 54 34 C58 34, 62 34, 66 34 C58 38, 50 40, 45 40.5 Z" fill="#ff5c00" />
                </svg>
              </div>
              <span className="text-xl font-[800] font-display text-white letter-spacing-[-0.5px]">
                Fly<span className="text-brand-orange">Ez</span>
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              Unlock unbeatable rates on global flights. We combine AI-driven itinerary planning with exclusive offline ticket deals to simplify your journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold mb-6 font-display uppercase tracking-widest text-[13.5px]">Company</h4>
            <ul className="flex flex-col gap-3.5 text-[14.5px] text-white/65">
              <li>
                <a href="/" className="relative hover:text-white transition-colors duration-250 py-0.5 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-orange after:transition-all after:duration-250 hover:after:w-full">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="relative hover:text-white transition-colors duration-250 py-0.5 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-orange after:transition-all after:duration-250 hover:after:w-full">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faq" className="relative hover:text-white transition-colors duration-250 py-0.5 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-orange after:transition-all after:duration-250 hover:after:w-full">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="relative hover:text-white transition-colors duration-250 py-0.5 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-orange after:transition-all after:duration-250 hover:after:w-full">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="relative hover:text-white transition-colors duration-250 py-0.5 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-orange after:transition-all after:duration-250 hover:after:w-full">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-base font-bold mb-6 font-display uppercase tracking-widest text-[13.5px]">Support 24/7</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/65">
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-orange flex-shrink-0" />
                <a href="tel:1800-521-4263" className="hover:text-white font-bold transition-colors duration-200">1800-521-4263</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-orange flex-shrink-0" />
                <a href="mailto:help@flyez.ai" className="hover:text-white transition-colors duration-200">help@flyez.ai</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="line-height-1.5">USA Flight Reservation Center, 120 Sansome St, San Francisco, CA 94104</span>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div>
            <h4 className="text-white text-base font-bold mb-6 font-display uppercase tracking-widest text-[13.5px]">Exclusive Deals</h4>
            <p className="text-white/60 text-[13.5px] mb-4.5 leading-relaxed">
              Subscribe to get secret discount codes and unpublished flight offers.
            </p>
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="flex bg-white/4 border border-white/10 rounded-xl p-1 w-full transition-all duration-300 focus-within:border-brand-orange focus-within:bg-white/8 focus-within:shadow-[0_0_15px_rgba(255,92,0,0.15)]"
            >
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-transparent border-none outline-none text-white text-sm py-2 px-3 w-[60%]"
              />
              <button 
                type="submit" 
                className="bg-brand-orange text-white rounded-lg w-9 h-9 flex items-center justify-center shadow-glow transition-all duration-350 hover:bg-brand-orange-hover hover:-translate-y-[1px]"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/7 mb-9" />

        {/* Bottom Panel */}
        <div className="flex flex-wrap justify-between items-center gap-5">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} FlyEz. All rights reserved. Registered travel provider IATA accredited partner.
          </p>
          
          {/* Custom SVG Payment Badges */}
          <div className="flex gap-3.5 items-center">
            <span className="text-[11px] text-white/35 uppercase font-semibold tracking-wider">Secured booking via</span>
            
            <div className="flex gap-2">
              <div className="w-11 h-6 bg-white/3 border border-white/10 rounded-md flex items-center justify-center text-[9px] font-black text-white/60 transition-all duration-300 hover:text-white hover:-translate-y-0.5 hover:bg-white/6 hover:border-[#2563eb] hover:shadow-[0_0_10px_rgba(37,99,235,0.3)]">VISA</div>
              <div className="w-11 h-6 bg-white/3 border border-white/10 rounded-md flex items-center justify-center text-[9px] font-black text-white/60 transition-all duration-300 hover:text-white hover:-translate-y-0.5 hover:bg-white/6 hover:border-[#ff5c00] hover:shadow-[0_0_10px_rgba(255,92,0,0.3)]">MC</div>
              <div className="w-11 h-6 bg-white/3 border border-white/10 rounded-md flex items-center justify-center text-[9px] font-black text-white/60 transition-all duration-300 hover:text-white hover:-translate-y-0.5 hover:bg-white/6 hover:border-[#06b6d4] hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]">AMEX</div>
              <div className="w-11 h-6 bg-white/3 border border-white/10 rounded-md flex items-center justify-center text-[9px] font-black text-white/60 transition-all duration-300 hover:text-white hover:-translate-y-0.5 hover:bg-white/6 hover:border-[#e11d48] hover:shadow-[0_0_10px_rgba(225,29,72,0.3)]">DISC</div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
