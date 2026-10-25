// BreadcrumbList structured data (no visible UI). Google uses it to show a page
// trail (Bowlay Law › San Francisco › Ellis Act) in search results instead of a raw URL.
// Pass the trail after Home; every path must be a real page.
const BASE = 'https://bowlaylaw.com';

export default function BreadcrumbSchema({ trail }: { trail: { name: string; path: string }[] }) {
  const items = [{ name: 'Home', path: '/' }, ...trail];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, path }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: path === '/' ? `${BASE}/` : `${BASE}${path}`,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
