import { useState } from 'react';

export const useContactForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Diagnóstico Geral');

  const openForm = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return {
    isFormOpen,
    selectedService,
    openForm,
    closeForm
  };
}; 