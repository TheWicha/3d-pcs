'use client';

import { NAV_ITEMS } from '@/constants';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '32px 0',
      }}
    >
      <div
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-6"
      >
        <div
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 11,
            letterSpacing: '0.08em',
            color: 'var(--fg-3)',
            lineHeight: 1.8,
          }}
        >
          <div>© 2026 Polski PCS sp. z o.o.</div>
          <div>KRS 0000704544 · NIP 7010713978 · REGON 368360921</div>
        </div>

        <nav aria-label="Stopka nawigacji" className="flex flex-wrap gap-6">
          {NAV_ITEMS.map(item => (
            <a
              key={item.code}
              href="#"
              style={{
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: 12,
                color: 'var(--fg-3)',
                textDecoration: 'none',
                transition: 'color 0.15s',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--fg)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--fg-3)')}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
