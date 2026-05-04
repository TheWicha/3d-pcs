import { cn } from '@/utils/cn';

interface AccentDotProps {
  size?: 'sm' | 'md';
  className?: string;
}

export default function AccentDot({ size = 'sm', className }: AccentDotProps) {
  return (
    <div
      className={cn('shrink-0 bg-accent', size === 'sm' ? 'w-1 h-1' : 'w-1.5 h-1.5', className)}
    />
  );
}
