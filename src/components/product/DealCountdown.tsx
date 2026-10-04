import { useEffect, useState } from 'react'

function getEndOfDay(): Date {
  const d = new Date()
  d.setHours(23, 59, 59, 999)
  return d
}

function formatRemaining(ms: number): string {
  if (ms <= 0) return '00:00:00'
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':')
}

export function DealCountdown({ className = '' }: { className?: string }) {
  const [left, setLeft] = useState(() => getEndOfDay().getTime() - Date.now())

  useEffect(() => {
    const id = setInterval(() => {
      setLeft(getEndOfDay().getTime() - Date.now())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <p className={`text-xs font-medium text-muted ${className}`}>
      Ends in:{' '}
      <span className="font-bold tabular-nums text-brand-900">{formatRemaining(left)}</span>
    </p>
  )
}
