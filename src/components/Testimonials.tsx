import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Eyebrow } from './motion';

const testimonials = [
  {
    text: 'BP Restauration a transformé notre espace de restauration. Plus de 500 repas servis chaque jour avec une qualité et une régularité irréprochables.',
    author: 'Ahmed Benali',
    role: 'Directeur RH',
    company: 'AFRIQUIA',
    initials: 'AB',
  },
  {
    text: 'Nos collaborateurs disposent enfin d\'une cantine moderne et hygiénique. Un vrai gain de temps et une meilleure productivité.',
    author: 'Fatima Zahra',
    role: 'Responsable Administratif',
    company: 'Sythemedic',
    initials: 'FZ',
  },
  {
    text: 'Service impeccable depuis 3 ans. L\'équipe BPRestauration comprend parfaitement nos besoins et s\'adapte à nos contraintes horaires.',
    author: 'Omar Idrissi',
    role: 'Gérant',
    company: 'AIR LIQUID',
    initials: 'OI',
  },
];

function offsetOf(index: number, current: number, total: number) {
  let delta = index - current;
  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;
  return delta;
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % testimonials.length);
    }, 6400);
    return () => window.clearInterval(timer);
  }, [reduce]);

  const previous = () => setCurrent((value) => (value - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((value) => (value + 1) % testimonials.length);

  return (
    <section id="temoignages" className="overflow-hidden bg-ink px-5 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Eyebrow index="06">Paroles</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Témoignages</h2>
            <p className="mt-3 text-white/65">Ce que nos clients disent de nous</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={previous}
              aria-label="Témoignage précédent"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Témoignage suivant"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative mt-12 h-[420px] sm:h-[360px]" style={{ perspective: '1400px' }}>
          {testimonials.map((item, index) => {
            const delta = offsetOf(index, current, testimonials.length);
            if (reduce && delta !== 0) return null;

            return (
              <button
                key={item.author}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Aller au témoignage ${index + 1}`}
                className="absolute inset-x-0 top-0 mx-auto w-full max-w-2xl rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7 text-left backdrop-blur-md sm:p-10"
                style={{
                  transform: reduce
                    ? undefined
                    : `translateX(${delta * 58}%) rotateY(${delta * -34}deg) translateZ(${delta === 0 ? 60 : -180}px) scale(${delta === 0 ? 1 : 0.88})`,
                  opacity: Math.abs(delta) > 1 ? 0 : delta === 0 ? 1 : 0.28,
                  zIndex: 10 - Math.abs(delta),
                  pointerEvents: delta === 0 ? 'auto' : 'none',
                  transition: 'transform 0.8s cubic-bezier(.16,1,.3,1), opacity 0.8s ease',
                }}
              >
                <p className="font-display text-5xl leading-none text-amber">“</p>
                <p className="mt-4 text-lg leading-relaxed text-white/90 sm:text-2xl">{item.text}</p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-copper font-semibold">
                    {item.initials}
                  </span>
                  <span>
                    <span className="block font-medium">{item.author}</span>
                    <span className="text-sm text-white/60">
                      {item.role}, {item.company}
                    </span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
