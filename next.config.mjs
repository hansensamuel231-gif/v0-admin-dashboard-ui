/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/v0-admin-dashboard-ui',    
  assetPrefix: '/v0-admin-dashboard-ui/'
}

export default nextConfig
