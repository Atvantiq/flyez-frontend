import React from 'react';
import { DollarSign, Compass, Zap, ShieldCheck } from 'lucide-react';

export default function WhyBookWithUs() {
  const benefits = [
    {
      title: "Best Price Guarantee",
      desc: "At FlyEz.ai, we are committed to providing our customers with the best possible prices for flights. If you find a cheaper fare, we match it.",
      icon: <DollarSign size={28} color="var(--color-accent)" />,
      bg: 'rgba(37, 99, 235, 0.06)',
      glow: 'rgba(37, 99, 235, 0.15)',
      color: 'rgba(37, 99, 235, 0.35)'
    },
    {
      title: "Easy & Quick Booking",
      desc: "Hassle-free booking. Select your routing, configure passengers, and let our engine or agents handle the booking in seconds.",
      icon: <Zap size={28} color="var(--color-orange)" />,
      bg: 'rgba(255, 92, 0, 0.06)',
      glow: 'rgba(255, 92, 0, 0.15)',
      color: 'rgba(255, 92, 0, 0.35)'
    },
    {
      title: "Customer Care 24/7",
      desc: "Exceptional customer service around the clock. We assist with routing modifications, delays, cancellations, and special seat setups.",
      icon: <ShieldCheck size={28} color="#10b981" />,
      bg: 'rgba(16, 185, 129, 0.06)',
      glow: 'rgba(16, 185, 129, 0.15)',
      color: 'rgba(16, 185, 129, 0.35)'
    }
  ];

  return (
    <section 
      style={{ 
        padding: '100px 0', 
        background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.02) 0%, rgba(255, 255, 255, 0) 70%), #f8fafc',
        borderTop: '1px solid var(--color-border)', 
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="premium-container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '38px', fontFamily: 'var(--font-display)', marginBottom: '10px', color: 'var(--color-primary)', fontWeight: 800 }}>Why Book With Us</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>We simplify flight bookings while securing the absolute lowest prices on the market.</p>
        </div>

        {/* Benefits Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {benefits.map((b, idx) => (
            <div 
              key={idx}
              style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '40px 30px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                '--benefit-color': b.color,
                '--benefit-glow': b.glow
              }}
              className="benefit-card"
            >
              {/* Icon Container */}
              <div 
                className="benefit-icon-container"
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: b.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  transition: 'var(--transition-normal)'
                }}
              >
                {b.icon}
              </div>

              {/* Information */}
              <h4 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '14px', color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>{b.title}</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '14.5px', lineHeight: '1.6' }}>{b.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .benefit-card {
          transition: all 0.45s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .benefit-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 40px rgba(7, 14, 27, 0.06) !important;
          border-color: var(--benefit-color) !important;
        }
        .benefit-card:hover .benefit-icon-container {
          transform: scale(1.12) rotate(8deg);
          box-shadow: 0 0 20px var(--benefit-glow);
        }
      `}</style>
    </section>
  );
}
