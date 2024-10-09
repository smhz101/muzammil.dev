/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other settings
  output: "export", // This is necessary for static export
  distDir: "dist",
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

export default nextConfig;
