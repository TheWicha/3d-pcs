import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'font-mono text-[12px] tracking-[0.12em] uppercase',
        'text-(--fg-3) bg-surface border border-(--border)',
        'px-3.5 py-1.5 inline-block',
        className
      )}
    >
      {children}
    </span>
  );
}
