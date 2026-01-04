'use client'

import Link from 'next/link'
import { useState } from 'react'

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
    image: '/images/excel-dashboard-preview.jpg'
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
    image: '/images/sql-query-preview.jpg'
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
    image: '/images/powerbi-dashboard-preview.jpg'
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
    image: '/images/ml-workflow-preview.jpg'
  }
]

const categories = ['All', 'Excel', 'SQL', 'BI Tools', 'Combined Workflow']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my data analytics projects showcasing real-world business solutions 
            across Excel, SQL, Business Intelligence tools, and complete analytical workflows.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
            <div key={project.id} className="card overflow-hidden">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">
                      {project.category.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.summary}
                </p>

                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Context</h4>
                    <p className="text-sm text-gray-600">{project.context}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Key Results</h4>
                    <p className="text-sm text-gray-600">{project.results}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 btn-primary text-center"
                  >
                    View Details
                  </Link>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-600 mb-6">
              I'm always excited to take on new data challenges and create meaningful insights.
            </p>
            <Link href="/contact" className="btn-primary">
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
