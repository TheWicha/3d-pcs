'use client';

import { useTheme } from '@/components/ThemeProvider';
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
            className={cn(
              'relative flex items-center justify-center px-5 py-6 border-r border-b border-(--border) bg-transparent transition-[opacity,background] duration-[400ms,200ms] min-h-20 hover:bg-surface',
              active === i ? 'opacity-100' : 'opacity-40'
            )}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = active === i ? '1' : '0.4')}
          >
            {active === i && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
            <Image
              src={theme === 'dark' && p.darkSrc ? p.darkSrc : p.src}
              alt={p.alt}
              width={140}
              height={48}
              className={cn(
                'w-auto h-10 max-w-33.5 object-contain',
                p.darkLogo && 'logo-dark-invert'
              )}
            />
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
}
