import { Eyebrow } from './motion';

const clients = ['ADM Projet', 'Lydec', 'Smitrel', 'AFRIQUIA', 'Sythemedic', 'AIR LIQUID'];

export default function TrustedBy() {
  const loop = [...clients, ...clients];

  return (
    <section className="overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow index="02">Références</Eyebrow>
        <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Ils nous font confiance
        </h2>
      </div>

      <div className="marquee-viewport mt-8">
        <div className="marquee-track">
          {loop.map((client, index) => (
            <span
              key={`${client}-${index}`}
              className="rounded-full border border-black/5 bg-[#fffdf9] px-6 py-4 font-display text-2xl tracking-tight text-ink/80 shadow-[0_16px_40px_-30px_rgba(16,22,32,0.8)]"
            >
              {client}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-2 text-center text-lg text-ink/70">
        Et plus de <span className="font-semibold text-copper">200 autres entreprises</span>
      </p>
    </section>
  );
}
