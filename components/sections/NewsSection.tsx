'use client';

import AccentBar from '@/components/ui/AccentBar';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Text from '@/components/ui/Text';
import UnderlineLink from '@/components/ui/UnderlineLink';
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

              <Text variant="meta" color="muted" as="time" dateTime={item.date} className="block mb-3.5">
                {item.date}
              </Text>
              <Text variant="subheading" className="mt-0 mb-3 leading-[1.4]">
                {item.title}
              </Text>
              <Text variant="body" color="muted" className="mt-0 mb-0">
                {item.excerpt}
              </Text>

              <div className="mt-auto pt-6">
                <AccentBar position="inline" size="md" className="mb-4" />
                <UnderlineLink as="span" className="group-hover/card:text-foreground">
                  Czytaj więcej <ArrowRight size={12} />
                </UnderlineLink>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
