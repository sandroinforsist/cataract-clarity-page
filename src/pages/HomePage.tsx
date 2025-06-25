
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Eye, Glasses, Heart, Baby, FileText } from 'lucide-react';
import Footer from '@/components/Footer';
import { useBookingStore } from '@/store/bookingStore';

const HomePage = () => {
  const { openModal, setReason } = useBookingStore();

  const handleBooking = (reason: string) => {
    setReason(reason);
    openModal();
  };

  const services = [
    {
      icon: Glasses,
      title: "Refração (Grau dos Óculos)",
      description: "Exames para identificar miopia, hipermetropia, astigmatismo e presbiopia. Avaliação completa da sua necessidade visual.",
      buttonText: "Quero consultar sobre minha visão",
      reason: "Consulta para avaliação de grau dos óculos"
    },
    {
      icon: Eye,
      title: "Pressão Intraocular e Glaucoma",
      description: "Prevenção e diagnóstico precoce do glaucoma através do controle da pressão intraocular. Proteja sua visão.",
      buttonText: "Avaliar minha pressão ocular",
      reason: "Consulta para avaliação de pressão ocular"
    },
    {
      icon: Heart,
      title: "Fundo de Olho e Retinopatias",
      description: "Exame essencial para detectar retinopatia diabética, hipertensiva e outras doenças que afetam a retina.",
      buttonText: "Fazer exame de fundo de olho",
      reason: "Consulta para exame de fundo de olho"
    },
    {
      icon: Baby,
      title: "Teste do Olhinho",
      description: "Exame neonatal obrigatório para detectar precocemente problemas oculares em recém-nascidos e crianças.",
      buttonText: "Consultar sobre o teste do olhinho",
      reason: "Consulta sobre teste do olhinho"
    },
    {
      icon: FileText,
      title: "Laudos e Atestados Oftalmológicos",
      description: "Documentos médicos com validade legal para CNH, concursos, trabalho e outras necessidades específicas.",
      buttonText: "Solicitar laudo oftalmológico",
      reason: "Consulta para laudo oftalmológico"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-ocean-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/9e8bf759-904c-42f0-a1b2-6693e975fcb6.png" 
              alt="Dr. Carlos Coelho - Oftalmologista" 
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dr. Carlos Coelho
            </h1>
            <p className="text-xl text-teal-600 font-semibold mb-4">CRM MA 10871</p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Oftalmologista especializado em cirurgia de catarata e cuidados abrangentes da visão. 
              Atendimento humanizado com técnicas modernas para preservar e restaurar sua saúde ocular.
            </p>
            <Button 
              onClick={() => handleBooking("Consulta oftalmológica geral")}
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agende sua consulta
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Especialidades e Exames Oftalmológicos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <service.icon className="text-teal-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Button
                    onClick={() => handleBooking(service.reason)}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-lg transition-colors duration-300"
                  >
                    {service.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
