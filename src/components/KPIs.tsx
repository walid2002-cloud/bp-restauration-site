import { useEffect, useState, useRef } from 'react';
import { Award, Building2, UtensilsCrossed, Star } from 'lucide-react';

export default function KPIs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const kpis = [
    { icon: Award, value: 25, suffix: '+', label: 'Années d\'expérience' },
    { icon: Building2, value: 100, suffix: '+', label: 'Entreprises clientes' },
    { icon: UtensilsCrossed, value: 5000, suffix: '+', label: 'Repas servis / jour' },
    { icon: Star, value: 99.5, suffix: '%', label: 'Taux de satisfaction' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#0F172A] to-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#D86C4E] to-[#F2A65A] rounded-xl mb-6">
                <kpi.icon size={36} />
              </div>
              <div className="text-5xl font-bold mb-2 font-['Poppins']">
                {isVisible ? (
                  <CountUp end={kpi.value} suffix={kpi.suffix} />
                ) : (
                  '0' + kpi.suffix
                )}
              </div>
              <div className="text-lg text-white/80">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
