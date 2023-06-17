/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // target: 'server',
  // ssr: true,
  // devIndicators: {
  //   autoPrerender: false,
  // },
  images: {
    domains: ['images.unsplash.com','tailwindui.com']
}
}

module.exports = nextConfig
