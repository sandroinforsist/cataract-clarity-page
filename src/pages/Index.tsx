
import React from 'react';
import HeroSection from '@/components/HeroSection';
import UnderstandingCataract from '@/components/UnderstandingCataract';
import SurgerySection from '@/components/SurgerySection';
import TrustSection from '@/components/TrustSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <UnderstandingCataract />
      <SurgerySection />
      <TrustSection />
      <ContactSection />
    </div>
  );
};

export default Index;
