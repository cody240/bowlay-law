import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

// Default link-preview image for every page (texts, social posts, Slack, etc.).
export const alt = 'Bowlay Law — California Tenant Rights Attorney';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'public/logo.svg'));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#4d3862',
          color: '#ffffff',
        }}
      >
        <img src={logoSrc} width={740} height={200} alt="" />
        <div style={{ fontSize: 46, fontWeight: 600, marginTop: 48 }}>
          California Tenant Rights Attorney
        </div>
        <div style={{ fontSize: 32, color: '#c4b0d8', marginTop: 16 }}>
          Free case review · No fee unless we win
        </div>
      </div>
    ),
    size,
  );
}
