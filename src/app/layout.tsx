import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sarah Chen - Data Analytics Portfolio',
  description: 'Professional data analyst specializing in SQL, Python, Excel, and business intelligence tools. View my projects, case studies, and experience.',
  keywords: 'data analyst, data analytics, SQL, Python, Excel, Tableau, Power BI, business intelligence, portfolio',
  authors: [{ name: 'Sarah Chen' }],
  openGraph: {
    title: 'Sarah Chen - Data Analytics Portfolio',
    description: 'Professional data analyst specializing in SQL, Python, Excel, and business intelligence tools.',
    type: 'website',
    url: 'https://your-domain.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
