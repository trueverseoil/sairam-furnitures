import { Link } from 'react-router-dom'
import type { Product } from '@/types'
import { formatPrice } from '@/data/products'
import { FurnitureImage } from '@/components/ui/FurnitureImage'
import { DealCountdown } from '@/components/product/DealCountdown'

export function ProductDealCard({
  product,
  fullWidth = false,
}: {
  product: Product
  fullWidth?: boolean
}) {
  const savePct = product.mrp
    ? Math.round((1 - product.price / product.mrp) * 100)
    : 0

  return (
    <article
      className={`group flex h-full flex-col ${
        fullWidth
          ? 'w-full'
          : 'w-[72vw] max-w-[280px] shrink-0 snap-start sm:w-[260px] md:w-full md:max-w-none'
      }`}
    >
      <Link to={`/product/${product.slug}`} className="premium-card relative block">
        {savePct > 0 && (
          <span className="absolute left-3 top-3 z-10 rounded-lg bg-accent-red px-2 py-1 text-[11px] font-bold text-white shadow-sm">
            −{savePct}%
          </span>
        )}
        <FurnitureImage
          src={product.image}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:aspect-square"
        />
      </Link>
      <div className="flex flex-1 flex-col pt-3 sm:pt-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-brand-900 transition group-hover:text-accent sm:text-[15px]">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex flex-1 flex-col gap-0.5 text-sm">
          {product.mrp && (
            <p className="text-xs text-muted sm:text-sm">
              MRP <span className="line-through">{formatPrice(product.mrp)}</span>
            </p>
          )}
          <p className="text-base font-bold text-brand-950">
            {formatPrice(product.price)}
          </p>
          {product.mrp && savePct > 0 && (
            <p className="text-xs font-medium text-accent-red">
              Save {formatPrice(product.mrp - product.price)}
            </p>
          )}
        </div>
        <DealCountdown className="mt-2 hidden sm:block" />
      </div>
    </article>
  )
}
