'use client';

import { PORTS } from '@/constants';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function PortsSection() {
  return (
    <section
      aria-labelledby="ports-heading"
      style={{
        borderBottom: '1px solid var(--border)',
        padding: '80px 0',
        background: 'var(--bg-2)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel code="05" label="Udziałowcy" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <h2
            id="ports-heading"
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
            Polskie
            <br />
            porty morskie
          </h2>
          <button
            aria-label="Poznaj wszystkie porty"
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
              flexShrink: 0,
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
            Poznaj wszystkie porty <ArrowUpRight size={13} />
          </button>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-0"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {PORTS.map((port, i) => (
            <div
              key={i}
              style={{
                padding: '36px 28px',
                borderRight: i < PORTS.length - 1 ? '1px solid var(--border)' : 'none',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--surface)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              <div
                style={{
                  width: 32,
                  height: 2,
                  background: 'var(--accent)',
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-michroma, serif)',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  color: 'var(--fg)',
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                {port.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: 'var(--fg-2)',
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {port.description}
              </p>
              <button
                aria-label={`Odwiedź stronę ${port.name}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--accent)',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                Odwiedź stronę <ArrowUpRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
