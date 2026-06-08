'use client';

import React from 'react';

export default function Ticker() {
  const items = [
    "Secret Offline Flight Deals",
    "Up to 60% Off Private Fares",
    "24/7 Live Booking Desk",
    "Flexible Travel Windows",
    "Multi-City Specialist Desk",
    "Direct GDS Connections",
    "Speak to an Expert: 1800-521-4263",
    "Secure 256-bit SSL Checkout",
    "Verified 4.8 Trust Rating",
    "Direct Airline Contracts"
  ];

  // Duplicate items array to enable infinite looping transition
  const doubleItems = [...items, ...items];

  return (
    <div className="ticker-wrap w-full z-10 relative select-none pointer-events-none">
      <div className="ticker-track">
        {doubleItems.map((item, index) => (
          <span key={index} className="ticker-item">
            ✦ {item}
            <span className="ticker-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
