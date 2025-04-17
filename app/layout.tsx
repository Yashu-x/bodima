import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './components/providers/Providers'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bodima Accommodations',
  description: 'Find your perfect boarding place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          <Providers>
            <NavBar />
            {children}
            <Footer/>
          </Providers>
        </main>
      </body>
    </html>
  )
}