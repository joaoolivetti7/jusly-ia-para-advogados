import { Check, MessageSquare, BarChart3, Users, Zap, Shield, Clock } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Preços', href: '#pricing' },
  { name: 'Sobre', href: '#about' },
];

export const STATS = [
  { value: '98%', label: 'Taxa de Resposta', icon: Zap },
  { value: '24/7', label: 'Disponibilidade', icon: Clock },
  { value: '+300%', label: 'Aumento em Leads', icon: BarChart3 },
  { value: '2min', label: 'Tempo de Resposta Médio', icon: MessageSquare },
];

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 'R$ 249,00',
    oldPrice: 'R$ 549,00',
    period: '/mês',
    description: 'Ideal para advogados autônomos iniciando na automação.',
    features: [
      'Até 5 usuários',
      'Conversas ilimitadas',
      '1 Conexão de Whatsapp'
    ],
    highlight: false,
    cta: 'Começar Agora'
  },
  {
    name: 'Pro',
    price: 'R$ 449,00',
    oldPrice: 'R$ 949,00',
    period: '/mês',
    description: 'Perfeito para escritórios em crescimento que precisam de escala.',
    features: [
      'Até 10 usuários',
      'Conversas ilimitadas',
      '2 Conexões de Whatsapp'
    ],
    highlight: true,
    cta: 'Começar Agora'
  },
  {
    name: 'Office',
    price: 'R$ 599,00',
    oldPrice: 'R$ 1.149,00',
    period: '/mês',
    description: 'Para grandes bancas que necessitam de controle total.',
    features: [
      'Usuários ilimitados',
      'Conversas ilimitadas',
      '3 Conexões de Whatsapp'
    ],
    highlight: false,
    cta: 'Falar com Consultor'
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Roberto Silva",
    role: "Advogado Trabalhista",
    content: "Gostaria de agendar uma consultoria sobre direito trabalhista...",
    avatar: "https://picsum.photos/seed/roberto/100/100"
  }
];