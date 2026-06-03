import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Globe, Ticket } from 'lucide-react';

export default function AirlinePartners() {
  const airlines = [
    { name: "American Airlines", code: "AA", alliance: "Oneworld Alliance", deal: "Secret Domestic Deals", color: "#0078d2", glow: "rgba(0,120,210,0.15)" },
    { name: "United Airlines", code: "UA", alliance: "Star Alliance Member", deal: "Europe Direct Flights", color: "#192a56", glow: "rgba(25,42,86,0.15)" },
    { name: "Delta Air Lines", code: "DL", alliance: "SkyTeam Alliance", deal: "Special Private Fares", color: "#e01933", glow: "rgba(224,25,51,0.15)" },
    { name: "British Airways", code: "BA", alliance: "Oneworld Alliance", deal: "London Direct Specials", color: "#00205b", glow: "rgba(0,32,91,0.15)" },
    { name: "Lufthansa", code: "LH", alliance: "Star Alliance Member", deal: "Transatlantic Deals", color: "#001f3f", glow: "rgba(0,31,63,0.15)" },
    { name: "Qatar Airways", code: "QR", alliance: "Oneworld Alliance", deal: "5-Star Premium Fares", color: "#5a002c", glow: "rgba(90,0,44,0.15)" },
    { name: "Emirates", code: "EK", alliance: "Global Partner", deal: "Luxury Cabin Rates", color: "#ff0000", glow: "rgba(255,0,0,0.15)" },
    { name: "Singapore Airlines", code: "SQ", alliance: "Star Alliance Member", deal: "Asia Route Specials", color: "#cca353", glow: "rgba(204,163,83,0.15)" }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="premium-container">
        
        {/* Grid Layout separating Trust panel and Airlines Directory */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '60px',
            alignItems: 'start'
          }}
          className="airlines-trust-grid"
        >
          {/* Left Column: Trust, IATA Accreditations, ASTA and ARC */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <span 
                style={{ 
                  fontSize: '11px', 
                  fontWeight: 800, 
                  color: 'var(--color-orange)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}
              >
                Global Ticketing Desk
              </span>
              <h2 style={{ fontSize: '38px', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', lineHeight: 1.2, fontWeight: 800, marginBottom: '16px' }}>
                Accredited Booking Partner
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15.5px', lineHeight: '1.6' }}>
                FlyEz is a registered flight reservation platform providing direct ticketing access through Oneworld, SkyTeam, and Star Alliance networks.
              </p>
            </div>

            {/* Trustpilot Score Block */}
            <div 
              style={{
                background: 'radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.03) 0%, rgba(255,255,255,0) 60%), #f8fafc',
                borderRadius: 'var(--radius-lg)',
                padding: '24px 30px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" className="tp-star-gold">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '4px' }}>
                Excellent <span style={{ color: '#00b67a' }}>4.8 / 5</span> Trust rating
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                Averified service with 12,490+ passenger recommendations.
              </p>
            </div>

            {/* Accreditation details badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: "IATA Accredited Desk", desc: "Certified ticketing operations following strict global civil aviation standards.", id: "IATA-8495" },
                { title: "ARC Bonded Agency", desc: "Airlines Reporting Corporation certification for flight security clearance.", id: "ARC-7201" },
                { title: "SSL Secure GDS Desk", desc: "256-bit SSL encrypted connection straight to primary airline booking hosts.", id: "Direct GDS" }
              ].map((acc, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.08)', color: '#10b981', flexShrink: 0 }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {acc.title}
                      <span style={{ fontSize: '10px', background: 'var(--color-border)', color: 'var(--color-text-muted)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>{acc.id}</span>
                    </h5>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '2px', lineHeight: '1.4' }}>{acc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Airline Cards Directory Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '-5px' }}>
              Direct Airline Partners Grid
            </span>

            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                gap: '16px' 
              }}
              className="airlines-grid"
            >
              {airlines.map((a, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '20px',
                    borderRadius: '12px',
                    background: '#ffffff',
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 2px 8px rgba(7, 14, 27, 0.02)',
                    transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'default',
                    '--airline-color': a.color,
                    '--airline-glow': a.glow
                  }}
                  className="airline-card-premium"
                >
                  {/* Glowing background airline code */}
                  <div 
                    style={{ 
                      position: 'absolute', 
                      right: '10px', 
                      bottom: '-15px', 
                      fontSize: '64px', 
                      fontWeight: 900, 
                      color: 'rgba(7, 14, 27, 0.02)', 
                      fontFamily: 'var(--font-display)',
                      userSelect: 'none',
                      pointerEvents: 'none',
                      transition: 'transform 0.4s ease'
                    }}
                    className="airline-bg-code"
                  >
                    {a.code}
                  </div>

                  {/* Top content */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span 
                        style={{ 
                          fontSize: '11px', 
                          fontWeight: 800, 
                          color: '#ffffff', 
                          backgroundColor: a.color,
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-display)',
                          boxShadow: `0 3px 6px ${a.glow}`
                        }}
                      >
                        {a.code}
                      </span>
                      <span style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: 600 }}>{a.alliance}</span>
                    </div>

                    <h4 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '4px' }}>
                      {a.name}
                    </h4>
                  </div>

                  {/* Bottom: Special deal badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: a.color, fontWeight: 700, marginTop: '16px', zIndex: 1 }}>
                    <Ticket size={12} />
                    <span>{a.deal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .airline-card-premium {
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .airline-card-premium:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(7, 14, 27, 0.06), 0 0 15px var(--airline-glow) !important;
          border-color: var(--airline-color) !important;
        }
        .airline-card-premium:hover .airline-bg-code {
          transform: scale(1.15) translateY(-2px);
          color: rgba(7, 14, 27, 0.035) !important;
        }
      `}</style>
    </section>
  );
}
