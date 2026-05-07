'use client';

import { useTheme } from '@/components/ThemeProvider';
import { NAV_ITEMS } from '@/constants';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

import NavLink from '@/components/ui/NavLink';
import SocialLinks from '@/components/ui/SocialLinks';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function TopNav() {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-(--border) bg-(--nav-bg) backdrop-blur-xl">
      <div className="relative flex items-center justify-between px-6 py-3.5">
        <Link href="/" aria-label="Polski PCS — strona główna" className="block relative w-32 h-17 shrink-0">
          <Image
            src={theme === 'light' ? '/logo-light.png' : '/logo.png'}
            alt="Polski PCS"
            fill
            sizes="120px"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map(item => (
            <NavLink key={item.code} href={item.href} active={pathname === item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center border-r border-(--border) pr-3">
            <SocialLinks />
          </div>

          <ThemeToggle theme={theme} onToggle={toggle} />

          <button className="hidden sm:flex font-mono text-[12px] px-2 py-1text-(--nav-link-active)">
            PL / EN
          </button>

          <button className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold px-3.5 py-1.75 bg-(--cta-bg) text-(--cta-fg) hover:opacity-85 transition-opacity">
            Zaloguj się <ArrowRight size={13} />
          </button>

          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="flex lg:hidden w-9 h-9 items-center justify-center text-(--fg-2)"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <motion.div
        id="mobile-nav"
        initial={false}
        animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className={cn(
          'lg:hidden overflow-hidden border-t border-(--border) bg-(--bg-3)',
          !mobileOpen && 'border-t-0'
        )}
      >
        <div className="py-4 px-6 flex flex-col gap-4">
          {NAV_ITEMS.map(item => (
            <Link key={item.code} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
