import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Send, CheckCircle2 } from 'lucide-react'
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { useQuoteStore } from '@/store/quoteStore'
import { quoteMessage, buildWhatsAppUrl } from '@/lib/whatsapp'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'

const DELIVERY_PINCODES = ['636001', '636002', '636003', '636004', '636005', '636006', '636007']

export function QuotePage() {
  const [params] = useSearchParams()
  const productId = params.get('product')
  const prefillProduct = products.find((p) => p.id === productId)
  const addQuote = useQuoteStore((s) => s.addQuote)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [pincode, setPincode] = useState('')
  const [interest, setInterest] = useState(
    prefillProduct ? prefillProduct.name : 'Sofas',
  )
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [deliveryOk, setDeliveryOk] = useState<boolean | null>(null)

  const checkPincode = (code: string) => {
    setPincode(code)
    if (code.length === 6) {
      setDeliveryOk(DELIVERY_PINCODES.includes(code) || code.startsWith('636'))
    } else {
      setDeliveryOk(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addQuote({ name, phone, pincode, interest, message, productId: productId ?? undefined })
    setSubmitted(true)
    window.open(
      buildWhatsAppUrl(quoteMessage({ name, phone, pincode, interest, message })),
      '_blank',
    )
  }

  return (
    <div className="ouch-container max-w-xl py-8 sm:py-12">
      <SectionHeader
        title="Get quote instantly"
        subtitle="We’ll open WhatsApp with your details pre-filled — quick replies from our team."
      />

      {submitted ? (
        <div className="premium-card mt-8 p-8 text-center sm:mt-10">
          <CheckCircle2 className="mx-auto h-12 w-12 text-brand-600" />
          <p className="mt-4 font-semibold text-brand-900">Request sent via WhatsApp!</p>
          <p className="mt-2 text-sm text-muted">Our team typically responds within minutes.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="premium-card mt-8 space-y-5 p-5 sm:mt-10 sm:p-8">
          <div>
            <label className="text-sm font-semibold text-brand-800">Full name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="premium-input mt-1.5"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-brand-800">Phone</label>
            <input
              required
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="premium-input mt-1.5"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-brand-800">Pincode</label>
            <input
              required
              maxLength={6}
              inputMode="numeric"
              value={pincode}
              onChange={(e) => checkPincode(e.target.value.replace(/\D/g, ''))}
              className="premium-input mt-1.5"
              placeholder="636001"
            />
            {deliveryOk === true && (
              <p className="mt-1 text-sm text-brand-600">✓ Delivery available in your area</p>
            )}
            {deliveryOk === false && (
              <p className="mt-1 text-sm text-amber-700">
                Delivery may vary — we&apos;ll confirm on WhatsApp
              </p>
            )}
          </div>
          <div>
            <label className="text-sm font-semibold text-brand-800">Interested in</label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="premium-input mt-1.5"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
              {products.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-brand-800">Notes (optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="premium-input mt-1.5 resize-none"
              placeholder="Room size, preferred color, visit date..."
            />
          </div>
          <Button type="submit" variant="whatsapp" className="w-full">
            <Send className="h-5 w-5" />
            Send quote request on WhatsApp
          </Button>
        </form>
      )}
    </div>
  )
}
