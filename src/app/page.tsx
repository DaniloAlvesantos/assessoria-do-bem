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
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white antialiased font-montserrat">
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
      <section className="py-20 bg-gradient-to-b from-[#000E8C] to-[#000A75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-poppins text-4xl font-bold text-white mb-6">
              "Não deixe dinheiro na mesa"
            </h2>
            <p className="text-xl font-medium text-gray-300 mb-8">
              Seja mais competitivo no mercado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contato"
                className="font-poppins bg-gradient-to-r from-app-blue to-app-blue-light text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-app-blue/80 hover:to-app-blue-light/80 transition-all"
              >
                Fazer Análise Gratuita
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=5511992473916&text=Ol%C3%A1%20Anderson,%20tudo%20bem?%20Venho%20atrav%C3%A9s%20do%20site%20da%20*AdB!*"
                className="font-poppins bg-app-yellow text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-app-yellow-soft transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +55 (11) 99247-3916
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
