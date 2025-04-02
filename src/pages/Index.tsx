
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PredictorForm from '@/components/PredictorForm';
import CollegeInsightsSection from '@/components/CollegeInsightsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <PredictorForm />
        <CollegeInsightsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
