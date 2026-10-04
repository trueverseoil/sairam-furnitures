import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { QuoteForm } from '@/types'

interface QuoteState {
  recentQuotes: QuoteForm[]
  addQuote: (quote: QuoteForm) => void
  wishlist: string[]
  toggleWishlist: (productId: string) => void
}

export const useQuoteStore = create<QuoteState>()(
  persist(
    (set, get) => ({
      recentQuotes: [],
      addQuote: (quote) =>
        set({ recentQuotes: [quote, ...get().recentQuotes].slice(0, 10) }),
      wishlist: [],
      toggleWishlist: (productId) => {
        const list = get().wishlist
        set({
          wishlist: list.includes(productId)
            ? list.filter((id) => id !== productId)
            : [...list, productId],
        })
      },
    }),
    { name: 'sairam-store' },
  ),
)
