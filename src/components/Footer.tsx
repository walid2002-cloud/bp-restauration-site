import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const links = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'services', label: 'Nos Services' },
  { id: 'pourquoi', label: 'Pourquoi Nous' },
  { id: 'temoignages', label: 'Témoignages' },
  { id: 'contact', label: 'Contact' },
];

const pages = {
  mentions: {
    title: 'Mentions légales',
    body: 'Site édité par BP Restauration, La Colline 28804, Mohammedia, Maroc. Contact : +212 661952493, contact@bprestauration.ma, bprestauration@gmail.com. L’hébergement et les informations sociétaires détaillées seront publiés sur cette page.',
  },
  privacy: {
    title: 'Politique de confidentialité',
    body: 'Les informations du formulaire (nom, entreprise, effectif, service, e-mail, téléphone, message) servent uniquement à répondre à une demande de restauration collective. Elles ne sont pas vendues ni cédées. Pour toute question : bprestauration@gmail.com.',
  },
} as const;

export default function Footer() {
  const [page, setPage] = useState<keyof typeof pages | null>(null);

  useEffect(() => {
    if (!page) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPage(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [page]);

  return (
    <footer className="bg-ink px-5 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">
            BP <span className="italic text-amber">Restauration</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Depuis 25 ans, BPRestauration accompagne les entreprises marocaines
            en offrant des solutions de restauration collective de qualité.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Navigation</h3>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-white/75 transition-colors hover:text-amber"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>La Colline 28804, Mohammedia</li>
            <li>
              <a href="tel:+212661952493" className="hover:text-amber">+212 661952493</a>
            </li>
            <li>
              <a href="mailto:bprestauration@gmail.com" className="hover:text-amber">bprestauration@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} BPRestauration. Tous droits réservés.</p>
        <div className="flex gap-5">
          <button onClick={() => setPage('mentions')} className="hover:text-amber">Mentions légales</button>
          <button onClick={() => setPage('privacy')} className="hover:text-amber">Politique de confidentialité</button>
        </div>
      </div>

      {page && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-ink/70 px-5" role="presentation" onClick={() => setPage(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-title"
            className="w-full max-w-lg rounded-[1.6rem] bg-[#fffdf9] p-7 text-ink"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 id="legal-title" className="font-display text-3xl">{pages[page].title}</h3>
              <button onClick={() => setPage(null)} aria-label="Fermer" className="grid h-9 w-9 place-items-center rounded-full bg-paper">
                <X size={16} />
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">{pages[page].body}</p>
          </div>
        </div>
      )}
    </footer>
  );
}
