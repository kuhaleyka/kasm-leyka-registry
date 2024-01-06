/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'KuhaLeyka - a Facility for Images Fair Offering (FIFO)',
    description: 'A public place for freshly baked Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kuhaleyka.github.io/kasm-leyka-registry/',
    contactUrl: 'https://armenskipop.com/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-leyka-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
