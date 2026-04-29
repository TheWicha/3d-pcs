'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ACCENT = '#00edc2';

const NAV_ITEMS = [
  { code: '01', label: 'O nas' },
  { code: '02', label: 'Moduł Towarowy' },
  { code: '03', label: 'Moduł Maklerski' },
  { code: '04', label: 'Kontakt' },
];

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const date = new Date()
    .toLocaleDateString('pl-PL', { day: 'numeric', month: 'short', year: 'numeric' })
    .toUpperCase();

  return (
    <nav
      aria-label="Główna nawigacja"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'color-mix(in srgb, var(--bg) 60%, transparent)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* ── Row 1: utility ticker — hidden on scroll ── */}
      <div
        className="hidden md:flex items-center justify-between px-6 overflow-hidden"
        style={{
          paddingTop: scrolled ? 0 : 8,
          paddingBottom: scrolled ? 0 : 8,
          maxHeight: scrolled ? 0 : 40,
          opacity: scrolled ? 0 : 1,
          transition: 'max-height 0.3s ease, opacity 0.2s ease, padding 0.3s ease',
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '10.5px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--fg-2)',
          borderBottom: scrolled ? 'none' : '1px solid var(--border-2)',
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="hidden sm:inline shrink-0">
            Gdańsk · Gdynia · Szczecin · Świnoujście
          </span>
          <span className="hidden sm:inline shrink-0" style={{ opacity: 0.3 }}>
            ─── PCS ───
          </span>
        </div>
        <div>
          <span className="inline shrink-0">53.42°N · 14.57°E</span>
          <span className="mx-4 opacity-40">|</span>
          <span className="shrink-0">{date}</span>
        </div>
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
            className="h-9"
            style={{ width: 'auto' }}
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
                color: i === 0 ? 'var(--fg)' : 'var(--fg-2)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  color: 'var(--fg-3)',
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
              color: 'var(--accent-fg)',
              background: 'var(--accent)',
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
          style={{ background: 'var(--bg-3)' }}
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
                  color: 'var(--fg-3)',
                }}
              >
                {item.code}
              </span>
              <span style={{ fontSize: 14, fontWeight: 500 }}>{item.label}</span>
            </a>
          ))}
          <div
            className="flex items-center gap-3 pt-3"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <button
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 12,
                color: 'var(--fg-2)',
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
                color: 'var(--accent-fg)',
                background: 'var(--accent)',
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
