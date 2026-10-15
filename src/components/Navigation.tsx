import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const links = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'services', label: 'Nos Services' },
  { id: 'pourquoi', label: 'Pourquoi Nous' },
  { id: 'temoignages', label: 'Témoignages' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-5 ${
          isScrolled
            ? 'border-white/50 bg-[#fffdf9]/80 shadow-[0_18px_50px_-28px_rgba(16,22,32,0.55)] backdrop-blur-xl'
            : 'border-transparent bg-[#fffdf9]/55 backdrop-blur-md'
        }`}
      >
        <button onClick={() => go('accueil')} className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink font-display text-sm text-amber">
            BP
          </span>
          <span className="font-display text-lg tracking-tight text-ink">
            Restauration
          </span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-copper"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-ink"
          >
            Organiser une réunion
          </button>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl text-ink lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-black/5 bg-[#fffdf9]/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="rounded-xl px-3 py-3 text-left text-base font-medium text-ink hover:bg-paper"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => go('contact')}
              className="mt-2 rounded-full bg-copper px-4 py-3 text-sm font-semibold text-white"
            >
              Organiser une réunion
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
