import React from 'react';
import { MessageSquare, BarChart, Bot, FileSignature } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-32">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Funcionalidades que <span className="text-primary-500">Vendem</span> por Você
          </h2>
          <p className="text-gray-400 text-lg">
            Automatize seu negócio jurídico com ferramentas poderosas e fáceis de usar. 
            Sem necessidade de conhecimento técnico.
          </p>
        </div>

        {/* Feature 1: CRM */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="relative rounded-xl border border-white/10 bg-gray-900 overflow-hidden aspect-video md:aspect-square shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent pointer-events-none" />
               <img 
                  src="/second-image.jpeg" 
                  alt="CRM Interface" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
               <span className="text-xs font-bold text-yellow-500 uppercase tracking-wide">Funcionalidade 1</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">CRM com movimentação <br className="hidden md:block"/>automática</h3>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Converse com seus leads em tempo real pelo chat integrado ao CRM. O Jusly qualifica o cliente antes mesmo de você digitar a primeira palavra.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Respostas automáticas baseadas no seu tom de voz',
                'Triagem inicial de casos e qualificação de leads',
                'Histórico unificado de WhatsApp, Email e Chat'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                    <MessageSquare size={12} className="text-primary-400" />
                  </div>
                  <span className="text-sm md:text-base text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 2: IA Follow-up */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
               <span className="text-xs font-bold text-green-500 uppercase tracking-wide">Funcionalidade 2</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">IA com etapas de atendimento <br className="hidden md:block"/>e Follow-up automático</h3>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Uma visão completa da saúde financeira e comercial do seu escritório. Dados em tempo real para tomar decisões estratégicas, não palpites.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Métricas de conversão por advogado',
                'Previsão de faturamento baseada em contratos ativos',
                'Visualização clara do funil de vendas'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <BarChart size={12} className="text-green-400" />
                  </div>
                  <span className="text-sm md:text-base text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-2 relative">
             <div className="relative rounded-xl border border-white/10 bg-gray-900 overflow-hidden aspect-video md:aspect-square shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tl from-green-900/20 to-transparent pointer-events-none" />
                <img 
                  src="/third-image.jpeg" 
                  alt="Analytics Dashboard" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                />
            </div>
          </div>
        </div>

        {/* Feature 3: FAQ */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="relative rounded-xl border border-white/10 bg-gray-900 overflow-hidden aspect-video md:aspect-square shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent pointer-events-none" />
               <img 
                  src="/fourth-image.jpeg" 
                  alt="AI FAQ" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
               <span className="text-xs font-bold text-purple-500 uppercase tracking-wide">Funcionalidade 3</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Perguntas Frequentes para <br className="hidden md:block"/>responder seus clientes</h3>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Crie especialistas virtuais para cada área do direito. Um agente para Trabalhista, outro para Família, todos trabalhando simultaneamente.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Treine a IA com suas próprias petições e contratos',
                'Modelos pré-prontos para agilidade imediata',
                'Disponibilidade 24/7 para seus clientes'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Bot size={12} className="text-purple-400" />
                  </div>
                  <span className="text-sm md:text-base text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 4: Contract AI */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
               <span className="text-xs font-bold text-indigo-500 uppercase tracking-wide">Funcionalidade 4</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">IA que fecha <br className="hidden md:block"/>contratos sozinha</h3>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Automatize o fechamento de contratos com inteligência avançada. A IA negocia e gera documentos baseados nos seus padrões de escritório.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Geração automática de minutas e contratos',
                'Envio para assinatura digital integrado',
                'Notificação de fechamento em tempo real'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <FileSignature size={12} className="text-indigo-400" />
                  </div>
                  <span className="text-sm md:text-base text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-2 relative">
             <div className="relative rounded-xl border border-white/10 bg-gray-900 overflow-hidden aspect-video md:aspect-square shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/20 to-transparent pointer-events-none" />
               <img 
                  src="/five-image.jpeg" 
                  alt="AI Contract Closing" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;