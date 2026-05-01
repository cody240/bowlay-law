'use client';

import { useState } from 'react';
import Link from 'next/link';

const ACCENT = '#4F7BE8';
const ACCENT_LIGHT = '#EEF2FD';

function Icon({ path, path2 }: { path: string; path2?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d={path} />
      {path2 && <path d={path2} />}
    </svg>
  );
}

const weSteps = [
  {
    icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z',
    title: 'Initial Contact',
    tag: 'Day 1',
    body: 'You reach out and Cody responds within one business day — by phone or email, whichever you prefer.',
  },
  {
    icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
    title: 'Case Evaluation',
    tag: 'Up to 2 weeks',
    body: 'Cody reviews the facts, your tenancy history, and applicable local ordinances or state law to assess the strength of your claim.',
  },
  {
    icon: 'm16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z',
    title: 'Engagement',
    tag: 'Up to 2 weeks',
    body: 'If we move forward, you sign a retainer agreement. Cody prepares the complaint and gathers everything needed to file.',
  },
  {
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
    title: 'Filing the Complaint',
    tag: 'Month 1–2',
    body: 'Your lawsuit is formally filed in court. This officially opens your case and starts the legal process.',
  },
  {
    icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
    title: 'Service of Process',
    tag: '1–2 weeks after filing',
    body: 'The landlord is formally served with the complaint. This step is required before the case can proceed.',
  },
  {
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    title: "Landlord's Response",
    tag: 'Month 3–4',
    body: 'The landlord has up to 30 days to respond. This period can extend up to two months depending on the circumstances.',
  },
  {
    icon: 'M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776',
    title: 'Discovery',
    tag: 'Month 4–8',
    body: 'Both sides exchange evidence, documents, and information. This is often the most substantive phase of the case.',
  },
  {
    icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    title: 'Settlement Negotiations',
    tag: 'Month 10–12',
    body: 'The majority of cases resolve through settlement before trial. Cody negotiates on your behalf to secure the best outcome.',
  },
];

const habSteps = [
  {
    icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z',
    title: 'Initial Contact',
    tag: 'Day 1',
    body: 'You reach out and Cody responds within one business day — by phone or email, whichever you prefer.',
  },
  {
    icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
    title: 'Case Evaluation',
    tag: 'Up to 2 weeks',
    body: 'Cody reviews the conditions, your repair requests, and correspondence to assess the strength of your habitability claim.',
  },
  {
    icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5',
    title: 'Evidence Collection',
    tag: 'Up to 2 weeks',
    body: 'Cody helps you document conditions — photos, inspection reports, written repair requests — to build a strong record.',
  },
  {
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
    title: 'Filing the Complaint',
    tag: 'Month 1–2',
    body: 'Your lawsuit is formally filed in court, seeking compensation for the uninhabitable conditions you were forced to endure.',
  },
  {
    icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
    title: 'Service & Response',
    tag: 'Month 2–4',
    body: 'The landlord is served, responds, and the case moves into active litigation.',
  },
  {
    icon: 'M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776',
    title: 'Discovery',
    tag: 'Month 4–8',
    body: 'Both sides exchange inspection records, communications, and evidence about the property conditions.',
  },
  {
    icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    title: 'Settlement Negotiations',
    tag: 'Month 8–12',
    body: 'Most habitability cases settle before trial. Cody negotiates compensation for your reduced rental value and damages.',
  },
];

export default function TimelineSection() {
  const [tab, setTab] = useState<'we' | 'hab'>('we');
  const steps = tab === 'we' ? weSteps : habSteps;
  const duration = tab === 'we' ? '~10–12 months' : '~8–12 months';

  return (
    <section className="bg-cream-dark px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
          The Process
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center mb-3">
          What happens after you reach out
        </h2>
        <p className="text-center text-muted mb-8 max-w-lg mx-auto">
          Most tenant cases follow the same path. Here is what to expect from start to finish.
        </p>

        {/* Tab switcher */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-full border border-border bg-white p-1 gap-1">
            <button
              onClick={() => setTab('we')}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={tab === 'we' ? { backgroundColor: ACCENT, color: '#fff' } : { color: '#6B7280' }}
            >
              Wrongful Eviction
            </button>
            <button
              onClick={() => setTab('hab')}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={tab === 'hab' ? { backgroundColor: ACCENT, color: '#fff' } : { color: '#6B7280' }}
            >
              Habitability
            </button>
          </div>
        </div>

        {/* Duration pill */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-full" style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {duration} total
          </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-5 bottom-5 w-px" style={{ backgroundColor: '#E5E7EB' }} />

          <div className="space-y-4">
            {steps.map(({ icon, title, tag, body }) => (
              <div key={title} className="flex gap-4 items-start">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative z-10"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                >
                  <Icon path={icon} />
                </div>
                <div className="flex-1 bg-white rounded-xl px-5 py-4 border border-border shadow-sm">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <h3 className="font-semibold text-sm text-ink">{title}</h3>
                    <span className="shrink-0 text-xs font-semibold" style={{ color: ACCENT }}>{tag}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted/50 mt-8 italic">
          For illustration purposes only. Every case is different and actual timelines vary.
        </p>

        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-brand-dark text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand transition-colors"
          >
            Get a Free Case Review
          </Link>
        </div>
      </div>
    </section>
  );
}
