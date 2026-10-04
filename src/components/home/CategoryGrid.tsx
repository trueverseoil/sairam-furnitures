import { Link } from 'react-router-dom'
import { categories } from '@/data/categories'
import { FurnitureImage } from '@/components/ui/FurnitureImage'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function CategoryGrid() {
  return (
    <section id="categories" className="scroll-mt-28 bg-surface-muted py-10 sm:py-14 md:py-16">
      <div className="ouch-container">
        <SectionHeader
          title="Shop by category"
          subtitle="Curated collections for every room — tap to explore."
          href="/shop"
        />

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.id}`}
              className="group flex flex-col items-center rounded-2xl border border-border/80 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md sm:p-4"
            >
              <div className="relative aspect-square w-full max-w-[88px] overflow-hidden rounded-2xl sm:max-w-[100px]">
                <FurnitureImage
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 line-clamp-2 text-center text-xs font-semibold text-brand-900 sm:text-sm">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
