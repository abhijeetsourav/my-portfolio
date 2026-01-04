# Data Analytics Portfolio Website

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS showcasing data analytics projects, case studies, and professional experience.

## 🌟 Features

- **Responsive Design**: Fully responsive website that works on all devices
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Professional Content**: Realistic data analyst portfolio content with sample projects
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Form**: Functional contact form with validation
- **Project Filtering**: Filter projects by category (Excel, SQL, BI Tools, Combined Workflow)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind CSS
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   ├── projects/
│   │   └── page.tsx       # Projects showcase page
│   ├── case-studies/
│   │   └── page.tsx       # Case studies and write-ups
│   ├── gallery/
│   │   └── page.tsx       # Visual gallery of charts and dashboards
│   └── contact/
│       └── page.tsx       # Contact form and information
├── components/
│   ├── Navigation.tsx     # Navigation component
│   └── Footer.tsx         # Footer component
└── public/                # Static assets (images, resume, etc.)
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: For type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **React**: Component-based UI library
- **Vercel/Netlify**: Deployment platforms

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd data-analytics-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Content Customization

### Personal Information

Update the following files with your information:

1. **src/app/layout.tsx**: Update metadata (title, description, etc.)
2. **src/app/page.tsx**: Update homepage content, skills, and stats
3. **src/components/Footer.tsx**: Update contact information and social links
4. **src/app/contact/page.tsx**: Update contact details and form submission endpoint

### Projects

Edit `src/app/projects/page.tsx` to add your own projects:

```typescript
const projects = [
  {
    id: 'your-project-id',
    title: 'Your Project Title',
    category: 'Excel', // Excel, SQL, BI Tools, Combined Workflow
    summary: 'Brief description of your project',
    context: 'Business context and problem solved',
    dataSource: 'Where the data came from',
    tools: ['Tool 1', 'Tool 2'],
    process: ['Step 1', 'Step 2', 'Step 3'],
    results: 'Quantifiable results and business impact',
    githubLink: 'https://github.com/yourusername/project',
    image: '/images/project-image.jpg'
  }
]
```

### Case Studies

Edit `src/app/case-studies/page.tsx` to add detailed case studies.

### Gallery

Edit `src/app/gallery/page.tsx` to showcase your visualizations.

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder (for static export) or connect GitHub

3. **Configure for Static Export**
   Update `next.config.js`:
   ```javascript
   module.exports = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

### Option 3: GitHub Pages

1. **Update next.config.js** (already configured)
2. **Build and deploy**
   ```bash
   npm run build
   npm run export
   ```
3. **Push to GitHub Pages**
   - Enable GitHub Pages in repository settings
   - Source: Deploy from a branch (main/gh-pages)

## 🎨 Customization

### Colors and Styling

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      },
      accent: {
        // Your custom accent colors
      }
    }
  }
}
```

### Fonts

Update `src/app/globals.css` to change fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Your Font', system-ui, sans-serif;
}
```

## 📊 Sample Projects Included

1. **Excel Sales Performance Dashboard**
   - Data cleaning and pivot tables
   - Interactive dashboards
   - VBA automation

2. **SQL Customer Segmentation Analysis**
   - RFM analysis
   - Customer lifetime value calculation
   - Marketing segmentation

3. **Power BI Supply Chain Dashboard**
   - KPI tracking
   - Real-time metrics
   - Performance optimization

4. **Complete Data Analysis Workflow**
   - SQL + Python + Tableau integration
   - Machine learning forecasting
   - End-to-end analytics

## 🔧 Technical Features

- **TypeScript**: Full type safety
- **Responsive Design**: Mobile-first approach
- **SEO Ready**: Meta tags and structured data
- **Performance Optimized**: Image optimization and lazy loading
- **Accessibility**: WCAG compliant design
- **Form Validation**: Client-side validation with user feedback

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Heroicons
- Color scheme based on professional data visualization best practices

## 📞 Support

For questions or support, please:
- Open an issue on GitHub
- Contact: [your-email@example.com]

---

**Built with ❤️ using Next.js and Tailwind CSS**
