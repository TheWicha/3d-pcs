'use client';

import { MODULES } from '@/constants';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function ModulesSection() {
  return (
    <section
      aria-labelledby="modules-heading"
      style={{
        borderBottom: '1px solid var(--border)',
        padding: '80px 0',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel code="02" label="Nasze moduły" />

        <div className="flex flex-col lg:flex-row lg:items-start gap-16">
          <div style={{ maxWidth: 400 }}>
            <h2
              id="modules-heading"
              style={{
                fontFamily: 'var(--font-michroma, serif)',
                fontSize: 'clamp(26px, 3.2vw, 42px)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                color: 'var(--fg)',
                margin: '0 0 16px',
                lineHeight: 1.15,
              }}
            >
              Kompleksowa
              <br />
              obsługa procesów
              <br />
              portowych
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.7,
                color: 'var(--fg-2)',
                margin: 0,
              }}
            >
              Wybierz moduł, którego potrzebujesz — od obsługi towarowej po działalność maklerską.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-0" style={{ borderTop: '1px solid var(--border)' }}>
            {MODULES.map((mod, i) => (
              <div
                key={i}
                style={{
                  borderBottom: '1px solid var(--border)',
                  padding: '28px 0',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    style={{
                      fontFamily: 'var(--font-michroma, serif)',
                      fontSize: 'clamp(15px, 1.4vw, 18px)',
                      fontWeight: 400,
                      letterSpacing: '0.04em',
                      color: 'var(--fg)',
                      margin: 0,
                    }}
                  >
                    {mod.title}
                  </h3>
                  <button
                    aria-label={`Przejdź do ${mod.title}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontFamily: 'var(--font-sans, sans-serif)',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--accent)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'opacity 0.15s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                  >
                    Otwórz <ArrowRight size={14} />
                  </button>
                </div>
                {mod.items.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {mod.items.map((item, j) => (
                      <span
                        key={j}
                        style={{
                          fontFamily: 'var(--font-sans, sans-serif)',
                          fontSize: 13,
                          color: 'var(--fg-2)',
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          padding: '6px 14px',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
