import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      style={{ 
        background: 'linear-gradient(180deg, #070e1b 0%, #03070f 100%)', 
        color: '#ffffff', 
        paddingTop: '80px', 
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Dynamic Ambient Background Glow */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '-10%', 
          left: '5%', 
          width: '35%', 
          height: '60%', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }} 
      />

      <div className="premium-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="footer-logo-link">
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease'
                }}
                className="footer-logo-icon"
              >
                <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                  {/* Main wing swoop */}
                  <path d="M2 30C8 30 26 20 30 2C16 6 10 14 2 30Z" fill="#ffffff" />
                  {/* Secondary wing swoop */}
                  <path d="M7 30C12 30 24 22 28 8C16 12 12 18 7 30Z" fill="#ff5c00" />
                </svg>
              </div>
              <span style={{ fontSize: '22px', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#ffffff', letterSpacing: '-0.5px' }}>
                Fly<span style={{ color: 'var(--color-orange)' }}>Ez</span>
              </span>
            </a>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', lineHeight: '1.7' }}>
              Unlock unbeatable rates on global flights. We combine AI-driven itinerary planning with exclusive offline ticket deals to simplify your journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '24px', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px' }} className="footer-links-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '24px', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px' }}>Support 24/7</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--color-orange)" style={{ flexShrink: 0 }} />
                <a href="tel:1800-521-4263" style={{ color: 'inherit', fontWeight: '700', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#ffffff'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.65)'}>1800-521-4263</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--color-orange)" style={{ flexShrink: 0 }} />
                <a href="mailto:help@flyez.ai" style={{ color: 'inherit', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#ffffff'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.65)'}>help@flyez.ai</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ lineHeight: '1.5' }}>USA Flight Reservation Center, 120 Sansome St, San Francisco, CA 94104</span>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '24px', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px' }}>Exclusive Deals</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '13.5px', marginBottom: '18px', lineHeight: 1.6 }}>
              Subscribe to get secret discount codes and unpublished flight offers.
            </p>
            <form 
              onSubmit={(e) => e.preventDefault()} 
              style={{ 
                display: 'flex', 
                background: 'rgba(255, 255, 255, 0.04)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '12px', 
                padding: '4px',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              className="footer-newsletter-capsule"
            >
              <input 
                type="email" 
                placeholder="Email Address" 
                style={{ 
                  flex: 1, 
                  background: 'none', 
                  border: 'none', 
                  color: '#ffffff', 
                  fontSize: '14px', 
                  padding: '8px 12px',
                  width: '60%'
                }} 
              />
              <button 
                type="submit" 
                style={{ 
                  background: 'var(--color-orange)', 
                  color: '#ffffff', 
                  borderRadius: '8px', 
                  width: '36px', 
                  height: '36px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-glow)',
                  transition: 'var(--transition-normal)'
                }}
                className="footer-newsletter-btn"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.07)', marginBottom: '35px' }} />

        {/* Bottom Panel */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.45)' }}>
            &copy; {new Date().getFullYear()} FlyEz. All rights reserved. Registered travel provider IATA accredited partner.
          </p>
          
          {/* Custom SVG Payment Badges */}
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px' }}>Secured booking via</span>
            
            {/* High-energy premium payment badges */}
            <div style={{ display: 'flex', gap: '8px' }} className="payment-badges-row">
              <div className="payment-badge border-visa">VISA</div>
              <div className="payment-badge border-mc">MC</div>
              <div className="payment-badge border-amex">AMEX</div>
              <div className="payment-badge border-disc">DISC</div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .footer-logo-link:hover .footer-logo-icon {
          transform: scale(1.08) rotate(3deg);
        }
        
        .footer-links-list a {
          color: rgba(255, 255, 255, 0.65);
          position: relative;
          padding: 2px 0;
          transition: color 0.25s ease;
        }
        
        .footer-links-list a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--color-orange);
          transition: width 0.25s ease;
        }
        
        .footer-links-list a:hover {
          color: #ffffff;
        }
        
        .footer-links-list a:hover::after {
          width: 100%;
        }

        .footer-newsletter-capsule:focus-within {
          border-color: var(--color-orange) !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
          box-shadow: 0 0 15px rgba(255, 92, 0, 0.15);
        }
        
        .footer-newsletter-btn:hover {
          background-color: var(--color-orange-hover) !important;
          transform: translateY(-1px);
        }

        .payment-badges-row .payment-badge {
          width: 44px;
          height: 26px;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justifyContent: center;
          font-size: 9px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
          cursor: default;
        }

        .payment-badges-row .payment-badge:hover {
          color: #ffffff;
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.06);
        }

        .payment-badges-row .border-visa:hover {
          border-color: #2563eb;
          box-shadow: 0 0 10px rgba(37, 99, 235, 0.3);
        }

        .payment-badges-row .border-mc:hover {
          border-color: #ff5c00;
          box-shadow: 0 0 10px rgba(255, 92, 0, 0.3);
        }

        .payment-badges-row .border-amex:hover {
          border-color: #06b6d4;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
        }

        .payment-badges-row .border-disc:hover {
          border-color: #e11d48;
          box-shadow: 0 0 10px rgba(225, 29, 72, 0.3);
        }
      `}</style>
    </footer>
  );
}
