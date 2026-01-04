import Link from 'next/link'

interface CaseStudy {
  id: string
  title: string
  excerpt: string
  readTime: string
  publishedDate: string
  category: string
  tags: string[]
  summary: string
  businessProblem: string
  approach: string[]
  keyInsights: string[]
  businessImpact: string
  lessonsLearned: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'retail-customer-segmentation',
    title: 'How I Increased Customer Retention by 25% Using Data-Driven Segmentation',
    excerpt: 'A comprehensive analysis of customer behavior data to identify high-value segments and create targeted marketing strategies.',
    readTime: '8 min read',
    publishedDate: '2024-11-15',
    category: 'Customer Analytics',
    tags: ['SQL', 'Python', 'Machine Learning', 'Customer Retention'],
    summary: 'This case study explores how I helped a retail company understand their customer base better by analyzing 2 years of purchase data to create meaningful customer segments.',
    businessProblem: 'The company was struggling with declining customer retention rates and inefficient marketing spend. They were sending generic promotional emails to all customers, resulting in low engagement and poor ROI.',
    approach: [
      'Data Collection & Cleaning',
      'Exploratory Data Analysis',
      'Feature Engineering',
      'Clustering Analysis',
      'Business Validation'
    ],
    keyInsights: [
      '20% of customers generated 80% of revenue',
      'Seasonal buying patterns were stronger than expected',
      'Customer service interactions correlated with retention',
      'Price sensitivity varied significantly by segment'
    ],
    businessImpact: 'The segmentation strategy led to a 25% increase in customer retention and 40% improvement in email marketing conversion rates.',
    lessonsLearned: 'The most important insight was that customer lifetime value was not just about spending - it was about engagement frequency and brand interaction quality.'
  },
  {
    id: 'supply-chain-optimization',
    title: 'Supply Chain Analytics: From Data Chaos to $2M in Cost Savings',
    excerpt: 'How I transformed fragmented supply chain data into actionable insights that reduced costs and improved delivery performance.',
    readTime: '12 min read',
    publishedDate: '2024-10-28',
    category: 'Operations Analytics',
    tags: ['Power BI', 'SQL', 'Process Optimization', 'KPI Development'],
    summary: 'This case study documents my journey in consolidating supply chain data from multiple systems to create a unified dashboard that revealed critical inefficiencies.',
    businessProblem: 'The company had supply chain data scattered across 5 different systems, making it impossible to get a holistic view of operations. Delivery delays and inventory issues were costing millions.',
    approach: [
      'System Integration & Data Mapping',
      'ETL Process Development',
      'KPI Definition & Tracking',
      'Dashboard Creation',
      'Stakeholder Training'
    ],
    keyInsights: [
      '45% of delays were due to supplier communication gaps',
      'Inventory optimization could reduce holding costs by 15%',
      'Route optimization could save 20% in logistics costs',
      'Real-time tracking improved delivery accuracy by 30%'
    ],
    businessImpact: 'The new system identified $2M in annual cost savings opportunities and improved on-time delivery from 78% to 94%.',
    lessonsLearned: 'Data integration is only valuable if it leads to actionable insights. The key was focusing on metrics that directly impacted the bottom line.'
  },
  {
    id: 'sales-forecasting-ml',
    title: 'Building Accurate Sales Forecasts with Machine Learning',
    excerpt: 'Step-by-step process of developing a machine learning model that achieved 89% accuracy in predicting quarterly sales.',
    readTime: '15 min read',
    publishedDate: '2024-09-20',
    category: 'Predictive Analytics',
    tags: ['Python', 'Machine Learning', 'Sales Forecasting', 'Time Series'],
    summary: 'This detailed walkthrough shows how I built a sales forecasting model that helped a retail chain optimize inventory and staffing decisions.',
    businessProblem: 'The company was experiencing stockouts during peak seasons and excess inventory during slow periods, leading to lost sales and increased holding costs.',
    approach: [
      'Data Collection & Feature Engineering',
      'Time Series Analysis',
      'Model Selection & Training',
      'Cross-validation & Testing',
      'Deployment & Monitoring'
    ],
    keyInsights: [
      'Weather data improved forecast accuracy by 12%',
      'Holiday calendar effects were stronger than expected',
      'Regional variations required separate models',
      'Promotional activities had 2-week lagged effects'
    ],
    businessImpact: 'The model achieved 89% accuracy and helped reduce stockouts by 35% while decreasing excess inventory by 20%.',
    lessonsLearned: 'Feature engineering was crucial - the most predictive features came from domain knowledge rather than complex algorithms.'
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth analysis of real-world data projects, including thought processes, 
            methodologies, and business impact. Written for both technical and non-technical audiences.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
              <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Case Study
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {caseStudies[0].title}
              </h2>
              <div className="flex items-center space-x-4 text-blue-100">
                <span>{caseStudies[0].readTime}</span>
                <span>•</span>
                <span>{caseStudies[0].publishedDate}</span>
                <span>•</span>
                <span>{caseStudies[0].category}</span>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-gray-600 mb-6">
                {caseStudies[0].excerpt}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Challenge</h3>
                  <p className="text-gray-600">{caseStudies[0].businessProblem}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Impact</h3>
                  <p className="text-gray-600">{caseStudies[0].businessImpact}</p>
                </div>
              </div>

              <Link
                href={`/case-studies/${caseStudies[0].id}`}
                className="btn-primary inline-flex items-center"
              >
                Read Full Case Study
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Other Case Studies */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Case Studies</h2>
          
          {caseStudies.slice(1).map((caseStudy) => (
            <article key={caseStudy.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudy.category}
                  </span>
                  <div className="text-sm text-gray-500">
                    {caseStudy.readTime} • {caseStudy.publishedDate}
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                  <Link 
                    href={`/case-studies/${caseStudy.id}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {caseStudy.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {caseStudy.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/case-studies/${caseStudy.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Discuss These Projects?
            </h2>
            <p className="text-gray-600 mb-6">
              I would love to share more details about my analytical approaches and how they can be applied to your business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
              </Link>
              <Link href="/projects" className="btn-secondary">
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
