import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { BottomNav } from '@/components/layout/BottomNav'

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col bg-surface">
      <Header />
      <main className="flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BottomNav />
    </div>
  )
}
