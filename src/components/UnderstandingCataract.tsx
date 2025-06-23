
import React from 'react';
import { Card } from '@/components/ui/card';
import { Eye, Sun, Moon, Palette, Users, Glasses } from 'lucide-react';

const UnderstandingCataract = () => {
  const symptoms = [
    { icon: Eye, text: "Visão embaçada ou nublada" },
    { icon: Sun, text: "Sensibilidade à luz e ao brilho" },
    { icon: Moon, text: "Dificuldade para enxergar à noite" },
    { icon: Palette, text: "Cores parecem desbotadas ou amareladas" },
    { icon: Users, text: "Visão dupla em um dos olhos" },
    { icon: Glasses, text: "Mudanças frequentes no grau dos óculos" }
  ];

  return (
    <section className="section-gradient py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que é Catarata e Quais os Sinais?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Explicação */}
          <div className="space-y-6">
            <Card className="p-8 bg-white shadow-lg border-l-4 border-ocean-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Entenda a Condição
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A catarata é a opacificação do cristalino, a lente natural do olho, 
                que deixa a visão embaçada como se olhasse através de um vidro sujo. 
                É uma condição progressiva e a principal causa de cegueira reversível no mundo.
              </p>
            </Card>

            <div className="bg-ocean-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-ocean-700 mb-3">
                Dados Importantes:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Afeta mais de 17 milhões de pessoas no Brasil</li>
                <li>• Principal causa de cegueira reversível no mundo</li>
                <li>• 95% dos casos têm cura com cirurgia</li>
              </ul>
            </div>
          </div>

          {/* Sintomas */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Fique atento aos principais sintomas:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-ocean-100 p-3 rounded-full">
                      <symptom.icon className="text-ocean-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {symptom.text}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingCataract;
