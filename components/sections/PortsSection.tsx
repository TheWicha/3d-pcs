'use client';

import AccentBar from '@/components/ui/AccentBar';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Text from '@/components/ui/Text';
import UnderlineLink from '@/components/ui/UnderlineLink';
import { PORTS } from '@/constants';
import { cn } from '@/utils/cn';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function PortsSection() {
  return (
    <SectionWrapper aria-labelledby="ports-heading" bg="bg-2">
      <SectionLabel code="05" label="Udziałowcy" />

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <SectionHeading id="ports-heading">
          Polskie
          <br />
          porty morskie
        </SectionHeading>
      </div>

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-(--border) list-none m-0 p-0">
        {PORTS.map((port, i) => (
          <li
            key={i}
            className={cn(
              'flex flex-col gap-4 p-9 border-b border-(--border) transition-[background] duration-200 hover:bg-surface',
              i < PORTS.length - 1 && 'border-r'
            )}
          >
            <AccentBar position="inline" size="sm" className="h-0.5" />
            <Text variant="heading" uppercase className="m-0">
              {port.name}
            </Text>
            <Text variant="body" color="muted" className="m-0 grow">
              {port.description}
            </Text>
            <UnderlineLink as="button" aria-label={`Odwiedź stronę ${port.name}`}>
              Odwiedź stronę <ArrowUpRight size={12} />
            </UnderlineLink>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
