import { cn } from '@/utils/cn';

type Position = 'top-right' | 'inline';
type Size = 'sm' | 'md' | 'lg';

interface AccentBarProps {
  position?: Position;
  size?: Size;
  className?: string;
}

const widths: Record<Size, string> = {
  sm: 'w-8',
  md: 'w-18',
  lg: 'w-20',
};

const heights: Record<Position, string> = {
  'top-right': 'h-1.5',
  inline: 'h-1',
};

export default function AccentBar({ position = 'top-right', size = 'lg', className }: AccentBarProps) {
  return (
    <div
      className={cn(
        'bg-accent shrink-0',
        widths[size],
        heights[position],
        position === 'top-right' && 'absolute right-0 top-0',
        className
      )}
    />
  );
}
