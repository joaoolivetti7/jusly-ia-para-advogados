import React from 'react';
import Button from './Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTA: React.FC = () => {
  const handleClickButton = () => {
    window.open('https://wa.me/5541963475301?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Jusly%20e%20gostaria%20de%20conhecer%20a%20IA%20que%20fecha%20contrato%20sozinha.', '_blank');
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
          Pronto para modernizar sua <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">advocacia?</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto px-2">
          Junte-se a mais de 500 escritórios que já automatizaram seu atendimento e aumentaram seu faturamento com o Jusly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={handleClickButton} size="lg" className="w-full sm:w-auto px-8 md:px-12 h-12 md:h-14 text-base md:text-lg">
            <MessageCircle className="mr-2 w-5 h-5" /> Falar com Especialista
          </Button>

        </div>

      </div>
    </section>
  );
};

export default CTA;