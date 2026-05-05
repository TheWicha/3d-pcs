'use client';

import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
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
            <div className="w-8 h-0.5 bg-accent" />
            <h3 className="font-michroma font-normal text-[clamp(16px,1.4vw,22px)] tracking-[0.04em] text-foreground m-0 uppercase">
              {port.name}
            </h3>
            <p className="text-[16px] leading-[1.6] text-(--fg-2) m-0 grow">{port.description}</p>
            <Button
              variant="ghost"
              icon={<ArrowUpRight size={12} />}
              aria-label={`Odwiedź stronę ${port.name}`}
            >
              Odwiedź stronę
            </Button>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
