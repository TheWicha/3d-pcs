'use client';

import AccentBar from '@/components/ui/AccentBar';
import AccentDot from '@/components/ui/AccentDot';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Text from '@/components/ui/Text';
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

          <Text variant="body" color="muted" className="m-0 mb-8 max-w-88">
            Uczestnicy PCS współpracują w jednym środowisku wymiany danych, od planowania po
            odprawę.
          </Text>

          <Button
            variant="primary"
            icon={<ArrowRight size={14} />}
            aria-label="Dołącz do społeczności PCS"
          >
            Dołącz do społeczności
          </Button>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 list-none m-0 p-0">
          {USER_TYPES.map((type, i) => (
            <li
              key={i}
              className="relative overflow-hidden border border-(--border) bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] p-6 sm:p-7 min-h-56"
            >
              <AccentBar />

              <div className="flex items-center justify-between gap-3 mb-4">
                <AccentDot size="md" />
                <Text variant="mono" color="subtle" as="span">
                  {(i + 1).toString().padStart(2, '0')}
                </Text>
              </div>

              <Text variant="subheading" className="mt-0 mb-4 leading-[1.35]">
                {type.title}
              </Text>
              <Text variant="body" color="muted" className="m-0">
                {type.description}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
