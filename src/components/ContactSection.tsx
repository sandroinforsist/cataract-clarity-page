import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    interest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleInterestChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interest: value
    }));
  };
  const formatWhatsApp = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };
  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData(prev => ({
      ...prev,
      whatsapp: formatted
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.interest) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Nossa equipe entrará em contato em breve."
    });
  };
  if (isSubmitted) {
    return <section id="contact-form" className="py-20 px-4 bg-gradient-to-br from-teal-50 to-ocean-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-white shadow-2xl text-center">
            <CheckCircle className="text-teal-500 mx-auto mb-6" size={64} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recebemos suas informações!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Em breve nossa equipe entrará em contato para confirmar sua avaliação.
            </p>
            <div className="bg-teal-50 p-6 rounded-xl">
              <p className="text-teal-700 font-medium">
                Fique atento ao seu WhatsApp nos próximos dias!
              </p>
            </div>
          </Card>
        </div>
      </section>;
  }
  return <section id="contact-form" className="py-20 px-4 bg-gradient-to-br from-teal-50 to-ocean-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dê o Primeiro Passo Para Ver o Mundo com 
            <span className="text-teal-600"> Nitidez</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Preencha o formulário e nossa equipe entrará em contato para agendar 
            sua avaliação completa. É o momento de tirar todas as suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <Card className="p-8 bg-white shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg font-medium text-gray-700">
                  Nome Completo *
                </Label>
                <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} className="mt-2 p-4 text-lg border-2 border-gray-200 focus:border-teal-500" placeholder="Digite seu nome completo" required />
              </div>

              <div>
                <Label htmlFor="whatsapp" className="text-lg font-medium text-gray-700">
                  WhatsApp *
                </Label>
                <Input id="whatsapp" name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleWhatsAppChange} className="mt-2 p-4 text-lg border-2 border-gray-200 focus:border-teal-500" placeholder="(11) 99999-9999" required />
              </div>

              <div>
                <Label className="text-lg font-medium text-gray-700 mb-4 block">
                  Qual seu principal interesse? *
                </Label>
                <RadioGroup value={formData.interest} onValueChange={handleInterestChange}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="avaliacao" id="avaliacao" />
                      <Label htmlFor="avaliacao" className="flex-1 cursor-pointer">
                        Quero agendar uma avaliação para cirurgia
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="duvidas" id="duvidas" />
                      <Label htmlFor="duvidas" className="flex-1 cursor-pointer">
                        Tenho dúvidas sobre a cirurgia
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="retorno" id="retorno" />
                      <Label htmlFor="retorno" className="flex-1 cursor-pointer">
                        Sou um paciente de retorno
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" size="lg" className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Enviar e Agendar Minha Avaliação
              </Button>
            </form>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card className="p-8 bg-white shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Entre em Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-teal-500" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">(99) 3456-7890</div>
                    <div className="text-gray-600">Segunda a Sexta, 8h às 18h</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-teal-500" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">contato@clinicaoftalmologica.com.br</div>
                    <div className="text-gray-600">Respondemos em até 24h</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-teal-500" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Rua das Flores, 123</div>
                    <div className="text-gray-600">Vila Madalena, São Paulo - SP</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-teal-500 to-ocean-600 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Avaliação Gratuita
              </h3>
              <p className="text-teal-100 leading-relaxed">
                Nossa primeira consulta é completamente gratuita. Você receberá 
                uma avaliação completa e um plano de tratamento personalizado.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;