import AccentBar from '@/components/ui/AccentBar';
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

type Variant = 'surface' | 'bordered' | 'interactive' | 'flat';
type Padding = 'sm' | 'md' | 'lg' | 'xl';
type As = 'div' | 'li' | 'article' | 'section';

interface CardProps {
  variant?: Variant;
  padding?: Padding;
  as?: As;
  accentBar?: boolean;
  active?: boolean;
  className?: string;
  children?: ReactNode;
}

const variants: Record<Variant, string> = {
  surface:
    'relative overflow-hidden border border-(--border) bg-[color-mix(in_srgb,var(--surface)_86%,transparent)]',
  bordered:
    'relative overflow-hidden border border-(--border) bg-[color-mix(in_srgb,var(--bg)_84%,transparent)] backdrop-blur-[2px]',
  interactive:
    'relative overflow-hidden border border-(--border) bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-accent',
  flat: 'relative overflow-hidden border-r border-b border-(--border)',
};

const paddings: Record<Padding, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-7 sm:p-8',
  xl: 'p-9 sm:p-12',
};

export default function Card({
  variant = 'surface',
  padding = 'md',
  as: Tag = 'div',
  accentBar = false,
  active = false,
  className,
  children,
}: CardProps) {
  return (
    <Tag
      className={cn(
        variants[variant],
        paddings[padding],
        active && 'border-accent',
        className
      )}
    >
      {accentBar && <AccentBar />}
      {children}
    </Tag>
  );
}
