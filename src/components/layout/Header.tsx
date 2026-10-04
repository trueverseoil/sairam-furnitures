import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from './Logo'
import { AnnouncementBar } from './AnnouncementBar'
import { categories } from '@/data/categories'
import { useCartStore } from '@/store/cartStore'

const navLinks = [
  { to: '/shop', label: 'Shop All' },
  { to: '/quote', label: 'Get Quote' },
  { to: '/store', label: 'Stores' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const cartCount = useCartStore((s) => s.items.length)
  const isHome = location.pathname === '/'

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    navigate(q ? `/shop?q=${encodeURIComponent(q)}` : '/shop')
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-xl backdrop-saturate-150">
      <AnnouncementBar />
      <div className="ouch-container flex items-center gap-2 py-3 sm:gap-4 md:py-3.5">
        <button
          type="button"
          className="touch-target -ml-1 rounded-xl text-brand-900 hover:bg-brand-100 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Logo rich={isHome} className="min-w-0 shrink-0" />

        <form
          onSubmit={onSearch}
          className="hidden min-w-0 flex-1 items-stretch md:flex md:max-w-xl lg:max-w-2xl"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sofas, beds, dining…"
            className="premium-input min-h-11 flex-1 rounded-r-none border-r-0"
          />
          <button
            type="submit"
            className="touch-target min-w-[3rem] rounded-r-xl bg-accent px-5 text-white transition hover:bg-accent-hover"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
          <Link
            to="/quote"
            className="touch-target hidden rounded-xl hover:bg-brand-100 sm:flex"
            aria-label="Account"
          >
            <User className="h-5 w-5 md:h-6 md:w-6" />
          </Link>
          <Link
            to="/shop"
            className="touch-target relative rounded-xl hover:bg-brand-100"
            aria-label={`Cart, ${cartCount} items`}
          >
            <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-accent-red px-1 text-[10px] font-bold text-white ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <form onSubmit={onSearch} className="ouch-container flex pb-3 md:hidden">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search furniture…"
          className="premium-input min-h-11 flex-1 rounded-r-none border-r-0 text-base"
        />
        <button
          type="submit"
          className="touch-target min-w-[3rem] rounded-r-xl bg-accent text-white"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      </form>

      <div className="border-t border-border/50 lg:hidden">
        <div className="ouch-container flex gap-2 overflow-x-auto py-2.5 scrollbar-hide">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/shop/${c.id}`}
              className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
                location.pathname === `/shop/${c.id}`
                  ? 'border-brand-900 bg-brand-900 text-white'
                  : 'border-border bg-white text-brand-800 hover:border-accent/40'
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      <nav className="hidden border-t border-border/50 lg:block">
        <div className="ouch-container flex flex-wrap items-center gap-0.5 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                location.pathname === link.to
                  ? 'bg-accent-soft text-accent-hover'
                  : 'text-brand-800 hover:bg-brand-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="mx-2 h-4 w-px bg-border" />
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/shop/${c.id}`}
              className="rounded-lg px-3 py-2 text-sm text-brand-700 transition hover:bg-brand-100 hover:text-accent"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <nav className="ouch-container flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="min-h-12 border-b border-border/60 py-3 text-sm font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
