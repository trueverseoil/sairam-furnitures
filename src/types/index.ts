export type CategoryId =
  | 'sofas'
  | 'cots'
  | 'dining'
  | 'wardrobes'
  | 'mattresses'
  | 'office'
  | 'home-decor'
  | 'accessories'

export interface Category {
  id: CategoryId
  name: string
  tagline: string
  subTypes: string[]
  image: string
  icon: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: CategoryId
  subType: string
  price: number
  mrp?: number
  description: string
  highlights: string[]
  image: string
  images: string[]
  featured?: boolean
  tags: string[]
  dimensions?: string
  material?: string
}

export interface QuoteForm {
  name: string
  phone: string
  pincode: string
  interest: string
  productId?: string
  visitDate?: string
  message?: string
}

export const STORE = {
  name: 'Sairam Furnitures',
  tagline: 'Quality Furniture for a Better Home',
  phone: '+919876543210',
  phoneDisplay: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'info@sairamfurnitures.com',
  address: 'Near Bus Stand, Salem, Tamil Nadu 636001, India',
  lat: 11.6643,
  lng: 78.146,
  hours: 'Mon – Sun: 9:30 AM – 8:30 PM',
  mapsUrl: 'https://maps.google.com/?q=Sairam+Furnitures+Salem',
} as const
