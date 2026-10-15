import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { ChefHat, Clock, ShieldCheck, Utensils } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const facts = [
  { icon: ChefHat, label: 'Service professionnel' },
  { icon: ShieldCheck, label: 'Hygiène garantie' },
  { icon: Utensils, label: 'Menus variés' },
  { icon: Clock, label: 'Livraison ponctuelle' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      section.style.setProperty('--p', progress.toFixed(3));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const tilt = (event: PointerEvent<HTMLDivElement>) => {
    const scene = sceneRef.current;
    if (!scene || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = scene.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    scene.style.setProperty('--ry', `${(px * 14).toFixed(2)}deg`);
    scene.style.setProperty('--rx', `${(-py * 10).toFixed(2)}deg`);
    scene.classList.add('is-hot');
  };

  const reset = () => {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.style.setProperty('--ry', '-10deg');
    scene.style.setProperty('--rx', '7deg');
    scene.classList.remove('is-hot');
  };

  return (
    <section
      id="accueil"
      ref={sectionRef}
      className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-36"
    >
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-10">
        <div className="hero-copy">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-copper" />
            Mohammedia · 25 ans
          </p>

          <h1 className="display font-display text-ink">
            <span className="line-mask">
              <span className="rise-line" style={{ animationDelay: '0.05s' }}>
                Votre cantine
              </span>
            </span>
            <span className="line-mask">
              <span className="rise-line italic text-copper" style={{ animationDelay: '0.16s' }}>
                clé en main,
              </span>
            </span>
            <span className="line-mask">
              <span className="rise-line" style={{ animationDelay: '0.28s' }}>
                au cœur de votre
                <br />
                entreprise
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
            Depuis 25 ans, nous installons et gérons des espaces de restauration
            dans les entreprises marocaines. Menus variés, hygiène garantie et
            service professionnel pour le bien-être de vos équipes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-copper px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-18px_rgba(198,83,50,0.9)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-ink"
            >
              Organiser une réunion avec notre équipe
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="rounded-full border border-ink/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-copper hover:text-copper"
            >
              Découvrir nos services
            </button>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3 sm:mt-8">
            {facts.map((fact, index) => (
              <li
                key={fact.label}
                className={`flex items-center gap-2.5 rounded-2xl border border-black/5 bg-white/70 px-3 py-3 text-sm font-medium text-ink ${
                  index % 2 === 1 ? 'max-sm:mr-14' : ''
                }`}
              >
                <fact.icon size={18} className="shrink-0 text-copper" />
                {fact.label}
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={sceneRef}
          className="hero-scene"
          onPointerMove={tilt}
          onPointerLeave={reset}
        >
          <div className="hero-scene-inner">
            <div className="hero-slab" />
            <div className="hero-frame">
              <img
                src="/media/hero.jpg"
                alt="Plat chaud préparé par BP Restauration"
                width={1024}
                height={1536}
                fetchPriority="high"
                onLoad={() => setLoaded(true)}
                className={loaded ? 'is-loaded' : ''}
              />
              <div className="hero-glint" />
            </div>
            <div className="hero-chip hero-chip-a">
              <p className="font-display text-2xl leading-none text-ink">99,5 %</p>
              <p className="mt-1 text-xs text-ink/60">de satisfaction</p>
            </div>
            <div className="hero-chip hero-chip-b">
              <p className="font-display text-2xl leading-none text-ink">ISO 22000</p>
              <p className="mt-1 text-xs text-ink/60">Hygiène HACCP</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="scroll-cue" />
      </div>
    </section>
  );
}
