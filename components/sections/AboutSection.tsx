'use client';

import { cn } from '@/utils/cn';
import { PCS_FEATURES, PCS_VALUES } from '@/constants';
import AccentDot from '@/components/ui/AccentDot';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
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

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-(--border)">
          {PCS_VALUES.map((val, i) => (
            <div key={i} className="p-6 border-r border-b border-(--border)">
              <AccentDot size="md" className="mb-3" />
              <div className="font-michroma text-[16px] tracking-[0.04em] text-foreground mb-1.5 uppercase">
                {val.title}
              </div>
              <div className="text-[14px] leading-[1.6] text-(--fg-3)">{val.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-(--border)">
        {PCS_FEATURES.map((feat, i) => (
          <div
            key={i}
            className={cn('p-8', i < PCS_FEATURES.length - 1 && 'border-r border-(--border)')}
          >
            <span className="font-mono text-[12px] tracking-[0.12em] text-accent block mb-3">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-michroma font-normal text-[clamp(16px,1.4vw,20px)] tracking-[0.04em] text-foreground mt-0 mb-2.5 uppercase">
              {feat.title}
            </h3>
            <p className="text-[16px] leading-[1.6] text-(--fg-2) m-0">{feat.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
