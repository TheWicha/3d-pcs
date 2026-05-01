'use client';

import { PCS_FEATURES, PCS_VALUES } from '@/constants';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      style={{
        borderBottom: '1px solid var(--border)',
        padding: '80px 0',
        background: 'var(--bg-2)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel code="01" label="Czym jest Polski PCS?" />

        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          <div style={{ maxWidth: 480 }}>
            <h2
              id="about-heading"
              style={{
                fontFamily: 'var(--font-michroma, serif)',
                fontSize: 'clamp(26px, 3.2vw, 42px)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                color: 'var(--fg)',
                margin: '0 0 24px',
                lineHeight: 1.15,
              }}
            >
              Jeden system
              <br />
              dla całej społeczności
              <br />
              portowej
            </h2>
            <button
              aria-label="Więcej o systemie PCS"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--accent-fg)',
                background: 'var(--accent)',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              Więcej o systemie <ArrowRight size={14} />
            </button>
          </div>

          <div
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-0"
            style={{ borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}
          >
            {PCS_VALUES.map((val, i) => (
              <div
                key={i}
                style={{
                  padding: '24px',
                  borderRight: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    background: 'var(--accent)',
                    marginBottom: 12,
                  }}
                />
                <div
                  style={{
                    fontFamily: 'var(--font-michroma, serif)',
                    fontSize: 13,
                    letterSpacing: '0.04em',
                    color: 'var(--fg)',
                    marginBottom: 6,
                    textTransform: 'uppercase',
                  }}
                >
                  {val.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans, sans-serif)',
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: 'var(--fg-3)',
                  }}
                >
                  {val.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {PCS_FEATURES.map((feat, i) => (
            <div
              key={i}
              style={{
                padding: '32px 24px',
                borderRight: i < PCS_FEATURES.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  color: 'var(--accent)',
                  display: 'block',
                  marginBottom: 12,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-michroma, serif)',
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  color: 'var(--fg)',
                  margin: '0 0 10px',
                  textTransform: 'uppercase',
                }}
              >
                {feat.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: 'var(--fg-2)',
                  margin: 0,
                }}
              >
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
