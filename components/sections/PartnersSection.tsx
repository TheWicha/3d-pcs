'use client';

import { cn } from '@/utils/cn';
import { useTheme } from '@/components/ThemeProvider';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SectionLabel from './SectionLabel';

const PARTNERS = [
  { src: '/partners/partner-1.svg', alt: 'Partner 1', darkSrc: '/partners/partner-1-white.png' },
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
    <SectionWrapper aria-labelledby="partners-heading" className="py-14">
      <SectionLabel code="01" label="Partnerzy" />

      <h2
        id="partners-heading"
        className="font-michroma font-normal text-[14px] tracking-[0.06em] uppercase text-(--fg-3) mt-0 mb-10"
      >
        Współpracujemy z wiodącymi instytucjami
      </h2>

      <div className="grid grid-cols-5 border-t border-l border-(--border)">
        {PARTNERS.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={p.alt}
            className={cn('relative flex items-center justify-center px-5 py-6 border-r border-b border-(--border) bg-transparent transition-[opacity,background] duration-[400ms,200ms] min-h-20 hover:bg-surface', active === i ? 'opacity-100' : 'opacity-40')}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = active === i ? '1' : '0.4')}
          >
            {active === i && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
            <Image
              src={theme === 'dark' && p.darkSrc ? p.darkSrc : p.src}
              alt={p.alt}
              width={140}
              height={48}
              className={cn('w-auto h-9 max-w-32.5 object-contain', p.darkLogo && 'logo-dark-invert')}
            />
          </button>
        ))}
      </div>

      <div className="relative h-35 border-b border-l border-r border-(--border) bg-surface flex items-center justify-center">
        {PARTNERS.map((p, i) => (
          <div
            key={i}
            className={cn('absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700', active === i ? 'opacity-100' : 'opacity-0')}
          >
            <Image
              src={theme === 'dark' && p.darkSrc ? p.darkSrc : p.src}
              alt={p.alt}
              width={280}
              height={90}
              className={cn('w-auto h-18 max-w-70 object-contain', p.darkLogo && 'logo-dark-invert')}
            />
          </div>
        ))}

        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex gap-1.5">
          {PARTNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Pokaż partnera ${i + 1}`}
              className={cn('h-0.5 border-0 p-0 cursor-pointer transition-[width,background] duration-350', active === i ? 'w-5 bg-accent' : 'w-1.5 bg-(--border)')}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
