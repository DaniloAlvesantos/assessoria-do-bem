import {
  Building,
  FileText,
  BarChart3,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export const Requirements = () => {
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sua empresa pode se beneficiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Verifique os principais pré-requisitos para que sua empresa possa
            aproveitar os incentivos da Lei do Bem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((requirement, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-6">
                {requirement.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {requirement.title}
              </h3>
              <p className="text-gray-600">{requirement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Não se preocupe, vamos fazer isso juntos!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nossa equipe de especialistas fará uma análise completa da sua
              empresa para identificar todas as oportunidades de economia fiscal
            </p>
            <a
              href="#contato"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Fazer Análise Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
