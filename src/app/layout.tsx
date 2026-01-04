import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Sarah Chen | Data Analytics Portfolio',
    template: '%s | Sarah Chen | Data Analytics Portfolio'
  },
  description: 'Professional data analytics portfolio showcasing Excel, SQL, BI tools, and complete data analysis workflows. Explore projects, case studies, and visualizations.',
  keywords: ['data analytics', 'data analyst', 'SQL', 'Excel', 'Power BI', 'Tableau', 'data visualization', 'business intelligence'],
  authors: [{ name: 'Sarah Chen' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sarahchen-analytics.com',
    siteName: 'Sarah Chen - Data Analytics Portfolio',
    title: 'Sarah Chen | Data Analytics Portfolio',
    description: 'Professional data analytics portfolio showcasing real-world business solutions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

