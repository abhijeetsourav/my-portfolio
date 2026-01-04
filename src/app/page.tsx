'use client'

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

interface Visualization {
  id: string
  title: string
  description: string
  category: string
  insight: string
  businessImpact: string
  imageUrl: string
  tags: string[]
}

const visualizations: Visualization[] = [
  {
    id: 'customer-segmentation-dashboard',
    title: 'Customer Segmentation Dashboard',
    description: 'Interactive Tableau dashboard showing RFM customer segments with engagement metrics and revenue contribution.',
    category: 'Customer Analytics',
    insight: 'Revealed that 15% of customers generate 70% of revenue, enabling targeted retention strategies.',
    businessImpact: 'Led to 25% increase in customer retention and 40% improvement in email campaign ROI.',
    imageUrl: '/images/customer-segmentation-dashboard.jpg',
    tags: ['Tableau', 'Customer Segmentation', 'RFM Analysis', 'Dashboard']
  },
  {
    id: 'sales-trend-analysis',
    title: 'Sales Trend Analysis Chart',
    description: 'Time series analysis showing seasonal patterns and growth trends across product categories.',
    category: 'Sales Analytics',
    insight: 'Identified Q4 surge patterns and regional variations that inform inventory planning.',
    businessImpact: 'Reduced stockouts by 35% and optimized promotional timing across regions.',
    imageUrl: '/images/sales-trend-chart.jpg',
    tags: ['Excel', 'Time Series', 'Seasonal Analysis', 'Forecasting']
  },
  {
    id: 'supply-chain-kpi',
    title: 'Supply Chain Performance KPIs',
    description: 'Power BI dashboard tracking delivery performance, inventory levels, and supplier metrics.',
    category: 'Operations Analytics',
    insight: 'Identified bottlenecks in supplier communication that caused 45% of delivery delays.',
    businessImpact: 'Improved on-time delivery from 78% to 94% and reduced logistics costs by 20%.',
    imageUrl: '/images/supply-chain-kpi.jpg',
    tags: ['Power BI', 'KPI Dashboard', 'Supply Chain', 'Operations']
  },
  {
    id: 'market-basket-analysis',
    title: 'Market Basket Analysis Network',
    description: 'Network visualization showing product associations and cross-selling opportunities.',
    category: 'Marketing Analytics',
    insight: 'Discovered hidden product relationships that led to strategic bundling opportunities.',
    businessImpact: 'Increased average order value by 18% through targeted product recommendations.',
    imageUrl: '/images/market-basket-network.jpg',
    tags: ['Python', 'Association Rules', 'Market Basket', 'Network Analysis']
  },
  {
    id: 'predictive-model-performance',
    title: 'Machine Learning Model Performance',
    description: 'ROC curves and accuracy metrics for sales forecasting models across different regions.',
    category: 'Predictive Analytics',
    insight: 'Regional models outperformed global models by 12%, suggesting local factors are crucial.',
    businessImpact: 'Achieved 89% forecast accuracy and reduced inventory holding costs by 15%.',
    imageUrl: '/images/ml-performance-metrics.jpg',
    tags: ['Python', 'Machine Learning', 'Model Evaluation', 'ROC Analysis']
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Performance Dashboard',
    description: 'Comprehensive financial dashboard with revenue, cost, and profitability metrics.',
    category: 'Financial Analytics',
    insight: 'Identified unprofitable product lines and regional performance variations.',
    businessImpact: 'Enabled strategic decisions that improved overall profitability by 22%.',
    imageUrl: '/images/financial-dashboard.jpg',
    tags: ['Excel', 'Financial Analysis', 'Dashboard', 'Profitability']
  }
]

