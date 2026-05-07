'use client';

import AccentDot from '@/components/ui/AccentDot';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Text from '@/components/ui/Text';
import { PCS_VALUES } from '@/constants';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function AboutSection() {
  return (
    <SectionWrapper aria-labelledby="about-heading" bg="bg-2">
      <SectionLabel code="01" label="Czym jest Polski PCS?" />

      <div className="flex flex-col lg:flex-row gap-16 mb-16">
        <div className="max-w-120">
          <SectionHeading id="about-heading" className="mb-6">
            Jeden system
            <br />
            dla całej społeczności
            <br />
            portowej
          </SectionHeading>
          <Button
            variant="primary"
            icon={<ArrowRight size={14} />}
            aria-label="Więcej o systemie PCS"
          >
            Więcej o systemie
          </Button>
        </div>

        <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-(--border) list-none m-0 p-0">
          {PCS_VALUES.map((val, i) => (
            <li key={i} className="p-6 border-r border-b border-(--border)">
              <AccentDot size="md" className="mb-3" />
              <Text variant="card-title" className="mb-1.5">
                {val.title}
              </Text>
              <Text variant="body-sm" color="muted">
                {val.description}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
