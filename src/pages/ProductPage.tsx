import { Link, useParams } from 'react-router-dom'
import { MessageCircle, Share2, Heart, ChevronLeft, ShoppingCart } from 'lucide-react'
import { getProductBySlug, formatPrice } from '@/data/products'
import { categories } from '@/data/categories'
import { Button } from '@/components/ui/Button'
import { productInquiryMessage, buildWhatsAppUrl } from '@/lib/whatsapp'
import { shareProduct, hapticTap } from '@/lib/capacitor-native'
import { useQuoteStore } from '@/store/quoteStore'
import { useCartStore } from '@/store/cartStore'
import { FurnitureImage } from '@/components/ui/FurnitureImage'
import { DealCountdown } from '@/components/product/DealCountdown'

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined
  const { wishlist, toggleWishlist } = useQuoteStore()
  const addToCart = useCartStore((s) => s.add)

  if (!product) {
    return (
      <div className="ouch-container py-20 text-center">
        <h1 className="text-xl font-bold">Product not found</h1>
        <Link to="/shop" className="ouch-link mt-4 inline-block">
          Back to shop
        </Link>
      </div>
    )
  }

  const categoryName = categories.find((c) => c.id === product.category)?.name
  const savePct = product.mrp
    ? Math.round((1 - product.price / product.mrp) * 100)
    : 0

  const handleShare = async () => {
    await hapticTap()
    await shareProduct(product.name, window.location.href)
  }

  return (
    <div className="ouch-container py-6 sm:py-8 md:py-12">
      <Link
        to={`/shop/${product.category}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-accent"
      >
        <ChevronLeft className="h-4 w-4" />
        {categoryName}
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="premium-card relative lg:sticky lg:top-28">
          {savePct > 0 && (
            <span className="absolute left-0 top-0 z-10 bg-accent-red px-3 py-1.5 text-sm font-bold text-white">
              Save {savePct}%
            </span>
          )}
          <FurnitureImage
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-cover"
            loading="eager"
          />
        </div>

        <div>
          <h1 className="font-serif text-2xl leading-snug text-brand-950 md:text-3xl lg:text-4xl">
            {product.name}
          </h1>

          <div className="mt-4 space-y-1 border-b border-border pb-4">
            {product.mrp && (
              <p className="text-muted">
                MRP: <span className="line-through">{formatPrice(product.mrp)}</span>
              </p>
            )}
            <p className="text-xl font-bold">
              Today&apos;s Deal:{' '}
              <span className="text-accent">{formatPrice(product.price)}</span>
            </p>
            {product.mrp && (
              <p className="text-sm text-muted">
                You save {formatPrice(product.mrp - product.price)} ({savePct}% OFF)
              </p>
            )}
            <DealCountdown className="mt-2" />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">{product.description}</p>

          {product.dimensions && (
            <p className="mt-3 text-sm">
              <span className="font-semibold">Dimensions:</span> {product.dimensions}
            </p>
          )}
          {product.material && (
            <p className="mt-1 text-sm">
              <span className="font-semibold">Material:</span> {product.material}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              type="button"
              onClick={() => addToCart(product.id)}
              className="flex-1 sm:flex-none"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to cart
            </Button>
            <Button
              variant="whatsapp"
              href={buildWhatsAppUrl(productInquiryMessage(product))}
              className="flex-1 sm:flex-none"
            >
              <MessageCircle className="h-5 w-5" />
              Buy on WhatsApp
            </Button>
          </div>

          <div className="mt-4 flex gap-2">
            <Link to={`/quote?product=${product.id}`} className="flex-1">
              <Button variant="outline" className="w-full">
                Get quote
              </Button>
            </Link>
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              className="inline-flex items-center justify-center rounded-sm border border-border px-4 hover:bg-brand-100"
              aria-label="Wishlist"
            >
              <Heart
                className={`h-5 w-5 ${
                  wishlist.includes(product.id) ? 'fill-accent-red text-accent-red' : 'text-muted'
                }`}
              />
            </button>
            <button
              type="button"
              onClick={() => void handleShare()}
              className="inline-flex items-center justify-center rounded-sm border border-border px-4 hover:bg-brand-100"
              aria-label="Share"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
