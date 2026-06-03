import React from 'react';
import { ArrowRight, Plane, Info, Sparkles } from 'lucide-react';

export default function TrendingDeals() {
  const deals = [
    {
      origin: "JFK",
      originCity: "New York",
      destination: "BOM",
      destinationCity: "Mumbai",
      price: 899,
      type: "round",
      dates: "Nov 12 - Nov 28",
      carrier: "Air India",
      class: "ECONOMY CLASS",
      color: "var(--color-orange)",
      glow: "rgba(255, 92, 0, 0.15)"
    },
    {
      origin: "SFO",
      originCity: "San Francisco",
      destination: "DEL",
      destinationCity: "Delhi",
      price: 849,
      type: "round",
      dates: "Dec 05 - Dec 20",
      carrier: "United Airlines",
      class: "ECONOMY CABIN",
      color: "var(--color-accent)",
      glow: "rgba(37, 99, 235, 0.15)"
    },
    {
      origin: "LAX",
      originCity: "Los Angeles",
      destination: "LHR",
      destinationCity: "London",
      price: 599,
      type: "round",
      dates: "Nov 10 - Nov 24",
      carrier: "British Airways",
      class: "PROMO CABIN",
      color: "#10b981",
      glow: "rgba(16, 185, 129, 0.15)"
    },
    {
      origin: "JFK",
      originCity: "New York",
      destination: "DEL",
      destinationCity: "Delhi",
      price: 899,
      type: "round",
      dates: "Nov 18 - Dec 02",
      carrier: "Delta Air Lines",
      class: "ECONOMY CLASS",
      color: "#8b5cf6",
      glow: "rgba(139, 92, 246, 0.15)"
    },
    {
      origin: "ORD",
      originCity: "Chicago",
      destination: "BOM",
      destinationCity: "Mumbai",
      price: 899,
      type: "round",
      dates: "Dec 01 - Dec 18",
      carrier: "Emirates",
      class: "ECONOMY SAVER",
      color: "#ec4899",
      glow: "rgba(236, 72, 153, 0.15)"
    },
    {
      origin: "LAX",
      originCity: "Los Angeles",
      destination: "BOM",
      destinationCity: "Mumbai",
      price: 899,
      type: "round",
      dates: "Jan 10 - Jan 28",
      carrier: "Qatar Airways",
      class: "ECONOMY CLASS",
      color: "#0f172a",
      glow: "rgba(15, 23, 42, 0.15)"
    }
  ];

  const handleDealClick = (deal) => {
    const params = new URLSearchParams({
      tp: deal.type,
      couch: 'E',
      d1: deal.origin,
      ar1: deal.destination,
      adult: '1',
      children: '0',
      infant: '0'
    });

    const currentYear = new Date().getFullYear();
    params.append('dt1', `11/12/${currentYear}`);
    if (deal.type === 'round') {
      params.append('ardt1', `11/18/${currentYear}`);
    }

    window.location.href = `https://flyez.ai/flight-listing?${params.toString()}`;
  };

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <div className="premium-container">
        
        {/* Title Block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '60px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-orange)', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '2px' }}>
              <Sparkles size={16} /> Exclusive Fares
            </div>
            <h2 style={{ fontSize: '38px', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', lineHeight: 1.2, fontWeight: 800 }}>
              Popular Routes
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', marginTop: '4px' }}>
              We compile unpublished rates on popular domestic and international routes. Select a ticket to search instantly.
            </p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-text-muted)', background: 'var(--color-bg-light)', padding: '10px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
            <Info size={14} color="var(--color-accent)" /> <span>Prices include all terminal taxes & consolidator fees</span>
          </div>
        </div>

        {/* Tickets Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '30px' }}>
          {deals.map((deal, idx) => (
            <div
              key={idx}
              onClick={() => handleDealClick(deal)}
              className="boarding-pass-premium animate-fade-in"
              style={{
                display: 'flex',
                background: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '16px', // Modern clean edge
                minHeight: '180px',
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                '--deal-color': deal.color,
                '--deal-glow': deal.glow
              }}
            >
              {/* Colored Side Stripe */}
              <div style={{ width: '6px', backgroundColor: deal.color }} />

              {/* Left Side: Ticket Itinerary */}
              <div style={{ flex: 1, padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {/* Cabin Category Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: deal.color, letterSpacing: '0.5px' }}>
                      {deal.class}
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                      {deal.type === 'round' ? 'Round Trip' : 'One Way'}
                    </span>
                  </div>

                  {/* Airport codes & Sliding flight path */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0 4px 0' }}>
                    <span style={{ fontSize: '26px', fontWeight: '900', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', letterSpacing: '-0.5px' }}>
                      {deal.origin}
                    </span>
                    
                    {/* Animated path dotted line */}
                    <div style={{ flex: 1, height: '1px', borderBottom: '1.5px dashed var(--color-border)', margin: '0 8px', position: 'relative', minWidth: '40px' }}>
                      <div 
                        className="deal-plane-flight"
                        style={{ 
                          position: 'absolute', 
                          left: '10%', 
                          top: '50%', 
                          transform: 'translate(-50%, -50%) rotate(90deg)', 
                          color: deal.color,
                          transition: 'left 0.7s cubic-bezier(0.25, 1, 0.5, 1)'
                        }}
                      >
                        <Plane size={11} fill="currentColor" />
                      </div>
                    </div>

                    <span style={{ fontSize: '26px', fontWeight: '900', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', letterSpacing: '-0.5px' }}>
                      {deal.destination}
                    </span>
                  </div>
                  
                  {/* City labels */}
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    {deal.originCity} to {deal.destinationCity}
                  </div>
                </div>

                {/* Carrier info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--color-primary)', fontWeight: 700, marginTop: '10px' }}>
                  <Plane size={12} color={deal.color} />
                  <span>{deal.carrier}</span>
                </div>
              </div>

              {/* Ticket Coupon Separator (Dashed vertical line + cutout notches) */}
              <div style={{ position: 'relative', width: '2px', borderLeft: '2px dashed var(--color-border)', margin: '15px 0' }}>
                <div style={{ position: 'absolute', top: '-23px', left: '-9px', width: '16px', height: '16px', background: '#ffffff', borderRadius: '50%', border: '1px solid var(--color-border)', borderTopColor: 'transparent', transform: 'rotate(135deg)' }} />
                <div style={{ position: 'absolute', bottom: '-23px', left: '-9px', width: '16px', height: '16px', background: '#ffffff', borderRadius: '50%', border: '1px solid var(--color-border)', borderBottomColor: 'transparent', transform: 'rotate(135deg)' }} />
              </div>

              {/* Right Side: Price & Barcode details */}
              <div style={{ width: '125px', padding: '24px 14px', background: 'radial-gradient(circle at 50% 50%, rgba(7, 14, 27, 0.01) 0%, rgba(7, 14, 27, 0.03) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
                
                {/* Boarding Date */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '9px', color: 'var(--color-text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>BOARDING</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', marginTop: '2px' }}>{deal.dates.split(' - ')[0]}</span>
                </div>

                {/* Price Display */}
                <div>
                  <span style={{ fontSize: '9px', color: 'var(--color-text-muted)', display: 'block', fontWeight: 700 }}>FROM</span>
                  <span style={{ fontSize: '32px', fontWeight: '900', color: 'var(--color-orange)', fontFamily: 'var(--font-display)', lineHeight: 0.9 }}>
                    <span style={{ fontSize: '16px', verticalAlign: 'super', marginRight: '1px', fontWeight: 800 }}>$</span>
                    {deal.price}
                  </span>
                </div>

                {/* Micro Barcode placeholder representing a real ticket */}
                <div style={{ display: 'flex', gap: '2px', height: '14px', width: '64px', opacity: 0.35 }} title="Book Private Flight Deal">
                  {[1.5, 3, 1, 2.5, 1, 4, 1.5, 2, 1, 3].map((w, idx) => (
                    <div key={idx} style={{ flexGrow: w, height: '100%', backgroundColor: '#000000' }} />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .boarding-pass-premium {
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        .boarding-pass-premium::after {
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

        .boarding-pass-premium:hover::after {
          left: 150%;
        }

        .boarding-pass-premium:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(7, 14, 27, 0.08), 0 0 15px var(--deal-glow) !important;
          border-color: var(--deal-color) !important;
        }

        /* Plane moves across flight line */
        .boarding-pass-premium:hover .deal-plane-flight {
          left: 80% !important;
        }
      `}</style>
    </section>
  );
}
