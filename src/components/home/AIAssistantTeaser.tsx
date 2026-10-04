import { useState } from 'react'
import { Bot, Send } from 'lucide-react'
import { products } from '@/data/products'

const suggestions = [
  'Best L-shape sofa under ₹50,000',
  'King bed with storage',
  '6 seater dining set',
]

export function AIAssistantTeaser() {
  const [query, setQuery] = useState('')
  const [reply, setReply] = useState<string | null>(null)

  const handleAsk = () => {
    const q = query.toLowerCase()
    let matches = products
    if (q.includes('sofa') || q.includes('l-shape')) {
      matches = products.filter((p) => p.category === 'sofas')
    } else if (q.includes('bed') || q.includes('cot')) {
      matches = products.filter((p) => p.category === 'cots')
    } else if (q.includes('dining')) {
      matches = products.filter((p) => p.category === 'dining')
    }
    if (q.match(/\d+/)) {
      const budget = parseInt(q.replace(/\D/g, ''), 10)
      if (budget > 0) matches = matches.filter((p) => p.price <= budget)
    }
    const top = matches.slice(0, 2)
    if (top.length === 0) {
      setReply('Try asking about sofas, beds, or dining — or use Get Quote for personalized help.')
      return
    }
    setReply(
      `Based on your request, we recommend: ${top.map((p) => p.name).join(' and ')}. Tap any product in Shop or WhatsApp us for the best offer!`,
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="overflow-hidden rounded-3xl border border-brand-200/50 bg-gradient-to-br from-white to-brand-100/50 p-6 md:p-10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700 text-white">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-serif text-2xl text-brand-900">Smart furniture assistant</h2>
            <p className="text-sm text-muted">Ask what fits your room & budget — instant suggestions.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setQuery(s)
                setReply(null)
              }}
              className="rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-medium text-brand-800 hover:border-brand-400"
            >
              {s}
            </button>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            placeholder="e.g. modular wardrobe for small bedroom"
            className="flex-1 rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
          <button
            type="button"
            onClick={handleAsk}
            className="flex items-center justify-center rounded-xl bg-brand-700 px-5 text-white hover:bg-brand-600"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        {reply && (
          <p className="mt-4 rounded-xl bg-brand-900/5 p-4 text-sm text-brand-800">{reply}</p>
        )}
      </div>
    </section>
  )
}
