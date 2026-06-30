'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Business/First Class", href: "/business-first-class" },
    { name: "News & Insights", href: "/news-insights" },
    { name: "Events", href: "/events" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Talk to Us", href: "/contact" }
  ];

  return (
    <header
      className={`w-full py-3.5 transition-all duration-350 font-ui ${
        isSticky
          ? 'bg-white/92 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(11,26,48,0.05)]'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="premium-container flex items-center justify-between gap-4">
        {/* Logo left-aligned */}
        <a href="/" className="flex items-center group shrink-0">
          <img
            src="/logo-small.gif"
            alt="FlyEz Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center font-ui">
          <ul className="flex gap-6 xl:gap-7 text-[14px] xl:text-[15px] font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="flex items-center gap-1">
                  <a 
                    href={link.href} 
                    className={`py-2 transition-colors duration-150 ${
                      isActive
                        ? 'text-brand-orange font-bold'
                        : 'text-black hover:text-brand-orange'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Widgets */}
        <div className="flex items-center gap-3">
          {/* Travel Specialist Call Widget */}
          <a
            href="tel:1800-521-4263"
            className="hidden sm:flex items-center gap-2.5 py-1 px-3.5 rounded-full border border-slate-200 bg-slate-50/50 hover:bg-slate-100 transition-all duration-300 hover:shadow-sm"
          >
            <img
              src="/grouptraveltelecaller.webp"
              alt="Travel Specialist"
              className="w-8 h-8 rounded-full object-cover border border-brand-orange"
            />
            <div className="flex flex-col font-ui text-left">
              <span className="text-[9px] text-brand-text-muted font-bold uppercase tracking-wider leading-none">Talk to Us</span>
              <span className="text-xs font-black text-brand-primary hover:text-brand-orange transition-colors">1800-521-4263</span>
            </div>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-sm bg-slate-50 border border-slate-200 text-brand-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg py-5 px-6 flex flex-col gap-4 animate-[fadeIn_0.25s_ease] lg:hidden z-[1001]">
          <ul className="flex flex-col gap-4 text-base font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className={`block py-1 transition-colors ${
                      isActive 
                        ? 'text-brand-orange font-bold' 
                        : 'text-black hover:text-brand-orange'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <div className="pt-4 border-t border-slate-100">
            <a
              href="tel:1800-521-4263"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg font-bold text-sm transition-colors"
            >
              <PhoneCall size={16} /> Call Expert: 1800-521-4263
            </a>
          </div>
        </div>
      )}

      {/* Embedded Animations */}
      <style jsx global>{`
        @keyframes agentPulse {
          0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
      `}</style>
    </header>
  );
}
