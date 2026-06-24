import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Slanke productie-output voor Docker/Coolify (één server.js + minimale deps)
  output: 'standalone',

  // De STUDIO-variant is de enige actieve site. Op elke host (www, apex,
  // test en localhost) toont '/' de studio-pagina, zonder de URL te wijzigen.
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/new/studio' },
        // Materiaal-detailpagina's op een nette URL; de route zelf leeft onder
        // /new/studio/materialen zodat hij de STUDIO-fonts + -CSS erft.
        { source: '/materialen/:slug', destination: '/new/studio/materialen/:slug' },
      ],
    };
  },
};

export default nextConfig;
