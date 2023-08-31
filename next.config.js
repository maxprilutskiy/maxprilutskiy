/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    // redirect all traffic to https://twitter.com/MaxPrilutskiy
    return [
      {
        source: '/r/product-hunt',
        destination: 'https://aabhashk.notion.site/aabhashk/Product-Hunt-Launch-Playbook-by-AabhashK-306bf17938ee4c28aa1482080b3b0064',
        permanent: false,
      },
      {
        source: '/:path*',
        destination: 'https://twitter.com/MaxPrilutskiy',
        permanent: false,
      },
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
