import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: 'BP Restauration a transformé notre espace de restauration. Plus de 500 repas servis chaque jour avec une qualité et une régularité irréprochables.',
      author: 'Ahmed Benali',
      role: 'Directeur RH',
      company: 'AFRIQUIA',
      initials: 'TM'
    },
    {
      text: 'Nos collaborateurs disposent enfin d\'une cantine moderne et hygiénique. Un vrai gain de temps et une meilleure productivité.',
      author: 'Fatima Zahra',
      role: 'Responsable Administratif',
      company: 'Sythemedic',
      initials: 'AC'
    },
    {
      text: 'Service impeccable depuis 3 ans. L\'équipe BPRestauration comprend parfaitement nos besoins et s\'adapte à nos contraintes horaires.',
      author: 'Omar Idrissi',
      role: 'Gérant',
      company: 'AIR LIQUID',
      initials: 'SI'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="temoignages" className="py-20 bg-gradient-to-br from-[#0F172A] to-[#1F2937] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Témoignages
          </h2>
          <p className="text-xl text-white/80">
            Ce que nos clients disent de nous
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <Quote className="text-[#F2A65A] mb-6" size={48} />

            <div className="min-h-[200px] flex items-center">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                {testimonials[currentIndex].text}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D86C4E] to-[#F2A65A] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">
                  {testimonials[currentIndex].initials}
                </span>
              </div>
              <div>
                <div className="font-semibold text-lg">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-white/70">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-[#F2A65A]' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
