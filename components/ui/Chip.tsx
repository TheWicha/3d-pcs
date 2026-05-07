import { cn } from '@/utils/cn';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function Chip({ children, className, ...props }: ChipProps) {
  return (
    <button
      className={cn(
        'text-left bg-surface border border-(--border) text-(--fg-2)',
        'font-sans text-base px-4.5 py-3 cursor-pointer',
        'transition-[background,color,border-color] duration-150',
        'hover:border-accent hover:text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
