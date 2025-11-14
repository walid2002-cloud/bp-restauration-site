import { Gift } from 'lucide-react';

export default function CTATest() {
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
    <section className="py-24 bg-gradient-to-br from-[#D86C4E] to-[#F2A65A] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
          <Gift size={40} />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Poppins']">
          Demandez votre test gratuit
        </h2>

        <p className="text-xl md:text-2xl mb-10 leading-relaxed">
          Prêt à découvrir nos services ? Remplissez ce formulaire et nous
          organiserons une dégustation gratuite pour votre entreprise.
        </p>

        <button
          onClick={scrollToContact}
          className="bg-white text-[#D86C4E] px-10 py-5 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-xl shadow-2xl hover:shadow-3xl hover:scale-105"
        >
          Contactez-nous
        </button>
      </div>
    </section>
  );
}
