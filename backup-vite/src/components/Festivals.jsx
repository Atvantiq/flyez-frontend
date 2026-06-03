import React, { useRef } from 'react';
import { CalendarRange, ChevronLeft, ChevronRight, Calendar, ArrowRight, Ticket } from 'lucide-react';

export default function Festivals() {
  const sliderRef = useRef(null);

  const events = [
    {
      name: "Thanksgiving",
      desc: "Fly home for the holidays. Exclusive family group airfares.",
      bg: "linear-gradient(to bottom, rgba(7, 14, 27, 0.2) 0%, rgba(7, 14, 27, 0.8) 60%, rgba(124, 45, 18, 0.95) 100%)",
      image: "https://flyez.ai/assets/img/thanks_giving.jpg",
      glow: "rgba(234, 88, 12, 0.5)",
      color: "#ff5c00", // Warm Orange
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
      bg: "linear-gradient(to bottom, rgba(7, 14, 27, 0.2) 0%, rgba(7, 14, 27, 0.8) 60%, rgba(15, 23, 42, 0.98) 100%)",
      image: "https://flyez.ai/assets/img/black_friday.jpg",
      glow: "rgba(56, 189, 248, 0.45)",
      color: "#38bdf8", // Sky Blue
      date: "Late November",
      url: "https://flyez.ai/cheap-flights-for-black-friday",
      tag: "VIP Access",
      discount: "Save up to $55",
      code: "BLK55",
      from: "LAX",
      to: "JFK"
    },
    {
      name: "St. Patrick's",
      desc: "Travel to top parade cities. Lucky green flight discounts.",
      bg: "linear-gradient(to bottom, rgba(7, 14, 27, 0.2) 0%, rgba(7, 14, 27, 0.8) 60%, rgba(6, 78, 59, 0.95) 100%)",
      image: "https://flyez.ai/assets/img/st_patriks.jpg",
      glow: "rgba(16, 185, 129, 0.5)",
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
      bg: "linear-gradient(to bottom, rgba(7, 14, 27, 0.2) 0%, rgba(7, 14, 27, 0.8) 60%, rgba(131, 24, 67, 0.95) 100%)",
      image: "https://flyez.ai/assets/img/Valentine-day.jpg",
      glow: "rgba(236, 72, 153, 0.5)",
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
      bg: "linear-gradient(to bottom, rgba(7, 14, 27, 0.2) 0%, rgba(7, 14, 27, 0.8) 60%, rgba(59, 7, 100, 0.95) 100%)",
      image: "https://flyez.ai/assets/img/new_year.jpg",
      glow: "rgba(168, 85, 247, 0.5)",
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
      bg: "linear-gradient(to bottom, rgba(7, 14, 27, 0.2) 0%, rgba(7, 14, 27, 0.8) 60%, rgba(30, 58, 138, 0.95) 100%)",
      image: "https://flyez.ai/assets/img/christmas.jpg",
      glow: "rgba(59, 130, 246, 0.5)",
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
      bg: "linear-gradient(to bottom, rgba(7, 14, 27, 0.2) 0%, rgba(7, 14, 27, 0.8) 60%, rgba(67, 20, 7, 0.95) 100%)",
      image: "https://flyez.ai/assets/img/hallowen.jpg",
      glow: "rgba(249, 115, 22, 0.5)",
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

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      style={{ 
        padding: '100px 0', 
        background: 'radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.04) 0%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at 90% 80%, rgba(255, 92, 0, 0.03) 0%, rgba(255, 255, 255, 0) 60%), #ffffff', 
        overflow: 'hidden',
        position: 'relative',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      {/* Subtle Starry/Dot Grid Background */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0.05, 
          backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1.5px)', 
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }} 
      />

      <div className="premium-container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Title Block with Slider Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-orange)', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '2px' }}>
              <CalendarRange size={16} /> Exclusive Seasonal Calendars
            </div>
            <h2 style={{ fontSize: '42px', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', lineHeight: 1.1, fontWeight: 900 }}>Festivals & Special Events</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', marginTop: '6px', maxWidth: '600px' }}>Lock in unpublished flight discounts and special consolidator fares during major holidays.</p>
          </div>
          
          {/* Slider controls */}
          <div style={{ display: 'flex', gap: '12px' }} className="slider-controls">
            <button 
              onClick={() => scroll('left')}
              className="scroll-btn-light"
              aria-label="Scroll left"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1px solid var(--color-border)',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
                cursor: 'pointer',
                transition: 'var(--transition-normal)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <ChevronLeft size={22} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="scroll-btn-light"
              aria-label="Scroll right"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1px solid var(--color-border)',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
                cursor: 'pointer',
                transition: 'var(--transition-normal)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Scroll Slider container */}
        <div 
          ref={sliderRef}
          className="festivals-slider"
          style={{ 
            display: 'flex', 
            gap: '28px', 
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '10px 10px 40px 10px',
            margin: '0 -10px',
            scrollBehavior: 'smooth'
          }}
        >
          {events.map((event, idx) => (
            <a
              key={idx}
              href={event.url}
              className="festival-card-premium"
              style={{
                flex: '0 0 310px',
                scrollSnapAlign: 'start',
                textDecoration: 'none',
                '--hover-glow': event.glow,
                '--event-color': event.color
              }}
            >
              {/* Zooming background image */}
              <div 
                className="festival-card-bg-premium"
                style={{ backgroundImage: `url("${event.image}")` }}
              />
              {/* Mask overlay color */}
              <div 
                className="festival-card-overlay-premium"
                style={{ background: event.bg }}
              />

              {/* Card content */}
              <div className="festival-card-content-premium">
                
                {/* Top Row: Date Pill */}
                <div style={{ display: 'flex', zIndex: 3 }}>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      textTransform: 'uppercase', 
                      background: 'rgba(255, 255, 255, 0.15)', 
                      padding: '6px 12px', 
                      borderRadius: '8px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      letterSpacing: '0.5px',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Calendar size={12} /> {event.date}
                  </span>
                </div>

                {/* Bottom Row: Title, Discount & Description */}
                <div style={{ zIndex: 3, width: '100%' }}>
                  <span style={{ color: event.color, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800, display: 'block', marginBottom: '4px' }}>
                    {event.tag} • {event.discount}
                  </span>
                  
                  <h4 style={{ color: '#ffffff', fontSize: '24px', fontWeight: 800, marginBottom: '6px', fontFamily: 'var(--font-display)', letterSpacing: '-0.3px', lineHeight: 1.2 }}>
                    {event.name}
                  </h4>

                  <p className="festival-card-desc" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '13px', lineHeight: '1.5', marginBottom: '14px' }}>
                    {event.desc}
                  </p>

                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      color: '#ffffff', 
                      fontSize: '13px', 
                      fontWeight: 700,
                      transition: 'color 0.3s ease'
                    }}
                    className="festival-card-link-premium"
                  >
                    Use Code <span style={{ color: event.color }}>{event.code}</span> <ArrowRight size={14} className="festival-arrow-icon" style={{ transition: 'transform 0.3s ease' }} />
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>

      <style>{`
        .festivals-slider {
          scrollbar-width: none; /* Firefox */
        }
        .festivals-slider::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        
        .scroll-btn-light {
          transition: var(--transition-normal) !important;
        }
        .scroll-btn-light:hover {
          border-color: var(--color-orange) !important;
          background-color: var(--color-orange) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow) !important;
        }
        .scroll-btn-light:active {
          transform: translateY(0);
        }

        .festival-card-premium {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #09101d;
          box-shadow: 0 4px 15px rgba(7, 14, 27, 0.03);
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        
        .festival-card-premium::after {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.12) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          transition: 0.75s ease;
          z-index: 2;
          pointer-events: none;
        }

        .festival-card-premium:hover::after {
          left: 150%;
        }

        .festival-card-premium:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(7, 14, 27, 0.08), 0 0 15px var(--hover-glow) !important;
          border-color: var(--event-color) !important;
        }

        .festival-card-bg-premium {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
          opacity: 0.45;
          z-index: 0;
        }
        
        .festival-card-premium:hover .festival-card-bg-premium {
          transform: scale(1.08) rotate(0.5deg);
          opacity: 0.35;
        }

        .festival-card-overlay-premium {
          position: absolute;
          inset: 0;
          z-index: 1;
          transition: var(--transition-normal);
        }
        
        .festival-card-premium:hover .festival-card-overlay-premium {
          background: linear-gradient(to bottom, rgba(7, 14, 27, 0.05) 0%, rgba(7, 14, 27, 0.9) 100%) !important;
        }

        .festival-card-content-premium {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          flex: 1;
          padding: 26px;
        }

        .festival-card-desc {
          transition: var(--transition-normal);
        }

        .festival-card-premium:hover .festival-card-link-premium {
          color: var(--event-color) !important;
        }

        .festival-card-premium:hover .festival-arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
