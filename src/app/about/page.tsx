import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Cody Bowlay-Williams is a California tenant rights attorney at Bowlay Law. UC Berkeley Law graduate. Warm, responsive, tech-forward. No fee unless we win.',
};

const values = [
  {
    title: 'You will be heard',
    body: 'The most common complaint about attorneys is that they stop listening after the first call. That is not how Cody works. He will call you with every update and ask for your input along the way.',
  },
  {
    title: 'The facts of your case come first',
    body: 'The law can be researched. What cannot be researched is the full picture of what happened to you. Cody spends real time understanding your situation so he can represent it well.',
  },
  {
    title: 'No jargon, no gatekeeping',
    body: 'Legal concepts will be explained clearly. You will understand what is happening in your case and why — not because you have to, but because you deserve to.',
  },
  {
    title: 'Small caseload, strong relationships',
    body: 'Cody intentionally keeps a manageable number of clients. You are never an afterthought. Your case gets real attention.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            About Cody
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            I started Bowlay Law because tenants deserve a lawyer who actually listens.
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            At my last firm, clients emailed — and waited. Sometimes weeks. I kept thinking: that
            is not how this should work. So I started my own practice.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">Background</h2>
          <div className="space-y-5 text-ink/80 leading-relaxed text-lg">
            <p>
              I graduated from{' '}
              <strong className="text-ink">UC Berkeley School of Law</strong> and clerked at the U.S. District
              Court for the Northern District of California. Before law school, I spent nearly four
              years at Google — which shaped the way I think about systems, communication, and
              using the right tools for the job.
            </p>
            <p>
              I practice in{' '}
              <strong className="text-ink">tenant rights law</strong> because I believe the legal
              system often underserves renters — especially in California, where the law actually
              gives tenants meaningful protections when applied correctly.
            </p>
            <p>
              I am an attorney of color and part of San Francisco&rsquo;s LGBTQ+ community. I live in
              the Castro. I bring a perspective that is different from most attorneys in this field,
              and I think that matters. I have fewer blind spots when it comes to how institutions
              treat people who do not look or live like the majority.
            </p>
            <p>
              I am also genuinely not jaded. I find the work interesting. I care about outcomes for
              my clients — not because I am supposed to, but because I chose this.
            </p>
          </div>
        </div>
      </section>

      {/* Values / approach */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink text-center mb-12">
            How I work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="w-8 h-1 bg-brand mb-4 rounded-full" />
                <h3 className="font-display text-xl font-semibold text-ink mb-3">{title}</h3>
                <p className="text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech-forward */}
      <section className="bg-brand-pale px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-ink mb-4">
            Tech-savvy lawyering
          </h2>
          <p className="text-ink/70 leading-relaxed mb-4">
            I use AI tools to take detailed notes during calls, organize case materials, and stay
            sharp on the specifics of your situation. This is not a gimmick — it means I show up
            to every conversation prepared, and the information you share with me does not get lost.
          </p>
          <p className="text-ink/70 leading-relaxed">
            I also expect that we can communicate efficiently. E-signatures, Google Drive, email —
            these are the basics of a modern legal relationship, and I am fully set up for all of it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to talk about your situation?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            The free case review is a phone call — no paperwork, no commitment. Cody will listen to
            what happened and tell you honestly whether he thinks you have a case worth pursuing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-ink px-8 py-4 rounded-full font-semibold hover:bg-gold-light transition-colors"
          >
            Get a Free Case Review
          </Link>
        </div>
      </section>
    </>
  );
}
