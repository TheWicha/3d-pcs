'use client';

import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionLabel from './SectionLabel';

function ContactFieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[12px] tracking-[0.12em] uppercase text-(--fg-3) block mb-4">
      {children}
    </span>
  );
}

export default function ContactSection() {
  return (
    <SectionWrapper aria-labelledby="contact-heading" id="kontakt" bg="bg-2">
      <SectionLabel code="06" label="Kontakt" />

      <div className="flex flex-col lg:flex-row gap-0 border-t border-(--border)">
        <div className="shrink-0 py-12 pr-16 border-r border-(--border) min-w-80">
          <SectionHeading id="contact-heading" className="mb-2">
            Porozmawiajmy
          </SectionHeading>
          <p className="text-[16px] leading-[1.6] text-(--fg-3) mt-0 mb-8">napisz do nas</p>
          <Button variant="primary" icon={<ArrowRight size={14} />} aria-label="Napisz do nas e-mail">
            e-mail
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 flex-1">
          <div className="p-12 border-r border-(--border)">
            <ContactFieldLabel>Adres</ContactFieldLabel>
            <address className="text-[16px] leading-[1.6] text-(--fg-2) not-italic">
              Polski PCS sp. z o.o.
              <br />
              ul. Bytomska 7
              <br />
              70-603 Szczecin
            </address>
          </div>

          <div className="p-12 border-r border-(--border)">
            <ContactFieldLabel>E-mail</ContactFieldLabel>
            <div className="flex flex-col gap-1 text-[16px] leading-[1.6]">
              <a
                href="mailto:biuro@polskipcs.pl"
                className="text-(--fg-2) no-underline transition-colors duration-150 hover:text-accent"
              >
                biuro@polskipcs.pl
              </a>
              <a
                href="mailto:wsparcie@polskipcs.pl"
                className="text-(--fg-2) no-underline transition-colors duration-150 hover:text-accent"
              >
                wsparcie@polskipcs.pl
              </a>
            </div>
          </div>

          <div className="p-12">
            <ContactFieldLabel>Telefon</ContactFieldLabel>
            <div className="flex flex-col gap-1 text-[16px] leading-[1.6]">
              <a
                href="tel:+48914040563"
                className="text-(--fg-2) no-underline transition-colors duration-150 hover:text-accent"
              >
                +48 91 404 05 63
              </a>
              <a
                href="tel:+48914040564"
                className="text-(--fg-2) no-underline transition-colors duration-150 hover:text-accent"
              >
                +48 91 404 05 64
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
