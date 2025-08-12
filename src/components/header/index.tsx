import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-4">
              <Image
                src="/logo-azul.svg"
                width={100}
                height={100}
                alt="Logo azul"
              />

              <span className="hidden sm:block text-lg sm:text-xl font-bold text-gray-900 ">
                Assessoria do Bem
              </span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4 font-poppins">
              <a
                href="#como-funciona"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Como Funciona
              </a>
              <a
                href="#beneficios"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Benefícios
              </a>
              <a
                href="#depoimentos"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Depoimentos
              </a>
              <a
                href="#contato"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Contato
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="#contato"
              className="font-poppins bg-app-blue text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-app-blue-light transition-colors"
            >
              Análise Gratuita
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
