import React, { useState } from 'react';
import { Calendar, Search, ArrowLeftRight, Plus, Trash2, ShieldAlert } from 'lucide-react';
import AirportAutocomplete from './AirportAutocomplete';
import PassengerCountSelector from './PassengerCountSelector';

export default function FlightSearchForm() {
  const [tripType, setTripType] = useState('round'); // 'round', 'oneway', 'multicity'
  const [cabin, setCabin] = useState('E'); // 'E' (Economy), 'B' (Business), 'F' (First), 'P' (Premium)
  
  // Passenger state
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [infants, setInfants] = useState(0);

  // Round / Oneway state
  const [origin, setOrigin] = useState('');
  const [originName, setOriginName] = useState('');
  const [destination, setDestination] = useState('');
  const [destinationName, setDestinationName] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  // Multi-city state (defaults to 2 flights)
  const [multiFlights, setMultiFlights] = useState([
    { origin: '', originName: '', destination: '', destinationName: '', date: '' },
    { origin: '', originName: '', destination: '', destinationName: '', date: '' }
  ]);

  const [validationError, setValidationError] = useState('');
  const [directFlights, setDirectFlights] = useState(false);
  const [preferredAirline, setPreferredAirline] = useState('');

  // Swap origin and destination
  const handleSwap = () => {
    const tempOrigin = origin;
    const tempOriginName = originName;
    setOrigin(destination);
    setOriginName(destinationName);
    setDestination(tempOrigin);
    setDestinationName(tempOriginName);
  };

  // Convert Date from YYYY-MM-DD to MM/DD/YYYY
  const formatDateToBackend = (dateStr) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${month}/${day}/${year}`;
  };

  // Add Multi-city flight segment
  const addMultiFlight = () => {
    if (multiFlights.length < 5) {
      setMultiFlights([...multiFlights, { origin: '', originName: '', destination: '', destinationName: '', date: '' }]);
    }
  };

  // Remove Multi-city flight segment
  const removeMultiFlight = (index) => {
    if (multiFlights.length > 2) {
      const updated = multiFlights.filter((_, i) => i !== index);
      setMultiFlights(updated);
    }
  };

  // Update a Multi-city flight segment parameter
  const updateMultiFlight = (index, field, value, nameVal = '') => {
    const updated = [...multiFlights];
    updated[index][field] = value;
    if (field === 'origin') updated[index].originName = nameVal;
    if (field === 'destination') updated[index].destinationName = nameVal;
    setMultiFlights(updated);
  };

  // Trigger search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setValidationError('');

    const queryParams = new URLSearchParams();
    queryParams.append('couch', cabin);
    queryParams.append('adult', String(adults));
    queryParams.append('children', String(childrenCount));
    queryParams.append('infant', String(infants));

    if (directFlights) {
      queryParams.append('direct', '1');
    }
    if (preferredAirline) {
      queryParams.append('airline', preferredAirline);
    }

    // Append child ages
    childAges.forEach((age, index) => {
      queryParams.append(`ChildrenAge_${index + 1}`, age || '2');
    });

    if (tripType !== 'multicity') {
      // Validate standard search
      if (!origin) {
        setValidationError('Please select an origin airport.');
        return;
      }
      if (!destination) {
        setValidationError('Please select a destination airport.');
        return;
      }
      if (origin === destination) {
        setValidationError('Origin and Destination airports cannot be the same.');
        return;
      }
      if (!departDate) {
        setValidationError('Please select a departure date.');
        return;
      }
      if (tripType === 'round' && !returnDate) {
        setValidationError('Please select a return date.');
        return;
      }
      if (tripType === 'round' && returnDate < departDate) {
        setValidationError('Return date must be after departure date.');
        return;
      }

      queryParams.append('tp', tripType);
      queryParams.append('d1', origin);
      queryParams.append('ar1', destination);
      queryParams.append('dt1', formatDateToBackend(departDate));
      
      if (tripType === 'round') {
        queryParams.append('ardt1', formatDateToBackend(returnDate));
      }
    } else {
      // Validate Multi-city search
      queryParams.append('tp', 'multicity');
      
      for (let i = 0; i < multiFlights.length; i++) {
        const flight = multiFlights[i];
        if (!flight.origin) {
          setValidationError(`Flight ${i + 1}: Please select an origin airport.`);
          return;
        }
        if (!flight.destination) {
          setValidationError(`Flight ${i + 1}: Please select a destination airport.`);
          return;
        }
        if (flight.origin === flight.destination) {
          setValidationError(`Flight ${i + 1}: Origin and Destination cannot be the same.`);
          return;
        }
        if (!flight.date) {
          setValidationError(`Flight ${i + 1}: Please select a departure date.`);
          return;
        }
        
        // Append fields named as: d1, ar1, dt1, d2, ar2, dt2...
        queryParams.append(`d${i + 1}`, flight.origin);
        queryParams.append(`ar${i + 1}`, flight.destination);
        queryParams.append(`dt${i + 1}`, formatDateToBackend(flight.date));
      }
    }

    // Redirect to backend flight-listing page
    const searchUrl = `https://flyez.ai/flight-listing?${queryParams.toString()}`;
    window.location.href = searchUrl;
  };

  return (
    <div 
      className="glass-card animate-slide-up"
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: '30px',
        maxWidth: '1100px',
        margin: '-60px auto 0 auto',
        position: 'relative',
        zIndex: 10,
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <form onSubmit={handleSearchSubmit}>
        {/* Top Controls: Trip Type & Cabin Class */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          {/* Trip Type Tabs */}
          <div style={{ display: 'flex', background: '#f1f5f9', padding: '4px', borderRadius: 'var(--radius-md)' }}>
            {[
              { id: 'round', label: 'Round Trip' },
              { id: 'oneway', label: 'One Way' },
              { id: 'multicity', label: 'Multi-City' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setTripType(tab.id);
                  setValidationError('');
                }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                  backgroundColor: tripType === tab.id ? '#ffffff' : 'transparent',
                  color: tripType === tab.id ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  boxShadow: tripType === tab.id ? '0 2px 6px rgba(11,26,48,0.05)' : 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Class & Airline Dropdowns */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-muted)' }}>Class:</span>
              <select
                value={cabin}
                onChange={(e) => setCabin(e.target.value)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  background: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                }}
              >
                <option value="E">Economy</option>
                <option value="B">Business</option>
                <option value="F">First Class</option>
                <option value="P">Premium Economy</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-muted)' }}>Airline:</span>
              <select
                value={preferredAirline}
                onChange={(e) => setPreferredAirline(e.target.value)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  background: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                }}
              >
                <option value="">All Airlines</option>
                <option value="AA">American Airlines (AA)</option>
                <option value="DL">Delta Air Lines (DL)</option>
                <option value="UA">United Airlines (UA)</option>
                <option value="BA">British Airways (BA)</option>
                <option value="LH">Lufthansa (LH)</option>
                <option value="QR">Qatar Airways (QR)</option>
                <option value="EK">Emirates (EK)</option>
                <option value="SQ">Singapore Airlines (SQ)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Validation Errors banner */}
        {validationError && (
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '12px 16px', 
              borderRadius: 'var(--radius-sm)', 
              background: '#fef2f2', 
              border: '1px solid #fee2e2', 
              color: '#991b1b', 
              fontSize: '14px', 
              fontWeight: 500,
              marginBottom: '20px'
            }}
          >
            <ShieldAlert size={18} />
            {validationError}
          </div>
        )}

        {/* Standard Search Fields (Round trip & One way) */}
        {tripType !== 'multicity' && (
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: tripType === 'round' ? '2.2fr 1.1fr 1.1fr 1.2fr' : '2.2fr 1.2fr 1.4fr', 
              gap: '16px', 
              alignItems: 'center' 
            }}
            className="search-row-grid"
          >
            {/* From & To with absolutely overlapping Swap */}
            <div style={{ position: 'relative', display: 'flex', width: '100%' }} className="from-to-container">
              <div style={{ flex: 1 }}>
                <AirportAutocomplete 
                  label="From" 
                  placeholder="Origin Airport" 
                  value={origin} 
                  onSelect={(code, name) => {
                    setOrigin(code);
                    setOriginName(name);
                  }}
                  type={1}
                  isOrigin={true}
                />
              </div>
              
              {/* Overlapping Swap button */}
              <button
                type="button"
                onClick={handleSwap}
                className="swap-button-premium"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                  zIndex: 10,
                  cursor: 'pointer',
                  transition: 'var(--transition-normal)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'var(--color-orange)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <ArrowLeftRight size={14} />
              </button>

              <div style={{ flex: 1 }}>
                <AirportAutocomplete 
                  label="To" 
                  placeholder="Destination Airport" 
                  value={destination} 
                  onSelect={(code, name) => {
                    setDestination(code);
                    setDestinationName(name);
                  }}
                  type={2}
                  isOrigin={false}
                />
              </div>
            </div>

            {/* Depart Date */}
            <div className="search-input-capsule">
              <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                <Calendar size={12} color="var(--color-accent)" />
                Depart
              </span>
              <input 
                type="date" 
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                  background: 'transparent',
                }}
                required
              />
            </div>

            {/* Return Date (Round trip only) */}
            {tripType === 'round' && (
              <div className="search-input-capsule">
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                  <Calendar size={12} color="var(--color-orange)" />
                  Return
                </span>
                <input 
                  type="date" 
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={departDate || new Date().toISOString().split('T')[0]}
                  style={{
                    border: 'none',
                    outline: 'none',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    cursor: 'pointer',
                    background: 'transparent',
                  }}
                  required={tripType === 'round'}
                />
              </div>
            )}

            {/* Passenger Selector */}
            <PassengerCountSelector 
              adults={adults}
              setAdults={setAdults}
              childrenCount={childrenCount}
              setChildrenCount={setChildrenCount}
              childAges={childAges}
              setChildAges={setChildAges}
              infants={infants}
              setInfants={setInfants}
            />
          </div>
        )}

        {/* Multi-City Form Segment Rows */}
        {tripType === 'multicity' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="animate-fade-in">
            {multiFlights.map((flight, index) => (
              <div 
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px repeat(auto-fit, minmax(180px, 1fr)) 48px',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: '#f8fafc',
                  borderRadius: 'var(--radius-md)',
                  border: '1px dashed var(--color-border)',
                }}
                className="multicity-row-grid"
              >
                {/* Segment indicator */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-primary)', color: '#ffffff', fontSize: '13px', fontWeight: 'bold' }}>
                  {index + 1}
                </div>

                {/* Origin */}
                <AirportAutocomplete 
                  label="From" 
                  placeholder="Origin Airport" 
                  value={flight.origin} 
                  onSelect={(code, name) => updateMultiFlight(index, 'origin', code, name)}
                  type={3 + index * 2}
                  isOrigin={true}
                />

                {/* Destination */}
                <AirportAutocomplete 
                  label="To" 
                  placeholder="Destination Airport" 
                  value={flight.destination} 
                  onSelect={(code, name) => updateMultiFlight(index, 'destination', code, name)}
                  type={4 + index * 2}
                  isOrigin={false}
                />

                {/* Depart Date */}
                <div 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    padding: '12px 16px', 
                    background: '#ffffff', 
                    border: '1px solid var(--color-border)', 
                    borderRadius: 'var(--radius-md)', 
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                    <Calendar size={12} color="var(--color-accent)" />
                    Depart Date
                  </span>
                  <input 
                    type="date" 
                    value={flight.date}
                    onChange={(e) => updateMultiFlight(index, 'date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    style={{
                      border: 'none',
                      outline: 'none',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      cursor: 'pointer',
                      background: 'transparent',
                    }}
                    required
                  />
                </div>

                {/* Remove button */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {multiFlights.length > 2 ? (
                    <button
                      type="button"
                      onClick={() => removeMultiFlight(index)}
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--radius-sm)',
                        color: '#ef4444',
                        background: 'rgba(239, 68, 68, 0.05)',
                        border: '1px solid rgba(239, 68, 68, 0.1)',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(239, 68, 68, 0.05)';
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  ) : (
                    <div style={{ width: '40px' }} />
                  )}
                </div>
              </div>
            ))}

            {/* Row adding and traveler control for multi-city */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginTop: '10px' }}>
              <button
                type="button"
                onClick={addMultiFlight}
                disabled={multiFlights.length >= 5}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-accent)',
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px dashed var(--color-accent)',
                  background: 'rgba(37, 99, 235, 0.02)',
                  opacity: multiFlights.length >= 5 ? 0.5 : 1,
                  cursor: multiFlights.length >= 5 ? 'not-allowed' : 'pointer'
                }}
              >
                <Plus size={16} /> Add Another Flight
              </button>

              <div style={{ width: '280px' }}>
                <PassengerCountSelector 
                  adults={adults}
                  setAdults={setAdults}
                  childrenCount={childrenCount}
                  setChildrenCount={setChildrenCount}
                  childAges={childAges}
                  setChildAges={setChildAges}
                  infants={infants}
                  setInfants={setInfants}
                />
              </div>
            </div>
          </div>
        )}

        {/* Direct Flights Checkbox & Search Submit Button */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-muted)', userSelect: 'none' }}>
            <input 
              type="checkbox" 
              checked={directFlights} 
              onChange={(e) => setDirectFlights(e.target.checked)}
              style={{ 
                width: '18px', 
                height: '18px', 
                accentColor: 'var(--color-accent)', 
                cursor: 'pointer' 
              }}
            />
            Direct flights only
          </label>

          <button
            type="submit"
            style={{
              padding: '16px 40px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-orange)',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: 'var(--shadow-glow)',
              transition: 'var(--transition-normal)',
              width: '100%',
              maxWidth: '240px',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-orange-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-orange)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Search size={18} /> Search Flights
          </button>
        </div>
      </form>

      {styleMediaQueriesInjection()}
    </div>
  );
}

// Media Query Rules Injector helper
function styleMediaQueriesInjection() {
  return (
    <style>{`
      @media (max-width: 1024px) {
        .search-row-grid {
          grid-template-columns: 1fr !important;
          gap: 16px !important;
        }
        .from-to-container {
          flex-direction: column !important;
          gap: 16px !important;
        }
        .swap-button-premium {
          top: 50% !important;
          left: 90% !important;
          transform: translate(-50%, -50%) rotate(90deg) !important;
        }
      }
      @media (max-width: 768px) {
        .multicity-row-grid {
          grid-template-columns: 1fr !important;
          gap: 12px !important;
        }
        .multicity-row-grid div:first-child {
          margin: 0 auto !important;
        }
        .multicity-row-grid div:last-child {
          margin-top: 8px !important;
        }
      }
    `}</style>
  );
}
