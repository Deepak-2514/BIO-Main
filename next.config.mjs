/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable App Router
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
  // Specify page extensions
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
