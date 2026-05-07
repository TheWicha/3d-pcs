'use client';

import AccentBar from '@/components/ui/AccentBar';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { NEWS } from '@/constants';
import { cn } from '@/utils/cn';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
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

      <ol className="grid grid-cols-1 lg:grid-cols-3 gap-4 list-none m-0 p-0">
        {NEWS.map((item, i) => (
          <li key={i}>
            <Link
              href={item.link}
              className={cn(
                'group/card relative overflow-hidden border border-(--border) bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] p-7 sm:p-8 min-h-88 flex flex-col transition-[transform,border-color,background] duration-300',
                'hover:-translate-y-0.5 hover:border-accent'
              )}
            >
              <AccentBar />

              <time
                dateTime={item.date}
                className="font-mono text-[12px] tracking-widest text-(--fg-2) block mb-3.5 uppercase"
              >
                {item.date}
              </time>
              <h3 className="font-michroma font-normal text-[clamp(16px,1.4vw,20px)] tracking-[0.03em] text-foreground mt-0 mb-3 leading-[1.4]">
                {item.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-(--fg-2) mt-0 mb-0">{item.excerpt}</p>

              <div className="mt-auto pt-6">
                <AccentBar position="inline" size="md" className="mb-4" />
                <span className="group/read relative inline-flex items-center gap-1.5 pb-1 text-[14px] font-semibold tracking-[0.04em] text-(--fg-2) transition-colors duration-150 group-hover/card:text-foreground">
                  Czytaj więcej <ArrowRight size={12} />
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-[width] duration-300 ease-out group-hover/card:w-full" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
