'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

// Fires once on the 404 page with the missing path, e.g. page_not_found { location: '/old-url' }.
export default function NotFoundTracker() {
  useEffect(() => {
    trackEvent('page_not_found', { location: window.location.pathname });
  }, []);
  return null;
}
