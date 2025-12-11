import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import Button from './Button';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleClickEnter = () => {
    window.open('https://app.jusly.com.br', '_blank');
  }

  const scrollToPricing = () => {
    const pricingElement = document.getElementById('pricing');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen
      ? 'bg-black'
      : isScrolled
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative z-50">

          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => {
            window.scrollTo(0, 0);
            setIsMobileMenuOpen(false);
          }}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center mr-3">
              <img src="/logo.png" alt="Jusly Logo" className="w-20 h-10" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Jusly</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={handleClickEnter} variant="ghost" size="sm">Entrar</Button>
            <Button onClick={scrollToPricing} variant="primary" size="sm">Assinar Agora</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-black transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-28 px-6 pb-8">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-semibold text-white py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto grid gap-4">
            <Button variant="outline" className="w-full justify-center py-4 text-lg" onClick={handleClickEnter}>Entrar</Button>
            <Button
              variant="primary"
              className="w-full justify-center py-4 text-lg"
              onClick={() => {
                scrollToPricing();
                setIsMobileMenuOpen(false);
              }}
            >
              Assinar Agora
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;