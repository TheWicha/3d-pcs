'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Text from '@/components/ui/Text';
import { BENEFITS } from '@/constants';
import SectionLabel from './SectionLabel';

export default function BenefitsSection() {
  return (
    <SectionWrapper aria-labelledby="benefits-heading">
      <SectionLabel code="02" label="Dlaczego warto?" />

      <SectionHeading id="benefits-heading" className="mb-12">
        Korzyści systemu PCS
      </SectionHeading>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-(--border) list-none m-0 p-0">
        {BENEFITS.map((benefit, i) => (
          <li
            key={i}
            className="p-9 border-r border-b border-(--border) transition-[background] duration-200 hover:bg-surface"
          >
            <Text aria-hidden="true" variant="mono" color="accent" as="span" className="block mb-4">
              {benefit.code}
            </Text>
            <Text variant="subheading" className="mt-0 mb-1">
              {benefit.title}
            </Text>
            <Text variant="body-sm" color="subtle" className="m-0">
              {benefit.subtitle}
            </Text>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
