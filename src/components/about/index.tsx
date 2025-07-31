import { Globe, Check, TrendingUp, DollarSign, Zap } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que é a Lei do Bem?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Lei do Bem é o principal instrumento de estímulo às atividades de
            Pesquisa, Desenvolvimento e Inovação Tecnológica (PD&I) no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-app-blue/5 to-app-blue-light/5 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-app-blue to-app-blue-light rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Lei nº 11.196/2005
              </h3>
              <p className="text-gray-600 mb-6">
                Permite que empresas que investem em inovação recuperem parte
                significativa desse investimento através de incentivos fiscais,
                como a dedução no IRPJ e CSLL.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">
                    Dedução adicional de 60% no IRPJ e CSLL
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">
                    Depreciação acelerada de equipamentos
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">
                    Redução do IPI para equipamentos
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="size-12 aspect-square bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Estímulo à Inovação
                  </h4>
                  <p className="text-sm text-gray-600">
                    Incentivo direto ao desenvolvimento tecnológico
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="size-12 aspect-square bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Benefícios Fiscais
                  </h4>
                  <p className="text-sm text-gray-600">
                    Redução significativa na carga tributária
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="size-12 aspect-square bg-purple-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Competitividade
                  </h4>
                  <p className="text-sm text-gray-600">
                    Vantagem competitiva através da inovação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
