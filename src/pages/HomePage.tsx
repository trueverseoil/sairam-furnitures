import { Hero } from '@/components/home/Hero'
import { OffersStrip } from '@/components/home/OffersStrip'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { StorePreview } from '@/components/home/StorePreview'

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <OffersStrip />
      <CategoryGrid />
      <FeaturedProducts title="Top picks for your home" offset={2} limit={6} />
      <StorePreview />
    </>
  )
}
