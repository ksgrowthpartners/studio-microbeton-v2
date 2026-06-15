import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Slanke productie-output voor Docker/Coolify (één server.js + minimale deps)
  output: 'standalone',

  // Op het productiedomein (www + apex) is de STUDIO-variant de homepage.
  // Op test.* en localhost blijft de root de bestaande long-scroll homepage.
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: 'www.studiomicrobeton.nl' }],
          destination: '/new/studio',
        },
        {
          source: '/',
          has: [{ type: 'host', value: 'studiomicrobeton.nl' }],
          destination: '/new/studio',
        },
      ],
    };
  },
};

export default nextConfig;
