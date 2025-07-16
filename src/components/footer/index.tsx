import { Award, Globe, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
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
            <p className="text-gray-400 mb-6 max-w-md">
              Especialistas em transformar inovação em economia fiscal para
              empresas brasileiras
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <Link
                  href="https://assessoriadobem.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-5 h-5" />
                </Link>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <Link
                  href="mailto:a.manduca@assessoriadobem.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#como-funciona"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">
                  contato@assessoriadobem.com.br
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">+55 (11) 99999-8888</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Assessoria do Bem. Todos os direitos reservados. Desenvolvido
            com tecnologia e inovação.
          </p>
        </div>
      </div>
    </footer>
  );
};
