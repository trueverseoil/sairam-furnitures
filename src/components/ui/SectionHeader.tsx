import { Link } from 'react-router-dom'

export function SectionHeader({
  title,
  subtitle,
  href,
  linkLabel = 'View all',
}: {
  title: string
  subtitle?: string
  href?: string
  linkLabel?: string
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="font-serif text-2xl tracking-tight text-brand-950 md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-1 max-w-xl text-sm text-muted md:text-base">{subtitle}</p>}
      </div>
      {href && (
        <Link to={href} className="premium-link shrink-0 self-start sm:self-auto">
          {linkLabel}
        </Link>
      )}
    </div>
  )
}
