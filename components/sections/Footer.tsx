'use client';

import SocialLinks from '@/components/ui/SocialLinks';
import Text from '@/components/ui/Text';
import { ExternalLink, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

function FooterColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <Text variant="mono-accent" color="default" as="span" className="block mb-5">
      {children}
    </Text>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex pb-0.5 text-[14px] text-(--fg-2) no-underline transition-colors duration-150 hover:text-foreground leading-loose"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-[width] duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}

function FooterContactLink({
  href,
  icon,
  children,
  target,
}: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
}) {
  const opensInNewTab = target === '_blank';

  return (
    <Link
      href={href}
      target={target}
      rel={opensInNewTab ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-2 text-[14px] text-(--fg-2) no-underline transition-colors duration-150 hover:text-foreground leading-loose"
    >
      {icon ? <span className="text-accent shrink-0">{icon}</span> : null}
      <span className="relative pb-0.5">
        {children}
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-[width] duration-300 ease-out group-hover:w-full" />
      </span>
      {opensInNewTab && (
        <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-foreground">
          <ExternalLink size={12} aria-hidden="true" />
          <span className="sr-only">otwiera się w nowej karcie</span>
        </span>
      )}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-background border-t border-(--border)">
      <div className="max-w-300 mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div>
              <Text variant="body" color="muted">
                Cyfryzacja polskich portów morskich. System wspomagania komunikacji oraz wymiany
                danych.
              </Text>
            </div>
            <SocialLinks />
          </div>

          <div>
            <FooterColumnHeading>Mapa strony</FooterColumnHeading>
            <nav aria-label="Mapa strony" className="flex flex-col items-baseline">
              <FooterLink href="/">Strona główna</FooterLink>
              <FooterLink href="#about-heading">O nas</FooterLink>
              <FooterLink href="#modules-heading">Moduły</FooterLink>
              <FooterLink href="#news-heading">Aktualności</FooterLink>
              <FooterLink href="#users-heading">Użytkownicy</FooterLink>
              <FooterLink href="#ports-heading">Porty</FooterLink>
              <FooterLink href="/kontakt">Kontakt</FooterLink>
            </nav>
          </div>

          <div>
            <FooterColumnHeading>Dokumenty</FooterColumnHeading>
            <nav aria-label="Dokumenty" className="flex flex-col items-baseline">
              <FooterLink href="/rodo">Polityka RODO</FooterLink>
              <FooterLink href="/cookies">Polityka plików cookies</FooterLink>
              <FooterLink href="/bip">BIP</FooterLink>
              <FooterLink href="/warunki">Warunki korzystania z usług</FooterLink>
            </nav>
          </div>

          <div>
            <FooterColumnHeading>Spółka</FooterColumnHeading>
            <Text variant="body" className="font-semibold">
              Polski PCS sp. z o.o.
            </Text>
            <address className="not-italic flex flex-col gap-1 mt-1">
              <FooterContactLink
                href="https://maps.google.com/?q=ul.+Bytomska+7,+70-603+Szczecin"
                target="_blank"
              >
                ul. Bytomska 7, 70-603 Szczecin
              </FooterContactLink>
            </address>
            <div className="mt-4 flex flex-col gap-0.5">
              <Text variant="mono" color="subtle" as="span" className="tracking-[0.06em]">
                KRS: 0000704544
              </Text>
              <Text variant="mono" color="subtle" as="span" className="tracking-[0.06em]">
                NIP: 7010713978
              </Text>
              <Text variant="mono" color="subtle" as="span" className="tracking-[0.06em]">
                REGON: 368360921
              </Text>
            </div>
          </div>

          <div>
            <FooterColumnHeading>Kontakt</FooterColumnHeading>
            <Text variant="mono" color="subtle" as="p" className="mb-2">
              Wsparcie — Moduł Kontenerowy:
            </Text>
            <ul className="flex flex-col gap-1 list-none m-0 p-0">
              <li>
                <FooterContactLink href="mailto:wsparcie@polskipcs.pl" icon={<Mail size={13} />}>
                  wsparcie@polskipcs.pl
                </FooterContactLink>
              </li>
              <li>
                <FooterContactLink href="tel:+48914040563" icon={<Phone size={13} />}>
                  91 404 05 63
                </FooterContactLink>
              </li>
            </ul>
            <ul className="mt-4 pt-4 border-t border-(--border) flex flex-col gap-1 list-none m-0 p-0">
              <li>
                <FooterContactLink href="tel:+48914040564" icon={<Phone size={13} />}>
                  91 404 05 64
                </FooterContactLink>
              </li>
              <li>
                <FooterContactLink href="mailto:biuro@polskipcs.pl" icon={<Mail size={13} />}>
                  biuro@polskipcs.pl
                </FooterContactLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-300 mx-auto px-6 py-5 border-t border-(--border) flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Text variant="mono" color="subtle" as="span" className="tracking-[0.06em]">
          © {new Date().getFullYear()} Polski PCS sp. z o.o.
        </Text>
      </div>
    </footer>
  );
}
