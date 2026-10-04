import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl('Hi Sairam Furnitures! I would like to chat about furniture.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 hidden items-center gap-2 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-lg transition hover:brightness-105 md:bottom-6 md:left-6 md:flex"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      Chat with us
    </a>
  )
}
