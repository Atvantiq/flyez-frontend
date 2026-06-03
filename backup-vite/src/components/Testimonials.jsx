import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Outstanding service! I saved $280 booking my business trip to London. The offline pricing via the phone line was far cheaper than anything else online.",
      user: "Sarah Jenkins",
      route: "New York to London"
    },
    {
      text: "Great experience. Booked JFK to Delhi flights for my family. The agent helped select seats and handled infants details flawlessly. Highly recommended!",
      user: "Rajesh Sharma",
      route: "JFK to Delhi"
    }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#f8fafc', borderTop: '1px solid var(--color-border)' }}>
      <div className="premium-container">
        
        {/* Main Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '40px',
            alignItems: 'center'
          }}
          className="testimonials-grid"
        >
          {/* Left Column: Stats & Header */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-orange)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
              <Star size={14} fill="currentColor" /> Customer Trust
            </div>
            <h2 style={{ fontSize: '38px', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', marginBottom: '16px', lineHeight: '1.2', fontWeight: 800 }}>
              What Our Flyers Are Saying
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
              We're proud to share reviews from flyers who book with us. We handle every reservation with care to guarantee a smooth travel experience.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '30px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '32px', fontWeight: '800', color: 'var(--color-primary)', lineHeight: 1.1 }}>10m+</span>
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 600, marginTop: '4px' }}>Happy Travelers</span>
              </div>
              <div style={{ width: '1px', background: 'var(--color-border)' }} />
              <div>
                <span style={{ display: 'block', fontSize: '32px', fontWeight: '800', color: 'var(--color-primary)', lineHeight: 1.1 }}>4.8/5</span>
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 600, marginTop: '4px' }}>Customer Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column: Review stack mockup cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {reviews.map((r, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px 30px',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative'
                }}
                className="testimonial-card"
              >
                {/* Quote Icon overlay */}
                <div style={{ position: 'absolute', right: '24px', top: '24px', opacity: 0.08, color: 'var(--color-primary)' }}>
                  <MessageSquareQuote size={40} />
                </div>

                {/* Star rating for review */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" className="tp-star-gold">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-primary)', marginBottom: '16px', fontStyle: 'italic' }}>
                  "{r.text}"
                </p>

                {/* Review User info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-primary)' }}>{r.user}</span>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--color-text-muted)', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>
                    {r.route}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .testimonial-card {
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .testimonial-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 15px 35px rgba(7, 14, 27, 0.06) !important;
          border-color: rgba(37, 99, 235, 0.25) !important;
        }
      `}</style>
    </section>
  );
}
