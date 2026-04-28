const ACCENT = '#3b82f6';

export default function HeroBody() {
  return (
    <div className="relative z-10 pt-31 px-14 max-xl:px-6 max-md:px-4">
      {/* Running header */}
      <div
        className="flex items-center justify-between mb-9 max-sm:flex-col max-sm:items-start max-sm:gap-1"
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '10.5px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: 8,
        }}
      >
        <span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>[PCS/01] · </span>
          {'  '}Asystent · Port Community System
        </span>
        <span className="flex items-center gap-3">
          <span style={{ color: ACCENT }}>◆</span>
          <span>live</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>│</span>
          <span>edition · 04 / 26</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>│</span>
          <span>vol. 12</span>
        </span>
      </div>

      {/* Headline */}
      <div>
        {/* ── kicker + H1 + sub ── */}
        <div>
          {/* Kicker row */}
          <div className="flex items-center gap-3 mb-5.5 flex-wrap">
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
              Nowość · 2026
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

          {/* H1 */}
          <h1
            style={{
              textTransform: 'uppercase',
              fontFamily: 'var(--font-serif, serif)',
              fontSize: 'clamp(50px, 7.6vw, 104px)',
              lineHeight: 0.8,
              letterSpacing: '7px',
              fontWeight: 400,
              color: '#fff',
              minHeight: '1em',
              margin: 0,
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

          {/* Sub */}
          <p
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
