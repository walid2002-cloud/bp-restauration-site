import { useEffect, useRef, useState } from 'react';
import { Award, Building2, Star, UtensilsCrossed } from 'lucide-react';

const kpis = [
  { icon: Award, value: 25, decimals: 0, suffix: '+', label: 'Années d\'expérience' },
  { icon: Building2, value: 100, decimals: 0, suffix: '+', label: 'Entreprises clientes' },
  { icon: UtensilsCrossed, value: 5000, decimals: 0, suffix: '+', label: 'Repas servis / jour' },
  { icon: Star, value: 99.5, decimals: 1, suffix: ' %', label: 'Taux de satisfaction' },
];

export default function KPIs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
      <div className="floor" aria-hidden />
      <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-copper/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="border-white/10 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
            <kpi.icon size={22} className="text-amber" />
            <p className="mt-5 font-display text-5xl tracking-tight sm:text-6xl">
              {visible ? (
                <CountUp end={kpi.value} decimals={kpi.decimals} suffix={kpi.suffix} />
              ) : (
                `0${kpi.suffix}`
              )}
            </p>
            <p className="mt-2 text-sm text-white/65">{kpi.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CountUp({ end, decimals, suffix }: { end: number; decimals: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setCount(end);
      return;
    }

    const duration = 1600;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(end * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end]);

  const formatted = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(count);

  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}
