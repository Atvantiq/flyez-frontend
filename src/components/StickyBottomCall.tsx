'use client';

import React, { useState, useEffect } from 'react';
import { Phone, X, ShieldCheck } from 'lucide-react';

export default function StickyBottomCall() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the bar after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-[#ff5c00] text-white py-3 px-4 md:px-6 shadow-[0_-8px_30px_rgba(255,92,0,0.22)] border-t border-brand-orange-hover flex items-center justify-between gap-4 animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)] select-none">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 animate-pulse">
          <Phone size={18} className="text-white fill-white" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-white/90 flex items-center gap-1">
            <ShieldCheck size={12} className="inline" /> Special Offline Offer
          </span>
          <span className="text-xs md:text-sm font-extrabold tracking-tight truncate">
            Save an Extra $30 On Flight Fees! Call: <a href="tel:1800-521-4263" className="underline hover:text-slate-100">1800-521-4263</a>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <a
          href="tel:1800-521-4263"
          className="bg-white text-[#ff5c00] hover:bg-slate-50 transition-colors py-1.5 px-4 rounded-full text-xs font-black shadow-md uppercase font-ui tracking-wider"
        >
          Call Now
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white/70 hover:text-white p-1 transition-colors rounded-full hover:bg-white/10"
          aria-label="Close offer bar"
        >
          <X size={16} />
        </button>
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
