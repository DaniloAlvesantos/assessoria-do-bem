import { Award, Globe, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#000A75] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="/logo-branca.svg"
                width={300}
                height={100}
                alt="Logo branca"
              />
            </div>
            <p className="text-gray-200 mb-6 max-w-md">
              Especialistas em transformar inovação em economia fiscal para
              empresas brasileiras
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-app-blue-light rounded-full flex items-center justify-center hover:bg-app-blue-light/80 cursor-pointer">
                <Link
                  href="https://assessoriadobem.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-5 h-5" />
                </Link>
              </div>
              <div className="w-10 h-10 bg-app-blue-light rounded-full flex items-center justify-center hover:bg-app-blue-light/80 cursor-pointer">
                <Link
                  href="mailto:a.manduca@assessoriadobem.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
              <div className="w-10 h-10 bg-app-blue-light rounded-full flex items-center justify-center hover:bg-app-blue-light/80 cursor-pointer">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=5511992473916&text=Ol%C3%A1%20Anderson,%20tudo%20bem?%20Venho%20atrav%C3%A9s%20do%20site%20da%20*AdB!*"
                >
                  <Phone className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#como-funciona"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link
                  href="#beneficios"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Benefícios
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="min-w-5 min-h-5 text-gray-200" />
                <span className="text-gray-200 text-sm">
                  a.manduca@assessoriadobem.com.br
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-200" />
                <span className="text-gray-200">+55 (11) 99247-3916</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-200" />
                <span className="text-gray-200">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-200 font-poppins font-medium">
            © 2025 Assessoria do Bem. Todos os direitos reservados. Desenvolvido
            com tecnologia e inovação.
          </p>
        </div>
      </div>
    </footer>
  );
};
