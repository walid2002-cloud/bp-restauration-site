import { Gift } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

export default function CTATest() {
  return (
    <section className="px-5 py-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-copper px-6 py-16 text-white sm:px-14 sm:py-20">
        <div className="sheen" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber/40 blur-3xl" />
        <div className="relative max-w-3xl">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15">
            <Gift size={26} />
          </span>
          <h2 className="mt-6 font-display text-4xl tracking-tight sm:text-6xl">
            Demandez votre test gratuit
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Prêt à découvrir nos services ? Remplissez ce formulaire et nous
            organiserons une dégustation gratuite pour votre entreprise.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-8 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-copper transition-transform duration-300 hover:-translate-y-0.5"
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
}
