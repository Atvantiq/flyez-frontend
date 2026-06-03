import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, User } from 'lucide-react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: isSticky ? 'rgba(255, 255, 255, 0.92)' : '#ffffff',
        backdropFilter: isSticky ? 'blur(12px)' : 'none',
        borderBottom: isSticky ? '1px solid rgba(226, 232, 240, 0.8)' : '1px solid #f1f5f9',
        boxShadow: isSticky ? '0 4px 20px -4px rgba(11, 26, 48, 0.05)' : 'none',
        transition: 'var(--transition-normal)',
        padding: '16px 0',
      }}
    >
      <div className="premium-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="38" height="38" viewBox="0 0 32 32" fill="none">
              {/* Main wing swoop - bolder, thicker, and fills the space */}
              <path d="M2 30C8 30 26 20 30 2C16 6 10 14 2 30Z" fill="#2563eb" />
              {/* Secondary wing swoop - bolder and thicker */}
              <path d="M7 30C12 30 24 22 28 8C16 12 12 18 7 30Z" fill="#ff5c00" />
            </svg>
          </div>
          <span style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}>
            Fly<span style={{ color: 'var(--color-orange)' }}>Ez</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          <ul style={{ listStyle: 'none', display: 'flex', gap: '28px', fontSize: '15px', fontWeight: 600 }}>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>

        {/* Action Widgets */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Support Widget */}
          <a
            href="tel:1800-521-4263"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-md)',
              background: '#ffffff',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition-normal)',
            }}
            className="call-support"
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 92, 0, 0.35)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-full)',
                border: '2px solid #ffffff',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <img src="https://flyez.ai/assets/img/grouptraveltelecaller.webp" alt="agent" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              {/* Online pulse dot */}
              <span 
                className="agent-status-dot"
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  right: '-2px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 6px rgba(16, 185, 129, 0.5)'
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }} className="agent-text">
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Speak to an Expert</span>
              <span style={{ fontSize: '15px', color: 'var(--color-primary)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <Phone size={13} color="var(--color-orange)" fill="var(--color-orange)" /> 1800-521-4263
              </span>
            </div>
          </a>

          {/* SignIn CTA */}
          <a
            href="/login"
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--color-accent)',
              color: 'var(--color-accent)',
              fontSize: '14px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'var(--transition-normal)',
            }}
            className="signin-button"
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-accent)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <User size={16} /> Sign In
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: 'var(--color-primary)',
            }}
            className="menu-trigger"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            boxShadow: 'var(--shadow-lg)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '16px', fontWeight: 600 }}>
            <li><a href="/" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="/about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
            <li><a href="/privacy-policy" onClick={() => setIsMenuOpen(false)}>Privacy Policy</a></li>
            <li><a href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
            <li><a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
          </ul>
          <div style={{ height: '1px', background: '#f1f5f9' }} />
          <a
            href="tel:1800-521-4263"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '12px',
              background: '#fff8f5',
              border: '1px dashed var(--color-orange)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--color-orange)',
              fontWeight: 700,
              fontSize: '16px',
            }}
          >
            <Phone size={18} fill="currentColor" /> Call 1800-521-4263
          </a>
        </div>
      )}

      {/* Header media query injection */}
      <style>{`
        .desktop-nav a {
          position: relative;
          color: var(--color-text-muted);
          padding: 8px 0;
          transition: var(--transition-fast);
        }
        .desktop-nav a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-accent);
          transition: var(--transition-fast);
        }
        .desktop-nav a:hover::after, .desktop-nav a.active::after {
          width: 100%;
        }
        .desktop-nav a:hover, .desktop-nav a.active {
          color: var(--color-primary);
        }
        @keyframes agentPulse {
          0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .agent-status-dot {
          animation: agentPulse 2s infinite;
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .menu-trigger { display: block !important; }
        }
        @media (max-width: 640px) {
          .signin-button { display: none !important; }
          .agent-text { display: none !important; }
          .call-support { padding: 4px !important; border-radius: var(--radius-full) !important; }
        }
      `}</style>
    </header>
  );
}
