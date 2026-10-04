import { Calendar, Phone, Mail, Clock, Navigation } from 'lucide-react'
import { STORE } from '@/types'
import { Button } from '@/components/ui/Button'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export function StorePage() {
  return (
    <div className="ouch-container py-10">
      <h1 className="ouch-section-title">Visit our showroom</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Experience quality furniture in person. Our Salem team will help you choose the perfect
        pieces for your home or office.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-brand-900/10 shadow-lg">
          <iframe
            title="Map"
            className="h-[400px] w-full border-0"
            loading="lazy"
            src={`https://maps.google.com/maps?q=${STORE.lat},${STORE.lng}&z=15&output=embed`}
          />
        </div>

        <div className="space-y-6 rounded-3xl border border-brand-900/10 bg-white p-8 shadow-sm">
          <div>
            <h2 className="font-serif text-2xl text-brand-900">{STORE.name}</h2>
            <p className="mt-1 text-sm text-brand-600">{STORE.tagline}</p>
          </div>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <Navigation className="h-5 w-5 shrink-0 text-brand-600" />
              <span>{STORE.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="h-5 w-5 shrink-0 text-brand-600" />
              {STORE.hours}
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand-600" />
              <a href={`tel:${STORE.phone}`} className="font-semibold hover:text-brand-600">
                {STORE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-600" />
              {STORE.email}
            </li>
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={STORE.mapsUrl}>
              <Navigation className="h-4 w-4" />
              Get directions
            </Button>
            <Button
              variant="whatsapp"
              href={buildWhatsAppUrl('Hi! I would like to book a store visit at Salem showroom.')}
            >
              <Calendar className="h-4 w-4" />
              Book visit
            </Button>
          </div>

          <div className="rounded-2xl bg-brand-100/80 p-4 text-sm text-brand-800">
            <strong>Tip:</strong> WhatsApp us your preferred date & time — we&apos;ll reserve a
            design consultant for you.
          </div>
        </div>
      </div>
    </div>
  )
}
