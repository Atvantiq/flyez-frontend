'use client';

import React, { useRef } from 'react';
import { CalendarRange, ChevronLeft, ChevronRight, Calendar, ArrowRight, Ticket, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface Event {
  name: string;
  desc: string;
  image: string;
  color: string;
  date: string;
  url: string;
  tag: string;
  discount: string;
  code: string;
  from: string;
  to: string;
}

export default function Festivals() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const events: Event[] = [
    {
      name: "Thanksgiving",
      desc: "Fly home for the holidays. Exclusive family group airfares.",
      image: "https://flyez.ai/assets/img/thanks_giving.jpg",
      color: "#ff5c00", // Brand Orange
      date: "Late November",
      url: "https://flyez.ai/cheap-flights-for-thanksgiving-travel",
      tag: "Harvest Special",
      discount: "Save up to $45",
      code: "THG45",
      from: "ORD",
      to: "MIA"
    },
    {
      name: "Black Friday",
      desc: "Massive fare cuts. Get secret consolidator coupon rates.",
      image: "https://flyez.ai/assets/img/black_friday.jpg",
      color: "#2563eb", // Brand Accent
      date: "Late November",
      url: "https://flyez.ai/cheap-flights-for-black-friday",
      tag: "VIP Access",
      discount: "Save up to $55",
      code: "BLK55",
      from: "LAX",
      to: "JFK"
    },
    {
      name: "St. Patrick's Day",
      desc: "Travel to top parade cities. Lucky green flight discounts.",
      image: "https://flyez.ai/assets/img/st_patriks.jpg",
      color: "#10b981", // Shamrock Green
      date: "March 17",
      url: "https://flyez.ai/st-patricks-day-flight-deals",
      tag: "Lucky Fare",
      discount: "Save up to $35",
      code: "STP35",
      from: "BOS",
      to: "DUB"
    },
    {
      name: "Valentine's Day",
      desc: "Romantic couple getaways. 2-for-1 private airfares.",
      image: "https://flyez.ai/assets/img/Valentine-day.jpg",
      color: "#ec4899", // Rose Pink
      date: "February 14",
      url: "https://flyez.ai/cheap-flights-for-valentines-day",
      tag: "Sweetheart Rates",
      discount: "Save up to $50",
      code: "VAL50",
      from: "JFK",
      to: "CDG"
    },
    {
      name: "New Year Eve",
      desc: "Celebrate in NYC or London. Last-minute seat allocations.",
      image: "https://flyez.ai/assets/img/new_year.jpg",
      color: "#a855f7", // Royal Violet
      date: "December 31",
      url: "https://flyez.ai/new-year-travel-flight-deals",
      tag: "Countdown Deal",
      discount: "Save up to $60",
      code: "NYE60",
      from: "SFO",
      to: "LHR"
    },
    {
      name: "Christmas Travel",
      desc: "Secure discount seats for winter holidays. Festive airfares.",
      image: "https://flyez.ai/assets/img/christmas.jpg",
      color: "#3b82f6", // Electric Blue
      date: "Late December",
      url: "https://flyez.ai/cheap-flights-for-christmas-travel",
      tag: "Holiday Secret",
      discount: "Save up to $40",
      code: "XMAS40",
      from: "JFK",
      to: "DEL"
    },
    {
      name: "Halloween Day",
      desc: "Spooky good discount flight rates. Fall getaway specials.",
      image: "https://flyez.ai/assets/img/hallowen.jpg",
      color: "#f97316", // Pumpkin Orange
      date: "Late October",
      url: "https://flyez.ai/cheap-flights-for-halloween",
      tag: "Fright-Free Fare",
      discount: "Save up to $30",
      code: "HWN30",
      from: "SEA",
      to: "MCO"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const copyCode = (e: React.MouseEvent, code: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="py-24 bg-white dark:bg-brand-primary border-t border-b border-brand-border dark:border-gray-800 overflow-hidden relative">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(circle,var(--color-brand-primary)_1px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="premium-container relative z-10">
        
        {/* Title Block with Slider Controls */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-brand-orange text-xs font-extrabold uppercase tracking-widest mb-3">
              <CalendarRange size={16} /> Exclusive Seasonal Calendars
            </div>
            <h2 className="text-4xl font-display font-black text-brand-primary dark:text-white leading-tight">
              Festivals & Special Events
            </h2>
            <p className="text-brand-text-muted dark:text-gray-400 text-base max-w-xl mt-2">
              Lock in unpublished flight discounts and special consolidator fares during major holidays.
            </p>
          </div>
          
          {/* Slider controls */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-brand-border dark:border-gray-800 bg-white dark:bg-brand-primary-light flex items-center justify-center text-brand-primary dark:text-white cursor-pointer transition-all duration-300 hover:bg-brand-orange hover:border-brand-orange hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,92,0,0.25)] active:translate-y-0"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-brand-border dark:border-gray-800 bg-white dark:bg-brand-primary-light flex items-center justify-center text-brand-primary dark:text-white cursor-pointer transition-all duration-300 hover:bg-brand-orange hover:border-brand-orange hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,92,0,0.25)] active:translate-y-0"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scroll Slider container */}
        <div 
          ref={sliderRef}
          className="flex gap-7 overflow-x-auto snap-x snap-mandatory py-4 px-1 -mx-4 scrollbar-none scroll-smooth"
        >
          {events.map((event, idx) => (
            <motion.a
              key={idx}
              href={event.url}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="flex-[0_0_310px] snap-start relative flex flex-col justify-between overflow-hidden rounded-2xl min-h-[380px] bg-slate-900 border border-slate-800/60 shadow-md hover:shadow-xl cursor-pointer group transition-all duration-300"
            >
              {/* Subtle top indicator line matching the theme color */}
              <div className="absolute top-0 inset-x-0 h-1 z-20" style={{ backgroundColor: event.color }} />

              {/* Background image with overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 opacity-75 group-hover:scale-105 group-hover:opacity-85 z-0"
                style={{ backgroundImage: `url("${event.image}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950/90 z-10 transition-all duration-300 group-hover:via-slate-950/15 group-hover:to-slate-950/85" />

              {/* Content layer */}
              <div className="relative z-20 flex flex-col justify-between h-full flex-1 p-6">
                
                {/* Top Row: Date Pill */}
                <div className="flex">
                  <span className="text-[10px] font-extrabold uppercase bg-slate-950/40 text-white px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/20 tracking-wider flex items-center gap-1.5">
                    <Calendar size={12} /> {event.date}
                  </span>
                </div>

                {/* Bottom Row: Title, Discount & Description */}
                <div className="w-full">
                  <span 
                    className="text-[10px] uppercase tracking-wider font-extrabold block mb-1" 
                    style={{ 
                      color: event.color,
                      textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    {event.tag} • {event.discount}
                  </span>
                  
                  <h4 
                    className="text-white text-2xl font-display font-black mb-2 tracking-tight leading-snug"
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.7)' }}
                  >
                    {event.name}
                  </h4>

                  <p 
                    className="text-white/85 text-xs leading-relaxed mb-4 group-hover:text-white transition-colors"
                    style={{ textShadow: '0 1px 6px rgba(0,0,0,0.85)' }}
                  >
                    {event.desc}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-white font-bold">
                      Code: <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white" style={{ color: event.color }}>{event.code}</span>
                    </div>

                    <button
                      onClick={(e) => copyCode(e, event.code)}
                      className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1.5 rounded-md transition-colors border border-white/10"
                    >
                      {copiedCode === event.code ? (
                        <>
                          <Check size={11} className="text-green-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Ticket size={11} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>

              {/* Shimmer Overlay effect */}
              <div className="absolute top-0 -left-[150%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-[-25deg] transition-all duration-[750ms] group-hover:left-[150%] pointer-events-none z-30" />

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
