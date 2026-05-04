'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { BENEFITS } from '@/constants';
import SectionLabel from './SectionLabel';

export default function BenefitsSection() {
  return (
    <SectionWrapper aria-labelledby="benefits-heading">
      <SectionLabel code="02" label="Dlaczego warto?" />

      <SectionHeading id="benefits-heading" className="mb-12">
        Korzyści systemu PCS
      </SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-(--border)">
        {BENEFITS.map((benefit, i) => (
          <div
            key={i}
            className="p-9 border-r border-b border-(--border) transition-[background] duration-200 hover:bg-surface"
          >
            <span className="font-mono text-[12px] tracking-[0.12em] text-(--accent-dark) block mb-4">
              {benefit.code}
            </span>
            <h3 className="font-michroma font-normal text-[clamp(16px,1.4vw,22px)] tracking-[0.03em] text-foreground mt-0 mb-1">
              {benefit.title}
            </h3>
            <p className="text-[14px] leading-[1.6] text-(--fg-3) m-0">{benefit.subtitle}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
