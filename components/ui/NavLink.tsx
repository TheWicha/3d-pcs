'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export default function NavLink({ href, active = false, onClick, children, className }: NavLinkProps) {
  return (
    <Link href={href} onClick={onClick} className={cn('group relative pb-1', className)}>
      <span
        className={cn(
          'text-[14px] font-medium transition-colors duration-150',
          active ? 'text-(--nav-link-active)' : 'text-(--nav-link-inactive) group-hover:text-foreground'
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          'absolute bottom-0 left-0 h-0.5 bg-accent transition-[width] duration-300',
          active ? 'w-full' : 'w-0 group-hover:w-full'
        )}
      />
    </Link>
  );
}
