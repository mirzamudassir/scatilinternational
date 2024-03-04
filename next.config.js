// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// }

// module.exports = nextConfig


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    deviceSizes: [428, 540, 640, 768, 1024, 1120],
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'utils'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  // output: 'export',
  // assetPrefix: './',
  images: {
    unoptimized: true
  }
})

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {


//   // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//   // trailingSlash: true,
 
//   // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//   // skipTrailingSlashRedirect: true,
 
//   // Optional: Change the output directory `out` -> `dist`
//   // distDir: 'dist',
// }
 
// module.exports = nextConfig