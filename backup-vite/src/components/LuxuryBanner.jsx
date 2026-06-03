import React from 'react';
import { Award, Compass } from 'lucide-react';

export default function LuxuryBanner() {
  return (
    <section 
      style={{ 
        background: 'linear-gradient(135deg, #070e1b 0%, #0c1b33 100%)', 
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Background radial glow */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="premium-container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Luxury Badge */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 92, 0, 0.1)',
            border: '1px solid rgba(255, 92, 0, 0.25)',
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            color: 'var(--color-orange)',
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '24px'
          }}
        >
          <Award size={14} /> Business & First Class Elite
        </div>

        {/* Content */}
        <h2 
          style={{ 
            fontSize: '42px', 
            fontWeight: '800', 
            fontFamily: 'var(--font-display)', 
            color: '#ffffff', 
            marginBottom: '16px',
            lineHeight: '1.2',
            maxWidth: '700px'
          }}
          className="luxury-title"
        >
          Experiencing the Lap of Luxury
        </h2>
        
        <p 
          style={{ 
            fontSize: '18px', 
            color: 'rgba(255, 255, 255, 0.7)', 
            marginBottom: '36px', 
            maxWidth: '600px',
            lineHeight: '1.6'
          }}
        >
          A Journey Through Business Class Travel. Secure premium cabins at fraction of public prices via offline private contracts.
        </p>

        {/* Button CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <a
            href="tel:1800-521-4263"
            style={{
              padding: '14px 32px',
              borderRadius: 'var(--radius-md)',
              background: '#ffffff',
              color: 'var(--color-primary)',
              fontWeight: '700',
              fontSize: '15px',
              boxShadow: '0 4px 14px rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'var(--transition-normal)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(255,255,255,0.1)';
            }}
          >
            <Compass size={16} /> Explore Elite Fares
          </a>
          
          <a
            href="tel:1800-521-4263"
            style={{
              padding: '14px 32px',
              borderRadius: 'var(--radius-md)',
              background: 'transparent',
              color: '#ffffff',
              border: '1.5px solid rgba(255, 255, 255, 0.3)',
              fontWeight: '700',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              transition: 'var(--transition-normal)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Speak to a Specialist
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .luxury-title {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
