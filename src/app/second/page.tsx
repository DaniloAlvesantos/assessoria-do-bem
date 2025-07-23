"use client";
import { Footer } from "@/components/footer";
import {
  BadgePercent,
  ClipboardCheck,
  DollarSign,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import {
  HandArrowDownIcon,
  HeadCircuitIcon,
  StorefrontIcon,
  TargetIcon,
} from "@phosphor-icons/react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function LeiDoBem() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });

  return (
    <>
      <Head>
        <title>
          Lei do Bem - Assessoria do Bem | Incentivos Fiscais para Inovação
        </title>
        <meta
          name="description"
          content="Maximize seus incentivos fiscais com a Lei do Bem. Assessoria especializada em inovação tecnológica, P&D e benefícios fiscais. Consultoria gratuita disponível."
        />
        <meta
          name="keywords"
          content="lei do bem, incentivos fiscais, inovação, P&D, pesquisa e desenvolvimento, benefícios fiscais, assessoria fiscal, consultoria inovação"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Lei do Bem - Assessoria do Bem | Incentivos Fiscais"
        />
        <meta
          property="og:description"
          content="Conheça tudo sobre a Lei do Bem e maximize seus incentivos fiscais para inovação tecnológica"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://assessoriadobem.com.br" />
        <link rel="canonical" href="https://assessoriadobem.com.br" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Assessoria do Bem",
            url: "https://assessoriadobem.com.br",
            logo: "https://assessoriadobem.com.br/logo.png",
            description:
              "Assessoria especializada em Lei do Bem e incentivos fiscais para inovação",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+55-11-99999-9999",
              contactType: "customer service",
            },
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo-azul.svg"
                width={100}
                height={100}
                alt="Logo azul"
              />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#sobre" className="text-gray-600 hover:text-app-blue">
                Sobre
              </a>
              <a href="#servicos" className="text-gray-600 hover:text-app-blue">
                Serviços
              </a>
              <a href="#contato" className="text-gray-600 hover:text-app-blue">
                Contato
              </a>
            </nav>
            <button className="bg-app-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-app-blue/85">
              Fale Conosco
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero text-white py-20 h-[30rem]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Transforme{" "}
                  <strong className="text-app-yellow">Inovação</strong> em
                  Economia Fiscal
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Descubra como mais de 1.200 empresas reduziram seus impostos
                  com nossa consultoria especializada.
                </p>
                <button className="bg-app-yellow text-black px-16 py-3 rounded-full font-semibold hover:bg-app-yellow/85 transition-colors">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="p-8 md:p-16 space-y-4 bg-[#f7f7f7] font-montserrat">
          <h2 className="text-app-blue font-poppins font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            O que é lei do bem ?
          </h2>
          <p>
            A Lei do Bem é o principal instrumento de estímulo às atividades de
            Pesquisa, Desenvolvimento e Inovação Tecnológica (PD&I) no Brasil.
            Ela permite que empresas que investem em inovação recuperem parte
            significativa desse investimento através de incentivos fiscais, como
            a dedução no IRPJ e CSLL.
          </p>
          <p>
            Com nossa assessoria, sua empresa pode navegar com segurança pelo
            processo e maximizar os benefícios, transformando seus projetos
            inovadores em uma poderosa vantagem competitiva e financeira.
          </p>
        </section>

        <section className="p-8 md:p-16 space-y-4 font-montserrat">
          <h2 className="text-app-blue font-poppins font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Por que fechar com assesoria do bem ?
          </h2>
          <p className="md:w-md">
            Somos especialistas em transformar seus investimentos em inovação em
            economia fiscal real
          </p>
          <div className="w-full items-center justify-items-center grid grid-cols-1 sm:grid-cols-2 gap-4">
            <span className="flex items-center justify-between w-xs lg:w-md lg:py-3 font-montserrat font-semibold md:text-lg lg:text-xl bg-[#3245C7] border-3 border-[#0113A3] text-white py-2 px-4 rounded-md">
              Lucros maiores{" "}
              <TrendingUp className="text-app-yellow size-9 lg:size-12" />
            </span>
            <span className="flex items-center justify-between w-xs lg:w-md lg:py-3 font-montserrat font-semibold md:text-lg lg:text-xl bg-[#3245C7] border-3 border-[#0113A3] text-white py-2 px-4 rounded-md">
              Posicionamento{" "}
              <StorefrontIcon className="text-app-yellow size-9 lg:size-12" />
            </span>
            <span className="flex items-center justify-between w-xs lg:w-md lg:py-3 font-montserrat font-semibold md:text-lg lg:text-xl bg-[#3245C7] border-3 border-[#0113A3] text-white py-2 px-4 rounded-md">
              Atingir objetivos{" "}
              <TargetIcon className="text-app-yellow size-9 lg:size-12" />
            </span>
            <span className="flex items-center justify-between w-xs lg:w-md lg:py-3 font-montserrat font-semibold md:text-lg lg:text-xl bg-[#3245C7] border-3 border-[#0113A3] text-white py-2 px-4 rounded-md">
              Reinvestimento{" "}
              <DollarSign className="text-app-yellow size-9 lg:size-12" />
            </span>
            <span className="flex items-center justify-between w-xs lg:w-md lg:py-3 font-montserrat font-semibold md:text-lg lg:text-xl bg-[#3245C7] border-3 border-[#0113A3] text-white py-2 px-4 rounded-md">
              Promove inovação{" "}
              <HeadCircuitIcon className="text-app-yellow size-9 lg:size-12" />
            </span>
            <span className="flex items-center justify-between w-xs lg:w-md lg:py-3 font-montserrat font-semibold md:text-lg lg:text-xl bg-[#3245C7] border-3 border-[#0113A3] text-white py-2 px-4 rounded-md">
              Redução de imposto{" "}
              <HandArrowDownIcon className="text-app-yellow size-9 lg:size-12" />
            </span>
          </div>
        </section>

        <section className="p-8 md:p-16 space-y-4 font-montserrat">
          <h2 className="font-poppins font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Empresa que optaram a lei do bem
          </h2>
          <div className="overflow-hidden -mx-8 md:-mx-16 w-[100vdh] bg-[#121212] py-4">
            <div className=" grid grid-flow-col auto-cols-[15rem] justify-items-stretch scroll-animate">
              {Array.from({ length: 12 }).map((_, index) => (
                <Image
                  src={`/empresa-${(index % 6) + 1}.png`}
                  alt="Empresa que optou pela Lei do Bem"
                  width={150}
                  height={30}
                  key={index}
                  className="h-16 md:h-20 lg:h-26 object-contain"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="p-8 md:p-16 space-y-4 font-montserrat -my-8">
          <h2 className="text-app-blue font-poppins font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Como funciona nosso processo?
          </h2>
          <p className="md:w-md">
            Simplificamos a complexidade da Lei do Bem em um processo claro e
            eficiente de 3 etapas.
          </p>

          <div className="-mx-4">
            <div className="flex items-start gap-4 relative">
              <div className="rounded-full border-2 border-gray-300 bg-white z-10 md:size-16 flex items-center justify-center p-2">
                <Lightbulb
                  className="text-app-blue size-9 lg:size-12"
                  strokeWidth={1.5}
                />
              </div>
              <span className="mt-4">
                <h3 className="font-poppins font-bold text-xl">
                  Análise e Diagnóstico
                </h3>
                <p className="md:w-md">
                  Analisamos seus projetos e despesas para identificar todas as
                  atividades elegíveis para os benefícios fiscais da Lei do Bem.
                </p>
              </span>
              <div className="absolute left-7 top-12 w-0.5 h-28 xl:h-28 md:left-8 bg-gray-300"></div>
            </div>
            <div className="flex items-start gap-4 relative">
              <div className="rounded-full border-2 border-gray-300 bg-white z-10 md:size-16 flex items-center justify-center p-2">
                <ClipboardCheck
                  className="text-app-blue size-9 lg:size-12"
                  strokeWidth={1.5}
                />
              </div>
              <span className="mt-4">
                <h3 className="font-poppins font-bold text-xl">
                  Elaboração do Projeto
                </h3>
                <p className="md:w-md">
                  Preparamos toda a documentação técnica e contábil necessária,
                  garantindo conformidade total com as exigências legais.
                </p>
              </span>
              <div className="absolute left-7 top-12 w-0.5 h-32 xl:h-28 md:left-8 bg-gray-300"></div>
            </div>
            <div className="flex items-start gap-4 relative">
              <div className="rounded-full border-2 border-gray-300 bg-white z-10 md:size-16 flex items-center justify-center p-2">
                <BadgePercent
                  className="text-app-blue size-9 lg:size-12"
                  strokeWidth={1.5}
                />
              </div>
              <span className="mt-4">
                <h3 className="font-poppins font-bold text-xl">
                  Aplicação e Resultados
                </h3>
                <p className="md:w-md">
                  Submetemos o processo e acompanhamos até a aprovação,
                  garantindo a maximização do seu retorno fiscal com total
                  segurança.
                </p>
              </span>
              <div className="absolute left-7 top-12 bottom-[-4rem] md:bottom-[-6rem] lg:bottom-[-6.2rem] w-0.5 md:left-8 bg-gray-300"></div>
            </div>
          </div>
        </section>

        <section className="cta-container h-[30rem] mt-16 z-10 flex flex-col items-center justify-center space-y-4">
          <h2 className="text-white font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl  md:w-[60%] text-center">
            <strong className="text-app-yellow">Valorize</strong> sua empresa
            pagando menos imposto
          </h2>
          <button className="rounded-full bg-app-blue py-2 px-8 md:py-3 md:px-16 font-montserrat font-medium text-white tex-tlg">
            Valorizar agora
          </button>
        </section>

        <section className="p-8 md:p-16 space-y-4 font-montserrat flex flex-col md:flex-row my-4">
          <span className="space-y-4 md:w-2/3">
            <h2 className="text-app-blue font-poppins font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Pronto para economizar ?
            </h2>
            <p>
              Preencha o formulário e nossa equipe de especialistas fará uma
              pré-análise gratuita do potencial de incentivo fiscal para sua
              empresa. É rápido, confidencial e sem compromisso.
            </p>
            <p className="border-l-4 border-app-blue pl-2 py-1">
              "Sua empresa investe em inovação? <br />
              Você pode estar pagando imposto a mais."
            </p>
          </span>
          <div className="border-2 border-gray-300 rounded-lg p-4 md:flex-1">
            <form className="flex flex-col space-y-2">
              <label className="font-poppins font-medium">Nome completo</label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-md outline-none px-2 py-1"
              />

              <label className="font-poppins font-medium">
                Email corporativo
              </label>
              <input
                type="email"
                className="border-2 border-gray-300 rounded-md outline-none px-2 py-1"
              />

              <label className="font-poppins font-medium">Empresa</label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-md outline-none px-2 py-1"
              />

              <label className="font-poppins font-medium">
                Margem faturamento anual
              </label>
              <input
                type="number"
                className="border-2 border-gray-300 rounded-md outline-none px-2 py-1"
              />

              <button
                type="submit"
                className="bg-app-blue text-white py-2 rounded-md"
              >
                Quero pagar menos imposto
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
