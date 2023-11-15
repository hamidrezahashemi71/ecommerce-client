import type { Metadata } from 'next'
import { sahel } from '@/lib/fonts'
import './globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modalProvider'

export const metadata: Metadata = {
  title: 'فروشگاه',
  description: 'ecommerce store',
}

export default function RootLayout(props: LayoutProp) {
  const { children } = props

  return (
    <html lang="fa" dir='rtl'>
      <body className={`${sahel.variable} font-sahel`}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
