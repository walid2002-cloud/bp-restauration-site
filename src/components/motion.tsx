import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from 'react';

export function Eyebrow({ index, children }: { index: string; children: string }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#c65332]">
      <span>{index}</span>
      <span className="h-px w-8 bg-[#c65332]/40" />
      <span>{children}</span>
    </p>
  );
}

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    const fallback = window.setTimeout(() => setShown(true), 8000);
    observer.observe(node);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Tilt({
  children,
  className = '',
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node || window.matchMedia('(pointer: coarse)').matches) return;

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty('--ry', `${(px * max).toFixed(2)}deg`);
    node.style.setProperty('--rx', `${(-py * max).toFixed(2)}deg`);
  };

  const leave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--ry', '0deg');
    node.style.setProperty('--rx', '0deg');
  };

  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`tilt h-full ${className}`}
      style={{ '--rx': '0deg', '--ry': '0deg' } as CSSProperties}
    >
      <div className="tilt-inner h-full">{children}</div>
    </div>
  );
}
