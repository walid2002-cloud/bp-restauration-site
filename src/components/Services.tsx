import { Building2, ShieldCheck, Truck, UtensilsCrossed } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';
import { Eyebrow, Reveal, Tilt } from './motion';

const services = [
  {
    icon: Building2,
    title: 'Cantine sur site (clé en main)',
    points: [
      'Installation et gestion complète d\'une cantine dans l\'entreprise',
      'Cuisine aménagée dans vos locaux',
      'Service au comptoir ou à table',
      'Gestion du personnel (chefs, service, ménage)',
    ],
  },
  {
    icon: Truck,
    title: 'Livraison quotidienne',
    points: [
      'Repas chauds livrés directement à l\'entreprise',
      'Conditionnement hygiénique et éco-responsable',
      'Horaires adaptés aux pauses des employés',
      'Idéal si l\'entreprise ne dispose pas d\'espace cuisine',
    ],
  },
  {
    icon: UtensilsCrossed,
    title: 'Menus variés et adaptés',
    points: [
      'Menu du jour différent (viande, poisson, végétarien)',
      'Boisson et dessert inclus',
      'Adaptation aux régimes (allergies, halal, etc.)',
      'Recettes équilibrées, chefs expérimentés',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Hygiène & Qualité',
    points: [
      'Procédures HACCP, normes ISO 22000',
      'Contrôles réguliers & traçabilité',
      'Formation continue du personnel',
      'Suivi qualité & audits internes',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <Eyebrow index="03">Offre</Eyebrow>
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">Nos Services</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Des solutions complètes et flexibles pour répondre aux besoins
            alimentaires de votre entreprise et améliorer le bien-être de vos
            collaborateurs.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-8 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-copper"
          >
            Demander un devis
          </button>
        </div>

        <div className="space-y-4 lg:col-span-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <Tilt max={5}>
                <article className="rounded-[1.6rem] border border-black/5 bg-[#fffdf9] p-6 shadow-[0_24px_50px_-38px_rgba(16,22,32,0.8)] sm:p-8">
                  <div className="flex items-start gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-paper text-copper">
                      <service.icon size={22} />
                    </span>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-copper">
                        0{index + 1}
                      </p>
                      <h3 className="mt-1 font-display text-2xl text-ink sm:text-3xl">{service.title}</h3>
                      <ul className="mt-4 space-y-2.5">
                        {service.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
