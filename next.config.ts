import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Slanke productie-output voor Docker/Coolify (één server.js + minimale deps)
  output: 'standalone',
};

export default nextConfig;
