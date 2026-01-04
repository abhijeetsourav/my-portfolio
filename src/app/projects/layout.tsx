import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my data analytics projects including Excel data cleaning, SQL queries, BI dashboards, and complete data analysis workflows.',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

