"use client";
import { Footer } from "@/components/footer";
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

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image src="/logo-azul.svg" width={100} height={100} alt="Logo azul" />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#sobre" className="text-gray-600 hover:text-blue-600">
                Sobre
              </a>
              <a href="#servicos" className="text-gray-600 hover:text-blue-600">
                Serviços
              </a>
              <a href="#contato" className="text-gray-600 hover:text-blue-600">
                Contato
              </a>
            </nav>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
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
                  <strong className="text-yellow-400">Inovação</strong> em
                  Economia Fiscal
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Descubra como mais de 1.200 empresas reduziram seus impostos
                  com nossa consultoria especializada.
                </p>
                <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>O que é lei do bem ?</h2>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
