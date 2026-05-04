import { cn } from '@/utils/cn';

interface SectionWrapperProps {
  id?: string;
  'aria-labelledby'?: string;
  bg?: 'bg' | 'bg-2';
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  'aria-labelledby': ariaLabelledBy,
  bg = 'bg',
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('border-b border-(--border) py-20', bg === 'bg-2' ? 'bg-(--bg-2)' : 'bg-background', className)}
    >
      <div className="max-w-300 mx-auto px-6">{children}</div>
    </section>
  );
}
