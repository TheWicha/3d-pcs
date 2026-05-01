'use client';

import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      id="kontakt"
      style={{
        borderBottom: '1px solid var(--border)',
        padding: '80px 0',
        background: 'var(--bg-2)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel code="06" label="Kontakt" />

        <div className="flex flex-col lg:flex-row gap-0" style={{ borderTop: '1px solid var(--border)' }}>
          <div
            style={{
              flex: '0 0 auto',
              padding: '48px 0 48px 0',
              paddingRight: 64,
              borderRight: '1px solid var(--border)',
              minWidth: 320,
            }}
          >
            <h2
              id="contact-heading"
              style={{
                fontFamily: 'var(--font-michroma, serif)',
                fontSize: 'clamp(26px, 3.2vw, 42px)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                color: 'var(--fg)',
                margin: '0 0 8px',
                lineHeight: 1.15,
              }}
            >
              Porozmawiajmy
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: 14,
                color: 'var(--fg-3)',
                margin: '0 0 32px',
              }}
            >
              napisz do nas
            </p>
            <button
              aria-label="Napisz do nas e-mail"
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
              e-mail <ArrowRight size={14} />
            </button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 flex-1"
            style={{ borderLeft: 'none' }}
          >
            <div
              style={{
                padding: '48px 32px',
                borderRight: '1px solid var(--border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-3)',
                  display: 'block',
                  marginBottom: 16,
                }}
              >
                Adres
              </span>
              <address
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: 'var(--fg-2)',
                  fontStyle: 'normal',
                }}
              >
                Polski PCS sp. z o.o.
                <br />
                ul. Bytomska 7
                <br />
                70-603 Szczecin
              </address>
            </div>

            <div
              style={{
                padding: '48px 32px',
                borderRight: '1px solid var(--border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-3)',
                  display: 'block',
                  marginBottom: 16,
                }}
              >
                E-mail
              </span>
              <div
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 14,
                  lineHeight: 1.8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <a
                  href="mailto:biuro@polskipcs.pl"
                  style={{ color: 'var(--fg-2)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--fg-2)')}
                >
                  biuro@polskipcs.pl
                </a>
                <a
                  href="mailto:wsparcie@polskipcs.pl"
                  style={{ color: 'var(--fg-2)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--fg-2)')}
                >
                  wsparcie@polskipcs.pl
                </a>
              </div>
            </div>

            <div style={{ padding: '48px 32px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-3)',
                  display: 'block',
                  marginBottom: 16,
                }}
              >
                Telefon
              </span>
              <div
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 14,
                  lineHeight: 1.8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <a
                  href="tel:+48914040563"
                  style={{ color: 'var(--fg-2)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--fg-2)')}
                >
                  +48 91 404 05 63
                </a>
                <a
                  href="tel:+48914040564"
                  style={{ color: 'var(--fg-2)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--fg-2)')}
                >
                  +48 91 404 05 64
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
