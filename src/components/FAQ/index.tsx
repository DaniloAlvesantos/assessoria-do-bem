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
        "Sim, desde que a empresa esteja no regime de lucro real, com regularidade fiscal e lucro fiscal no ano base de aproveitamento. Se sua empresa investe em pesquisa, desenvolvimento ou inovação tecnológica, mesmo para melhorias de produtos, processos ou serviços, ela pode se beneficiar.",
    },
    {
      question: "O processo é muito burocrático?",
      answer:
        "Com a nossa consultoria, o processo fica simplificado. É muito importante a contratação de uma consultoria especializada, como a Assessoria do Bem, que vai te levar do ponto A ao ponto B, facilitando toda e qualquer complexidade.",
    },
    {
      question: "Quais despesas podem ser consideradas para o incentivo?",
      answer:
        "Salários (com encargos sociais e trabalhistas) de pessoas dedicadas à pesquisa, desenvolvimento ou inovação tecnológica; despesas com viagens nacionais e internacionais; materiais de consumo; protótipos; lotes pilotos; serviços de terceiros (empresas ou profissionais PJ); depreciação e amortização de equipamentos; patentes e softwares. Tanto despesas quanto dispêndios podem ser considerados para o aproveitamento dos incentivos fiscais.",
    },
    {
      question: "Qual o benefício fiscal real que minha empresa pode obter?",
      answer:
        "O benefício fiscal da Lei do Bem pode chegar até 34% de redução no imposto de renda e na contribuição social sobre o lucro líquido. Além disso, pode haver redução de até 50% no IPI para determinados equipamentos. O aproveitamento pode ser feito em tempo real, mês a mês ou anualmente, conforme a apuração fiscal da empresa.",
    },
    {
      question: "Quanto tempo demora para obter o benefício?",
      answer:
        "O aproveitamento da Lei do Bem pode ser realizado em tempo real, no mês ou trimestre em que a empresa apresenta lucro fiscal, reduzindo imediatamente a carga tributária sobre investimentos em inovação. Não depende de aprovação judicial, e a estratégia pode ser ajustada conforme a necessidade da empresa.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
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
                <span className="font-poppins font-semibold text-gray-900">
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
