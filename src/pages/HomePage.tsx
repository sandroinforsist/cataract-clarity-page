import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Eye, AlertTriangle, Stethoscope, Zap, Heart, CheckCircle, Star, Award, Shield, Clock } from 'lucide-react';
import Footer from '@/components/Footer';
import { useBookingStore } from '@/store/bookingStore';
const HomePage = () => {
  const {
    openModal,
    setReason
  } = useBookingStore();
  const handleBooking = (reason: string) => {
    setReason(reason);
    openModal();
  };
  const symptoms = ["Visão embaçada? Dificuldade para ler placas de trânsito ou as letras miúdas de um livro.", "Dores de cabeça frequentes? Elas podem estar relacionadas a um esforço excessivo da visão.", "Sensibilidade à luz ou olhos lacrimejando? Pode ser um sinal de irritação ou outras condições.", "\"Areia\" nos olhos ou vermelhidão? Sintomas comuns que precisam de avaliação.", "Percebeu \"moscas\" voando na visão? Pontinhos ou manchas que se movem no seu campo de visão."];
  const exams = [{
    title: "Refração (Grau dos Óculos)",
    description: "Avaliação precisa para determinar a necessidade de correção visual",
    icon: Eye,
    gradient: "from-teal-500 to-cyan-600"
  }, {
    title: "Pressão Intraocular",
    description: "Medição da pressão dentro do olho para prevenção de doenças",
    icon: Shield,
    gradient: "from-blue-500 to-teal-600"
  }, {
    title: "Glaucoma",
    description: "Diagnóstico e acompanhamento desta doença silenciosa",
    icon: AlertTriangle,
    gradient: "from-orange-500 to-red-600"
  }, {
    title: "Laudos Oftalmológicos",
    description: "Documentação médica para diversas finalidades",
    icon: Award,
    gradient: "from-purple-500 to-indigo-600"
  }, {
    title: "Teste do Olhinho",
    description: "Exame fundamental para recém-nascidos e crianças",
    icon: Heart,
    gradient: "from-pink-500 to-rose-600"
  }, {
    title: "Fundo de Olho",
    description: "Avaliação detalhada da retina e estruturas internas",
    icon: Eye,
    gradient: "from-green-500 to-emerald-600"
  }, {
    title: "Retinopatia Hipertensiva",
    description: "Diagnóstico de alterações causadas pela pressão alta",
    icon: Zap,
    gradient: "from-yellow-500 to-orange-600"
  }, {
    title: "Retinopatia Diabética",
    description: "Detecção precoce de complicações do diabetes nos olhos",
    icon: CheckCircle,
    gradient: "from-teal-500 to-blue-600"
  }];
  const surgeries = [{
    title: "Cirurgia de Catarata",
    description: "Substituição da lente natural opaca por uma nova, devolvendo clareza à visão",
    icon: Eye,
    stats: "98% de sucesso",
    duration: "15-20 min"
  }, {
    title: "Cirurgia de Pterígio",
    description: "Remoção do crescimento anormal de tecido sobre a córnea",
    icon: Zap,
    stats: "Recuperação rápida",
    duration: "30 min"
  }, {
    title: "Cirurgia de Pequenas Lesões Perioculares",
    description: "Tratamento de lesões e alterações ao redor dos olhos",
    icon: Shield,
    stats: "Ambulatorial",
    duration: "20-40 min"
  }];
  const tips = [{
    text: "Proteja-se do sol: Use óculos de sol com proteção UV. Eles são um acessório de saúde!",
    icon: Shield
  }, {
    text: "Faça pausas das telas: A cada hora no computador ou celular, desvie o olhar por 20 segundos para um objeto distante. Seus olhos agradecem.",
    icon: Clock
  }, {
    text: "Alimente sua visão: Alimentos ricos em vitaminas A, C e E, como vegetais de folhas escuras e cenoura, são ótimos para a saúde ocular.",
    icon: Heart
  }, {
    text: "Evite coçar os olhos: Este hábito pode causar irritações e até deformar a córnea.",
    icon: AlertTriangle
  }, {
    text: "Visite seu oftalmologista: A prevenção é sempre o melhor caminho. Uma consulta anual garante que sua visão esteja sempre em boas mãos.",
    icon: CheckCircle
  }];
  return <div className="min-h-screen bg-white">
      {/* Hero Section - Minimalista e Poderoso */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-white to-ocean-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-700 font-medium">
                  <Eye className="mr-2" size={20} />
                  Dr. Carlos Coelho - CRM MA 10871
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Seus olhos contam sua
                  <span className="block text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text">
                    história
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Nós ajudamos a cuidar dela. Oftalmologia especializada com tecnologia moderna e atendimento humanizado.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => handleBooking("Consulta oftalmológica geral")} size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Agendar Consulta
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
                  Saiba Mais
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">5000+</div>
                  <div className="text-sm text-gray-600">Cirurgias</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">98%</div>
                  <div className="text-sm text-gray-600">Sucesso</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">5+</div>
                  <div className="text-sm text-gray-600">Anos</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-3xl rotate-6 opacity-20"></div>
              <img src="/lovable-uploads/9e8bf759-904c-42f0-a1b2-6693e975fcb6.png" alt="Dr. Carlos Coelho - Oftalmologista" className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 1: Bem-vindo */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900/0">
              Bem-vindo! 
              <span className="block text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text">
                Seus olhos contam a sua história
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Você já parou para pensar em como a sua visão é preciosa? É através dos seus olhos que você vê o mundo, as pessoas que ama e os momentos que importam. A oftalmologia é a especialidade da medicina que se dedica a proteger esse sentido tão valioso.
            </p>
            
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Mais do que tratar doenças, nosso objetivo é garantir que você tenha qualidade de vida e enxergue cada detalhe do seu caminho. Cuidar dos seus olhos é cuidar de você. Vamos juntos nessa jornada?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Sinais de Alerta */}
      <section className="py-24 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <AlertTriangle className="text-orange-600" size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Está na hora de agendar uma consulta?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fique de olho nestes sinais. Um diagnóstico precoce faz toda a diferença!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {symptoms.map((symptom, index) => <Card key={index} className="p-6 bg-white/80 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{symptom}</p>
                </div>
              </Card>)}
          </div>
          
          <div className="text-center">
            <Button onClick={() => handleBooking("Consulta para avaliação de sintomas")} size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg">
              Agende sua consulta aqui
            </Button>
          </div>
        </div>
      </section>

      {/* Seção 3: Exames e Procedimentos */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
              <Stethoscope className="text-teal-600" size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tecnologia e Cuidado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que esperar da sua consulta? Utilizamos tecnologia de ponta para diagnóstico preciso e confortável.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {exams.map((exam, index) => <Card key={index} className="group p-6 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${exam.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${exam.gradient} rounded-xl mb-4`}>
                    <exam.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{exam.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{exam.description}</p>
                </div>
              </Card>)}
          </div>
          
          <div className="text-center">
            <Button onClick={() => handleBooking("Consulta para exames oftalmológicos")} size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg">
              Agendar consulta para exames
            </Button>
          </div>
        </div>
      </section>

      {/* Seção 4: Cirurgias */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Zap className="text-blue-600" size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cirurgias Oftalmológicas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções modernas e minimamente invasivas para você voltar a enxergar o mundo com nitidez.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {surgeries.map((surgery, index) => <Card key={index} className="group p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <surgery.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{surgery.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{surgery.description}</p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-blue-600">{surgery.stats}</div>
                      <div className="text-xs text-gray-500">Taxa/Tipo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-blue-600">{surgery.duration}</div>
                      <div className="text-xs text-gray-500">Duração</div>
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>
          
          <div className="text-center">
            <Button onClick={() => handleBooking("Consulta sobre procedimentos cirúrgicos")} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg">
              Agendar consulta sobre cirurgias
            </Button>
          </div>
        </div>
      </section>

      {/* Seção 5: Dicas de Ouro */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Heart className="text-green-600" size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dicas de Ouro para a Saúde da sua Visão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cuidar dos olhos no dia a dia é mais simples do que parece. Adote estes hábitos e preserve sua visão!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tips.map((tip, index) => <Card key={index} className="group p-6 bg-white/80 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tip.icon className="text-white" size={20} />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{tip.text}</p>
                </div>
              </Card>)}
          </div>
          
          <div className="text-center">
            <Button onClick={() => handleBooking("Consulta preventiva")} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg">
              Agendar consulta preventiva
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default HomePage;