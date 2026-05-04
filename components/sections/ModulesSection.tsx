'use client';

import { MODULES } from '@/constants';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function ModulesSection() {
  return (
    <SectionWrapper aria-labelledby="modules-heading">
      <SectionLabel code="02" label="Nasze moduły" />

      <div className="flex flex-col lg:flex-row lg:items-start gap-16">
        <div className="max-w-100">
          <SectionHeading id="modules-heading" className="mb-4">
            Kompleksowa
            <br />
            obsługa procesów
            <br />
            portowych
          </SectionHeading>
          <p className="text-[16px] leading-[1.6] text-(--fg-2) m-0">
            Wybierz moduł, którego potrzebujesz — od obsługi towarowej po działalność maklerską.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-0 border-t border-(--border)">
          {MODULES.map((mod, i) => (
            <div key={i} className="border-b border-(--border) py-7">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-michroma font-normal text-[clamp(18px,1.6vw,22px)] tracking-[0.04em] text-foreground m-0">
                  {mod.title}
                </h3>
                <Button variant="ghost" icon={<ArrowRight size={14} />} aria-label={`Przejdź do ${mod.title}`}>
                  Otwórz
                </Button>
              </div>
              {mod.items.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {mod.items.map((item, j) => (
                    <span
                      key={j}
                      className="text-[14px] text-(--fg-2) bg-surface border border-(--border) px-3.5 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
