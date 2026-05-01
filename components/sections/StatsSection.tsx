'use client';

import { STATS } from '@/constants';
import SectionLabel from './SectionLabel';

export default function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      style={{
        borderBottom: '1px solid var(--border)',
        padding: '80px 0',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel code="06" label="Polski PCS w liczbach" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <h2
            id="stats-heading"
            style={{
              fontFamily: 'var(--font-michroma, serif)',
              fontSize: 'clamp(26px, 3.2vw, 42px)',
              fontWeight: 400,
              letterSpacing: '0.02em',
              color: 'var(--fg)',
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Statystyki
            <br />
            portowe PCS
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: 14,
              lineHeight: 1.6,
              color: 'var(--fg-3)',
              margin: 0,
              maxWidth: 360,
            }}
          >
            Realne efekty cyfryzacji procesów w polskich portach morskich.
          </p>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-0"
          style={{ borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '36px 28px',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-3)',
                  marginBottom: 4,
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-3)',
                  marginBottom: 16,
                }}
              >
                {stat.sublabel}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-michroma, serif)',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 12,
                  lineHeight: 1.6,
                  color: 'var(--fg-3)',
                  margin: 0,
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
