import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Logo({
  className = '',
  rich = false,
}: {
  className?: string
  /** Colorful bold branding for home header */
  rich?: boolean
}) {
  if (rich) {
    return (
      <Link
        to="/"
        className={`group flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}
      >
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-900 shadow-md shadow-emerald-900/25 transition group-hover:scale-105 sm:h-11 sm:w-11">
          <Home className="h-5 w-5 text-white sm:h-5 sm:w-5" strokeWidth={2.5} />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
        </div>
        <div className="min-w-0 leading-none">
          <span
            className="logo-sairam-rich block truncate font-display text-[1.35rem] sm:text-[1.65rem] md:text-[1.85rem]"
            aria-label="Sairam"
          >
            Sairam
          </span>
          <span className="logo-furnitures-rich mt-1 block truncate text-[10px] font-black uppercase tracking-[0.28em] sm:text-[11px] sm:tracking-[0.32em]">
            Furnitures
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link to="/" className={`group flex flex-col leading-none ${className}`}>
      <span className="font-display text-xl text-brand-950 sm:text-2xl md:text-[1.75rem]">
        Sairam
      </span>
      <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.35em] text-muted sm:text-[10px]">
        Furnitures
      </span>
    </Link>
  )
}
