"use client";
import { Check, Calculator, CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

export const Hero = () => {
  const titleVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const statParent: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1,
      },
    },
  };

  const statChild: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-app-blue/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f7] to-app-blue/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              variants={titleVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Transforme
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-app-blue to-app-blue-light">
                Inovação em
              </span>
              <span className="block text-[#e7e714] lg:text-app-yellow">
                Economia Fiscal
              </span>
            </motion.h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Sua empresa investe em inovação tecnológica? Descubra como a Lei
              do Bem pode gerar incríveis incentivos fiscais e reduzir seus
              impostos em até 60%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contato"
                className="bg-gradient-to-r from-app-blue to-[#3c4dff] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Quero Pagar Menos Impostos
              </a>
              <a
                href="#como-funciona"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all shadow-lg border border-gray-200"
              >
                Saber Mais
              </a>
            </div>

            <motion.div
              variants={statParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
            >
              <motion.div variants={statChild} className="text-center">
                <div className="text-3xl font-bold text-app-blue">1500+</div>
                <div className="text-sm text-gray-600">Empresas Atendidas</div>
              </motion.div>
              <motion.div variants={statChild} className="text-center">
                <div className="text-3xl font-bold text-green-600">R$ 2.8B</div>
                <div className="text-sm text-gray-600">Economia Gerada</div>
              </motion.div>
              <motion.div variants={statChild} className="text-center">
                <div className="text-3xl font-bold text-app-info">98%</div>
                <div className="text-sm text-gray-600">Taxa de Aprovação</div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-app-blue to-app-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Análise Gratuita
                </h3>
                <p className="text-gray-600">
                  Descubra o potencial de economia da sua empresa
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">
                    Análise completa em 24h
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">Sem compromisso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">
                    Totalmente confidencial
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
