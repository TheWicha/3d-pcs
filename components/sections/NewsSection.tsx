'use client';

import { NEWS } from '@/constants';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function NewsSection() {
  return (
    <section
      aria-labelledby="news-heading"
      style={{
        borderBottom: '1px solid var(--border)',
        padding: '80px 0',
        background: 'var(--bg-2)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="flex items-end justify-between mb-6">
          <div>
            <SectionLabel code="03" label="Aktualności" />
            <h2
              id="news-heading"
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
              Z pokładu
              <br />
              Polskiego PCS
            </h2>
          </div>
          <button
            aria-label="Wszystkie aktualności"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--fg-2)',
              background: 'transparent',
              border: '1px solid var(--border)',
              padding: '9px 18px',
              cursor: 'pointer',
              transition: 'border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
              (e.currentTarget as HTMLElement).style.color = 'var(--fg)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLElement).style.color = 'var(--fg-2)';
            }}
          >
            Wszystkie aktualności <ArrowRight size={13} />
          </button>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-0"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {NEWS.map((item, i) => (
            <article
              key={i}
              style={{
                padding: '32px 28px',
                borderRight: i < NEWS.length - 1 ? '1px solid var(--border)' : 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--surface)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              <time
                dateTime={item.date}
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  color: 'var(--fg-3)',
                  display: 'block',
                  marginBottom: 14,
                  textTransform: 'uppercase',
                }}
              >
                {item.date}
              </time>
              <h3
                style={{
                  fontFamily: 'var(--font-michroma, serif)',
                  fontSize: 'clamp(13px, 1.1vw, 15px)',
                  fontWeight: 400,
                  letterSpacing: '0.03em',
                  color: 'var(--fg)',
                  margin: '0 0 12px',
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: 'var(--fg-2)',
                  margin: '0 0 20px',
                }}
              >
                {item.excerpt}
              </p>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--accent)',
                  letterSpacing: '0.04em',
                }}
              >
                Czytaj więcej <ArrowRight size={12} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
