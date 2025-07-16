"use client"
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  FileText,
  DollarSign,
  Building,
  Users,
  Calculator,
  Award,
  Lightbulb,
  Target,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Clock,
  Trophy,
  Globe,
  Zap,
} from "lucide-react";
import { Footer } from "@/components/footer";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    revenue: "",
    message: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Formulário enviado! Nossa equipe entrará em contato em breve.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Redução de até 60% no IRPJ e CSLL",
      description:
        "Recupere uma parte significativa dos seus investimentos em inovação através de incentivos fiscais",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Aumento da Competitividade",
      description:
        "Transforme seus projetos inovadores em vantagem competitiva e financeira",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Segurança Jurídica Completa",
      description:
        "Assessoria especializada garante conformidade total com as exigências legais",
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Maximização dos Benefícios",
      description:
        "Identificamos todas as atividades elegíveis para otimizar seu retorno fiscal",
    },
  ];

  const requirements = [
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: "Regime de Lucro Real",
      description: "Empresa optante pelo regime de tributação do Lucro Real",
    },
    {
      icon: <FileText className="w-12 h-12 text-green-600" />,
      title: "Regularidade Fiscal",
      description: "Certidões de regularidade fiscal e débitos (CND ou CPD-EN)",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "Lucro Fiscal",
      description: "Empresa deve ter apurado lucro fiscal no ano-base",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-orange-600" />,
      title: "Investimento em PD&I",
      description:
        "Atividades de Pesquisa, Desenvolvimento e Inovação Tecnológica",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Análise e Diagnóstico",
      description:
        "Analisamos seus projetos e despesas para identificar todas as atividades elegíveis para os benefícios fiscais da Lei do Bem",
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "02",
      title: "Elaboração do Projeto",
      description:
        "Preparamos toda a documentação técnica e contábil necessária, garantindo conformidade total com as exigências legais",
      icon: <FileText className="w-8 h-8 text-green-600" />,
    },
    {
      number: "03",
      title: "Aplicação e Resultados",
      description:
        "Submetemos o processo e acompanhamos até a aprovação, garantindo a maximização do seu retorno fiscal",
      icon: <Trophy className="w-8 h-8 text-purple-600" />,
    },
  ];

  const testimonials = [
    {
      name: "João Silva",
      role: "CFO, Tech Solutions",
      content:
        "A Assessoria do Bem foi fundamental para obtermos os benefícios da Lei do Bem. O processo foi transparente e o resultado superou nossas expectativas, gerando uma economia fiscal expressiva.",
      rating: 5,
    },
    {
      name: "Maria Oliveira",
      role: "Diretora de Inovação, Indústria Alpha",
      content:
        "Com a ajuda da equipe, conseguimos não só a aprovação do nosso projeto, mas também uma nova visão estratégica sobre como investir em inovação. Altamente recomendados!",
      rating: 5,
    },
    {
      name: "Carlos Santos",
      role: "CEO, Inovação Tech",
      content:
        "Profissionais extremamente competentes. Nossa empresa economizou mais de R$ 2 milhões em impostos no primeiro ano. Processo muito bem estruturado.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Qualquer empresa que inova pode usar a Lei do Bem?",
      answer:
        "Não. A empresa precisa estar no regime de Lucro Real, ter regularidade fiscal, lucro fiscal no ano-base e realizar investimentos em PD&I. Nossa análise gratuita verifica se sua empresa atende aos requisitos.",
    },
    {
      question: "O processo é muito burocrático?",
      answer:
        "Sim, o processo possui muitas exigências técnicas e documentais. Por isso nossa assessoria é fundamental - cuidamos de toda a burocracia para você, garantindo conformidade total e maximizando seus benefícios.",
    },
    {
      question: "Quais despesas podem ser consideradas para o incentivo?",
      answer:
        "Salários de pesquisadores, materiais de pesquisa, serviços de terceiros em PD&I, depreciação de equipamentos, patentes, software de desenvolvimento, entre outras despesas relacionadas à inovação tecnológica.",
    },
    {
      question: "Qual o benefício fiscal real que minha empresa pode ter?",
      answer:
        "O benefício pode chegar a 60% dos gastos com PD&I através da dedução adicional no IRPJ e CSLL. O valor exato depende dos investimentos realizados. Faça nossa análise gratuita para descobrir seu potencial.",
    },
    {
      question: "Quanto tempo demora o processo?",
      answer:
        "O processo completo, desde a análise inicial até a aprovação, pode levar de 3 a 6 meses. Acompanhamos todo o processo para garantir agilidade e eficiência.",
    },
  ];

  const clients = [
    "Pichau",
    "ITAG",
    "Focus",
    "Opus",
    "Alpha Industries",
    "Tech Solutions",
    "Inovação Tech",
    "Digital Corp",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">Assessoria do Bem</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#como-funciona" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Como Funciona</a>
                <a href="#beneficios" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Benefícios</a>
                <a href="#depoimentos" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Depoimentos</a>
                <a href="#contato" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contato</a>
              </div>
            </div>
            <div className="flex items-center">
              <a href="#contato" className="bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors">
                Análise Gratuita
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transforme
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Inovação em
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Economia Fiscal
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Sua empresa investe em inovação tecnológica? Descubra como a Lei do Bem pode gerar incríveis incentivos fiscais e reduzir seus impostos em até 60%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contato" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                  Quero Pagar Menos Impostos
                </a>
                <a href="#como-funciona" className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all shadow-lg border border-gray-200">
                  Saber Mais
                </a>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1500+</div>
                  <div className="text-sm text-gray-600">Empresas Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">R$ 2.8B</div>
                  <div className="text-sm text-gray-600">Economia Gerada</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-sm text-gray-600">Taxa de Aprovação</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Análise Gratuita</h3>
                  <p className="text-gray-600">Descubra o potencial de economia da sua empresa</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Análise completa em 24h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Sem compromisso</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Totalmente confidencial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Lei do Bem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que é a Lei do Bem?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Lei do Bem é o principal instrumento de estímulo às atividades de Pesquisa, Desenvolvimento e Inovação Tecnológica (PD&I) no Brasil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lei nº 11.196/2005</h3>
                <p className="text-gray-600 mb-6">
                  Permite que empresas que investem em inovação recuperem parte significativa desse investimento através de incentivos fiscais, como a dedução no IRPJ e CSLL.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Dedução adicional de 60% no IRPJ e CSLL</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Depreciação acelerada de equipamentos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Redução do IPI para equipamentos</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Estímulo à Inovação</h4>
                    <p className="text-sm text-gray-600">Incentivo direto ao desenvolvimento tecnológico</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Benefícios Fiscais</h4>
                    <p className="text-sm text-gray-600">Redução significativa na carga tributária</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Competitividade</h4>
                    <p className="text-sm text-gray-600">Vantagem competitiva através da inovação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher a Assessoria do Bem?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em transformar seus investimentos em inovação em economia fiscal real
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sua empresa pode se beneficiar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Verifique os principais pré-requisitos para que sua empresa possa aproveitar os incentivos da Lei do Bem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((requirement, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-6">
                  {requirement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{requirement.title}</h3>
                <p className="text-gray-600">{requirement.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Não se preocupe, vamos fazer isso juntos!</h3>
              <p className="text-lg mb-6 opacity-90">
                Nossa equipe de especialistas fará uma análise completa da sua empresa para identificar todas as oportunidades de economia fiscal
              </p>
              <a href="#contato" className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                Fazer Análise Gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como funciona nosso processo?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simplificamos a complexidade da Lei do Bem em um processo claro e eficiente de 3 etapas
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full text-white text-2xl font-bold mb-6 mx-auto">
                      {step.number}
                    </div>
                    <div className="text-center mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resultados que Falam por Si</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o que nossos clientes dizem sobre nossa parceria e os resultados alcançados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Empresas que confiam em nosso trabalho</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center text-gray-600 font-medium">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-xl text-gray-600">
              Esclareça os principais pontos sobre a Lei do Bem e nossos serviços
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors rounded-xl"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contato" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Pronto para economizar?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Preencha o formulário e nossa equipe de especialistas fará uma pré-análise gratuita do potencial de incentivo fiscal para sua empresa
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@suaempresa.com.br"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">
                    Faturamento Anual (Estimado) *
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    required
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione uma faixa</option>
                    <option value="até 2,4 milhões">Até R$ 2,4 milhões</option>
                    <option value="2,4 a 16 milhões">R$ 2,4 a 16 milhões</option>
                    <option value="16 a 90 milhões">R$ 16 a 90 milhões</option>
                    <option value="90 a 300 milhões">R$ 90 a 300 milhões</option>
                    <option value="acima de 300 milhões">Acima de R$ 300 milhões</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Conte-nos sobre seus projetos de inovação
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descreva brevemente suas atividades de P&D, softwares desenvolvidos, melhorias em processos, etc."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Quero Pagar Menos Impostos
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Análise gratuita • Sem compromisso • 100% confidencial
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              "Sua empresa investe em inovação? Você pode estar pagando imposto a mais."
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Não deixe dinheiro na mesa. Descubra hoje mesmo como a Lei do Bem pode transformar seus investimentos em inovação em economia fiscal real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contato" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                Fazer Análise Gratuita
              </a>
              <a href="tel:+5511999998888" className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                (11) 99999-8888
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
