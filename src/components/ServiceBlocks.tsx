import { ChefHat, ScrollText, Users, Utensils } from 'lucide-react';
import { Eyebrow, Reveal, Tilt } from './motion';

const blocks = [
  {
    icon: ChefHat,
    title: 'Service professionnel',
    description: 'Équipe qualifiée et formée aux normes d\'hygiène les plus strictes',
  },
  {
    icon: Users,
    title: 'Équipe de restauration',
    description: 'Personnel expérimenté dédié au bien-être de vos collaborateurs',
  },
  {
    icon: Utensils,
    title: 'Repas en entreprise',
    description: 'Solutions flexibles adaptées à vos besoins et contraintes',
  },
  {
    icon: ScrollText,
    title: 'Menus variés',
    description: 'Recettes équilibrées et diversifiées pour tous les goûts',
  },
];

export default function ServiceBlocks() {
  return (
    <section className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow index="01">Le quotidien</Eyebrow>
          <h2 className="max-w-xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Repas équilibrés en entreprise
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 90} className="h-full">
              <Tilt max={8}>
                <article className="group relative flex h-full flex-col rounded-[1.6rem] border border-black/5 bg-[#fffdf9] p-6 shadow-[0_24px_50px_-36px_rgba(16,22,32,0.7)]">
                  <div className="mb-10 flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white transition-colors duration-300 group-hover:bg-copper">
                      <block.icon size={22} />
                    </span>
                    <span className="font-display text-3xl text-ink/10">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight text-ink">{block.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{block.description}</p>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
