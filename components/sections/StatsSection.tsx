'use client';

import AccentBar from '@/components/ui/AccentBar';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Text from '@/components/ui/Text';
import { STATS } from '@/constants';
import { cn } from '@/utils/cn';
import SectionLabel from './SectionLabel';

export default function StatsSection() {
  return (
    <SectionWrapper aria-labelledby="stats-heading">
      <SectionLabel code="06" label="Polski PCS w liczbach" />

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <SectionHeading id="stats-heading">
          Statystyki
          <br />
          portowe PCS
        </SectionHeading>
        <Text variant="body-sm" color="subtle" className="m-0 max-w-105">
          Realne efekty cyfryzacji procesów w polskich portach morskich.
        </Text>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 list-none m-0 p-0">
        {STATS.map((stat, i) => (
          <li
            key={i}
            className={cn(
              'relative overflow-hidden border border-(--border) bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] p-6 sm:p-8 transition-[transform,border-color] duration-300',
              'hover:-translate-y-0.5 hover:border-(--accent-dark)',
              i === 0 ? 'md:col-span-2 xl:col-span-2 xl:row-span-1 min-h-72' : '',
              i === 5 ? 'xl:col-span-2' : ''
            )}
          >
            <AccentBar />

            <Text variant="label" color="subtle" as="h3" className="m-0 leading-normal">
              <span className="block">{stat.label}</span>
              <span className="block">{stat.sublabel}</span>
            </Text>

            <div className="mt-5 mb-4">
              <Text
                variant="title"
                as="div"
                className={cn(
                  'tracking-[0.01em] leading-none',
                  i === 0 || i === 5
                    ? 'text-[clamp(36px,6vw,64px)]'
                    : 'text-[clamp(32px,4.4vw,54px)]'
                )}
              >
                {stat.value}
              </Text>
              <AccentBar position="inline" size="md" className="mt-3" />
            </div>

            <Text variant="body-sm" color="muted" className="m-0 max-w-md">
              {stat.description}
            </Text>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
