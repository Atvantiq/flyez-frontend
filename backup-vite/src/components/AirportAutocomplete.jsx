import React, { useState, useEffect, useRef } from 'react';
import { PlaneTakeoff, PlaneLanding, Search, X } from 'lucide-react';

export default function AirportAutocomplete({ 
  label, 
  placeholder, 
  value, 
  onSelect, 
  type, /* 1 for origin, 2 for destination, 3+ for multicity */
  isOrigin = true 
}) {
  const [query, setQuery] = useState(value || '');
  const [suggestionsHtml, setSuggestionsHtml] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef(null);

  // Sync with value if updated from parent (e.g., origin/destination swap)
  useEffect(() => {
    setQuery(value || '');
  }, [value]);

  // Handle outside clicks to close the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fetch suggestions with debouncing
  useEffect(() => {
    if (!query || query.length < 2 || !isOpen) {
      setSuggestionsHtml('');
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/get-airport', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            val: query,
            type: String(type),
            check: '1'
          })
        });
        if (response.ok) {
          const html = await response.json();
          setSuggestionsHtml(html);
        }
      } catch (err) {
        console.error('Autocomplete fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => clearTimeout(delayDebounce);
  }, [query, isOpen, type]);

  // Handle clicking a suggestion from the raw HTML structure
  const handleSuggestionClick = (e) => {
    const targetItem = e.target.closest('[data-id]');
    if (targetItem) {
      const code = targetItem.getAttribute('data-id');
      const name = targetItem.getAttribute('data-id1') || code;
      setQuery(code);
      onSelect(code, name);
      setIsOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%' }}>
      {/* Label and input container */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '12px 16px',
          background: '#ffffff',
          border: isOpen ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          boxShadow: isOpen ? 'var(--shadow-accent-glow)' : 'var(--shadow-sm)',
          transition: 'var(--transition-normal)',
          cursor: 'text',
        }}
        onClick={() => setIsOpen(true)}
      >
        <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
          {isOrigin ? <PlaneTakeoff size={12} color="var(--color-accent)" /> : <PlaneLanding size={12} color="var(--color-orange)" />}
          {label}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input 
            type="text" 
            placeholder={placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            style={{
              border: 'none',
              outline: 'none',
              width: '100%',
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--color-primary)',
              background: 'transparent',
            }}
          />
          {query && (
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setQuery('');
                onSelect('', '');
              }}
              style={{ color: 'var(--color-text-muted)' }}
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Suggestion Dropdown Panel */}
      {isOpen && (suggestionsHtml || isLoading) && (
        <div 
          onClick={handleSuggestionClick}
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            width: '100%',
            maxHeight: '260px',
            overflowY: 'auto',
            background: '#ffffff',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            zIndex: 999,
            padding: '8px 0',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {isLoading ? (
            <div style={{ padding: '16px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span className="spinner" style={{ width: '16px', height: '16px', border: '2px solid var(--color-accent)', borderTopColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.6s linear infinite' }}></span>
              Searching airports...
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: suggestionsHtml }} className="suggestions-html-container" />
          )}
        </div>
      )}

      {/* Inject custom suggestion styling */}
      <style>{`
        .suggestions-html-container ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .suggestions-html-container li, .suggestions-html-container .drp, .suggestions-html-container .drp2 {
          padding: 12px 16px 12px 42px !important;
          cursor: pointer;
          font-size: 14px;
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #f1f5f9;
          transition: var(--transition-fast);
          position: relative;
        }
        .suggestions-html-container li::before, .suggestions-html-container .drp::before, .suggestions-html-container .drp2::before {
          content: '';
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-size: contain;
        }
        .suggestions-html-container li:last-child {
          border-bottom: none;
        }
        .suggestions-html-container li:hover, .suggestions-html-container .drp:hover, .suggestions-html-container .drp2:hover {
          background-color: #f8fafc;
        }
        .suggestions-html-container b {
          font-weight: 700;
          color: var(--color-primary);
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .suggestions-html-container p {
          margin: 4px 0 0 0;
          color: var(--color-text-muted);
          font-size: 11px;
          font-weight: 500;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
