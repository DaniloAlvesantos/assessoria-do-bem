import Image from "next/image";

export const Clients = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
            Cases Lei do Bem
          </h2>
        </div>
        <div className="overflow-hidden -mx-8 md:-mx-16 w-full py-4">
          <div className="grid grid-flow-col auto-cols-[10rem] md:auto-cols-[15rem] justify-items-stretch scroll-animate-mobile scroll-animate">
            {Array.from({ length: 20 }).map((_, index) => (
              <Image
                src={`/empresa-${(index % 10) + 1}.png`}
                alt="Empresa que optou pela Lei do Bem"
                width={150}
                height={30}
                key={index}
                className="h-16 md:h-20 lg:h-26 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
