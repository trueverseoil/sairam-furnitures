import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { STORE } from '@/types'
import { categories } from '@/data/categories'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-brand-50">
      <div className="ouch-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{STORE.tagline}</p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-950">Shop</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/shop/${c.id}`} className="text-muted transition hover:text-accent">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-950">Help</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/quote" className="text-muted hover:text-accent">
                Get a quote
              </Link>
            </li>
            <li>
              <Link to="/store" className="text-muted hover:text-accent">
                Store locator
              </Link>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl('Hi, I need help with my order.')}
                className="text-muted hover:text-accent"
              >
                WhatsApp support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-950">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li className="leading-relaxed">{STORE.address}</li>
            <li>
              <a href={`tel:${STORE.phone}`} className="font-semibold text-brand-900 hover:text-accent">
                {STORE.phoneDisplay}
              </a>
            </li>
            <li>{STORE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} Sairam Furnitures. All rights reserved.
      </div>
    </footer>
  )
}
