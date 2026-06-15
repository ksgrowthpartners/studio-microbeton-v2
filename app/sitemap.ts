import type { MetadataRoute } from 'next';

const SITE = 'https://www.studiomicrobeton.nl';

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  return [
    { url: `${SITE}/`, lastModified: nu, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/privacy`, lastModified: nu, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
