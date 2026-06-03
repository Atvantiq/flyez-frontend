import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Plane } from 'lucide-react';

export default function SubscriptionBanner() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section 
      style={{ 
        padding: '100px 0', 
        backgroundColor: '#070e1b', 
        position: 'relative', 
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Dynamic Ambient Glow Effects */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '-20%', 
          left: '-10%', 
          width: '50%', 
          height: '140%', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }} 
      />
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '-30%', 
          right: '-10%', 
          width: '50%', 
          height: '140%', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle at center, rgba(255, 92, 0, 0.12) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }} 
      />

      <div className="premium-container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* High-Energy Glassmorphic Subscription Card */}
        <div 
          style={{
            background: 'rgba(13, 27, 62, 0.45)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1.5px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(37, 99, 235, 0.08)',
            position: 'relative'
          }}
          className="sub-banner-grid-premium"
        >
          {/* Decorative Flight Trail SVG Layer */}
          <div 
            style={{ 
              position: 'absolute', 
              inset: 0, 
              opacity: 0.1, 
              pointerEvents: 'none',
              overflow: 'hidden'
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 800 300" fill="none" preserveAspectRatio="none">
              <path d="M-50,220 C150,180 350,260 550,140 C650,80 750,120 850,50" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="6 6" />
            </svg>
          </div>

          {/* Left: Travel Visual Gradient Panel with canyon background */}
          <div 
            style={{
              background: 'linear-gradient(135deg, rgba(7, 14, 27, 0.75) 0%, rgba(37, 99, 235, 0.45) 100%), url("https://flyez.ai/assets/img/slider-bg-img.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '60px 50px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '300px',
              position: 'relative',
              zIndex: 1,
              borderRight: '1.5px solid rgba(255, 255, 255, 0.08)'
            }}
            className="sub-left-panel"
          >
            {/* Flying Mini Plane Icon */}
            <div 
              style={{
                position: 'absolute',
                top: '20px',
                right: '40px',
                color: 'var(--color-orange)',
                opacity: 0.8,
                animation: 'planeFloat 4s ease-in-out infinite'
              }}
              className="sub-plane-icon"
            >
              <Plane size={24} style={{ transform: 'rotate(45deg)' }} />
            </div>

            <span style={{ fontSize: '11px', color: 'var(--color-orange)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '3px', display: 'block', marginBottom: '12px' }}>
              VIP Fare Alerts
            </span>
            <h3 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 800, marginBottom: '20px', fontFamily: 'var(--font-display)', lineHeight: 1.2, letterSpacing: '-1px' }}>
              Your Next Journey Starts Here
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px', opacity: 0.95 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-orange)', flexShrink: 0 }} /> 
                <span>Unpublished private flight rate drops</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-orange)', flexShrink: 0 }} /> 
                <span>Secret airline discounts directly in your inbox</span>
              </li>
            </ul>
          </div>

          {/* Right: Email Signup Form */}
          <div style={{ padding: '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
            <h4 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '8px', fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}>
              Unlock Member-Only Deals
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14.5px', marginBottom: '32px', lineHeight: 1.6 }}>
              Join the FlyEz newsletter and receive exclusive flight promotional codes and flash travel warnings.
            </p>
            
            {success ? (
              <div 
                style={{ 
                  padding: '20px', 
                  borderRadius: '12px', 
                  background: 'rgba(16, 185, 129, 0.12)', 
                  border: '1.5px dashed rgba(16, 185, 129, 0.4)', 
                  color: '#34d399', 
                  fontSize: '15px', 
                  fontWeight: 700,
                  textAlign: 'center',
                  boxShadow: '0 10px 20px rgba(16, 185, 129, 0.05)',
                  animation: 'fadeIn 0.4s ease'
                }}
              >
                ✓ Subscription Successful! Watch your inbox.
              </div>
            ) : (
              <form 
                onSubmit={handleSubscribe}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1.5px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '6px',
                  transition: 'all 0.35s ease',
                  position: 'relative'
                }}
                className="email-input-capsule-premium"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, paddingLeft: '14px' }}>
                  <Mail size={18} style={{ color: 'rgba(255, 255, 255, 0.45)' }} />
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      outline: 'none',
                      fontSize: '15px',
                      color: '#ffffff',
                      padding: '12px 0'
                    }}
                  />
                </div>
                
                <button 
                  type="submit"
                  style={{
                    padding: '12px 28px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--color-orange)',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '14px',
                    boxShadow: 'var(--shadow-glow)',
                    transition: 'var(--transition-normal)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  className="sub-button-premium-bold"
                >
                  Join VIP <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @keyframes planeFloat {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-6px) rotate(48deg); }
        }
        
        .email-input-capsule-premium:focus-within {
          border-color: var(--color-orange) !important;
          box-shadow: 0 0 20px rgba(255, 92, 0, 0.3) !important;
          background-color: rgba(255, 255, 255, 0.06) !important;
        }
        
        .sub-button-premium-bold:hover {
          background-color: var(--color-orange-hover) !important;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 20px rgba(255, 92, 0, 0.45) !important;
        }
        
        .sub-banner-grid-premium {
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        
        .sub-banner-grid-premium:hover {
          transform: translateY(-4px);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5), 0 0 50px rgba(37, 99, 235, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }

        @media (max-width: 768px) {
          .sub-left-panel {
            border-right: none !important;
            border-bottom: 1.5px solid rgba(255, 255, 255, 0.08) !important;
          }
        }
      `}</style>
    </section>
  );
}
