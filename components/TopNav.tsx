'use client';

import { useTheme } from '@/components/ThemeProvider';
import { NAV_ITEMS } from '@/constants';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, Moon, SunMedium, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function TopNav() {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      aria-label="Główna nawigacja"
      className="fixed top-0 left-0 right-0 z-50 border-b border-(--border) bg-(--nav-bg) backdrop-blur-xl"
    >
      <div className="relative flex items-center justify-between px-6 py-3.5">
        <div className="flex items-center shrink-0">
          <Link href="/" aria-label="Strona główna Polski PCS">
            <div className="relative w-[128px] h-[67px]">
              <Image
                src={theme === 'light' ? '/logo-light.png' : '/logo.png'}
                alt=""
                aria-hidden="true"
                fill
                sizes="120px"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map(item => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.code}
                href={item.href}
                className="group relative flex items-center gap-1.5 no-underline text-foreground pb-1"
              >
                <span
                  className={cn(
                    'text-[14px] font-medium transition-colors duration-150',
                    active ? 'text-foreground' : 'text-(--fg-2) group-hover:text-foreground'
                  )}
                >
                  {item.label}
                </span>
                <span
                  className={cn(
                    'absolute bottom-0 left-0 h-0.5 bg-accent transition-[width] duration-300 ease-out',
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 border-r border-(--border) pr-3 mr-0">
            <Link
              href="https://x.com/polskipcs"
              aria-label="X (Twitter), otwiera się w nowej karcie"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center border border-(--border) text-(--fg-2) transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/company/polskipcs"
              aria-label="LinkedIn, otwiera się w nowej karcie"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center border border-(--border) text-(--fg-2) transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
          <button
            aria-label={theme === 'dark' ? 'Włącz tryb jasny' : 'Włącz tryb ciemny'}
            onClick={toggle}
            className="hidden sm:flex items-center bg-transparent border-0 p-0"
          >
            <div
              className="w-11 h-6 rounded-xl border border-(--border) flex items-center px-0.75 cursor-pointer transition-colors duration-300"
              style={{ backgroundColor: theme === 'dark' ? '#1a2030' : '#d4cfc8' }}
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
            </div>
          </button>

          <button
            aria-label="PL / EN — zmień język"
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

      <motion.div
        initial={false}
        animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="lg:hidden overflow-hidden border-t border-(--border) bg-(--bg-3)"
        style={{ borderTopWidth: mobileOpen ? undefined : 0 }}
      >
        <div className="py-4 px-6 flex flex-col gap-4">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.code}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 no-underline text-foreground transition-colors duration-150 hover:text-foreground"
            >
              <span className="text-[14px] font-medium">{item.label}</span>
            </Link>
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
      </motion.div>
    </nav>
  );
}
