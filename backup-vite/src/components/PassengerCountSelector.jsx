import React, { useState, useEffect, useRef } from 'react';
import { Users, Plus, Minus, ChevronDown } from 'lucide-react';

export default function PassengerCountSelector({ 
  adults, 
  setAdults, 
  childrenCount, 
  setChildrenCount, 
  childAges, 
  setChildAges, 
  infants, 
  setInfants 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalTravelers = adults + childrenCount + infants;

  const handleIncrement = (type) => {
    if (type === 'adults') {
      if (adults < 9) setAdults(adults + 1);
    } else if (type === 'children') {
      if (childrenCount < 6) {
        const newCount = childrenCount + 1;
        setChildrenCount(newCount);
        setChildAges([...childAges, '']); // Append blank age
      }
    } else if (type === 'infants') {
      if (infants < adults) { // Usually infants cannot exceed adults
        setInfants(infants + 1);
      }
    }
  };

  const handleDecrement = (type) => {
    if (type === 'adults') {
      if (adults > 1) {
        setAdults(adults - 1);
        // Ensure infants don't exceed adults
        if (infants > adults - 1) {
          setInfants(adults - 1);
        }
      }
    } else if (type === 'children') {
      if (childrenCount > 0) {
        setChildrenCount(childrenCount - 1);
        setChildAges(childAges.slice(0, -1)); // Remove last age
      }
    } else if (type === 'infants') {
      if (infants > 0) {
        setInfants(infants - 1);
      }
    }
  };

  const handleAgeChange = (index, age) => {
    const updatedAges = [...childAges];
    updatedAges[index] = age;
    setChildAges(updatedAges);
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      {/* Selector Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="search-input-capsule"
        style={{
          border: isOpen ? '1.5px solid var(--color-accent)' : undefined,
          boxShadow: isOpen ? 'var(--shadow-accent-glow)' : undefined,
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
          <Users size={12} color="var(--color-accent)" />
          Travelers
        </span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-primary)' }}>
            {totalTravelers} Traveler{totalTravelers > 1 ? 's' : ''}
          </span>
          <ChevronDown size={16} color="var(--color-text-muted)" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'var(--transition-fast)' }} />
        </div>
      </div>

      {/* Popover Panel */}
      {isOpen && (
        <div 
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            width: '290px',
            background: '#ffffff',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            padding: '20px',
            zIndex: 999,
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {/* Row: Adults */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <span style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: 'var(--color-primary)' }}>Adults</span>
              <span style={{ display: 'block', fontSize: '11px', color: 'var(--color-text-muted)' }}>Age 12+</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button 
                type="button"
                onClick={() => handleDecrement('adults')} 
                style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: adults > 1 ? 'var(--color-accent)' : 'var(--color-text-muted)' }}
              >
                <Minus size={14} />
              </button>
              <span style={{ fontSize: '15px', fontWeight: 700, width: '16px', textAlign: 'center' }}>{adults}</span>
              <button 
                type="button"
                onClick={() => handleIncrement('adults')} 
                style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Row: Children */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <span style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: 'var(--color-primary)' }}>Children</span>
              <span style={{ display: 'block', fontSize: '11px', color: 'var(--color-text-muted)' }}>Ages 2 - 11</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button 
                type="button"
                onClick={() => handleDecrement('children')} 
                style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: childrenCount > 0 ? 'var(--color-accent)' : 'var(--color-text-muted)' }}
              >
                <Minus size={14} />
              </button>
              <span style={{ fontSize: '15px', fontWeight: 700, width: '16px', textAlign: 'center' }}>{childrenCount}</span>
              <button 
                type="button"
                onClick={() => handleIncrement('children')} 
                style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Dynamic Child Age Selectors */}
          {childrenCount > 0 && (
            <div style={{ padding: '10px 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', marginBottom: '18px' }}>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '8px' }}>Specify Child Ages</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {childAges.map((age, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>Child {i+1}</span>
                    <select
                      value={age}
                      onChange={(e) => handleAgeChange(i, e.target.value)}
                      style={{
                        padding: '6px',
                        borderRadius: '6px',
                        border: '1px solid var(--color-border)',
                        fontSize: '13px',
                        color: 'var(--color-primary)',
                        background: '#ffffff',
                      }}
                      required
                    >
                      <option value="">Age</option>
                      {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(a => (
                        <option key={a} value={a}>{a} yrs</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Row: Infants */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: 'var(--color-primary)' }}>Infants</span>
              <span style={{ display: 'block', fontSize: '11px', color: 'var(--color-text-muted)' }}>Under 2 yrs</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button 
                type="button"
                onClick={() => handleDecrement('infants')} 
                style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: infants > 0 ? 'var(--color-accent)' : 'var(--color-text-muted)' }}
              >
                <Minus size={14} />
              </button>
              <span style={{ fontSize: '15px', fontWeight: 700, width: '16px', textAlign: 'center' }}>{infants}</span>
              <button 
                type="button"
                onClick={() => handleIncrement('infants')} 
                style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
