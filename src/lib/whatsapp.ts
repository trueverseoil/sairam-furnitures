import { STORE } from '@/types'
import type { Product } from '@/types'

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${STORE.whatsapp}?text=${encoded}`
}

export function productInquiryMessage(product: Product): string {
  return `Hi Sairam Furnitures! I'm interested in:\n\n*${product.name}*\nPrice: ₹${product.price.toLocaleString('en-IN')}\nSKU: ${product.id}\n\nPlease share availability and best offer.`
}

export function quoteMessage(data: {
  name: string
  phone: string
  pincode: string
  interest: string
  message?: string
}): string {
  let text = `Hi! I'd like a quote from Sairam Furnitures.\n\nName: ${data.name}\nPhone: ${data.phone}\nPincode: ${data.pincode}\nInterest: ${data.interest}`
  if (data.message) text += `\nNotes: ${data.message}`
  return text
}

export async function openWhatsApp(message: string): Promise<void> {
  const url = buildWhatsAppUrl(message)
  window.open(url, '_blank', 'noopener,noreferrer')
}
