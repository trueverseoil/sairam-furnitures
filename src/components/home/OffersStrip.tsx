import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react'

const perks = [
  { icon: Truck, title: 'Free delivery', desc: 'Select Salem pincodes' },
  { icon: ShieldCheck, title: 'Premium quality', desc: 'Trusted showroom' },
  { icon: CreditCard, title: 'Easy EMI', desc: 'Flexible payments' },
  { icon: Headphones, title: 'Expert support', desc: 'WhatsApp & visit' },
]

export function OffersStrip() {
  return (
    <section className="border-y border-border/80 bg-brand-50/80">
      <div className="ouch-container grid grid-cols-2 gap-4 py-8 sm:gap-6 md:grid-cols-4 md:py-10">
        {perks.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-accent shadow-sm ring-1 ring-border/60">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-2 sm:mt-0 sm:ml-3">
              <p className="text-xs font-bold text-brand-950 sm:text-sm">{title}</p>
              <p className="mt-0.5 text-[11px] text-muted sm:text-xs">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
