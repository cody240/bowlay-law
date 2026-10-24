declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

// Pushes a GTM custom event. In GTM, the "GA4 - site events" tag forwards
// these to GA4 with the same event name and the `location` parameter.
export function trackEvent(
  eventName: string,
  params?: Record<string, string>
) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });
  }
}
