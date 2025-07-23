"use client";
import { Phone } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Benefits } from "@/components/benefits";
import { Requirements } from "@/components/requirements";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Clients } from "@/components/clients";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/form";

export default function Home() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Requirements />
      <Process />
      <Testimonials />
      <Clients />
      <FAQ />
      <ContactForm />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              "Sua empresa investe em inovação? Você pode estar pagando imposto
              a mais."
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Não deixe dinheiro na mesa. Descubra hoje mesmo como a Lei do Bem
              pode transformar seus investimentos em inovação em economia fiscal
              real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contato"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Fazer Análise Gratuita
              </a>
              <a
                href="tel:+5511999998888"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (11) 99999-8888
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
