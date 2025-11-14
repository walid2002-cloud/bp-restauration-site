import { ChefHat, Users, Utensils, ScrollText } from 'lucide-react';

export default function ServiceBlocks() {
  const services = [
    {
      icon: ChefHat,
      title: 'Service professionnel',
      description: 'Équipe qualifiée et formée aux normes d\'hygiène les plus strictes'
    },
    {
      icon: Users,
      title: 'Équipe de restauration',
      description: 'Personnel expérimenté dédié au bien-être de vos collaborateurs'
    },
    {
      icon: Utensils,
      title: 'Repas en entreprise',
      description: 'Solutions flexibles adaptées à vos besoins et contraintes'
    },
    {
      icon: ScrollText,
      title: 'Menus variés',
      description: 'Recettes équilibrées et diversifiées pour tous les goûts'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 font-['Poppins']">
            Repas équilibrés en entreprise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-[#FFF5F0] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F2A65A] hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#D86C4E] to-[#F2A65A] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3 font-['Poppins']">
                {service.title}
              </h3>
              <p className="text-[#1F2937] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
