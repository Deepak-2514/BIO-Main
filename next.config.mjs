/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable App Router
  experimental: {
    serverActions: true,
  },
  // Specify page extensions
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
