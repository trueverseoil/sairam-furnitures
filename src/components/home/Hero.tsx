import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FurnitureImage } from '@/components/ui/FurnitureImage'
import { furnitureImage, photos } from '@/data/images'

const slides = [
  {
    image: furnitureImage(photos.living, 1920),
    eyebrow: 'Festive collection',
    title: 'Premium home',
    highlight: 'Up to 75% off',
    lines: ['Extra 5% on prepaid orders', 'Showroom quality · Salem'],
    cta: 'Shop the sale',
    to: '/shop',
  },
  {
    image: furnitureImage(photos.sofa, 1920),
    eyebrow: 'Living room',
    title: 'Designer sofas',
    highlight: 'From today’s deal',
    lines: ['L-shape · 3+2 · Recliners', 'WhatsApp for instant quote'],
    cta: 'Explore sofas',
    to: '/shop/sofas',
  },
  {
    image: furnitureImage(photos.dining, 1920),
    eyebrow: 'Dining & bedroom',
    title: 'Complete your home',
    highlight: 'EMI available',
    lines: ['Dining sets & storage beds', 'Free delivery nearby'],
    cta: 'Browse dining',
    to: '/shop/dining',
  },
]

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [])

  const slide = slides[index]!

  return (
    <section className="relative w-full overflow-hidden bg-brand-950" aria-label="Promotions">
      <div className="relative min-h-[min(520px,85dvh)] w-full sm:min-h-[480px] md:min-h-[540px] lg:aspect-[21/9] lg:min-h-0 lg:max-h-[720px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <FurnitureImage
              src={slide.image}
              alt=""
              aria-hidden
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-brand-950/20 md:bg-gradient-to-r md:from-brand-950/80 md:via-brand-950/35 md:to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-4 pb-14 sm:p-6 sm:pb-16 md:justify-center md:p-10 lg:p-14">
          <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-3xl md:mx-0 md:max-w-xl lg:max-w-2xl"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
              {slide.eyebrow}
            </p>
            <h1 className="mt-2 font-serif text-[clamp(2rem,8vw,4.5rem)] leading-[1.05] text-white">
              {slide.title}
            </h1>
            <p className="mt-2 text-lg font-semibold text-accent-gold sm:text-xl md:text-2xl">
              {slide.highlight}
            </p>
            <ul className="mt-3 space-y-1 text-sm text-white/80 sm:text-base">
              {slide.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <Link
              to={slide.to}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-950 shadow-lg transition hover:bg-brand-50 active:scale-[0.98]"
            >
              {slide.cta}
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 sm:bottom-6">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
