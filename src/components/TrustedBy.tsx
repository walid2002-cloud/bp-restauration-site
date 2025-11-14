export default function TrustedBy() {
  const clients = [
    'ADM Projet',
    'Lydec',
    'Smitrel',
    'AFRIQUIA',
    'Sythemedic',
    'AIR LIQUID'
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-['Poppins']">
            Ils nous font confiance
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="aspect-square bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-6 group border border-gray-100 hover:border-[#F2A65A]"
            >
              <span className="text-2xl font-bold text-gray-300 group-hover:text-[#D86C4E] transition-colors duration-300">
                {client}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-[#1F2937] font-medium">
            Et plus de <span className="text-[#D86C4E] font-bold">200 autres entreprises</span>
          </p>
        </div>
      </div>
    </section>
  );
}
