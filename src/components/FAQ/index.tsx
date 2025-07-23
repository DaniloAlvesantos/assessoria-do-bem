import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

export const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dúvidas Frequentes
          </h2>
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
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
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
  );
};
