import { useEffect, useState, type ImgHTMLAttributes } from 'react'

const FALLBACK = '/placeholder-furniture.svg'

interface FurnitureImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

export function FurnitureImage({ src, alt, className, ...props }: FurnitureImageProps) {
  const [current, setCurrent] = useState(src)

  useEffect(() => {
    setCurrent(src)
  }, [src])

  return (
    <img
      {...props}
      src={current}
      alt={alt}
      className={className}
      loading={props.loading ?? 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        if (current !== FALLBACK) setCurrent(FALLBACK)
      }}
    />
  )
}
