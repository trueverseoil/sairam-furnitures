import type { Category } from '@/types'
import { furnitureImage, photos } from '@/data/images'

export const categories: Category[] = [
  {
    id: 'sofas',
    name: 'Sofas',
    tagline: 'Comfort meets style',
    subTypes: ['3+2', 'L-Shape', 'Recliner', 'Modular'],
    image: furnitureImage(photos.sofa, 800),
    icon: 'sofa',
  },
  {
    id: 'cots',
    name: 'Cots & Beds',
    tagline: 'Rest in elegance',
    subTypes: ['Wooden', 'Storage', 'Modern', 'Queen/King'],
    image: furnitureImage(photos.bed, 800),
    icon: 'bed',
  },
  {
    id: 'dining',
    name: 'Dining Sets',
    tagline: 'Gather around beauty',
    subTypes: ['4 Seater', '6 Seater', 'Marble', 'Wooden'],
    image: furnitureImage(photos.dining, 800),
    icon: 'utensils',
  },
  {
    id: 'wardrobes',
    name: 'Wardrobes',
    tagline: 'Organize in style',
    subTypes: ['Sliding', 'Hinged', 'Modular', 'Custom'],
    image: furnitureImage(photos.wardrobe, 800),
    icon: 'door-open',
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    tagline: 'Sleep redefined',
    subTypes: ['Orthopedic', 'Memory Foam', 'Spring', 'Dual Comfort'],
    image: furnitureImage(photos.mattress, 800),
    icon: 'moon',
  },
  {
    id: 'office',
    name: 'Office Furniture',
    tagline: 'Work with purpose',
    subTypes: ['Chairs', 'Tables', 'Storage', 'Workstations'],
    image: furnitureImage(photos.office, 800),
    icon: 'briefcase',
  },
  {
    id: 'home-decor',
    name: 'Home Décor',
    tagline: 'Details that delight',
    subTypes: ['Pooja Units', 'Shoe Racks', 'TV Units', 'Study Tables'],
    image: furnitureImage(photos.decor, 800),
    icon: 'sparkles',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    tagline: 'Complete your space',
    subTypes: ['Cushions', 'Curtains', 'Rugs', 'Lamps'],
    image: furnitureImage(photos.accessories, 800),
    icon: 'palette',
  },
]
