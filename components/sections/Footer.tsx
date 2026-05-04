'use client';

import { ExternalLink, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

function FooterColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[12px] tracking-[0.13em] font-semibold uppercase text-accent-fg block mb-5">
      {children}
    </span>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-[14px] text-(--fg-2) no-underline transition-colors duration-150 hover:text-foreground leading-loose"
    >
      {children}
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
  const ariaLabel =
    opensInNewTab && typeof children === 'string'
      ? `${children} (otwiera się w nowej karcie)`
      : undefined;

  return (
    <Link
      href={href}
      target={target}
      rel={opensInNewTab ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      className="flex items-center gap-2 text-[14px] text-(--fg-2) no-underline transition-colors duration-150 hover:text-foreground leading-loose"
    >
      {icon ? <span className="text-accent shrink-0">{icon}</span> : null}
      <span>{children}</span>
      {opensInNewTab && (
        <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-foreground">
          <ExternalLink size={12} aria-hidden="true" />
          otwiera się w nowej karcie
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
              <p className="text-[16px] text-(--fg-2) leading-[1.6]">
                Cyfryzacja polskich portów morskich. System wspomagania komunikacji oraz wymiany
                danych.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://x.com/polskipcs"
                aria-label="X (Twitter)"
                className="w-9 h-9 flex items-center justify-center border border-(--border) text-(--fg-2) transition-colors duration-150 hover:border-accent hover:text-accent"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/polskipcs"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center border border-(--border) text-(--fg-2) transition-colors duration-150 hover:border-accent hover:text-accent"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <FooterColumnHeading>Mapa strony</FooterColumnHeading>
            <nav aria-label="Mapa strony">
              <FooterLink href="/">Strona główna</FooterLink>
              <FooterLink href="#about-heading">O nas</FooterLink>
              <FooterLink href="#modules-heading">Moduły</FooterLink>
              <FooterLink href="#news-heading">Aktualności</FooterLink>
              <FooterLink href="#users-heading">Użytkownicy</FooterLink>
              <FooterLink href="#ports-heading">Porty</FooterLink>
              <FooterLink href="#kontakt">Kontakt</FooterLink>
            </nav>
          </div>

          <div>
            <FooterColumnHeading>Dokumenty</FooterColumnHeading>
            <nav aria-label="Dokumenty">
              <FooterLink href="/rodo">Polityka RODO</FooterLink>
              <FooterLink href="/cookies">Polityka plików cookies</FooterLink>
              <FooterLink href="/bip">BIP</FooterLink>
              <FooterLink href="/warunki">Warunki korzystania z usług</FooterLink>
            </nav>
          </div>

          <div>
            <FooterColumnHeading>Spółka</FooterColumnHeading>
            <p className="text-[16px] text-foreground font-semibold leading-[1.6]">
              Polski PCS sp. z o.o.
            </p>
            <address className="not-italic flex flex-col gap-1 mt-1">
              <FooterContactLink
                href="https://maps.google.com/?q=ul.+Bytomska+7,+70-603+Szczecin"
                target="_blank"
              >
                ul. Bytomska 7, 70-603 Szczecin
              </FooterContactLink>
            </address>
            <div className="mt-4 flex flex-col gap-0.5">
              <span className="font-mono text-[12px] tracking-[0.06em] text-(--fg-3)">
                KRS: 0000704544
              </span>
              <span className="font-mono text-[12px] tracking-[0.06em] text-(--fg-3)">
                NIP: 7010713978
              </span>
              <span className="font-mono text-[12px] tracking-[0.06em] text-(--fg-3)">
                REGON: 368360921
              </span>
            </div>
          </div>

          <div>
            <FooterColumnHeading>Kontakt</FooterColumnHeading>
            <p className="font-mono text-[12px] text-(--fg-3) mb-2">
              Wsparcie — Moduł Kontenerowy:
            </p>
            <div className="flex flex-col gap-1">
              <FooterContactLink href="mailto:wsparcie@polskipcs.pl" icon={<Mail size={13} />}>
                wsparcie@polskipcs.pl
              </FooterContactLink>
              <FooterContactLink href="tel:+48914040563" icon={<Phone size={13} />}>
                91 404 05 63
              </FooterContactLink>
            </div>
            <div className="mt-4 pt-4 border-t border-(--border) flex flex-col gap-1">
              <FooterContactLink href="tel:+48914040564" icon={<Phone size={13} />}>
                91 404 05 64
              </FooterContactLink>
              <FooterContactLink href="mailto:biuro@polskipcs.pl" icon={<Mail size={13} />}>
                biuro@polskipcs.pl
              </FooterContactLink>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-300 mx-auto px-6 py-5 border-t border-(--border) flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span className="font-mono text-[12px] tracking-[0.06em] text-(--fg-3)">
          © 2026 Polski PCS sp. z o.o.
        </span>
      </div>
    </footer>
  );
}
