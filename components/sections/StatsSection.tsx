'use client';

import { STATS } from '@/constants';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
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
        <p className="text-[14px] leading-[1.6] text-(--fg-3) m-0 max-w-90">
          Realne efekty cyfryzacji procesów w polskich portach morskich.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-(--border)">
        {STATS.map((stat, i) => (
          <div key={i} className="p-9 border-r border-b border-(--border)">
            <div className="font-mono text-[12px] tracking-[0.12em] uppercase text-(--fg-3) mb-1">
              {stat.label}
            </div>
            <div className="font-mono text-[12px] tracking-[0.12em] uppercase text-(--fg-3) mb-4">
              {stat.sublabel}
            </div>
            <div className="font-michroma font-normal text-[clamp(28px,3.5vw,44px)] tracking-[0.02em] text-accent leading-none mb-3">
              {stat.value}
            </div>
            <p className="text-[14px] leading-[1.6] text-(--fg-3) m-0">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
