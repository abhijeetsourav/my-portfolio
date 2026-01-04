'use client'

import { useState } from 'react'
import Link from 'next/link'

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

const categories = ['All', 'Customer Analytics', 'Sales Analytics', 'Operations Analytics', 'Marketing Analytics', 'Predictive Analytics', 'Financial Analytics']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredVisualizations = selectedCategory === 'All'
    ? visualizations
    : visualizations.filter(viz => viz.category === selectedCategory)

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Visual <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore charts, dashboards, and data visualizations from my analytics projects. 
            Each visualization tells a story and drives business decisions.
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
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Customer Segmentation Dashboard Impact
              </h2>
              <p className="text-purple-100">
                This interactive dashboard transformed how we understand and serve our customers
              </p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Visualization Features</h3>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Results</h3>
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Create Similar Visualizations?
            </h2>
            <p className="text-gray-600 mb-6">
              I can help you transform your data into compelling visual stories that drive business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start a Project
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
