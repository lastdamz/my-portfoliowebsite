import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsAppButton from './FloatingWhatsAppButton'
import ScrollToTopButton from './ScrollToTopButton'

/**
 * Shared page shell: sticky navbar + footer, with the active route
 * rendered via <Outlet />. Scrolls to top on route change.
 */
export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
}
