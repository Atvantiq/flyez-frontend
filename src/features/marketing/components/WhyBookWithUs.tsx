'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface Benefit {
  number: string;
  label: string;
  title: string;
  desc: string;
}

export default function WhyBookWithUs() {
  const benefits: Benefit[] = [
    {
      number: "01",
      label: "WHOLESALE ACQUISITION",
      title: "Consolidated Wholesale Rates",
      desc: "We bypass standard retail markups by securing contract rates directly from global airline consolidator desks, matching or beating any online offer."
    },
    {
      number: "02",
      label: "PRIORITY PROCESSING",
      title: "Frictionless Priority Booking",
      desc: "Configure your routing parameters online or call our desk; our priority booking system completes ticket reservations and seat allocations in seconds."
    },
    {
      number: "03",
      label: "CONCIERGE MANAGEMENT",
      title: "Elite Concierge Support",
      desc: "Access a dedicated 24/7 ticketing desk staffed by human flight experts to handle real-time modifications, cancellations, and premium seat setups."
    }
  ];

  return (
    <section className="py-24 bg-[#fafaf9] border-t border-b border-stone-200/50 relative overflow-hidden font-sans">
      <div className="premium-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Rich Editorial Value Pitch */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pr-12 lg:border-r lg:border-stone-200/60">
            <div>
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.25em] block mb-3 font-ui">
                THE FLYEZ PROMISE
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-medium text-brand-primary leading-[1.12] tracking-tight mb-4">
                Smart Flight <br/>Desk Solutions
              </h2>
              <p className="text-brand-text-muted text-sm md:text-base leading-relaxed mt-3">
                FlyEz combines direct GDS airline contracts, wholesale consolidator connections, and 24/7 human expertise to offer flight bookings at rates simply unavailable to the general public.
              </p>
            </div>

            {/* Micro checklist indicators */}
            <div className="flex flex-col gap-4 border-t border-stone-200/55 pt-8">
              {[
                "100% Secure PCI-DSS GDS bookings",
                "Instant PNR ticket confirmations",
                "Zero hidden ticketing or seat fees"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-brand-primary">
                  <Check size={14} className="text-brand-orange shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="font-ui font-semibold text-slate-700 tracking-wide">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Borderless Vertical List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-stone-200/50">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 py-8 first:pt-0 last:pb-0 group"
              >
                {/* Large elegant serif index indicator */}
                <span className="font-display italic text-2xl md:text-3xl text-brand-orange/60 font-medium shrink-0 select-none w-10 md:w-12 pt-0.5">
                  {b.number}
                </span>

                {/* Content Area */}
                <div className="flex-1">
                  {/* Category Details */}
                  <span className="text-[9px] font-extrabold text-slate-400 font-ui tracking-[0.18em] block mb-1">
                    {b.label}
                  </span>

                  {/* Headline */}
                  <h3 className="text-lg md:text-xl font-display font-semibold text-brand-primary tracking-tight leading-snug">
                    {b.title}
                  </h3>

                  {/* Paragraph copy */}
                  <p className="text-brand-text-muted text-xs md:text-sm leading-relaxed mt-2 max-w-xl">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
