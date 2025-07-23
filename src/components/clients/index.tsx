export const Clients = () => {
  const clients = [
    "Pichau",
    "ITAG",
    "Focus",
    "Opus",
    "Alpha Industries",
    "Tech Solutions",
    "Inovação Tech",
    "Digital Corp",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Empresas que confiam em nosso trabalho
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center text-gray-600 font-medium">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
