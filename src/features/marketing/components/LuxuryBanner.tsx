import React from 'react';
import { Award, Compass } from 'lucide-react';

export default function LuxuryBanner() {
  return (
    <section 
      className="bg-gradient-to-r from-[#070e1b] to-[#0c1b33] py-4.5 sm:py-5.5 relative overflow-hidden border-t border-b border-white/5"
    >
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-radial from-brand-accent/5 to-transparent pointer-events-none"
      />

      <div className="premium-container relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[680px]">
          {/* Luxury Badge */}
          <div className="flex items-center gap-1.5 bg-brand-orange/10 border border-brand-orange/25 py-0.5 px-3 rounded-full text-brand-orange text-[10.5px] font-bold uppercase tracking-wider mb-2 w-fit">
            <Award size={11} /> Business & First Class Elite
          </div>

          {/* Title & Desc */}
          <h2 className="text-[20px] sm:text-[23px] lg:text-[25px] font-extrabold font-display text-white mb-1.5 leading-tight">
            Experiencing the Lap of Luxury
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            A Journey Through Business Class Travel. Secure premium cabins at fraction of public prices via offline private contracts.
          </p>
        </div>

        {/* Right Side: Button CTAs */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-end shrink-0">
          <a
            href="tel:1800-521-4263"
            className="py-1.5 px-4 rounded-md bg-white text-[#070e1b] font-bold text-xs sm:text-sm shadow-[0_4px_12px_rgba(255,255,255,0.08)] flex items-center gap-1.5 transition-all duration-350 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(255,255,255,0.12)]"
          >
            <Compass size={13} /> Explore Elite Fares
          </a>
          
          <a
            href="tel:1800-521-4263"
            className="py-1.5 px-4 rounded-md bg-transparent text-white border border-white/20 font-bold text-xs sm:text-sm flex items-center transition-all duration-350 hover:border-white hover:bg-white/5"
          >
            Speak to a Specialist
          </a>
        </div>

      </div>
    </section>
  );
}
