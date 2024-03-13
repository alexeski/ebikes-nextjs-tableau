// /** @type {import('next').NextConfig} */
// const nextConfig = {}
//
// module.exports = nextConfig

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
