
import React from 'react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import UnderstandingCataract from '@/components/UnderstandingCataract';
import SurgerySection from '@/components/SurgerySection';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';
import { useBookingStore } from '@/store/bookingStore';

const CataractPage = () => {
  const { openModal, setReason } = useBookingStore();

  const handleCataractBooking = () => {
    setReason("Consulta para cirurgia de catarata");
    openModal();
  };

  const handleQuestionsBooking = () => {
    setReason("Tenho dúvidas sobre cirurgia de catarata");
    openModal();
  };

  return (
    <div className="min-h-screen">
      {/* Top CTA Button */}
      <section className="bg-teal-500 py-4 px-4 text-center">
        <Button 
          onClick={handleCataractBooking}
          variant="outline" 
          className="bg-white text-teal-600 hover:bg-gray-100 font-semibold"
        >
          Agendar avaliação para cirurgia de catarata
        </Button>
      </section>

      <HeroSection />
      
      {/* Middle CTA Button */}
      <section className="py-8 px-4 text-center bg-gray-50">
        <Button 
          onClick={handleCataractBooking}
          size="lg" 
          className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
        >
          Agendar avaliação para cirurgia de catarata
        </Button>
      </section>

      <UnderstandingCataract />
      <SurgerySection />
      <TrustSection />

      {/* Bottom CTA Buttons */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-ocean-50 text-center">
        <div className="container mx-auto max-w-2xl space-y-4">
          <Button 
            onClick={handleCataractBooking}
            size="lg" 
            className="w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg mr-0 md:mr-4 mb-4 md:mb-0"
          >
            Agendar avaliação para cirurgia de catarata
          </Button>
          <Button 
            onClick={handleQuestionsBooking}
            size="lg" 
            variant="outline"
            className="w-full md:w-auto border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold rounded-lg"
          >
            Tenho dúvidas, falar com a clínica
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CataractPage;
