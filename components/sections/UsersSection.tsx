'use client';

import { USER_TYPES } from '@/constants';
import AccentDot from '@/components/ui/AccentDot';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function UsersSection() {
  return (
    <SectionWrapper aria-labelledby="users-heading">
      <SectionLabel code="04" label="Użytkownicy systemu" />

      <div className="flex flex-col lg:flex-row lg:items-start gap-16">
        <div className="max-w-100">
          <SectionHeading id="users-heading" className="mb-6">
            Społeczność
            <br />
            portów polskich
          </SectionHeading>
          <Button
            variant="primary"
            icon={<ArrowRight size={14} />}
            aria-label="Dołącz do społeczności PCS"
          >
            Dołącz do społeczności
          </Button>
        </div>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-l border-(--border)">
          {USER_TYPES.map((type, i) => (
            <div key={i} tabIndex={0} className="user-card p-5 border-r border-b border-(--border)">
              <AccentDot size="sm" className="mb-2.5" />
              <span className="user-card-title text-[14px] font-medium leading-normal text-(--fg-2) block">
                {type.title}
              </span>
              <div className="user-card-desc" aria-hidden="true">
                <p className="text-[14px] leading-[1.6] text-(--fg-2) m-0">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
