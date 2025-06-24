import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote, Award, Users } from 'lucide-react';
const TrustSection = () => {
  const testimonials = [{
    name: "Maria S.",
    age: "68 anos",
    text: "Voltei a ler sem esforço. A cirurgia foi muito mais tranquila do que eu imaginava.",
    rating: 5
  }, {
    name: "João P.",
    age: "72 anos",
    text: "Depois de anos vendo tudo embaçado, agora posso dirigir novamente com segurança.",
    rating: 5
  }, {
    name: "Ana L.",
    age: "65 anos",
    text: "O atendimento foi excepcional e os resultados superaram minhas expectativas.",
    rating: 5
  }];
  return <section className="section-gradient py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experiência e Cuidado que 
            <span className="text-ocean-600"> Fazem a Diferença</span>
          </h2>
        </div>

        {/* Depoimentos */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            O que nossos pacientes dizem
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <Quote className="text-ocean-300 mx-auto mb-4" size={32} />
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" size={20} />)}
                  </div>
                  
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.age}
                  </div>
                </div>
              </Card>)}
          </div>
        </div>

        {/* Sobre o Cirurgião */}
        <Card className="p-8 lg:p-12 bg-white shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Dr. Carlos Augusto</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Com 5 anos de experiência e mais de 5.000 cirurgias de catarata bem-sucedidas, o Dr. Carlos Mendonça é referência em oftalmologia cirúrgica, combinando técnica apurada e atendimento humanizado.</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Award className="text-ocean-600 mx-auto mb-2" size={32} />
                  <div className="font-semibold text-gray-900">Especialista CBO</div>
                  <div className="text-sm text-gray-600">Conselho Brasileiro de Oftalmologia</div>
                </div>
                <div className="text-center">
                  <Users className="text-ocean-600 mx-auto mb-2" size={32} />
                  <div className="font-semibold text-gray-900">5000+ Cirurgias</div>
                  <div className="text-sm text-gray-600">Procedimentos realizados</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img alt="Dr. Carlos Mendonça - Cirurgião Oftalmologista" className="w-64 h-64 object-cover rounded-full mx-auto shadow-2xl" src="/lovable-uploads/9e8bf759-904c-42f0-a1b2-6693e975fcb6.png" />
              <div className="mt-6 p-4 bg-ocean-50 rounded-xl">
                <div className="text-2xl font-bold text-ocean-600">CRM MA 10871</div>
                <div className="text-sm text-gray-600">Especialista em Cirurgia de Catarata</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default TrustSection;