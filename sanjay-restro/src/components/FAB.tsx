import { Phone, MessageCircle, Instagram } from 'lucide-react';

export default function FAB() {
  return (
    <div className="fixed bottom-8 left-0 z-50 flex w-full justify-center gap-6 px-6">
      <a
        href="https://wa.me/qr/N77PCHIJLEJML1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform active:scale-90"
      >
        <MessageCircle size={28} />
      </a>
      
      <a
        href="tel:+919825980804" // Placeholder for call link
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform active:scale-90"
      >
        <Phone size={28} />
      </a>
      
      <a
        href="https://www.instagram.com/s.sanjay_01_"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white shadow-lg transition-transform active:scale-90"
      >
        <Instagram size={28} />
      </a>
    </div>
  );
}
