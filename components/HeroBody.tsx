const ACCENT = '#3b82f6';

export default function HeroBody() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="relative z-10 pt-4 md:pt-31 px-14 max-xl:px-6 max-md:px-4">
      <div>
        <div>
          <div className="flex items-center gap-3 mb-5.5 flex-wrap max-w-172.5">
            <span
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#000',
                background: '#fff',
                padding: '4px 10px',
                flexShrink: 0,
              }}
            >
              Nowość · {year}
            </span>
            <div
              className="flex-1 min-w-8"
              style={{ height: 1, background: 'rgba(255,255,255,0.18)' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '10.5px',
                letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                flexShrink: 0,
              }}
            >
              Asystent AI dla całego portu
            </span>
          </div>

          <h1
            style={{
              textTransform: 'uppercase',
              fontFamily: 'var(--font-serif, serif)',
              fontSize: 'clamp(40px, 7.6vw, 104px)',
              lineHeight: 0.8,
              letterSpacing: '7px',
              fontWeight: 400,
              color: '#fff',
              minHeight: '1em',
              margin: 0,
              textShadow: '2px 2px black',
            }}
          >
            <span style={{ display: 'block' }}>Cyfryzacja</span>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.75)' }}>
              polskich portów
            </span>
            <span style={{ display: 'block' }}>
              morskich<span style={{ color: ACCENT, fontWeight: 300 }}>.</span>
            </span>
          </h1>

          <p
            className="hidden md:block"
            style={{
              marginTop: 28,
              maxWidth: 540,
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: 16,
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.65)',
            }}
          >
            Sprawdź <strong style={{ color: '#fff', fontWeight: 500 }}>status kontenera</strong>,{' '}
            zapytaj o <strong style={{ color: '#fff', fontWeight: 500 }}>operacje portowe</strong>,{' '}
            dotrzyj do{' '}
            <strong style={{ color: '#fff', fontWeight: 500 }}>dokumentów maklerskich</strong>. Bez
            infolinii. Bez logowania.
          </p>
        </div>
      </div>
    </div>
  );
}
