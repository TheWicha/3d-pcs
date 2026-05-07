import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

type As = 'a' | 'button' | 'span';

interface UnderlineLinkProps {
  as?: As;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
}

export default function UnderlineLink({
  as: Tag = 'a',
  href,
  onClick,
  children,
  className,
  'aria-label': ariaLabel,
}: UnderlineLinkProps) {
  return (
    <Tag
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        'group relative inline-flex items-center gap-1.5 pb-1',
        'font-sans text-[14px] font-semibold tracking-[0.04em]',
        'text-(--fg-2) transition-colors duration-150 hover:text-foreground',
        'bg-transparent border-0 p-0 cursor-pointer w-fit',
        className
      )}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-[width] duration-300 ease-out group-hover:w-full" />
    </Tag>
  );
}
