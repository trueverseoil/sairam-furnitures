import { Link, useLocation } from 'react-router-dom'
import { Home, Grid3X3, MessageCircle, ShoppingCart, MapPin } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const items = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/shop', icon: Grid3X3, label: 'Shop', matchPrefix: true },
  { to: '/store', icon: MapPin, label: 'Store' },
]

export function BottomNav() {
  const { pathname } = useLocation()
  const cartCount = useCartStore((s) => s.items.length)

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/80 bg-white/95 backdrop-blur-lg md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-1 pt-1">
        {items.map(({ to, icon: Icon, label, matchPrefix }) => {
          const active =
            pathname === to || (matchPrefix && to !== '/' && pathname.startsWith(to))
          return (
            <Link
              key={to}
              to={to}
              className={`flex min-h-[52px] min-w-[64px] flex-1 flex-col items-center justify-center gap-0.5 rounded-lg text-[10px] font-semibold transition ${
                active ? 'text-accent' : 'text-muted'
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? 'stroke-[2.5px]' : ''}`} />
              {label}
            </Link>
          )
        })}
        <Link
          to="/shop"
          className="relative flex min-h-[52px] min-w-[64px] flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-semibold text-muted"
        >
          <ShoppingCart className="h-5 w-5" />
          Cart
          {cartCount > 0 && (
            <span className="absolute top-1.5 right-[calc(50%-22px)] flex h-4 min-w-4 items-center justify-center rounded-full bg-accent-red text-[9px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>
        <a
          href={buildWhatsAppUrl('Hi Sairam Furnitures!')}
          className="flex min-h-[52px] min-w-[64px] flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-semibold text-[#128C7E]"
        >
          <MessageCircle className="h-5 w-5" />
          Chat
        </a>
      </div>
    </nav>
  )
}
