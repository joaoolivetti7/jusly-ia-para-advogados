import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-dark-900 relative">
      {/* Background Splashes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl pointer-events-none">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary-900/10 rounded-full blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-900/10 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Investimento Simples</h2>
          <p className="text-gray-400 text-lg">Escolha o plano ideal para o tamanho do seu escritório.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300 ${plan.highlight
                  ? 'bg-white/[0.03] border-primary-500 shadow-2xl shadow-primary-900/20 md:scale-105 z-10 my-4 md:my-0'
                  : 'bg-black border-white/10 hover:border-white/20'
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-full text-xs font-bold text-white tracking-wide">
                  MAIS ESCOLHIDO
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-2">{plan.name}</h3>
                <div className="flex flex-col">
                  {/* Preço Antigo */}
                  {plan.oldPrice && (
                    <span className="text-gray-500 text-sm line-through mb-1">
                      De {plan.oldPrice}
                    </span>
                  )}
                  {/* Preço Novo */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-primary-400' : 'text-gray-500'}`} />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;