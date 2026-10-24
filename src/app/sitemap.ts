import { readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import type { MetadataRoute } from 'next';
import { locations } from '@/lib/locations';

const BASE = 'https://bowlaylaw.com';
const APP_DIR = join(process.cwd(), 'src/app');

// Every page.tsx under src/app becomes a sitemap entry, so new pages are listed
// automatically. The one dynamic route ([city]) is expanded from locations.ts.
function pageRoutes(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === 'api' ? [] : pageRoutes(full);
    if (entry.name !== 'page.tsx') return [];
    const route = '/' + relative(APP_DIR, dir).split(sep).join('/');
    return [route === '/' ? '/' : route.replace(/\/$/, '')];
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = pageRoutes(APP_DIR).filter((r) => !r.includes('['));
  const cityRoutes = locations
    .map(({ slug }) => `/locations/${slug}`)
    .filter((r) => !staticRoutes.includes(r));

  return [...staticRoutes, ...cityRoutes].sort().map((route) => ({
    url: route === '/' ? `${BASE}/` : `${BASE}${route}`,
  }));
}
