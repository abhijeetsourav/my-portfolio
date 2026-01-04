/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For static export compatibility
  },
  // Uncomment below for static export (GitHub Pages)
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig

