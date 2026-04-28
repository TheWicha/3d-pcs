'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ACCENT = '#3b82f6';

const NAV_ITEMS = [
  { code: '01', label: 'O nas' },
  { code: '02', label: 'Moduł Towarowy' },
  { code: '03', label: 'Moduł Maklerski' },
  { code: '04', label: 'Kontakt' },
];

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const date = new Date()
    .toLocaleDateString('pl-PL', { day: 'numeric', month: 'short', year: 'numeric' })
    .toUpperCase();

  return (
    <nav
      aria-label="Główna nawigacja"
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(6,8,12,0.4)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* ── Row 1: utility ticker ── */}
      <div
        className="hidden md:flex items-center justify-between px-6 overflow-hidden"
        style={{
          paddingTop: 8,
          paddingBottom: 8,
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '10.5px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="hidden sm:inline shrink-0">
            Gdańsk · Gdynia · Szczecin · Świnoujście
          </span>
          <span className="hidden sm:inline shrink-0" style={{ opacity: 0.3 }}>
            ─── PCS ───
          </span>
          <span className="inline shrink-0">53.42°N · 14.57°E</span>
        </div>
        <span className="shrink-0 ml-4">{date}</span>
      </div>

      {/* ── Row 2: main bar ── */}
      <div className="flex items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Polski PCS"
            width={120}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </div>

        {/* Center nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.code}
              href="#"
              className={`flex items-center gap-1.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[${ACCENT}]`}
              style={{
                textDecoration: 'none',
                color: i === 0 ? '#fff' : 'rgba(255,255,255,0.6)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.3)',
                }}
              >
                {item.code}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Zmień język"
            className="hidden sm:flex items-center text-white/60 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-[#06080c] focus-visible:ring-offset-2"
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: 12,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 8px',
            }}
          >
            PL / EN
          </button>
          <button
            aria-label="Zaloguj się do systemu PCS"
            className="hidden sm:flex items-center gap-1.5 hover:bg-white/90 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-[#06080c] focus-visible:ring-offset-2"
            style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: 13,
              fontWeight: 600,
              color: '#000',
              background: '#fff',
              border: 'none',
              padding: '7px 14px',
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            Zaloguj się
            <ArrowRight size={13} />
          </button>

          {/* Mobile hamburger */}
          <button
            className="flex lg:hidden items-center justify-center w-9 h-9 text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-white/8 py-4 px-6 flex flex-col gap-4"
          style={{ background: 'rgba(6,8,12,0.97)' }}
        >
          {NAV_ITEMS.map(item => (
            <a
              key={item.code}
              href="#"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              style={{ textDecoration: 'none' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.3)',
                }}
              >
                {item.code}
              </span>
              <span style={{ fontSize: 14, fontWeight: 500 }}>{item.label}</span>
            </a>
          ))}
          <div
            className="flex items-center gap-3 pt-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <button
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 12,
                color: 'rgba(255,255,255,0.6)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              PL / EN
            </button>
            <button
              style={{
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: 13,
                fontWeight: 600,
                color: '#000',
                background: '#fff',
                border: 'none',
                padding: '7px 14px',
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              Zaloguj się →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
