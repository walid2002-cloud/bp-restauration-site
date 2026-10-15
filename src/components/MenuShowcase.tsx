import { Eyebrow, Reveal, Tilt } from './motion';

const dishes = [
  {
    name: 'Tajine de poulet au citron confit',
    description: 'Citron confit, olives vertes',
    type: 'Viande',
    image: '/media/poulet.jpg',
  },
  {
    name: 'Filet de merlu aux herbes',
    description: 'Légumes vapeur',
    type: 'Poisson',
    image: '/media/fish.jpg',
  },
  {
    name: 'Pastilla aux fruits de mer',
    description: 'Gambas, calamars, vermicelles chinoises',
    type: 'Fruits de mer',
    image: '/media/pastilla.jpg',
  },
];

export default function MenuShowcase() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow index="05">Cuisine</Eyebrow>
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Exemple de menu du jour
          </h2>
          <p className="mt-4 max-w-xl text-lg text-ink/70">
            Des recettes savoureuses et équilibrées pour tous les goûts
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3" style={{ perspective: '1400px' }}>
          {dishes.map((dish, index) => (
            <Reveal key={dish.name} delay={index * 100}>
              <Tilt max={9}>
                <article className="group relative overflow-hidden rounded-[1.7rem] bg-[#2a211c] shadow-[0_30px_60px_-36px_rgba(16,22,32,0.85)]">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      width={1024}
                      height={1024}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/15 to-transparent p-6">
                    <span className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {dish.type}
                    </span>
                    <h3 className="font-display text-2xl leading-tight text-white">{dish.name}</h3>
                    <p className="mt-2 text-sm text-white/80">{dish.description}</p>
                    <p className="mt-4 w-fit rounded-full bg-amber px-3 py-1.5 text-xs font-semibold text-ink">
                      Boisson & dessert inclus
                    </p>
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
