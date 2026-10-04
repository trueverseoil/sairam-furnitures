import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartState {
  items: string[]
  add: (productId: string) => void
  remove: (productId: string) => void
  count: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (productId) => {
        const items = get().items
        if (!items.includes(productId)) set({ items: [...items, productId] })
      },
      remove: (productId) =>
        set({ items: get().items.filter((id) => id !== productId) }),
      count: () => get().items.length,
    }),
    { name: 'sairam-cart' },
  ),
)
