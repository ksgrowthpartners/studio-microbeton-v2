import type { MetadataRoute } from 'next';
import { MATERIALEN } from './new/content';

const SITE = 'https://www.studiomicrobeton.nl';

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  return [
    { url: `${SITE}/`, lastModified: nu, changeFrequency: 'monthly', priority: 1 },
    ...MATERIALEN.map((m) => ({
      url: `${SITE}/materialen/${m.slug}`,
      lastModified: nu,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${SITE}/privacy`, lastModified: nu, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
