import { LinkedIn, X } from '@/components/ui/icons';
import { cn } from '@/utils/cn';
import Link from 'next/link';

interface SocialLinksProps {
  className?: string;
}

const LINKS = [
  {
    href: 'https://x.com/polskipcs',
    label: 'X (Twitter), otwiera się w nowej karcie',
    Icon: X,
  },
  {
    href: 'https://linkedin.com/company/polskipcs',
    label: 'LinkedIn, otwiera się w nowej karcie',
    Icon: LinkedIn,
  },
];

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul
      className={cn('flex items-center gap-2 list-none m-0 p-0', className)}
      aria-label="Media społecznościowe"
    >
      {LINKS.map(({ href, label, Icon }) => (
        <li key={href}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-5 h-5 flex items-center justify-center border border-(--border) text-(--fg-2) transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            <Icon width={14} height={14} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
