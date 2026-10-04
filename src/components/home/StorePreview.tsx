import { Link } from 'react-router-dom'
import { STORE } from '@/types'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function StorePreview() {
  return (
    <section className="ouch-container py-10 sm:py-14 md:py-16">
      <SectionHeader title="Visit our Salem showroom" subtitle="See materials & comfort in person before you buy." />
      <div className="premium-card mt-8 overflow-hidden md:grid md:grid-cols-2">
        <iframe
          title="Store location"
          className="min-h-[220px] w-full border-0 sm:min-h-[280px] md:min-h-[320px]"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${STORE.lat},${STORE.lng}&z=14&output=embed`}
        />
        <div className="flex flex-col justify-center bg-brand-50 p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-muted">{STORE.address}</p>
          <p className="mt-3 text-sm font-semibold text-brand-900">{STORE.hours}</p>
          <p className="mt-2 text-sm">
            <a href={`tel:${STORE.phone}`} className="font-bold text-accent hover:underline">
              {STORE.phoneDisplay}
            </a>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={STORE.mapsUrl} className="w-full sm:w-auto">
              Get directions
            </Button>
            <Link to="/store" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full">
                Store details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
