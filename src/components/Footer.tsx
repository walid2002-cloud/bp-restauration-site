export default function Footer() {
  const scrollToSection = (id: string) => {
    if (id === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4 font-['Poppins']">
              BP<span className="text-[#F2A65A]">Restauration</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Depuis 25 ans, BPRestauration accompagne les entreprises marocaines
              en offrant des solutions de restauration collective de qualité.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-['Poppins']">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('accueil')}
                  className="text-white/70 hover:text-[#F2A65A] transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-[#F2A65A] transition-colors"
                >
                  Nos Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pourquoi')}
                  className="text-white/70 hover:text-[#F2A65A] transition-colors"
                >
                  Pourquoi Nous
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('temoignages')}
                  className="text-white/70 hover:text-[#F2A65A] transition-colors"
                >
                  Témoignages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/70 hover:text-[#F2A65A] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-['Poppins']">Contact</h3>
            <ul className="space-y-3 text-white/70">
              <li>La Colline 28804, Mohammedia</li>
              <li>
                <a href="tel:+212661952493" className="hover:text-[#F2A65A] transition-colors">
                  +212 661952493
                </a>
              </li>
              <li>
                <a href="mailto:bprestauration@gmail.com" className="hover:text-[#F2A65A] transition-colors">
                  bprestauration@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 BPRestauration. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-white/60 hover:text-[#F2A65A] transition-colors">
                Mentions légales
              </button>
              <button className="text-white/60 hover:text-[#F2A65A] transition-colors">
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
