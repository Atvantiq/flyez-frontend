'use client';

import React, { useState } from 'react';
import { Tag, X, PhoneCall, Copy, Check } from 'lucide-react';

export default function PromoAlert() {
  const [isVisible, setIsVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('FLYEZ24');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#070e1b] via-[#1e3a8a] to-[#0c1c3a] text-white py-3 px-6 text-[13.5px] font-medium flex items-center justify-center relative z-[100] shadow-[0_2px_12px_rgba(7,14,27,0.2)] border-b border-white/5 text-center pr-12 md:pr-6">
      <div className="flex items-center justify-center flex-wrap gap-y-2.5 gap-x-5 w-full max-w-[1100px]">
        {/* Deal Tag */}
        <div className="flex items-center gap-2">
          <Tag size={15} className="text-brand-orange fill-brand-orange" />
          <span className="text-white/90">
            Save up to <strong>$24</strong> on flight booking fees with code:
          </span>
          <span 
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-[6px] cursor-pointer text-xs font-bold transition-all duration-200 select-none hover:bg-white/15 hover:scale-[1.03] ${
              copied 
                ? 'text-brand-success bg-white/8 border border-dashed border-brand-success/40' 
                : 'text-brand-orange bg-white/8 border border-dashed border-brand-orange/40'
            }`}
            title="Click to copy coupon code"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? 'COPIED!' : 'FLYEZ24'}
          </span>
        </div>

        {/* Separator on desktop */}
        <span className="opacity-25 hidden md:inline-block">|</span>

        {/* Direct Call promo */}
        <a 
          href="tel:1800-521-4263" 
          className="flex items-center gap-2 text-white no-underline font-bold transition-colors duration-200 hover:text-brand-orange"
        >
          <PhoneCall size={13} className="text-brand-orange" />
          <span>Get Unpublished Phone-Only Deals: <span className="underline text-brand-orange">1800-521-4263</span></span>
        </a>
      </div>

      {/* Dismiss button */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-60 p-1 flex items-center justify-center transition-opacity duration-200 hover:opacity-100"
        aria-label="Dismiss alert"
      >
        <X size={15} />
      </button>
    </div>
  );
}
