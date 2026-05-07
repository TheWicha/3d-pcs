'use client';

import { motion } from 'framer-motion';
import { Moon, SunMedium } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Włącz tryb jasny' : 'Włącz tryb ciemny'}
      className="hidden sm:flex"
    >
      <div className="w-11 h-6 rounded-xl border border-(--border) flex items-center px-0.75 bg-(--switch-bg) transition-colors">
        <motion.div
          animate={{ x: theme === 'dark' ? 0 : 20 }}
          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          className="w-4 h-4 rounded-full bg-accent flex items-center justify-center"
        >
          {theme === 'dark' ? (
            <Moon size={9} color="var(--accent-fg)" strokeWidth={2.5} />
          ) : (
            <SunMedium size={16} color="var(--accent-fg)" />
          )}
        </motion.div>
      </div>
    </button>
  );
}
