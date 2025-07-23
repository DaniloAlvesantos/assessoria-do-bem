import { DollarSign, TrendingUp, Shield, Target } from "lucide-react";

export const Benefits = () => {
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

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Assessoria do Bem?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em transformar seus investimentos em inovação em
            economia fiscal real
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
