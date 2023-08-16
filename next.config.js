/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    // redirect all traffic to https://twitter.com/MaxPrilutskiy
    return [
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
