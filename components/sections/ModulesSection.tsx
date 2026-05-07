'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Text from '@/components/ui/Text';
import { MODULES } from '@/constants';
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
          <Text variant="body" color="muted" className="m-0">
            Wybierz moduł, którego potrzebujesz — od obsługi towarowej po działalność maklerską.
          </Text>
        </div>

        <ol className="flex-1 flex flex-col gap-0 border-t border-(--border) list-none m-0 p-0">
          {MODULES.map((mod, i) => (
            <li key={i} className="border-b border-(--border) py-7">
              <div className="flex items-center justify-between mb-4">
                <Text variant="heading" className="m-0">
                  {mod.title}
                </Text>
                <Button
                  variant="primary"
                  icon={<ArrowRight size={14} />}
                  aria-label={`Otwórz ${mod.title}`}
                >
                  Otwórz
                </Button>
              </div>
              {mod.items.length > 0 && (
                <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
                  {mod.items.map((item, j) => (
                    <li key={j}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
