import { Check, MessageSquare, BarChart3, Users, Zap, Shield, Clock } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Preços', href: '#pricing' },
];

export const STATS = [
  { value: '98%', label: 'Taxa de Satisfação', icon: Zap },
  { value: '24h', label: 'Por Dia', icon: Clock },
  { value: '+300%', label: 'Aumento de Fechamento', icon: BarChart3 },
  { value: '15min', label: 'Tempo de Instalação', icon: MessageSquare },
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
    cta: 'Começar Agora'
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Roberto Silva",
    role: "Advogado Trabalhista",
    content: "A Jusly revolucionou o atendimento do meu escritório. Antes eu perdia horas qualificando leads curiosos. Agora, só falo com quem já está pronto para fechar. O faturamento aumentou 40% no primeiro mês.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Dra. Mariana Costa",
    role: "Direito de Família",
    content: "A funcionalidade de agendamento automático é sensacional. Acordo todos os dias com minha agenda cheia de clientes qualificados. A interface é linda e muito fácil de usar.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "Dr. Carlos Eduardo",
    role: "Sócio Sênior - C&E Advogados",
    content: "Estávamos céticos quanto ao uso de IA, mas a Jusly nos surpreendeu. O tom de voz é extremamente natural e o fechamento de contratos simples funciona perfeitamente. Recomendo para qualquer banca.",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 5
  }
];