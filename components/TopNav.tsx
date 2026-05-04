'use client';

import { useTheme } from '@/components/ThemeProvider';
import { NAV_ITEMS } from '@/constants';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, Moon, SunMedium, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function TopNav() {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      aria-label="Główna nawigacja"
      className="fixed top-0 left-0 right-0 z-50 border-b border-(--border) bg-(--nav-bg) backdrop-blur-xl"
    >
      <div className="flex items-center justify-between px-6 py-3.5">
        <div className="flex items-center shrink-0">
          <Link href="/" aria-label="Strona główna Polski PCS">
            <div className="relative w-30 h-15">
              <Image
                src={theme === 'light' ? '/logo-light.png' : '/logo.png'}
                alt="Polski PCS"
                fill
                sizes="120px"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <a
              key={item.code}
              href={item.href}
              className={cn(
                'flex items-center gap-1.5 no-underline transition-colors duration-150',
                'text-foreground'
              )}
            >
              <span className="font-mono text-[12px] text-(--fg-2)">{item.code}</span>
              <span className="text-[14px] font-medium">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label={theme === 'dark' ? 'Włącz tryb jasny' : 'Włącz tryb ciemny'}
            onClick={toggle}
            className="hidden sm:flex items-center bg-transparent border-0 p-0"
          >
            <motion.div
              animate={{ backgroundColor: theme === 'dark' ? '#1a2030' : '#d4cfc8' }}
              transition={{ duration: 0.3 }}
              className="w-11 h-6 rounded-xl border border-(--border) flex items-center px-0.75 cursor-pointer"
            >
              <motion.div
                animate={{ x: theme === 'dark' ? 0 : 20 }}
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                className="w-4 h-4 rounded-full bg-accent flex items-center justify-center shrink-0"
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
            className="hidden sm:flex items-center font-mono text-[12px] text-foreground bg-transparent border-0 px-2 py-1 transition-colors duration-150 hover:text-foreground"
          >
            PL / EN
          </button>

          <button
            aria-label="Zaloguj się do systemu PCS"
            className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-accent-fg bg-accent border-0 px-3.5 py-1.75 transition-opacity duration-150 hover:opacity-85"
          >
            Zaloguj się
            <ArrowRight size={13} />
          </button>

          <button
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
            onClick={() => setMobileOpen(v => !v)}
            className="flex lg:hidden items-center justify-center w-9 h-9 text-(--fg-2) transition-colors duration-150 hover:text-foreground"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden py-4 px-6 flex flex-col gap-4 border-t border-(--border) bg-(--bg-3)">
          {NAV_ITEMS.map(item => (
            <a
              key={item.code}
              href={item.href}
              className="flex items-center gap-2 no-underline text-foreground transition-colors duration-150 hover:text-foreground"
            >
              <span className="font-mono text-[12px] text-(--fg-2)">{item.code}</span>
              <span className="text-[14px] font-medium">{item.label}</span>
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-(--border)">
            <button className="font-mono text-[12px] text-foreground bg-transparent border-0">
              PL / EN
            </button>
            <button className="text-[13px] font-semibold text-accent-fg bg-accent border-0 px-3.5 py-1.75">
              Zaloguj się →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
