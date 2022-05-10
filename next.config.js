/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  sassOptions: {
    cssModules: true,
    includePaths: ['./src'],
  },
}
