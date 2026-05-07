'use client';

import AccentBar from '@/components/ui/AccentBar';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { STATS } from '@/constants';
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
        <p className="text-[14px] leading-[1.6] text-(--fg-3) m-0 max-w-105">
          Realne efekty cyfryzacji procesów w polskich portach morskich.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 list-none m-0 p-0">
        {STATS.map((stat, i) => (
          <li
            key={i}
            className={[
              'relative overflow-hidden border border-(--border) bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] p-6 sm:p-8 transition-[transform,border-color] duration-300',
              'hover:-translate-y-0.5 hover:border-(--accent-dark)',
              i === 0 ? 'md:col-span-2 xl:col-span-2 xl:row-span-1 min-h-72' : '',
              i === 5 ? 'xl:col-span-2' : '',
            ].join(' ')}
          >
            <AccentBar />

            <h3 className="m-0 font-mono text-[12px] tracking-[0.12em] uppercase leading-normal text-(--fg-3)">
              <span className="block">{stat.label}</span>
              <span className="block">{stat.sublabel}</span>
            </h3>

            <div className="mt-5 mb-4">
              <div
                className={[
                  'font-michroma font-normal tracking-[0.01em] leading-none text-foreground',
                  i === 0 || i === 5
                    ? 'text-[clamp(36px,6vw,64px)]'
                    : 'text-[clamp(32px,4.4vw,54px)]',
                ].join(' ')}
              >
                {stat.value}
              </div>
              <AccentBar position="inline" size="md" className="mt-3" />
            </div>

            <p className="text-[14px] leading-[1.6] text-(--fg-2) m-0 max-w-md">
              {stat.description}
            </p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
