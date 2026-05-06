import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-6 text-center">
      <span className="font-mono text-[12px] tracking-[0.12em] uppercase text-(--accent-dark)">
        404
      </span>
      <h1 className="font-michroma font-normal text-[clamp(24px,3.2vw,40px)] tracking-[0.02em] text-foreground m-0 leading-[1.15]">
        Strona nie istnieje
      </h1>
      <p className="text-[16px] leading-[1.6] text-(--fg-2) m-0 max-w-md">
        Nie znaleźliśmy strony, której szukasz.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-sans text-sm font-semibold min-h-11 px-5 bg-accent text-[#06080c] hover:opacity-85 transition-opacity duration-150 no-underline"
        aria-label="Wróć na stronę główną"
      >
        Wróć na stronę główną
      </Link>
    </div>
  );
}
