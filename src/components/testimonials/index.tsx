import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "CFO, Tech Solutions",
      content:
        "A Assessoria do Bem foi fundamental para obtermos os benefícios da Lei do Bem. O processo foi transparente e o resultado superou nossas expectativas, gerando uma economia fiscal expressiva.",
      rating: 6,
    },
    {
      name: "Maria Oliveira",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "Diretora de Inovação, Indústria Alpha",
      content:
        "Com a ajuda da equipe, conseguimos não só a aprovação do nosso projeto, mas também uma nova visão estratégica sobre como investir em inovação. Altamente recomendados!",
      rating: 5,
    },
    {
      name: "Carlos Santos",
      image:
        "https://images.unsplash.com/photo-1648474484044-bb82df2f5a1f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "CEO, Inovação Tech",
      content:
        "Profissionais extremamente competentes. Nossa empresa economizou mais de R$ 2 milhões em impostos no primeiro ano. Processo muito bem estruturado.",
      rating: 6,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
            Resultados que Falam por Si
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossa parceria e os
            resultados alcançados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="font-poppins w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                  )}
                </div>
                <div>
                  <div className="font-poppins font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
