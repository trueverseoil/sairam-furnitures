import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { hapticTap } from '@/lib/capacitor-native'

type Variant = 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
  href?: string
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white shadow-md shadow-accent/20 hover:bg-accent-hover active:scale-[0.98]',
  secondary:
    'bg-white text-brand-900 border border-border hover:bg-brand-50 active:scale-[0.98]',
  ghost: 'bg-transparent text-brand-800 hover:bg-brand-100',
  whatsapp: 'bg-[#25D366] text-white hover:brightness-105 active:scale-[0.98]',
  outline:
    'border-2 border-brand-900/15 text-brand-900 bg-transparent hover:bg-brand-50',
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  href,
  onClick,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold tracking-wide transition-all duration-200 disabled:pointer-events-none disabled:opacity-50'

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    void hapticTap()
    onClick?.(e)
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}
