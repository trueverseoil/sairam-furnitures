import { products } from '@/data/products'
import { ProductDealCard } from '@/components/product/ProductDealCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function FeaturedProducts({
  title = 'Best sellers on discount',
  subtitle = 'Handpicked deals with today’s pricing — limited time.',
  offset = 0,
  limit = 8,
}: {
  title?: string
  subtitle?: string
  offset?: number
  limit?: number
}) {
  const list = products.slice(offset, offset + limit)

  return (
    <section className="bg-surface py-10 sm:py-14 md:py-16">
      <div className="ouch-container">
        <SectionHeader title={title} subtitle={subtitle} href="/shop" />

        <div className="-mx-4 mt-8 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide sm:-mx-0 sm:px-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible lg:grid-cols-4">
          {list.map((p) => (
            <ProductDealCard key={p.id} product={p} fullWidth={false} />
          ))}
        </div>
      </div>
    </section>
  )
}
