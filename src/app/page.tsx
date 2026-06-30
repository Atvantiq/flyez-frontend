import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FlightSearchForm from '@/features/flight-booking/components/FlightSearchForm';

// Dynamically load below-the-fold components for performance optimization & code splitting
const SpecialOffers = dynamic(() => import('@/features/marketing/components/SpecialOffers'), { ssr: true });
const WhyBookWithUs = dynamic(() => import('@/features/marketing/components/WhyBookWithUs'), { ssr: true });
const Packages = dynamic(() => import('@/features/marketing/components/Packages'), { ssr: true });
const TrendingDeals = dynamic(() => import('@/features/marketing/components/TrendingDeals'), { ssr: true });
const LuxuryBanner = dynamic(() => import('@/features/marketing/components/LuxuryBanner'), { ssr: true });
const SubscriptionBanner = dynamic(() => import('@/features/marketing/components/SubscriptionBanner'), { ssr: true });

const TravelGptChat = dynamic(() => import('@/features/chat-ai/components/TravelGptChat'));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg-light dark:bg-brand-primary">
      {/* Sticky Header Bar (Navigation) */}
      <div className="sticky top-0 z-[1000] flex flex-col">
        {/* Premium Header */}
        <Header />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Flight Search Wizard — hangs over the hero's bottom edge, fully visible */}
      <div className="relative z-30 -mt-28 md:-mt-32 mb-12">
        <div className="premium-container px-4">
          <FlightSearchForm />
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="flex-1">

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


        {/* Subscription Newsletter Panel */}
        <SubscriptionBanner />


      </main>

      {/* Floating Travel GPT Chat Assistant */}
      <TravelGptChat />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
