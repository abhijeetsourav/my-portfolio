import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visual Gallery',
  description: 'Explore charts, dashboards, and visualizations from my data analytics projects with detailed insights and business impact.',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

