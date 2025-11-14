import { Building2, Truck, UtensilsCrossed, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Cantine sur site (clé en main)',
      points: [
        'Installation et gestion complète d\'une cantine dans l\'entreprise',
        'Cuisine aménagée dans vos locaux',
        'Service au comptoir ou à table',
        'Gestion du personnel (chefs, service, ménage)'
      ]
    },
    {
      icon: Truck,
      title: 'Livraison quotidienne',
      points: [
        'Repas chauds livrés directement à l\'entreprise',
        'Conditionnement hygiénique et éco-responsable',
        'Horaires adaptés aux pauses des employés',
        'Idéal si l\'entreprise ne dispose pas d\'espace cuisine'
      ]
    },
    {
      icon: UtensilsCrossed,
      title: 'Menus variés et adaptés',
      points: [
        'Menu du jour différent (viande, poisson, végétarien)',
        'Boisson et dessert inclus',
        'Adaptation aux régimes (allergies, halal, etc.)',
        'Recettes équilibrées, chefs expérimentés'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'Hygiène & Qualité',
      points: [
        'Procédures HACCP, normes ISO 22000',
        'Contrôles réguliers & traçabilité',
        'Formation continue du personnel',
        'Suivi qualité & audits internes'
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 font-['Poppins']">
            Nos Services
          </h2>
          <p className="text-xl text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes et flexibles pour répondre aux besoins
            alimentaires de votre entreprise et améliorer le bien-être de vos
            collaborateurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-[#FFF5F0] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F2A65A]"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#D86C4E] to-[#F2A65A] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#0F172A] mb-4 font-['Poppins']">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#D86C4E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-[#1F2937]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-[#F2A65A] text-white px-8 py-4 rounded-lg hover:bg-[#D86C4E] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Demander un devis
          </button>
        </div>
      </div>
    </section>
  );
}
