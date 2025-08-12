import { Calculator, FileText, Trophy } from "lucide-react";

export const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Análise e Diagnóstico",
      description:
        "Analisamos seus projetos e despesas para identificar todas as atividades elegíveis para os benefícios fiscais da Lei do Bem",
      icon: <Calculator className="w-8 h-8 text-app-blue" />,
    },
    {
      number: "02",
      title: "Elaboração do Projeto",
      description:
        "Preparamos toda a documentação técnica e contábil necessária, garantindo conformidade total com as exigências legais",
      icon: <FileText className="w-8 h-8 text-orange-400" />,
    },
    {
      number: "03",
      title: "Aplicação e Resultados",
      description:
        "Submetemos o processo e acompanhamos até a aprovação, garantindo a maximização do seu retorno fiscal",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
            Como funciona nosso processo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simplificamos a complexidade da Lei do Bem em um processo claro e
            eficiente de 3 etapas
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-app-blue to-app-blue-light rounded-full text-white text-2xl font-bold mb-6 mx-auto">
                    {step.number}
                  </div>
                  <div className="text-center mb-6 flex items-center justify-center gap-2">
                    {step.icon}
                    <h3 className="font-poppins text-xl font-semibold text-gray-900 text-center">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
