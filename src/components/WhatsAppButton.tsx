import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const message = encodeURIComponent('Bonjour, je souhaite en savoir plus sur vos services de restauration collective.');

  return (
    <a
      href={`https://wa.me/+212661952493?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.9)]"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <span className="wa-ring" aria-hidden />
      <MessageCircle size={26} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        Contactez-nous
      </span>
    </a>
  );
}
