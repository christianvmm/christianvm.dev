/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'i.scdn.co',
            port: '',
         },
         {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
         },
      ],
   },
}

module.exports = nextConfig
