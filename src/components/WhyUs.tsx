import { Award, Clock, TrendingUp, Users } from 'lucide-react';
import { Eyebrow, Reveal, Tilt } from './motion';

const reasons = [
  {
    icon: Clock,
    title: 'Gain de temps précieux',
    metric: 'Jusqu\'à 45 min économisées par jour',
    description: 'Vos employés profitent de repas sur place sans déplacements',
  },
  {
    icon: Award,
    title: 'Qualité et hygiène garanties',
    metric: 'Certification ISO 22000',
    description: 'Respect strict des normes HACCP et contrôles réguliers',
  },
  {
    icon: Users,
    title: 'Équipe expérimentée',
    metric: '25 ans d\'expérience — +200 entreprises',
    description: 'Personnel qualifié et formé en continu',
  },
  {
    icon: TrendingUp,
    title: 'Service flexible et ponctuel',
    metric: 'Ponctualité 99,5\u00a0%',
    description: 'Livraisons et service à l\'heure, sans compromis',
  },
];

export default function WhyUs() {
  return (
    <section id="pourquoi" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow index="04">Différence</Eyebrow>
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Pourquoi Nous Choisir
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 80} className="h-full">
              <Tilt>
                <article className="flex h-full flex-col rounded-[1.6rem] border border-black/5 bg-[#fffdf9] p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-amber">
                    <reason.icon size={20} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl leading-tight text-ink">{reason.title}</h3>
                  <p className="mt-4 text-balance font-display text-[1.55rem] leading-tight text-copper">
                    {reason.metric}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">{reason.description}</p>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
