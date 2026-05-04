import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ id, children, className }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={cn('font-michroma font-normal text-[clamp(24px,3.2vw,40px)] tracking-[0.02em] text-foreground m-0 leading-[1.15]', className)}
    >
      {children}
    </h2>
  );
}
