import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const skills = [
    { name: 'SQL & Databases', level: 95 },
    { name: 'Python & Pandas', level: 90 },
    { name: 'Excel & VBA', level: 95 },
    { name: 'Tableau', level: 85 },
    { name: 'Power BI', level: 80 },
    { name: 'Statistical Analysis', level: 88 },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="gradient-text">Sarah Chen</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                Data Analyst transforming complex data into actionable insights
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I'm passionate about using data to solve real business problems. With expertise in SQL, 
                Python, Excel, and business intelligence tools, I help organizations make data-driven 
                decisions that drive growth and efficiency.
              </p>
              
              {/* Mission Statement */}
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">My Mission</h3>
                <p className="text-gray-700">
                  "To bridge the gap between complex data and clear business insights, empowering 
                  organizations to make informed decisions that create lasting value."
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects" className="btn-primary text-center">
                  View My Projects
                </Link>
                <Link href="/contact" className="btn-secondary text-center">
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">SC</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Years of experience working with various data tools and technologies to deliver 
              comprehensive analytics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="card p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Datasets Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Connect With Me</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Download Resume</span>
            </a>
            <a
              href="https://linkedin.com/in/sarahchen-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 px-6 py-3 rounded-lg transition-colors text-blue-700"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/sarahchen-analytics"
              target="_blank"
              rel="noopener noreferrer"
