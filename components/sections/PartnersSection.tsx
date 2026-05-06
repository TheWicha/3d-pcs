'use client';

import { useTheme } from '@/components/ThemeProvider';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SectionLabel from './SectionLabel';

const PARTNERS = [
  {
    src: '/partners/partner-1.svg',
    alt: 'Partner 1',
    darkSrc: '/partners/partner-1-light.png',
  },
  { src: '/partners/partner-2.svg', alt: 'Partner 2', darkLogo: true, darkSrc: null },
  { src: '/partners/partner-3.svg', alt: 'Partner 3', darkLogo: false, darkSrc: null },
  { src: '/partners/partner-4.svg', alt: 'Partner 4', darkLogo: true, darkSrc: null },
  { src: '/partners/partner-5.svg', alt: 'Partner 5', darkLogo: false, darkSrc: null },
];

const INTERVAL = 3000;

export default function PartnersSection() {
  const { theme } = useTheme();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(prev => (prev + 1) % PARTNERS.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <SectionWrapper aria-labelledby="partners-heading" className="py-18">
      <SectionLabel code="01" label="Partnerzy" />

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
        <SectionHeading id="partners-heading" className="max-w-170">
          Współpracujemy z wiodącymi
          <br />
          instytucjami
        </SectionHeading>
      </div>

      <ol className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 list-none m-0 p-0">
        {PARTNERS.map((p, i) => (
          <li key={i}>
            <button
              onClick={() => setActive(i)}
              aria-label={p.alt}
              className={cn(
                'relative overflow-hidden border border-(--border) bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] px-4 py-6 sm:px-6 sm:py-7 min-h-32 sm:min-h-36 flex items-center justify-center transition-[transform,border-color,opacity] duration-300 w-full',
                'hover:-translate-y-0.5 hover:border-accent',
                active === i && ' border-accent'
              )}
            >
              <span
                className={cn(
                  'absolute top-0 h-1.5 bg-accent transition-[width,left,right,opacity] duration-300',
                  active === i ? 'left-0 right-0 w-auto ' : 'right-0 w-14 opacity-70'
                )}
              />
              <Image
                src={theme === 'dark' && p.darkSrc ? p.darkSrc : p.src}
                alt=""
                aria-hidden="true"
                width={180}
                height={64}
                className={cn(
                  'w-auto h-10 sm:h-12 lg:h-14 max-w-36 sm:max-w-42 lg:max-w-48 object-contain',
                  p.darkLogo && 'logo-dark-invert'
                )}
              />
            </button>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
