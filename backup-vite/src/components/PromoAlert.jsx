import React, { useState } from 'react';
import { Tag, X, PhoneCall, Copy, Check } from 'lucide-react';

export default function PromoAlert() {
  const [isVisible, setIsVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('FLYEZ24');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <div 
      style={{
        background: 'linear-gradient(90deg, #070e1b 0%, #1e3a8a 50%, #0c1c3a 100%)',
        color: '#ffffff',
        padding: '12px 24px',
        fontSize: '13.5px',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 100,
        boxShadow: '0 2px 12px rgba(7,14,27,0.2)',
        animation: 'fadeIn 0.3s ease',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}
      className="promo-alert-bar"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '10px 20px', width: '100%', maxWidth: '1100px' }}>
        
        {/* Deal Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Tag size={15} color="var(--color-orange)" fill="var(--color-orange)" />
          <span style={{ color: 'rgba(255,255,255,0.9)' }}>
            Save up to <strong>$24</strong> on flight booking fees with code:
          </span>
          <span 
            onClick={handleCopy}
            style={{ 
              color: copied ? '#10b981' : 'var(--color-orange)', 
              backgroundColor: 'rgba(255,255,255,0.08)', 
              padding: '4px 10px', 
              borderRadius: '6px',
              cursor: 'pointer',
              border: copied ? '1px dashed rgba(16, 185, 129, 0.4)' : '1px dashed rgba(255, 92, 0, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.25s ease',
              fontSize: '12px',
              fontWeight: 700,
              userSelect: 'none'
            }}
            className="promo-code-badge"
            title="Click to copy coupon code"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? 'COPIED!' : 'FLYEZ24'}
          </span>
        </div>

        {/* Separator on desktop */}
        <span style={{ opacity: 0.25, display: 'inline-block' }} className="bar-separator">|</span>

        {/* Direct Call promo */}
        <a 
          href="tel:1800-521-4263" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: '#ffffff', 
            textDecoration: 'none', 
            fontWeight: 700,
            transition: 'color 0.2s ease'
          }}
          className="alert-call-link"
        >
          <PhoneCall size={13} className="alert-phone-icon" style={{ color: 'var(--color-orange)' }} />
          <span>Get Unpublished Phone-Only Deals: <span style={{ textDecoration: 'underline', color: 'var(--color-orange)' }}>1800-521-4263</span></span>
        </a>

      </div>

      {/* Dismiss button */}
      <button 
        onClick={() => setIsVisible(false)}
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#ffffff',
          opacity: 0.6,
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.2s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.opacity = 1}
        onMouseOut={(e) => e.currentTarget.style.opacity = 0.6}
        aria-label="Dismiss alert"
      >
        <X size={15} />
      </button>

      <style>{`
        .promo-code-badge:hover {
          background-color: rgba(255, 255, 255, 0.15) !important;
          transform: scale(1.03);
        }
        .alert-call-link:hover {
          color: var(--color-orange) !important;
        }
        @media (max-width: 820px) {
          .bar-separator {
            display: none !important;
          }
          .promo-alert-bar {
            padding-right: 48px !important;
            padding-top: 10px !important;
            padding-bottom: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
