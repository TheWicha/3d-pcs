'use client';

import AccentDot from '@/components/ui/AccentDot';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { USER_TYPES } from '@/constants';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function UsersSection() {
  return (
    <SectionWrapper aria-labelledby="users-heading">
      <SectionLabel code="04" label="Użytkownicy systemu" />

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(280px,360px)_1fr] gap-10 xl:gap-14">
        <div className="xl:sticky xl:top-28 h-fit">
          <SectionHeading id="users-heading" className="mb-6">
            Społeczność
            <br />
            portów polskich
          </SectionHeading>

          <p className="text-[15px] leading-[1.7] text-(--fg-2) m-0 mb-8 max-w-88">
            Uczestnicy PCS współpracują w jednym środowisku wymiany danych, od planowania po
            odprawę.
          </p>

          <Button
            variant="primary"
            icon={<ArrowRight size={14} />}
            aria-label="Dołącz do społeczności PCS"
          >
            Dołącz do społeczności
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
          {USER_TYPES.map((type, i) => (
            <article
              key={i}
              className="relative overflow-hidden border border-(--border) bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] p-6 sm:p-7 min-h-56 transition-[border-color,background,transform] duration-300 hover:-translate-y-0.5 hover:border-(--accent-dark)"
            >
              <div className="absolute right-0 top-0 h-1.5 w-18 bg-accent" />

              <div className="flex items-center justify-between gap-3 mb-4">
                <AccentDot size="md" />
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-(--fg-3)">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
              </div>

              <h3 className="font-michroma font-normal text-[clamp(16px,2vw,20px)] tracking-[0.02em] text-foreground mt-0 mb-4 leading-[1.35]">
                {type.title}
              </h3>

              <p className="text-[15px] leading-[1.65] text-(--fg-2) m-0">{type.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
