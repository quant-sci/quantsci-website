/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ["graphnet.kleytondacosta.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/kleyt0n/graphnet",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
