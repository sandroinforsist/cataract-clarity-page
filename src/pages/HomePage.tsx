
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Eye, AlertTriangle, Stethoscope, Zap, Heart } from 'lucide-react';
import Footer from '@/components/Footer';
import { useBookingStore } from '@/store/bookingStore';

const HomePage = () => {
  const { openModal, setReason } = useBookingStore();

  const handleBooking = (reason: string) => {
    setReason(reason);
    openModal();
  };

  const symptoms = [
    "Visão embaçada? Dificuldade para ler placas de trânsito ou as letras miúdas de um livro.",
    "Dores de cabeça frequentes? Elas podem estar relacionadas a um esforço excessivo da visão.",
    "Sensibilidade à luz ou olhos lacrimejando? Pode ser um sinal de irritação ou outras condições.",
    "\"Areia\" nos olhos ou vermelhidão? Sintomas comuns que precisam de avaliação.",
    "Percebeu \"moscas\" voando na visão? Pontinhos ou manchas que se movem no seu campo de visão."
  ];

  const exams = [
    {
      title: "Refração (Grau dos Óculos)",
      description: "Avaliação precisa para determinar a necessidade de correção visual"
    },
    {
      title: "Pressão Intraocular",
      description: "Medição da pressão dentro do olho para prevenção de doenças"
    },
    {
      title: "Glaucoma",
      description: "Diagnóstico e acompanhamento desta doença silenciosa"
    },
    {
      title: "Laudos Oftalmológicos",
      description: "Documentação médica para diversas finalidades"
    },
    {
      title: "Teste do Olhinho",
      description: "Exame fundamental para recém-nascidos e crianças"
    },
    {
      title: "Fundo de Olho",
      description: "Avaliação detalhada da retina e estruturas internas"
    },
    {
      title: "Retinopatia Hipertensiva",
      description: "Diagnóstico de alterações causadas pela pressão alta"
    },
    {
      title: "Retinopatia Diabética",
      description: "Detecção precoce de complicações do diabetes nos olhos"
    }
  ];

  const surgeries = [
    {
      title: "Cirurgia de Catarata",
      description: "Substituição da lente natural opaca por uma nova, devolvendo clareza à visão"
    },
    {
      title: "Cirurgia de Pterígio",
      description: "Remoção do crescimento anormal de tecido sobre a córnea"
    },
    {
      title: "Cirurgia de Pequenas Lesões Perioculares",
      description: "Tratamento de lesões e alterações ao redor dos olhos"
    }
  ];

  const tips = [
    "Proteja-se do sol: Use óculos de sol com proteção UV. Eles são um acessório de saúde!",
    "Faça pausas das telas: A cada hora no computador ou celular, desvie o olhar por 20 segundos para um objeto distante. Seus olhos agradecem.",
    "Alimente sua visão: Alimentos ricos em vitaminas A, C e E, como vegetais de folhas escuras e cenoura, são ótimos para a saúde ocular.",
    "Evite coçar os olhos: Este hábito pode causar irritações e até deformar a córnea.",
    "Visite seu oftalmologista: A prevenção é sempre o melhor caminho. Uma consulta anual garante que sua visão esteja sempre em boas mãos."
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

      {/* Seção 1: Bem-vindo */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Eye className="mx-auto mb-6 text-teal-600" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bem-vindo! Seus olhos contam a sua história, e nós ajudamos a cuidar dela.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Você já parou para pensar em como a sua visão é preciosa? É através dos seus olhos que você vê o mundo, as pessoas que ama e os momentos que importam. A oftalmologia é a especialidade da medicina que se dedica a proteger esse sentido tão valioso. Mais do que tratar doenças, nosso objetivo é garantir que você tenha qualidade de vida e enxergue cada detalhe do seu caminho. Cuidar dos seus olhos é cuidar de você. Vamos juntos nessa jornada?
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2: Sinais de Alerta */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <AlertTriangle className="mx-auto mb-6 text-orange-600" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Está na hora de agendar uma consulta? Fique de olho nestes sinais.
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Muitas vezes, nossos olhos dão pequenos sinais de que algo precisa de atenção. Se você notar algum destes sintomas, não hesite em nos procurar. Um diagnóstico precoce faz toda a diferença!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {symptoms.map((symptom, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-700 leading-relaxed">{symptom}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900 mb-4">Identificou algum desses sinais?</p>
            <Button 
              onClick={() => handleBooking("Consulta para avaliação de sintomas")}
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
            >
              Agende sua consulta aqui
            </Button>
          </div>
        </div>
      </section>

      {/* Seção 3: Tecnologia e Cuidado */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Stethoscope className="mx-auto mb-6 text-teal-600" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tecnologia e Cuidado: O que esperar da sua consulta?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Entendemos que uma visita ao médico pode gerar dúvidas. Fique tranquilo! O Dr. Carlos Coelho utiliza tecnologia de ponta para realizar um diagnóstico preciso e confortável. Em sua consulta, podemos realizar exames como:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {exams.map((exam, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{exam.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{exam.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => handleBooking("Consulta para exames oftalmológicos")}
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
            >
              Agendar consulta para exames
            </Button>
          </div>
        </div>
      </section>

      {/* Seção 4: Cirurgias */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Zap className="mx-auto mb-6 text-blue-600" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cirurgias Oftalmológicas
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              A oftalmologia evoluiu muito, e hoje o Dr. Carlos Coelho oferece procedimentos cirúrgicos modernos e minimamente invasivos. Nosso foco é encontrar a melhor solução para você e seu estilo de vida.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {surgeries.map((surgery, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{surgery.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{surgery.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => handleBooking("Consulta sobre procedimentos cirúrgicos")}
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
            >
              Agendar consulta sobre cirurgias
            </Button>
          </div>
        </div>
      </section>

      {/* Seção 5: Dicas de Ouro */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Heart className="mx-auto mb-6 text-green-600" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dicas de Ouro para a Saúde da sua Visão
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Cuidar dos olhos no dia a dia é mais simples do que parece e faz um bem enorme! Adote estes hábitos e preserve sua visão:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tips.map((tip, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-700 leading-relaxed">{tip}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => handleBooking("Consulta preventiva")}
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
            >
              Agendar consulta preventiva
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