const galleryCategories = ['All', 'Customer Analytics', 'Sales Analytics', 'Operations Analytics', 'Marketing Analytics', 'Predictive Analytics', 'Financial Analytics']

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState('All')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const filteredVisualizations = selectedGalleryCategory === 'All'
    ? visualizations
    : visualizations.filter(viz => viz.category === selectedGalleryCategory)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }
  const skills = [
    { name: 'Excel', level: 95, icon: '📊' },
    { name: 'SQL', level: 90, icon: '💾' },
    { name: 'Power BI', level: 88, icon: '📈' },
    { name: 'Tableau', level: 85, icon: '📉' },
    { name: 'Python', level: 80, icon: '🐍' },
    { name: 'Data Visualization', level: 92, icon: '🎨' },
  ]

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '3+', label: 'Years Experience' },
    { value: '$5M+', label: 'Value Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="gradient-text">Sarah Chen</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Data Analytics Professional
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I transform complex data into actionable business insights. 
                Specializing in Excel, SQL, Business Intelligence tools, and complete 
                end-to-end data analysis workflows that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="btn-primary text-center">
                  View My Work
                </a>
                <a href="#contact" className="btn-secondary text-center">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-8xl">👩‍💼</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600">
              Technologies and tools I use to deliver impactful data solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg mb-6">
              With over 3 years of experience in data analytics, I've helped 
              companies across various industries make data-driven decisions that 
              drive growth and efficiency. My approach combines technical expertise 
              with business acumen to deliver insights that matter.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              I specialize in:
            </p>
            <ul className="text-gray-600 text-lg space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Data cleaning and preparation using Excel and Power Query</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Advanced SQL queries for data extraction and analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Interactive dashboards with Power BI and Tableau</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>End-to-end data workflows combining multiple tools</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Predictive modeling and machine learning with Python</span>
              </li>
            </ul>
            <p className="text-gray-600 text-lg">
              Whether you need help with data analysis, dashboard creation, or 
              strategic data consulting, I'm here to help transform your data into 
              actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
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
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Case <span className="gradient-text">Studies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth analysis of real-world data projects, including thought processes, 
              methodologies, and business impact. Written for both technical and non-technical audiences.
            </p>
          </div>

          {/* Featured Case Study */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Case Study
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {caseStudies[0].title}
                </h3>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Challenge</h4>
                    <p className="text-gray-600">{caseStudies[0].businessProblem}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Impact</h4>
                    <p className="text-gray-600">{caseStudies[0].businessImpact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Case Studies */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">More Case Studies</h3>
            
            {caseStudies.slice(1).map((caseStudy) => (
              <article key={caseStudy.id} className="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.category}
                    </span>
                    <div className="text-sm text-gray-500">
                      {caseStudy.readTime} • {caseStudy.publishedDate}
                    </div>
                  </div>
                  
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    {caseStudy.title}
                  </h4>
                  
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visual <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore charts, dashboards, and data visualizations from my analytics projects. 
              Each visualization tells a story and drives business decisions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedGalleryCategory(category)}
                className={`px-6 py-2 rounded-full border transition-colors duration-200 ${
                  selectedGalleryCategory === category
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Visualizations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVisualizations.length > 0 ? (
              filteredVisualizations.map((viz) => (
                <div key={viz.id} className="card overflow-hidden group">
                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{viz.category}</span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {viz.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {viz.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {viz.description}
                    </p>

                    {/* Key Insight */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Insight</h4>
                      <p className="text-gray-600 text-sm bg-blue-50 p-3 rounded-lg">
                        {viz.insight}
                      </p>
                    </div>

                    {/* Business Impact */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Business Impact</h4>
                      <p className="text-green-700 text-sm bg-green-50 p-3 rounded-lg font-medium">
                        {viz.businessImpact}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {viz.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-600 text-lg">No visualizations found in this category.</p>
              </div>
            )}
          </div>

          {/* Featured Visualization Spotlight */}
          <div className="mt-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6">
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Visualization
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Customer Segmentation Dashboard Impact
                </h3>
                <p className="text-purple-100">
                  This interactive dashboard transformed how we understand and serve our customers
                </p>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Visualization Features</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Real-time RFM scoring
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Interactive drill-down capabilities
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Predictive lifetime value modeling
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Campaign performance tracking
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Business Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">25%</div>
                        <div className="text-sm text-gray-600">Retention Increase</div>
                      </div>
                      <div className="text-center bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">40%</div>
                        <div className="text-sm text-gray-600">Campaign ROI</div>
                      </div>
                      <div className="text-center bg-purple-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">$2.1M</div>
                        <div className="text-sm text-gray-600">Revenue Impact</div>
                      </div>
                      <div className="text-center bg-orange-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">15%</div>
                        <div className="text-sm text-gray-600">Cost Reduction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let us <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your data into actionable insights? I would love to hear about your project 
              and explore how we can work together to achieve your business goals.
            </p>
          </div>

          {submitted ? (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  I have received your message and will get back to you within 24 hours. 
                  I am excited to learn more about your data analytics needs!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">sarah.chen@dataanalytics.com</p>
                        <p className="text-sm text-gray-500 mt-1">I typically respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                        <a 
                          href="https://linkedin.com/in/sarahchen-analytics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          linkedin.com/in/sarahchen-analytics
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">GitHub</h4>
                        <a 
                          href="https://github.com/sarahchen-analytics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          github.com/sarahchen-analytics
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Response Time</h4>
                        <p className="text-gray-600">24 hours or less</p>
                        <p className="text-sm text-gray-500 mt-1">Usually much faster!</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Why Work With Me?</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">50+</div>
                        <div className="text-sm text-gray-600">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">100%</div>
                        <div className="text-sm text-gray-600">Client Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">3+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">$5M+</div>
                        <div className="text-sm text-gray-600">Value Delivered</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a project type</option>
                        <option value="data-analysis">Data Analysis & Insights</option>
                        <option value="dashboard-creation">Dashboard Creation</option>
                        <option value="predictive-modeling">Predictive Modeling</option>
                        <option value="data-cleaning">Data Cleaning & Preparation</option>
                        <option value="business-intelligence">Business Intelligence Setup</option>
                        <option value="consultation">Data Strategy Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's work together to turn your data into strategic business advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start a Project
            </a>
            <a href="#projects" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white">
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

