'use client';

import { USER_TYPES } from '@/constants';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function UsersSection() {
  return (
    <section
      aria-labelledby="users-heading"
      style={{
        borderBottom: '1px solid var(--border)',
        padding: '80px 0',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel code="04" label="Użytkownicy systemu" />

        <div className="flex flex-col lg:flex-row lg:items-start gap-16">
          <div style={{ maxWidth: 400 }}>
            <h2
              id="users-heading"
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
              Społeczność
              <br />
              portów polskich
            </h2>
            <button
              aria-label="Dołącz do społeczności PCS"
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
              Dołącz do społeczności <ArrowRight size={14} />
            </button>
          </div>

          <div
            className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-0"
            style={{ borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}
          >
            {USER_TYPES.map((type, i) => (
              <div
                key={i}
                style={{
                  padding: '20px 16px',
                  borderRight: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--surface)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    background: 'var(--accent)',
                    marginBottom: 10,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-sans, sans-serif)',
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: 'var(--fg-2)',
                    display: 'block',
                  }}
                >
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
