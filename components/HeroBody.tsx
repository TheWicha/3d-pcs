import { ACCENT_HEX } from '@/constants';

export default function HeroBody() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <p
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: ACCENT_HEX,
          marginBottom: 24,
          opacity: 0.9,
        }}
      >
        Polski PCS · Asystent AI
      </p>

      <h1
        style={{
          textTransform: 'uppercase',
          fontFamily: 'var(--font-michroma, serif)',
          fontSize: 'clamp(36px, 6.5vw, 96px)',
          lineHeight: 0.9,
          letterSpacing: '6px',
          fontWeight: 400,
          color: 'var(--fg)',
          margin: '0 0 32px',
        }}
      >
        Cyfryzacja
        <br />
        <span style={{ color: 'var(--fg-3)' }}>polskich portów</span>
        <br />
        morskich<span style={{ color: ACCENT_HEX }}>.</span>
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-sans, sans-serif)',
          fontSize: 'clamp(13px, 1.4vw, 16px)',
          lineHeight: 1.6,
          letterSpacing: '0.06em',
          color: 'var(--fg-2)',
          maxWidth: 480,
          margin: 0,
        }}
      >
        Sprawdź status kontenera, zapytaj o operacje portowe.
        <br />
        Bez infolinii. Bez logowania.
      </p>
    </div>
  );
}
