import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold text-[#0F172A] font-['Poppins']"
            >
              BP<span className="text-[#D86C4E]">Restauration</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#1F2937] hover:text-[#D86C4E] transition-colors font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#1F2937] hover:text-[#D86C4E] transition-colors font-medium"
            >
              Nos Services
            </button>
            <button
              onClick={() => scrollToSection('pourquoi')}
              className="text-[#1F2937] hover:text-[#D86C4E] transition-colors font-medium"
            >
              Pourquoi Nous
            </button>
            <button
              onClick={() => scrollToSection('temoignages')}
              className="text-[#1F2937] hover:text-[#D86C4E] transition-colors font-medium"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#1F2937] hover:text-[#D86C4E] transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#F2A65A] text-white px-6 py-3 rounded-lg hover:bg-[#D86C4E] transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Organiser une réunion
            </button>
          </div>

          <button
            className="md:hidden text-[#0F172A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-[#1F2937] hover:text-[#D86C4E] font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-[#1F2937] hover:text-[#D86C4E] font-medium"
            >
              Nos Services
            </button>
            <button
              onClick={() => scrollToSection('pourquoi')}
              className="block w-full text-left py-2 text-[#1F2937] hover:text-[#D86C4E] font-medium"
            >
              Pourquoi Nous
            </button>
            <button
              onClick={() => scrollToSection('temoignages')}
              className="block w-full text-left py-2 text-[#1F2937] hover:text-[#D86C4E] font-medium"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-[#1F2937] hover:text-[#D86C4E] font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-[#F2A65A] text-white px-6 py-3 rounded-lg hover:bg-[#D86C4E] transition-all font-semibold text-center"
            >
              Organiser une réunion
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
