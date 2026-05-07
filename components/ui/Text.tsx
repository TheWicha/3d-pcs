import { cn } from '@/utils/cn';
import { createElement } from 'react';
import type { ReactNode } from 'react';

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'time' | 'label' | 'div';

type Variant =
  | 'hero'
  | 'title'
  | 'heading'
  | 'subheading'
  | 'card-title'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'label'
  | 'mono'
  | 'mono-accent'
  | 'meta';

type Color = 'default' | 'muted' | 'subtle' | 'accent' | 'inherit';

interface TextProps {
  variant?: Variant;
  as?: As;
  color?: Color;
  uppercase?: boolean;
  className?: string;
  children?: ReactNode;
  id?: string;
  dateTime?: string;
  htmlFor?: string;
}

const variants: Record<Variant, string> = {
  hero: 'font-michroma font-normal text-[clamp(18px,2.4vw,26px)] tracking-[0.04em] leading-[1.15] uppercase',
  title: 'font-michroma font-normal text-[clamp(24px,3.2vw,40px)] tracking-[0.02em] leading-[1.15]',
  heading: 'font-michroma font-normal text-[clamp(18px,1.6vw,22px)] tracking-[0.04em] leading-[1.35]',
  subheading: 'font-michroma font-normal text-[clamp(16px,1.4vw,22px)] tracking-[0.03em] leading-[1.4]',
  'card-title': 'font-michroma font-normal text-[16px] tracking-[0.04em] uppercase',
  body: 'font-sans text-[16px] leading-[1.6]',
  'body-sm': 'font-sans text-[14px] leading-[1.6]',
  caption: 'font-sans text-[clamp(13px,1.2vw,15px)] leading-relaxed',
  label: 'font-mono text-[12px] tracking-[0.12em] uppercase',
  mono: 'font-mono text-[12px] tracking-widest uppercase',
  'mono-accent': 'font-mono text-[12px] tracking-[0.12em] font-semibold uppercase',
  meta: 'font-mono text-[12px] tracking-widest uppercase',
};

const colors: Record<Color, string> = {
  default: 'text-foreground',
  muted: 'text-(--fg-2)',
  subtle: 'text-(--fg-3)',
  accent: 'text-accent',
  inherit: '',
};

const defaultAs: Record<Variant, As> = {
  hero: 'h1',
  title: 'h2',
  heading: 'h3',
  subheading: 'h3',
  'card-title': 'h3',
  body: 'p',
  'body-sm': 'p',
  caption: 'p',
  label: 'span',
  mono: 'span',
  'mono-accent': 'span',
  meta: 'time',
};

export default function Text({
  variant = 'body',
  as,
  color = 'default',
  uppercase,
  className,
  children,
  id,
  dateTime,
  htmlFor,
}: TextProps) {
  const tag = as ?? defaultAs[variant];

  return createElement(
    tag,
    {
      id,
      dateTime,
      htmlFor,
      className: cn(variants[variant], colors[color], uppercase && 'uppercase', className),
    },
    children
  );
}
