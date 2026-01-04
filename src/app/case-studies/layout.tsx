import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'In-depth case studies and write-ups of data analytics projects with step-by-step thought processes and business impact analysis.',
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

