import { Clock, Award, Users, TrendingUp } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: Clock,
      title: 'Gain de temps précieux',
      metric: 'Jusqu\'à 45 min économisées par jour',
      description: 'Vos employés profitent de repas sur place sans déplacements'
    },
    {
      icon: Award,
      title: 'Qualité et hygiène garanties',
      metric: 'Certification ISO 22000',
      description: 'Respect strict des normes HACCP et contrôles réguliers'
    },
    {
      icon: Users,
      title: 'Équipe expérimentée',
      metric: '25 ans d\'expérience — +200 entreprises',
      description: 'Personnel qualifié et formé en continu'
    },
    {
      icon: TrendingUp,
      title: 'Service flexible et ponctuel',
      metric: 'Ponctualité 99,5 %',
      description: 'Livraisons et service à l\'heure, sans compromis'
    }
  ];

  return (
    <section id="pourquoi" className="py-20 bg-gradient-to-br from-[#F9FAFB] to-[#FFF5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 font-['Poppins']">
            Pourquoi Nous Choisir
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F2A65A] hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#D86C4E] to-[#F2A65A] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3 font-['Poppins']">
                {reason.title}
              </h3>
              <div className="text-2xl font-bold text-[#D86C4E] mb-3">
                {reason.metric}
              </div>
              <p className="text-[#1F2937] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
