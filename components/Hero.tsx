import React from 'react';
import { Play, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {

  const scrollToVideo = () => {
    const videoElement = document.getElementById('demo-video');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToPricing = () => {
    const pricingElement = document.getElementById('pricing');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
          IA para advogados que <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">
            fecha contrato sozinha e agenda reuniões
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          A Jusly atende seu cliente, analisa a viabilidade, fecha contrato, colhe assinatura e documentos e agenda reunião na sua agenda. <span className="text-white font-medium">Tudo isso 24hrs por dia!</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-20 px-4">
          <Button size="lg" className="w-full sm:w-auto group" onClick={scrollToPricing}>
            Assinar Agora
            <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={scrollToVideo}
          >
            <Play className="mr-2 w-4 h-4 fill-current" /> Ver Demonstração
          </Button>
        </div>

        {/* Hero Image / Mockup / Video Container */}
        <div id="demo-video" className="relative max-w-5xl mx-auto px-2 md:px-4">
          {/* Main Interface */}
          <div className="relative rounded-xl md:rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-video group">

            {/* Mock Dashboard Top Bar */}
            <div className="absolute top-0 left-0 right-0 z-20 h-8 md:h-10 border-b border-white/10 flex items-center px-4 space-x-2 bg-black/80 backdrop-blur-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              <div className="ml-4 h-2 w-24 md:w-32 bg-white/10 rounded-full" />
            </div>

            {/* YouTube Video Iframe */}
            <div className="w-full h-full pt-8 md:pt-10 bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/rCOpOIhZ55U"
                title="Demonstração Jusly"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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

        <div className="mt-12 md:mt-12 flex items-center justify-center w-full px-4">
          <Button size="lg" className="w-full sm:w-auto group" onClick={scrollToPricing}>
            Assinar Agora
            <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;