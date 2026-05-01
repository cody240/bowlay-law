import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLocation, locations } from '@/lib/locations';

export async function generateStaticParams() {
  return locations
    .filter(({ slug }) => slug !== 'california')
    .map(({ slug }) => ({ city: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};
  return {
    title: `${loc.city} Tenant Rights Attorney`,
    description: `Bowlay Law represents ${loc.city} tenants in wrongful eviction and rent control cases under the ${loc.ordinanceName}. No fee unless we win.`,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            {loc.fullName}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4 text-ink">
            {loc.city} Tenant Rights Attorney
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-6 max-w-xl">
            {loc.heroTagline}
          </p>
          <div className="inline-flex items-center gap-2 bg-cream-dark px-4 py-2 rounded-full text-sm text-muted">
            <span className="font-medium text-ink">{loc.ordinanceName}</span>
            <span>·</span>
            <span>Est. {loc.yearEstablished}</span>
          </div>
        </div>
      </section>

      {/* Coverage cards */}
      <section className="bg-cream-dark px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink mb-6">At a glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {loc.coverageDetails.map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl p-5 border border-border shadow-sm">
                <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-1.5">{label}</p>
                <p className="text-ink font-medium leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-12">

          <div>
            <h2 className="font-display text-2xl font-bold text-ink mb-4">Overview</h2>
            <p className="text-muted leading-relaxed">{loc.overview}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink mb-4">What units and tenancies are covered</h2>
            <div className="space-y-3">
              {loc.coveredUnits.split('\n\n').map((para, i) => (
                <p key={i} className="text-muted leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink mb-4">Rent cap</h2>
            <p className="text-muted leading-relaxed">{loc.rentCap}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink mb-4">Just cause for eviction</h2>
            <p className="text-muted leading-relaxed">{loc.justCause}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink mb-4">Available damages</h2>
            <p className="text-muted leading-relaxed">{loc.damages}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink mb-4">Relocation assistance</h2>
            <p className="text-muted leading-relaxed">{loc.relocationAssistance}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink mb-4">What is exempt</h2>
            <ul className="space-y-2">
              {loc.exemptions.map((e) => (
                <li key={e} className="flex items-start gap-3 text-muted">
                  <span className="text-brand mt-0.5 shrink-0">✕</span>
                  <span className="leading-snug">{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-cream-dark rounded-2xl p-7 border border-border">
            <h2 className="font-display text-xl font-bold text-ink mb-3">
              Interaction with the California Tenant Protection Act
            </h2>
            <p className="text-muted leading-relaxed">{loc.tpaInteraction}</p>
            {loc.slug !== 'california' && (
              <Link href="/locations/california" className="inline-block mt-4 text-sm text-brand underline hover:text-brand-mid">
                Learn more about the statewide TPA →
              </Link>
            )}
          </div>

          <div className="bg-brand-pale/40 rounded-2xl p-7 border border-border">
            <h2 className="font-display text-xl font-bold text-ink mb-3">
              Why {loc.city} cases can be strong
            </h2>
            <p className="text-muted leading-relaxed">{loc.whyStrong}</p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-dark px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink mb-8">
            Common questions — {loc.city}
          </h2>
          <div className="space-y-3">
            {loc.faq.map(({ q, a }) => (
              <details key={q} className="group bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-ink hover:text-brand transition-colors">
                  <span>{q}</span>
                  <span className="shrink-0 text-brand group-open:rotate-45 transition-transform text-xl font-light">+</span>
                </summary>
                <div className="px-6 pb-5 text-muted leading-relaxed border-t border-border/60 pt-4">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            {loc.city} tenant? Let&rsquo;s talk.
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            If your landlord has violated the {loc.ordinanceName}, you may have a case worth pursuing.
            The free screening call is 15–20 minutes and costs nothing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors"
          >
            Get a Free Case Review
          </Link>
        </div>
      </section>
    </>
  );
}
