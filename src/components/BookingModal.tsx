
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useBookingStore } from '@/store/bookingStore';
import { useToast } from '@/hooks/use-toast';

const BookingModal = () => {
  const { isOpen, closeModal, reason, setReason } = useBookingStore();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.whatsapp || !reason) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    const message = `Olá, venho através do site.
Me chamo ${formData.name}.
Gostaria de agendar ${reason}.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5599988031379?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({ name: '', whatsapp: '' });
    setReason('');
    closeModal();
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para o WhatsApp para finalizar o agendamento."
    });
  };

  const handleClose = () => {
    setFormData({ name: '', whatsapp: '' });
    setReason('');
    closeModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-900">
            Agendar Consulta
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-base font-medium text-gray-700">
              Nome Completo *
            </Label>
            <Input 
              id="name" 
              name="name" 
              type="text" 
              value={formData.name} 
              onChange={handleInputChange} 
              className="mt-2 p-3 text-base border-2 border-gray-200 focus:border-teal-500" 
              placeholder="Digite seu nome completo" 
              required 
            />
          </div>

          <div>
            <Label htmlFor="whatsapp" className="text-base font-medium text-gray-700">
              WhatsApp *
            </Label>
            <Input 
              id="whatsapp" 
              name="whatsapp" 
              type="tel" 
              value={formData.whatsapp} 
              onChange={handleWhatsAppChange} 
              className="mt-2 p-3 text-base border-2 border-gray-200 focus:border-teal-500" 
              placeholder="(99) 99999-9999" 
              required 
            />
          </div>

          <div>
            <Label className="text-base font-medium text-gray-700 mb-4 block">
              Motivo da consulta *
            </Label>
            <RadioGroup value={reason} onValueChange={setReason}>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="Consulta para cirurgia de catarata" id="catarata" />
                  <Label htmlFor="catarata" className="flex-1 cursor-pointer">
                    Consulta para cirurgia de catarata
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="Consulta de retorno" id="retorno" />
                  <Label htmlFor="retorno" className="flex-1 cursor-pointer">
                    Consulta de retorno
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-base font-semibold rounded-lg shadow-lg"
          >
            Enviar para WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
