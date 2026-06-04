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
          
          {/* Brand Info & Socials */}
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
            
            {/* Sleek Social Media Connections */}
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-orange hover:bg-white/10 hover:border-brand-orange/30 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-orange hover:bg-white/10 hover:border-brand-orange/30 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-orange hover:bg-white/10 hover:border-brand-orange/30 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-orange hover:bg-white/10 hover:border-brand-orange/30 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
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

          {/* Newsletter & App Download */}
          <div>
            <h4 className="text-white text-base font-bold mb-6 font-display uppercase tracking-widest text-[13.5px]">Exclusive Deals</h4>
            <p className="text-white/60 text-[13.5px] mb-4.5 leading-relaxed">
              Subscribe to get secret discount codes and unpublished flight offers.
            </p>
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="flex bg-white/4 border border-white/10 rounded-xl p-1 w-full transition-all duration-300 focus-within:border-brand-orange focus-within:bg-white/8 focus-within:shadow-[0_0_15px_rgba(255,92,0,0.15)] mb-6"
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

            {/* Premium Mobile App Store Badges */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider">FlyEz Mobile App</span>
              <div className="flex gap-2">
                <a href="#" className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/3 hover:bg-white/6 border border-white/5 hover:border-white/10 rounded-lg transition-all text-left group">
                  <svg className="w-4 h-4 fill-current text-white/70 group-hover:text-white" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C3.79 16.41 3.52 9.38 8.16 9.12c1.37.07 2.27.79 3.03.8 1.15-.02 2.27-.92 3.82-.77 1.62.15 2.82.78 3.54 1.84-3.3 1.98-2.77 6.17.53 7.5-1.04 2.5-1.97 5.02-1.97 7.79z M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.2 2.5-2.06 4.38-3.74 4.25z" />
                  </svg>
                  <div>
                    <div className="text-[7px] text-white/40 uppercase font-medium leading-none">Download on</div>
                    <div className="text-[10px] font-bold leading-tight mt-0.5">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/3 hover:bg-white/6 border border-white/5 hover:border-white/10 rounded-lg transition-all text-left group">
                  <svg className="w-4 h-4 fill-current text-white/70 group-hover:text-white" viewBox="0 0 24 24">
                    <path d="M3 2.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h.07l11.05-11.05L3.07 2.5H3zm12.46 9.5L4.41 21.05a2 2 0 0 0 1.29-.05l10.9-6.3-1.14-1.7zm0-2L5.7 3.7A2 2 0 0 0 4.41 2.95l11.05 9.05zM22.56 11l-3.04-1.75-2.06 3.1 2.06 3.1 3.04-1.75a1.15 1.15 0 0 0 0-1.7z" />
                  </svg>
                  <div>
                    <div className="text-[7px] text-white/40 uppercase font-medium leading-none">Get it on</div>
                    <div className="text-[10px] font-bold leading-tight mt-0.5">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Link Directory Grid */}
        <div className="border-t border-white/7 pt-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-white text-xs font-bold mb-4 font-display uppercase tracking-widest text-brand-orange">Flights to US Cities</h5>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/45">
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=LAX&ar1=JFK" className="hover:text-brand-orange transition-colors">Flights to New York</a></li>
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=JFK&ar1=LAX" className="hover:text-brand-orange transition-colors">Flights to Los Angeles</a></li>
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=LAX&ar1=LAS" className="hover:text-brand-orange transition-colors">Flights to Las Vegas</a></li>
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=JFK&ar1=MIA" className="hover:text-brand-orange transition-colors">Flights to Miami</a></li>
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=JFK&ar1=MCO" className="hover:text-brand-orange transition-colors">Flights to Orlando</a></li>
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=ORD&ar1=DFW" className="hover:text-brand-orange transition-colors">Flights to Dallas</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-xs font-bold mb-4 font-display uppercase tracking-widest text-brand-orange">Flights to Intl Cities</h5>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/45">
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=JFK&ar1=LHR" className="hover:text-brand-orange transition-colors">Flights to London</a></li>
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=JFK&ar1=CDG" className="hover:text-brand-orange transition-colors">Flights to Paris</a></li>
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=LAX&ar1=NRT" className="hover:text-brand-orange transition-colors">Flights to Tokyo</a></li>
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=JFK&ar1=FCO" className="hover:text-brand-orange transition-colors">Flights to Rome</a></li>
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=JFK&ar1=CUN" className="hover:text-brand-orange transition-colors">Flights to Cancun</a></li>
                <li><a href="https://flyez.ai/flight-listing?tp=oneway&d1=LAX&ar1=SYD" className="hover:text-brand-orange transition-colors">Flights to Sydney</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-xs font-bold mb-4 font-display uppercase tracking-widest text-brand-orange">Popular Airlines</h5>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/45">
                <li><a href="https://flyez.ai/flight-listing?airline=DL" className="hover:text-brand-orange transition-colors">Delta Air Lines</a></li>
                <li><a href="https://flyez.ai/flight-listing?airline=AA" className="hover:text-brand-orange transition-colors">American Airlines</a></li>
                <li><a href="https://flyez.ai/flight-listing?airline=UA" className="hover:text-brand-orange transition-colors">United Airlines</a></li>
                <li><a href="https://flyez.ai/flight-listing?airline=EK" className="hover:text-brand-orange transition-colors">Emirates</a></li>
                <li><a href="https://flyez.ai/flight-listing?airline=QR" className="hover:text-brand-orange transition-colors">Qatar Airways</a></li>
                <li><a href="https://flyez.ai/flight-listing?airline=LH" className="hover:text-brand-orange transition-colors">Lufthansa</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust & Accreditation Badges */}
        <div className="border-t border-white/7 pt-8 pb-8 flex flex-wrap justify-center items-center gap-8 md:gap-14">
          <div className="flex items-center gap-2.5 px-4 py-2 bg-white/3 border border-white/5 rounded-lg shadow-sm">
            <svg className="w-8 h-8 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
              <path d="M12 8l4 4-4 4" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-bold text-white uppercase tracking-wider leading-none">IATA Accredited</div>
              <div className="text-[8px] text-white/40 uppercase tracking-widest leading-none mt-0.5">Booking Agent</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2 bg-white/3 border border-white/5 rounded-lg shadow-sm">
            <svg className="w-8 h-8 text-[#3b82f6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 11l2 2 4-4" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-bold text-white uppercase tracking-wider leading-none">ARC Member</div>
              <div className="text-[8px] text-white/40 uppercase tracking-widest leading-none mt-0.5">Bonded & Secured</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2 bg-white/3 border border-white/5 rounded-lg shadow-sm">
            <svg className="w-8 h-8 text-[#10b981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-bold text-white uppercase tracking-wider leading-none">ASTA Member</div>
              <div className="text-[8px] text-white/40 uppercase tracking-widest leading-none mt-0.5">Travel Advisors</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2 bg-white/3 border border-white/5 rounded-lg shadow-sm">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-3 h-3 fill-[#10b981] text-[#10b981]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold text-white uppercase tracking-wider leading-none">Trustpilot 4.8</div>
              <div className="text-[8px] text-white/40 uppercase tracking-widest leading-none mt-0.5">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Pricing Disclaimers / Legal Fine Print */}
        <div className="text-[10px] text-white/35 leading-relaxed mb-8 border-t border-white/7 pt-8 text-center max-w-[850px] mx-auto">
          <p className="mb-2">
            * Fares listed are round-trip, include fuel surcharges, government taxes, and carrier-imposed fees. All ticket rates are subject to real-time seat availability, booking class limits, and date changes, and cannot be guaranteed until successfully ticketed by the partner airline desk.
          </p>
          <p>
            FlyEz is a registered independent travel seller and accredited provider. Unpublished offline fares and private consolidator discounts are driven by direct booking desk inventory and can vary by caller location and flight selection. Secure checkout utilizes industry-standard 256-bit SSL encryption keys.
          </p>
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
