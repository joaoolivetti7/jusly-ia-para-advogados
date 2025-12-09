import React from 'react';
import { Scale, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Jusly</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              A plataforma de inteligência artificial definitiva para advogados que buscam eficiência, escala e qualidade de vida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Integrações</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Atualizações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">LGPD</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Jusly Tecnologia Jurídica. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Todos os sistemas operacionais
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;