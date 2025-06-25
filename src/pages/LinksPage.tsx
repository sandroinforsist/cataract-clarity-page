
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useBookingStore } from '@/store/bookingStore';

const LinksPage = () => {
  const { openModal, setReason } = useBookingStore();
  const [showChoices, setShowChoices] = useState(false);

  const handleBooking = () => {
    setReason("Consulta através da página de links");
    openModal();
  };

  const toggleChoices = () => {
    setShowChoices(!showChoices);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-ocean-50 flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md mx-auto p-8 bg-white shadow-2xl text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/9e8bf759-904c-42f0-a1b2-6693e975fcb6.png" 
            alt="Dr. Carlos Coelho - Oftalmologista" 
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
          />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Dr. Carlos Coelho
          </h1>
          <p className="text-teal-600 font-semibold mb-2">CRM MA 10871</p>
          <p className="text-gray-600 text-sm">
            Oftalmologista - Especialista em Catarata
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={handleBooking}
            size="lg" 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 text-lg font-semibold rounded-lg shadow-lg"
          >
            Agende sua consulta
          </Button>

          <div className="relative">
            <Button 
              onClick={toggleChoices}
              variant="outline"
              size="lg" 
              className="w-full border-teal-500 text-teal-600 hover:bg-teal-50 py-4 text-lg font-semibold rounded-lg"
            >
              Visite nosso site
            </Button>
            
            {showChoices && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <a 
                  href="/" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-100 transition-colors"
                >
                  Oftalmologia em geral
                </a>
                <a 
                  href="/catarata" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Especialidade Catarata
                </a>
              </div>
            )}
          </div>

          {/* Optional additional links */}
          <div className="pt-4 space-y-3">
            <a 
              href="https://maps.google.com/?q=R.+Cônego+Mendonça,+314,+Centro,+Codó+-+MA" 
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-teal-600 transition-colors text-sm"
            >
              📍 Ver localização no Google Maps
            </a>
            <a 
              href="https://wa.me/5599988031379" 
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-teal-600 transition-colors text-sm"
            >
              💬 WhatsApp direto
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LinksPage;
