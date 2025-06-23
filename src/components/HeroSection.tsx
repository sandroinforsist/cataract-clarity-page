
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Eye className="text-ocean-600 mr-3" size={40} />
              <span className="text-ocean-600 font-semibold text-lg">Cirurgia de Catarata</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              A visão nublada está 
              <span className="text-ocean-600"> limitando sua vida?</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Recupere a clareza para ver o mundo com novas cores.
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A cirurgia de catarata é um procedimento rápido, seguro e indolor que pode 
              restaurar sua visão. Descubra como podemos ajudar você a ver com nitidez novamente.
            </p>
            
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Agendar Avaliação para Cirurgia
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-ocean-100 to-ocean-200 rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pessoa idosa sorrindo lendo um livro no jardim com visão clara"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-ocean-600">98%</div>
                  <div className="text-sm text-gray-600">Taxa de Sucesso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
