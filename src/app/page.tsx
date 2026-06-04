import React from 'react';
import PromoAlert from '@/components/PromoAlert';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FlightSearchForm from '@/components/FlightSearchForm';
import SpecialOffers from '@/components/SpecialOffers';
import WhyBookWithUs from '@/components/WhyBookWithUs';
import TrendingDeals from '@/components/TrendingDeals';
import Packages from '@/components/Packages';
import LuxuryBanner from '@/components/LuxuryBanner';
import Festivals from '@/components/Festivals';
import SubscriptionBanner from '@/components/SubscriptionBanner';
import Testimonials from '@/components/Testimonials';
import AirlinePartners from '@/components/AirlinePartners';
import TravelGptChat from '@/components/TravelGptChat';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg-light dark:bg-brand-primary">
      {/* Discount Promo Code Alert Banner */}
      <PromoAlert />

      {/* Premium Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <main className="flex-1 pb-10">
        {/* Overlapping Flight Search Form Container */}
        <div className="premium-container relative z-20 -mt-16 md:-mt-24 mb-10">
          <FlightSearchForm />
        </div>

        {/* Special Offers Grid & Call Banner */}
        <SpecialOffers />

        {/* Why Book With Us Grid */}
        <WhyBookWithUs />

        {/* Popular Holiday Packages */}
        <Packages />

        {/* Trending Cheap Flight Deals Grid (Popular Routes) */}
        <TrendingDeals />

        {/* Luxury Business Class Callout Banner */}
        <LuxuryBanner />

        {/* Festivals & Events Section */}
        <Festivals />

        {/* Subscription Newsletter Panel */}
        <SubscriptionBanner />

        {/* Testimonials Review Panel */}
        <Testimonials />

        {/* Accredited Partners Directory + Trust rating */}
        <AirlinePartners />
      </main>

      {/* Floating Travel GPT Chat Assistant */}
      <TravelGptChat />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
