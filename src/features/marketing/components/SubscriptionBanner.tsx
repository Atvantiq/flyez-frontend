'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SubscriptionBanner() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
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
    <section className="py-4.5 sm:py-5.5 bg-gradient-to-r from-[#070e1b] to-[#0d1b3e] border-t border-b border-white/5 relative overflow-hidden">
      
      {/* Dynamic Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-radial from-brand-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-radial from-brand-orange/4 to-transparent pointer-events-none" />

      <div className="premium-container relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        
        {/* Left Side: Copywriting */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[620px]">
          <span className="text-[10px] text-brand-orange uppercase font-extrabold tracking-[2px] mb-1.5 block">
            VIP Fare Alerts
          </span>
          <h3 className="text-white text-lg sm:text-xl font-display font-black leading-tight mb-1">
            Unlock Member-Only Deals
          </h3>
          <p className="text-xs sm:text-sm text-white/70">
            Join our newsletter and receive exclusive flight promotional codes and flash travel warnings.
          </p>
        </div>

        {/* Right Side: Email Signup Form */}
        <div className="w-full lg:max-w-[460px] shrink-0">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="py-2.5 px-5 rounded-full bg-brand-success/10 border border-dashed border-brand-success/30 text-brand-success text-xs sm:text-sm font-bold text-center"
              >
                ✓ Subscription Successful! Watch your inbox.
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubscribe}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center bg-white/5 hover:bg-white/7 border border-white/10 focus-within:border-brand-orange focus-within:bg-white/8 focus-within:shadow-[0_0_20px_rgba(255,92,0,0.2)] rounded-full p-1 transition-all duration-300 w-full"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0 pl-3">
                  <Mail size={14} className="text-white/40 shrink-0" />
                  <input 
                    type="email" 
                    placeholder="Enter email for secret deals" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-0 outline-none text-xs sm:text-sm text-white placeholder-white/40 py-1.5"
                  />
                </div>
                
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: '#e05200' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 rounded-full bg-brand-orange text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_4px_12px_rgba(255,92,0,0.25)] whitespace-nowrap"
                >
                  Join VIP <ArrowRight size={13} />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
