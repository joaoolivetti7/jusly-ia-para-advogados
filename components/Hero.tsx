import React, { useState, useEffect } from 'react';
import { Play, MessageSquare, ShieldCheck, Sparkles, X } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Close video on Escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-900/20 rounded-full blur-[80px] md:blur-[128px]" />
        <div className="absolute bottom-20 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-900/20 rounded-full blur-[80px] md:blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
          <span className="text-xs md:text-sm font-medium text-primary-200">Nova IA Generativa 2.0 Disponível</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
          Seu Escritório no <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">
            Piloto Automático
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          A IA que atende seus clientes, agenda consultas e organiza seus processos.
          Recupere seu tempo e foque no que realmente importa: <span className="text-white font-medium">Ganhar causas.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-20 px-4">
          <Button size="lg" className="w-full sm:w-auto group">
            Começar Gratuitamente
            <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => setIsVideoOpen(true)}
          >
            <Play className="mr-2 w-4 h-4 fill-current" /> Ver Demonstração
          </Button>
        </div>

        {/* Hero Image / Mockup */}
        <div className="relative max-w-5xl mx-auto px-2 md:px-4">
          {/* Main Interface */}
          <div className="relative rounded-xl md:rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-video group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none" />

            {/* Mock Dashboard Top Bar */}
            <div className="h-8 md:h-10 border-b border-white/10 flex items-center px-4 space-x-2 bg-black/40">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              <div className="ml-4 h-2 w-24 md:w-32 bg-white/10 rounded-full" />
            </div>

            {/* Background Image inside mockup */}
            {/* Background Image inside mockup */}
            <img
              src="/first-image.jpg"
              alt="Dashboard Preview"
              className="w-full h-full object-contain opacity-60 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Floating Notification Card - Hidden on mobile, visible on tablet+ */}
            <div className="hidden md:block absolute top-1/4 right-8 lg:right-16 z-20 animate-float">
              <div className="bg-gray-900/90 backdrop-blur-xl border border-primary-500/30 p-4 rounded-xl shadow-2xl max-w-xs w-full">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-green-500/20 text-green-400">Novo Lead</span>
                      <span className="text-xs text-gray-500">Agora</span>
                    </div>
                    <h4 className="font-medium text-white text-sm">Roberto Silva</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      "Gostaria de agendar uma consultoria sobre direito trabalhista..."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5">
              <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-primary-400" />
              <span className="text-[10px] md:text-xs text-gray-300">LGPD Compliant & Criptografado</span>
            </div>

          </div>

          {/* Glow Effect behind mockup */}
          <div className="absolute -inset-4 bg-primary-600/20 blur-2xl md:blur-3xl -z-10 rounded-[2rem] md:rounded-[3rem]" />
        </div>

        {/* Social Proof Line */}
        <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-gray-500 text-sm font-medium px-4">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-xs overflow-hidden">
                  <img src={`https://picsum.photos/seed/${i}/100`} alt="User" />
                </div>
              ))}
            </div>
            <span className="text-xs md:text-sm">+500 Advogados confiam</span>
          </div>
          <span className="hidden sm:block text-gray-700">•</span>
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Instalação em 2 min
          </div>
        </div>

      </div>

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside the video wrapper
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={() => setIsVideoOpen(false)}
            >
              <X size={24} />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/rCOpOIhZ55U?autoplay=1"
              title="Demonstração Jusly"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;