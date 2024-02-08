import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZS10.AI',
  description: 'zs10.ai',
  keywords: 'zs10ai'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 overflow-x-hidden`}>
        <Navbar />
        <div className="flex flex-row">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
