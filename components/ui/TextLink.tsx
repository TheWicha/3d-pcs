'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

interface TextLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  icon?: React.ReactNode;
}

export default function TextLink({ icon, children, className, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        'group relative inline-flex items-center gap-1.5 no-underline pb-1',
        'text-[14px] font-semibold tracking-[0.04em]',
        'text-(--fg-2) hover:text-foreground transition-colors duration-150',
        className
      )}
      {...props}
    >
      {children}
      {icon}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-[width] duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}
