
import React from 'react';
import { Card } from '@/components/ui/card';
import { Clock, Shield, Award, Zap, CheckCircle, Star } from 'lucide-react';

const SurgerySection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Procedimento Rápido",
      description: "Dura em média 15 minutos",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Shield,
      title: "Recuperação Acelerada",
      description: "Retorno às atividades normais em poucos dias",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Award,
      title: "Resultados Excelentes",
      description: "Altíssimo índice de sucesso e satisfação",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const techniques = [
    {
      title: "Tecnologia de Ponta",
      description: "Utilizamos a técnica de facoemulsificação, um procedimento minimamente invasivo que remove a catarata através de uma microincisão, sem a necessidade de pontos na maioria dos casos."
    },
    {
      title: "Lentes Intraoculares Modernas",
      description: "Substituímos o cristalino opaco por uma lente intraocular premium, que pode corrigir não apenas a catarata, mas também erros refrativos como miopia, astigmatismo e presbiopia."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossa Técnica Cirúrgica: 
            <span className="text-ocean-600"> Rápida, Precisa e Segura</span>
          </h2>
        </div>

        {/* Técnicas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {techniques.map((technique, index) => (
            <Card key={index} className="p-8 bg-gradient-to-br from-ocean-50 to-blue-50 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-ocean-600 p-3 rounded-full">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {technique.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {technique.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefícios */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefícios Claros
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full ${benefit.color} mb-6`}>
                    <benefit.icon size={32} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "98%", label: "Taxa de Sucesso" },
            { number: "15min", label: "Duração Média" },
            { number: "2-3 dias", label: "Recuperação" },
            { number: "5000+", label: "Cirurgias Realizadas" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-ocean-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurgerySection;
