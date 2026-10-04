/** Stable Unsplash photo paths (verified — avoid removed photo IDs). */
export const photos = {
  sofa: 'photo-1567538096630-e0c55bd6374c',
  sofaSet: 'photo-1484101403633-562f891dc89a',
  bed: 'photo-1505693416388-ac5ce068fe85',
  dining: 'photo-1617806118233-18e1de247200',
  wardrobe: 'photo-1558618666-fcd25c85cd64',
  mattress: 'photo-1631049307264-da0ec9d70304',
  office: 'photo-1497366216548-37526070297c',
  decor: 'photo-1618221195710-dd6b41faaea6',
  living: 'photo-1586023492125-27b2c045efd7',
  accessories: 'photo-1616486338812-3dadae4b4ace',
} as const

export function furnitureImage(
  photo: string,
  width: number,
): string {
  return `https://images.unsplash.com/${photo}?w=${width}&auto=format&fit=crop&q=80`
}
