'use client';

import { BENEFITS } from '@/constants';
import SectionLabel from './SectionLabel';

export default function BenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-heading"
      style={{
        borderBottom: '1px solid var(--border)',
        padding: '80px 0',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel code="02" label="Dlaczego warto?" />

        <h2
          id="benefits-heading"
          style={{
            fontFamily: 'var(--font-michroma, serif)',
            fontSize: 'clamp(26px, 3.2vw, 42px)',
            fontWeight: 400,
            letterSpacing: '0.02em',
            color: 'var(--fg)',
            margin: '0 0 48px',
            lineHeight: 1.15,
          }}
        >
          Korzyści systemu PCS
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
          style={{ borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}
        >
          {BENEFITS.map((benefit, i) => (
            <div
              key={i}
              style={{
                padding: '36px 28px',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--surface)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  color: 'var(--accent)',
                  display: 'block',
                  marginBottom: 16,
                }}
              >
                {benefit.code}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-michroma, serif)',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  fontWeight: 400,
                  letterSpacing: '0.03em',
                  color: 'var(--fg)',
                  margin: '0 0 4px',
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: 'var(--fg-3)',
                  margin: 0,
                }}
              >
                {benefit.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
