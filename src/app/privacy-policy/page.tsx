'use client';

import React, { useState } from 'react';
import { Shield, FileText, Lock, Eye, AlertCircle, Phone, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PromoAlert from '@/components/PromoAlert';
import TravelGptChat from '@/components/TravelGptChat';

interface Section {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  content: React.ReactNode;
}

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections: Section[] = [
    {
      id: "overview",
      number: "00",
      title: "Policy Overview",
      icon: <FileText size={18} />,
      color: "#2563eb",
      bg: "bg-blue-50 dark:bg-blue-500/10 text-brand-accent",
      content: (
        <>
          <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4">
            At FLYEZ.ai, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and disclose the information you provide to us when using our website and services.
          </p>
          <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed">
            By accessing or using FLYEZ.ai, you acknowledge and agree to the terms and conditions of this Privacy Policy. If you do not agree with any aspect of this policy, please do not use our website or services.
          </p>
        </>
      )
    },
    {
      id: "collect",
      number: "01",
      title: "Information We Collect",
      icon: <Eye size={18} />,
      color: "#ff5c00",
      bg: "bg-orange-50 dark:bg-orange-500/10 text-brand-orange",
      content: (
        <>
          <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4">
            Any details you share with us, whether through our website or communication channels (telephone, email, fax), will be collected and stored. This includes personally identifiable information such as:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-xs md:text-sm font-bold text-brand-primary dark:text-white">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> First and last name
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Phone number and email address
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Mailing and billing addresses
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Payment credit card details
            </li>
          </ul>
          <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed">
            We may also collect travel preferences (meal choices, seat preferences, frequent flyer/hotel/car rental details). While providing this info is optional, it is typically required to complete reservations.
          </p>
        </>
      )
    },
    {
      id: "passenger",
      number: "02",
      title: "Passenger Information",
      icon: <Shield size={18} />,
      color: "#10b981",
      bg: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      content: (
        <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed">
          When arranging travel for someone else using FLYEZ, we will request personal details and travel preferences about that person. You must seek their consent before sharing their information with us. You will be the only one with access to view or modify their info through your account.
        </p>
      )
    },
    {
      id: "third-party",
      number: "03",
      title: "Log Data & Demographics",
      icon: <FileText size={18} />,
      color: "#8b5cf6",
      bg: "bg-purple-50 dark:bg-purple-500/10 text-purple-600",
      content: (
        <>
          <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4">
            We occasionally acquire information about you from independent business partners and third-party sources. This includes updated delivery/address details to rectify records, and demographic information to help us understand purchasing preferences.
          </p>
          <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed">
            We automatically collect standard Log Data when you visit: IP address, browser type, operating system, referring URLs, pages viewed, and access timestamps to analyze trends and improve services.
          </p>
        </>
      )
    },
    {
      id: "cookies",
      number: "04",
      title: "Cookies & Tracking",
      icon: <Lock size={18} />,
      color: "#ec4899",
      bg: "bg-pink-50 dark:bg-pink-500/10 text-pink-600",
      content: (
        <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed">
          We use cookies and tracking technologies to enhance your experience, remember preferences, analyze usage patterns, and deliver personalized content. You can manage your cookie preferences directly in your browser settings.
        </p>
      )
    },
    {
      id: "sharing",
      number: "05",
      title: "Information Sharing",
      icon: <Shield size={18} />,
      color: "#06b6d4",
      bg: "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600",
      content: (
        <>
          <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4">
            We share your information strictly under the following channels:
          </p>
          <ul className="flex flex-col gap-3.5 text-brand-text-muted dark:text-gray-400 text-xs md:text-sm">
            <li className="flex gap-2">
              <span className="text-brand-orange font-black shrink-0">•</span>
              <span><strong>Suppliers:</strong> Hotels, airlines, cruise lines, and car rental companies that fulfill reservations. We restrict their use of your information to that specific purpose.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand-orange font-black shrink-0">•</span>
              <span><strong>Third-party vendors:</strong> Partners processing credit cards, customer service, marketing, or fraud prevention. They are not allowed to use information for any other purpose.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand-orange font-black shrink-0">•</span>
              <span><strong>Legal requirements:</strong> Disclosures required by law or to protect our rights, safety, and compliance with civil legal demands.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "security",
      number: "06",
      title: "Data Security",
      icon: <Lock size={18} />,
      color: "#3b82f6",
      bg: "bg-blue-50 dark:bg-blue-500/10 text-blue-600",
      content: (
        <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed">
          We employ industry-standard encryption and security measures to protect the information we collect. However, no transmission method over the internet or database storage is 100% secure. While we use commercially acceptable protections, we cannot guarantee absolute security.
        </p>
      )
    },
    {
      id: "rights",
      number: "07",
      title: "Access & Rights",
      icon: <Award size={18} />,
      color: "#cca353",
      bg: "bg-amber-50 dark:bg-amber-500/10 text-amber-600",
      content: (
        <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed">
          You have the right to access and correct the personal information we hold about you. You can update your details by logging into your profile or by contacting our help desk directly. You can also opt-out of promotional communications by clicking the unsubscribe link.
        </p>
      )
    },
    {
      id: "children",
      number: "08",
      title: "Children's Privacy",
      icon: <Shield size={18} />,
      color: "#f59e0b",
      bg: "bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600",
      content: (
        <p className="text-brand-text-muted dark:text-gray-400 text-sm md:text-base leading-relaxed">
          FLYEZ has strict policies regarding minors below the age of 16. Minors are not authorized to transact or book directly with us. Parents or legal guardians must complete all flight bookings and reservations, ensuring correct supervision and adult legal consent.
        </p>
      )
    },
    {
      id: "billing",
      number: "09",
      title: "Billing & Card Safety",
      icon: <AlertCircle size={18} />,
      color: "#ef4444",
      bg: "bg-red-50 dark:bg-red-500/10 text-red-600",
      content: (
        <div className="bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
          <p className="text-brand-text-muted dark:text-gray-300 text-xs md:text-sm leading-relaxed mb-3">
            FLYEZ prioritizes the security of your payment details. **We advise customers never to submit secondary payments after receiving their finalized e-ticket confirmation.**
          </p>
          <p className="text-brand-text-muted dark:text-gray-300 text-xs md:text-sm leading-relaxed">
            If you receive communications requesting gift cards or extra fees, validate authenticity immediately by checking that emails originate exclusively from our official domain: <strong className="text-brand-primary dark:text-white">www.FLYEZ.ai</strong>.
          </p>
        </div>
      )
    }
  ];

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg-light dark:bg-brand-primary">
      <PromoAlert />
      <Header />

      {/* Hero Banner */}
      <section className="relative py-28 flex items-center justify-center text-center overflow-hidden bg-brand-primary">
        <motion.div
          initial={{ scale: 1.08, opacity: 0.25 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url("https://flyez.ai/assets/img/pages/about/1.png")'
          }}
        />
        <div 
          className="absolute inset-0 z-1" 
          style={{
            background: 'linear-gradient(to bottom, rgba(7, 14, 27, 0.45) 0%, rgba(7, 14, 27, 0.85) 100%)'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_60%)] z-1" />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,#ffffff_1px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none z-1" />

        <div className="premium-container relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-extrabold text-brand-orange uppercase tracking-widest inline-block mb-3.5"
            style={{ textShadow: '0 1px 2px rgba(7, 14, 27, 0.4)' }}
          >
            Securing Your Travel Data
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-tight tracking-tight"
            style={{ textShadow: '0 4px 30px rgba(7, 14, 27, 0.95), 0 2px 8px rgba(7, 14, 27, 0.7)' }}
          >
            Privacy Policy
          </motion.h1>
        </div>
      </section>

      {/* Main Grid Content */}
      <main className="flex-1 py-16">
        <div className="premium-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sticky Sidebar Navigation (4 cols) */}
            <div className="hidden lg:block lg:col-span-4 sticky top-28 bg-white dark:bg-brand-primary-light border border-brand-border dark:border-gray-800 p-6 rounded-3xl shadow-sm">
              <span className="text-[10px] font-extrabold uppercase text-brand-orange tracking-widest block mb-4">
                Table of Contents
              </span>
              <div className="flex flex-col gap-2">
                {sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleScrollTo(sec.id)}
                      className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-left text-xs font-bold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-brand-primary text-white dark:bg-brand-primary border border-brand-primary'
                          : 'text-brand-text-muted hover:text-brand-primary hover:bg-slate-50 dark:hover:bg-brand-primary border border-transparent'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/10 text-white' : sec.bg}`}>
                        {sec.icon}
                      </div>
                      <span className="flex-1">{sec.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Display (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="flex items-center justify-between border-b border-brand-border dark:border-gray-800 pb-4 mb-4">
                <span className="text-xs font-bold text-brand-text-muted dark:text-gray-400">
                  Effective Date: June 5, 2023
                </span>
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider flex items-center gap-1.5">
                  <Shield size={14} /> PCI-DSS Secure
                </span>
              </div>

              {sections.map((sec) => (
                <motion.div
                  id={sec.id}
                  key={sec.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="relative p-7 rounded-3xl bg-white dark:bg-brand-primary-light border border-brand-border dark:border-gray-800/80 shadow-sm overflow-hidden"
                >
                  {/* Dynamic Color top anchor line */}
                  <div className="absolute top-0 inset-x-0 h-1" style={{ backgroundColor: sec.color }} />

                  {/* Watermark Background Number */}
                  <div className="absolute right-6 bottom-[-15px] text-[90px] font-display font-black text-brand-primary/[0.02] dark:text-white/[0.01] select-none pointer-events-none z-0">
                    {sec.number}
                  </div>

                  {/* Header Title with Icon */}
                  <div className="relative z-10 flex items-center gap-3.5 mb-5 border-b border-brand-border dark:border-gray-800/60 pb-4">
                    <div className={`p-2.5 rounded-xl shrink-0 ${sec.bg}`}>
                      {sec.icon}
                    </div>
                    <h3 className="text-xl font-display font-black text-brand-primary dark:text-white tracking-tight leading-none">
                      {sec.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="relative z-10">
                    {sec.content}
                  </div>
                </motion.div>
              ))}

              {/* Call Hotline Banner */}
              <div className="relative overflow-hidden bg-gradient-to-r from-brand-primary to-brand-primary-light dark:from-brand-primary-light dark:to-[#1e293b] rounded-2xl p-9 border border-white/8 dark:border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-4">
                <div className="flex items-center gap-4 z-10">
                  <div className="p-3 bg-white/10 rounded-full text-brand-orange shadow-[0_0_15px_rgba(255,92,0,0.3)] shrink-0">
                    <Phone size={20} className="fill-current text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-display font-black tracking-tight mb-1">
                      Need Immediate Assistance?
                    </h4>
                    <p className="text-white/70 text-xs md:text-sm">
                      Our secure ticketing desk is available 24/7. Call us for instant bookings or changes.
                    </p>
                  </div>
                </div>
                <a 
                  href="tel:1800-521-4263"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-extrabold px-6 py-3.5 rounded-xl text-center shadow-glow transition-all whitespace-nowrap shrink-0 z-10"
                >
                  Call Toll-Free 1800-521-4263
                </a>
              </div>

            </div>

          </div>
        </div>
      </main>

      <TravelGptChat />
      <Footer />
    </div>
  );
}
