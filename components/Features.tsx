import React, { useState, useEffect } from 'react';
import { MessageSquare, BarChart, Bot, FileSignature, X } from 'lucide-react';

const Features: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-32">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Funcionalidades que <span className="text-primary-500">Vendem</span> por Você
          </h2>
          <p className="text-gray-400 text-lg">
            Automatize seu negócio jurídico com ferramentas poderosas e fáceis de usar.
            Sem necessidade de conhecimento técnico.
          </p>
        </div>

        {/* Feature 4: Contract AI */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-wide">Funcionalidade 1</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 md:mb-6">IA que fecha <br className="hidden md:block" />contratos sozinha</h3>
            <p className="text-gray-400 text-base mb-6 md:mb-8 leading-relaxed">
              Automatize o fechamento de contratos com inteligência avançada. A Jusly elimina os leads curiosos, e te entrega o cliente com o contrato fechado.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Atende, qualifica e analisa a viabilidade',
                'Fecha contrato e colhe assinatura e documentos',
                'Agenda reunião direto na sua agenda e te notifica'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <FileSignature size={12} className="text-indigo-400" />
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-2 relative">
            <div
              className="relative rounded-xl border border-white/10 bg-gray-900 overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => openImage("/five-image.jpeg")}
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/20 to-transparent pointer-events-none" />
              <img
                src="/five-image.jpeg"
                alt="AI Contract Closing"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm transition-opacity">Ampliar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 1: CRM */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 relative">
            <div
              className="relative rounded-xl border border-white/10 bg-gray-900 overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => openImage("/second-image.jpeg")}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent pointer-events-none" />
              <img
                src="/second-image.jpeg"
                alt="CRM Interface"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm transition-opacity">Ampliar</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <span className="text-xs font-bold text-yellow-500 uppercase tracking-wide">Funcionalidade 2</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 md:mb-6">CRM com movimentação <br className="hidden md:block" />automática</h3>
            <p className="text-gray-400 text-base mb-6 md:mb-8 leading-relaxed">
              Acompanhe o atendimento em cada etapa no CRM com movimentação automática. A própria IA movimenta o lead de acordo com a conversa, em tempo real.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Verifique os clientes que estão na etapa de fechamento',
                'Gere resumos da conversa com o cliente direto no CRM',
                'Analise as taxas de conversão e fechamento'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                    <MessageSquare size={12} className="text-primary-400" />
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 2: IA Follow-up */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="text-xs font-bold text-green-500 uppercase tracking-wide">Funcionalidade 3</span>
            </div>
            <h3 className="text-2xl  font-bold text-white mb-4 md:mb-6">IA com etapas de atendimento <br className="hidden md:block" />e Follow-up automático</h3>
            <p className="text-gray-400 text-base  mb-6 md:mb-8 leading-relaxed">
              Crie especialistas virtuais para cada área do direito, em que seu escritório atua. Além de follow-ups automáticos ilimitados, para lembrar o cliente que não respondeu.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Crie etapas de atendimento do seu funil de vendas',
                'Notificação no seu Whatsapp de acordo com a etapa',
                'Follow-up automático ilimitado'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <BarChart size={12} className="text-green-400" />
                  </div>
                  <span className="text-sm  text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-2 relative">
            <div
              className="relative rounded-xl border border-white/10 bg-gray-900 overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => openImage("/third-image.jpeg")}
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-green-900/20 to-transparent pointer-events-none" />
              <img
                src="/third-image.jpeg"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm transition-opacity">Ampliar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: FAQ */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div
              className="relative rounded-xl border border-white/10 bg-gray-900 overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => openImage("/fourth-image.jpeg")}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent pointer-events-none" />
              <img
                src="/fourth-image.jpeg"
                alt="AI FAQ"
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm transition-opacity">Ampliar</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-xs font-bold text-purple-500 uppercase tracking-wide">Funcionalidade 4</span>
            </div>
            <h3 className="text-2xl  font-bold text-white mb-4 md:mb-6">Perguntas Frequentes para <br className="hidden md:block" />responder seus clientes</h3>
            <p className="text-gray-400 text-base  mb-6 md:mb-8 leading-relaxed">
              Treine a IA com as perguntas mais frequentes dos seus clientes. Deixe de responder curiosos e leads desqualificados o dia inteiro. Fale apenas com quem realmente tem viabilidade e já demonstrou interesse.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Deixe a IA cuidar das perguntas repetitivas',
                'Foque no cliente que realmente tem interesse',
                'Reduza o trabalho e aumente o fechamento'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Bot size={12} className="text-purple-400" />
                  </div>
                  <span className="text-sm  text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Image Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-7xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 z-10 p-2 text-white hover:text-primary-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Expanded Feature"
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;