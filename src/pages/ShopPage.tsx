import { Link, useParams, useSearchParams } from 'react-router-dom'
import { categories } from '@/data/categories'
import { products, getProductsByCategory } from '@/data/products'
import type { CategoryId } from '@/types'
import { ProductDealCard } from '@/components/product/ProductDealCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function ShopPage() {
  const { categoryId } = useParams<{ categoryId?: string }>()
  const [params] = useSearchParams()
  const q = params.get('q')?.toLowerCase() ?? ''

  const activeCategory = categoryId
    ? categories.find((c) => c.id === categoryId)
    : undefined

  let list = categoryId
    ? getProductsByCategory(categoryId as CategoryId)
    : products

  if (q) {
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subType.toLowerCase().includes(q) ||
        p.category.includes(q),
    )
  }

  const title = activeCategory
    ? activeCategory.name
    : q
      ? `Results for “${params.get('q')}”`
      : 'All furniture'

  return (
    <div className="ouch-container py-8 sm:py-10 md:py-12">
      <SectionHeader
        title={title}
        subtitle={activeCategory?.tagline ?? `${list.length} products · Premium showroom, Salem`}
      />

      <div className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-hide sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        <Link
          to="/shop"
          className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold sm:text-sm ${
            !categoryId
              ? 'bg-brand-950 text-white shadow-sm'
              : 'border border-border bg-white text-brand-800'
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            to={`/shop/${c.id}`}
            className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold sm:text-sm ${
              categoryId === c.id
                ? 'bg-brand-950 text-white shadow-sm'
                : 'border border-border bg-white text-brand-800'
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-16 text-center text-muted">No products found. Try another search.</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p) => (
            <ProductDealCard key={p.id} product={p} fullWidth />
          ))}
        </div>
      )}
    </div>
  )
}
