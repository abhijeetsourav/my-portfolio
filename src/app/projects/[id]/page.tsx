import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

const projects = [
  {
    id: 'excel-sales-analysis',
    title: 'Excel Sales Performance Dashboard',
    category: 'Excel',
    summary: 'Comprehensive sales data analysis with cleaned messy datasets, pivot tables, and interactive dashboards.',
    context: 'A retail company needed to understand sales trends across multiple regions and product categories to optimize inventory and marketing strategies.',
    dataSource: 'Company sales database (5 years of transaction data, 50K+ records)',
    tools: ['Microsoft Excel', 'Pivot Tables', 'VBA', 'Power Query'],
    process: [
      'Data cleaning and standardization using Power Query',
      'Created calculated fields for YoY growth and margin analysis',
      'Built interactive dashboards with slicers and charts',
      'Developed automated reporting macros with VBA'
    ],
    results: 'Identified 23% increase in Q4 sales and optimized inventory allocation, reducing stockouts by 15%.',
    githubLink: 'https://github.com/sarahchen-analytics/excel-sales-dashboard',
    image: '/images/excel-dashboard-preview.jpg',
    challenges: [
      'Handling inconsistent data formats across multiple data sources',
      'Managing large datasets (50K+ records) efficiently in Excel',
      'Creating user-friendly dashboards for non-technical stakeholders'
    ],
    keyLearnings: [
      'Power Query is essential for cleaning and transforming large datasets',
      'Pivot tables combined with slicers create powerful interactive experiences',
      'VBA automation significantly reduces manual reporting time'
    ]
  },
  {
    id: 'sql-customer-analytics',
    title: 'SQL Customer Segmentation Analysis',
    category: 'SQL',
    summary: 'Advanced SQL queries for customer segmentation and lifetime value analysis using multiple database tables.',
    context: 'E-commerce company wanted to segment customers based on purchasing behavior to create targeted marketing campaigns.',
    dataSource: 'PostgreSQL database with customer, orders, and product tables (1M+ records)',
    tools: ['PostgreSQL', 'SQL Server Management Studio', 'Tableau'],
    process: [
      'Analyzed customer purchase patterns and frequency',
      'Created RFM (Recency, Frequency, Monetary) segmentation',
      'Calculated customer lifetime value (CLV) metrics',
      'Generated actionable insights for marketing teams'
    ],
    results: 'Identified high-value customer segments leading to 18% improvement in email campaign conversion rates.',
    githubLink: 'https://github.com/sarahchen-analytics/sql-customer-segmentation',
    image: '/images/sql-query-preview.jpg',
    challenges: [
      'Joining multiple large tables efficiently',
      'Handling NULL values in customer data',
      'Optimizing query performance for 1M+ records'
    ],
    keyLearnings: [
      'CTEs and window functions are powerful for complex segmentation',
      'Proper indexing dramatically improves query performance',
      'RFM analysis provides actionable customer insights'
    ]
  },
  {
    id: 'powerbi-supply-chain',
    title: 'Power BI Supply Chain Dashboard',
    category: 'BI Tools',
    summary: 'Interactive Power BI dashboard for supply chain optimization with real-time metrics and KPI tracking.',
    context: 'Manufacturing company needed visibility into supply chain performance to reduce costs and improve delivery times.',
    dataSource: 'ERP system data including suppliers, inventory, and logistics (3 years of operational data)',
    tools: ['Power BI', 'DAX', 'SQL Server', 'Azure'],
    process: [
      'Connected multiple data sources using Power Query',
      'Designed DAX measures for supply chain KPIs',
      'Created interactive visualizations with drill-down capabilities',
      'Implemented automated data refresh and alerts'
    ],
    results: 'Reduced supply chain costs by 12% and improved on-time delivery from 85% to 94%.',
    githubLink: 'https://github.com/sarahchen-analytics/powerbi-supply-chain',
    image: '/images/powerbi-dashboard-preview.jpg',
    challenges: [
      'Integrating data from multiple ERP systems',
      'Creating complex DAX measures for KPIs',
      'Ensuring real-time data refresh reliability'
    ],
    keyLearnings: [
      'DAX is essential for creating meaningful business metrics',
      'Data model design impacts dashboard performance significantly',
      'Automated refresh schedules are crucial for operational dashboards'
    ]
  },
  {
    id: 'python-ml-prediction',
    title: 'Complete Data Analysis Workflow: Sales Forecasting',
    category: 'Combined Workflow',
    summary: 'End-to-end analysis using SQL for data extraction, Python for preprocessing, and Tableau for visualization.',
    context: 'Retail chain needed accurate sales forecasting to optimize staffing, inventory, and promotional strategies.',
    dataSource: 'Multi-source data including POS systems, weather API, and economic indicators',
    tools: ['SQL', 'Python (Pandas, scikit-learn)', 'Tableau', 'Jupyter Notebooks'],
    process: [
      'Extracted and merged data from multiple sources using SQL',
      'Cleaned and preprocessed data with Python pandas',
      'Built machine learning models for sales prediction',
      'Created interactive Tableau dashboards for stakeholders'
    ],
    results: 'Achieved 89% accuracy in sales predictions and reduced inventory holding costs by 8%.',
    githubLink: 'https://github.com/sarahchen-analytics/sales-forecasting-workflow',
    image: '/images/ml-workflow-preview.jpg',
    challenges: [
      'Integrating data from multiple sources with different formats',
      'Feature engineering for time series forecasting',
      'Balancing model complexity with interpretability'
    ],
    keyLearnings: [
      'Feature engineering is more important than algorithm selection',
      'External data sources (weather, events) significantly improve forecasts',
      'Model interpretability is crucial for stakeholder buy-in'
    ]
  }
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.summary,
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {project.category}
            </span>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.summary}</p>
        </div>

        {/* Project Image */}
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl h-64 flex items-center justify-center mb-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">
                {project.category.charAt(0)}
              </span>
            </div>
            <span className="text-gray-600 font-medium">{project.category}</span>
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-8">
          {/* Context */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Context</h2>
            <p className="text-gray-600">{project.context}</p>
          </div>

          {/* Data Source */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Source</h2>
            <p className="text-gray-600">{project.dataSource}</p>
          </div>

          {/* Tools Used */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Process</h2>
            <ol className="space-y-3">
              {project.process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                    {index + 1}
                  </span>
                  <span className="text-gray-600 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Challenges */}
          {project.challenges && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Learnings */}
          {project.keyLearnings && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Learnings</h2>
              <ul className="space-y-2">
                {project.keyLearnings.map((learning, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h2>
            <p className="text-lg text-gray-700 font-medium">{project.results}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Similar Projects?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's discuss how I can help transform your data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get In Touch
              </Link>
              <Link href="/projects" className="btn-secondary">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

