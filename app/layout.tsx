import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/Sidebar'
import SidebarLink from '@/components/SidebarLink'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZS10.AI',
  description: 'zs10.ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex flex-row">
          <Sidebar>
            <SidebarLink href="wstep">Wstęp</SidebarLink>
            <SidebarLink>Chat-gpt</SidebarLink>
            <SidebarLink>ZS10-AI</SidebarLink>
            <SidebarLink>Cluster-AI</SidebarLink>
            <SidebarLink>Informacje</SidebarLink>
            <SidebarLink>Autorzy</SidebarLink>
          </Sidebar>
          {children}
        </div>
      </body>
    </html>
  )
}
