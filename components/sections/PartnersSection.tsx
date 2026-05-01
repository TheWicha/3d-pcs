'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import SectionLabel from './SectionLabel';

const PARTNERS = [
  { src: '/partners/partner-1.svg', alt: 'Partner 1' },
  { src: '/partners/partner-2.svg', alt: 'Partner 2' },
  { src: '/partners/partner-3.svg', alt: 'Partner 3' },
  { src: '/partners/partner-4.svg', alt: 'Partner 4' },
  { src: '/partners/partner-5.svg', alt: 'Partner 5' },
];

const INTERVAL = 3000;

export default function PartnersSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % PARTNERS.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-labelledby="partners-heading"
      style={{
        borderBottom: '1px solid var(--border)',
        padding: '56px 0',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel code="01" label="Partnerzy" />

        <h2
          id="partners-heading"
          style={{
            fontFamily: 'var(--font-michroma, serif)',
            fontSize: 'clamp(13px, 1.1vw, 15px)',
            fontWeight: 400,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--fg-3)',
            margin: '0 0 40px',
          }}
        >
          Współpracujemy z wiodącymi instytucjami
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            borderTop: '1px solid var(--border)',
            borderLeft: '1px solid var(--border)',
          }}
        >
          {PARTNERS.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={p.alt}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px 20px',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                background: 'transparent',
                cursor: 'pointer',
                position: 'relative',
                opacity: active === i ? 1 : 0.4,
                transition: 'opacity 0.4s ease, background 0.2s',
                minHeight: 80,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
                (e.currentTarget as HTMLElement).style.background = 'var(--surface)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = active === i ? '1' : '0.4';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              {active === i && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'var(--accent)',
                  }}
                />
              )}
              <Image
                src={p.src}
                alt={p.alt}
                width={140}
                height={48}
                style={{
                  width: 'auto',
                  height: 36,
                  maxWidth: 130,
                  objectFit: 'contain',
                }}
              />
            </button>
          ))}
        </div>

        <div
          style={{
            position: 'relative',
            height: 140,
            borderBottom: '1px solid var(--border)',
            borderLeft: '1px solid var(--border)',
            borderRight: '1px solid var(--border)',
            background: 'var(--surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {PARTNERS.map((p, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: active === i ? 1 : 0,
                transition: 'opacity 0.7s ease',
                pointerEvents: 'none',
              }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={280}
                height={90}
                style={{
                  width: 'auto',
                  height: 72,
                  maxWidth: 280,
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}

          <div
            style={{
              position: 'absolute',
              bottom: 14,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 6,
            }}
          >
            {PARTNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Pokaż partnera ${i + 1}`}
                style={{
                  width: active === i ? 20 : 6,
                  height: 2,
                  background: active === i ? 'var(--accent)' : 'var(--border)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'width 0.35s ease, background 0.35s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
