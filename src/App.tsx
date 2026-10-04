import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { ShopPage } from '@/pages/ShopPage'
import { ProductPage } from '@/pages/ProductPage'
import { QuotePage } from '@/pages/QuotePage'
import { StorePage } from '@/pages/StorePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/:categoryId" element={<ShopPage />} />
          <Route path="product/:slug" element={<ProductPage />} />
          <Route path="quote" element={<QuotePage />} />
          <Route path="store" element={<StorePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
