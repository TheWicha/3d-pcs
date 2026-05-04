'use client';

import { cn } from '@/utils/cn';
import { type ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: React.ReactNode;
}

const base =
  'inline-flex items-center gap-2 font-sans text-sm font-semibold transition-[opacity,border-color,color] duration-150 cursor-pointer border-0 min-h-11 px-5';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-fg hover:opacity-85',
  secondary:
    'bg-transparent text-(--fg-2) border border-(--border) hover:border-accent hover:text-foreground',
  ghost: 'bg-transparent text-black px-0 min-h-0  hover:underline underline-offset-4',
};

export default function Button({
  variant = 'primary',
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
      {icon}
    </button>
  );
}
