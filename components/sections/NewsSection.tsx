'use client';

import { cn } from '@/utils/cn';
import { NEWS } from '@/constants';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function NewsSection() {
  return (
    <SectionWrapper aria-labelledby="news-heading" bg="bg-2">
      <div className="flex items-end justify-between mb-6">
        <div>
          <SectionLabel code="03" label="Aktualności" />
          <SectionHeading id="news-heading">
            Z pokładu
            <br />
            Polskiego PCS
          </SectionHeading>
        </div>
        <Button
          variant="secondary"
          icon={<ArrowRight size={13} />}
          aria-label="Wszystkie aktualności"
        >
          Wszystkie aktualności
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-(--border)">
        {NEWS.map((item, i) => (
          <article
            key={i}
            className={cn('p-8 cursor-pointer transition-[background] duration-200 hover:bg-surface', i < NEWS.length - 1 && 'border-r border-(--border)')}
          >
            <time
              dateTime={item.date}
              className="font-mono text-[12px] tracking-widest text-(--fg-3) block mb-3.5 uppercase"
            >
              {item.date}
            </time>
            <h3 className="font-michroma font-normal text-[clamp(16px,1.4vw,20px)] tracking-[0.03em] text-foreground mt-0 mb-3 leading-[1.4]">
              {item.title}
            </h3>
            <p className="text-[16px] leading-[1.6] text-(--fg-2) mt-0 mb-5">{item.excerpt}</p>
            <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent tracking-[0.04em]">
              Czytaj więcej <ArrowRight size={12} />
            </span>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
