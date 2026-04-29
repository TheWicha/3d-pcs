'use client';

import { useTheme } from '@/components/ThemeProvider';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, Moon, SunMedium, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ACCENT = '#00edc2';

const NAV_ITEMS = [
  { code: '01', label: 'O nas' },
  { code: '02', label: 'Moduł Towarowy' },
  { code: '03', label: 'Moduł Maklerski' },
  { code: '04', label: 'Kontakt' },
];

export default function TopNav() {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      aria-label="Główna nawigacja"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* ── Row 2: main bar ── */}
      <div className="flex items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <div className="relative w-30 h-15">
            <Image
              src={theme === 'light' ? '/logo-light.png' : '/logo.png'}
              alt="Poski PCS"
              fill
              priority
            />
          </div>
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
            aria-label={theme === 'dark' ? 'Włącz tryb jasny' : 'Włącz tryb ciemny'}
            onClick={toggle}
            className="hidden sm:flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            style={{ background: 'transparent', border: 'none', padding: 0 }}
          >
            <motion.div
              animate={{ backgroundColor: theme === 'dark' ? '#1a2030' : '#d4cfc8' }}
              transition={{ duration: 0.3 }}
              style={{
                width: 44,
                height: 24,
                borderRadius: 12,
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 3px',
                cursor: 'pointer',
              }}
            >
              <motion.div
                animate={{ x: theme === 'dark' ? 0 : 20 }}
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {theme === 'dark' ? (
                  <Moon size={9} color="var(--accent-fg)" strokeWidth={2.5} />
                ) : (
                  <SunMedium size={16} color="var(--accent-fg)" />
                )}
              </motion.div>
            </motion.div>
          </button>
          <button
            aria-label="Zmień język"
            className="hidden sm:flex items-center transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: 12,
              color: 'var(--fg-2)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 8px',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
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
