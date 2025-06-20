import React, { type ReactNode } from 'react';
import { ContactForm } from '../ContactForm';
import { useContactForm } from '../ContactForm/useContactForm';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const { isFormOpen, selectedService, openForm, closeForm } = useContactForm();

  // Função para ser chamada globalmente pelos CTAs
  React.useEffect(() => {
    (window as any).openContactForm = openForm;
  }, [openForm]);

  return (
    <>
      {children}
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={closeForm} 
        service={selectedService} 
      />
    </>
  );
}; 