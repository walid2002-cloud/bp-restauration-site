import { ChefHat, ShieldCheck, Utensils, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] via-[#FFF5F0] to-[#FFEEE5]"></div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D86C4E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F2A65A] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-tight font-['Poppins']">
                Votre cantine{' '}
                <span className="text-[#D86C4E]">clé en main</span>, au cœur de
                votre entreprise
              </h1>
              <p className="text-xl text-[#1F2937] leading-relaxed">
                Depuis 25 ans, nous installons et gérons des espaces de
                restauration dans les entreprises marocaines. Menus variés,
                hygiène garantie et service professionnel pour le bien-être de
                vos équipes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <ChefHat className="text-[#D86C4E] flex-shrink-0 mt-1" size={24} />
                <span className="text-[#0F172A] font-medium">
                  Service professionnel
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <ShieldCheck className="text-[#D86C4E] flex-shrink-0 mt-1" size={24} />
                <span className="text-[#0F172A] font-medium">
                  Hygiène garantie
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Utensils className="text-[#D86C4E] flex-shrink-0 mt-1" size={24} />
                <span className="text-[#0F172A] font-medium">Menus variés</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Clock className="text-[#D86C4E] flex-shrink-0 mt-1" size={24} />
                <span className="text-[#0F172A] font-medium">
                  Livraison ponctuelle
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#F2A65A] text-white px-8 py-4 rounded-lg hover:bg-[#D86C4E] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Organiser une réunion avec notre équipe
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-[#0F172A] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-md border-2 border-[#0F172A] hover:border-[#D86C4E]"
              >
                Découvrir nos services
              </button>
            </div>
          </div>

          <div className="relative">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
    {/* Image de fond */}
    <div
      className="aspect-[4/5] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/image6.png')",
      }}
    >
      {/* Overlay facultatif pour effet léger */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  </div>

  {/* Effets lumineux décoratifs (tu peux aussi les supprimer si tu veux un look plus sobre) */}
  <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F2A65A] rounded-full opacity-20 blur-2xl animate-pulse"></div>
  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#D86C4E] rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>
</div>



        </div>
      </div>
    </section>
  );
}
