import { useState } from "react";
import InputMask from "@mona-health/react-input-mask";
import axios from "axios";
import { toast, Toaster } from "sonner";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    revenue: "",
    message: "",
    telefone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.entries(formData).some((field) => field[1].trim().length < 0)) {
      console.error("Valor nulo");
    }
    
    const res = axios.post("/api/send-email", formData);
    toast.promise(res, {
      loading:"Enviando...",
      success: {
        message: "Email enviado com sucesso!",
        description: "Aguarde nossa equipe entrar em contato."
      },
      error: "Oops! Algo deu errado."
    })
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-[#D9D80A] to-app-blue"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para economizar?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Preencha o formulário e nossa equipe de especialistas fará uma
            pré-análise gratuita do potencial de incentivo fiscal para sua
            empresa
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail Corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="email@suaempresa.com.br"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nome da sua empresa"
                  minLength={6}
                />
              </div>

              <div>
                <label
                  htmlFor="revenue"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Faturamento Anual (Estimado) *
                </label>
                <select
                  id="revenue"
                  name="revenue"
                  required
                  value={formData.revenue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione uma faixa</option>
                  <option value="até 2,4 milhões">Até R$ 2,4 milhões</option>
                  <option value="2,4 a 16 milhões">R$ 2,4 a 16 milhões</option>
                  <option value="16 a 90 milhões">R$ 16 a 90 milhões</option>
                  <option value="90 a 300 milhões">R$ 90 a 300 milhões</option>
                  <option value="acima de 300 milhões">
                    Acima de R$ 300 milhões
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="telefone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Telefone *
              </label>
              <InputMask
                mask="(99) 99999-9999"
                value={formData.telefone}
                onChange={handleChange}
              >
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(19) 99999-9999"
                  required
                />
              </InputMask>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Conte-nos sobre sua empresa *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Descreva brevemente sobre ganhos, cargas tributarias, quantidade de funcionarios, etc."
                required
                minLength={50}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-app-blue to-app-blue-light text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-app-blue/90 hover:to-app-blue-light/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Quero Pagar Menos Impostos
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Análise gratuita • Sem compromisso • 100% confidencial
              </p>
              <Toaster />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
