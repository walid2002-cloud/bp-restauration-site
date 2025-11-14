import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '+212661952493';
  const message = encodeURIComponent('Bonjour, je souhaite en savoir plus sur vos services de restauration collective.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-[#0F172A] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Contactez-nous
      </span>
    </a>
  );
}
