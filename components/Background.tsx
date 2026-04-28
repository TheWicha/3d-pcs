import Video from './video';

interface BackgroundProps {
  overlay?: number;
}

function Crosshair() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <line x1="7" y1="0" x2="7" y2="14" stroke="white" strokeWidth="1" />
      <line x1="0" y1="7" x2="14" y2="7" stroke="white" strokeWidth="1" />
    </svg>
  );
}

export default function Background({ overlay = 0.7 }: BackgroundProps) {
  const o = overlay;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Video layer */}
      <Video />

      {/* Vertical gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg,
            rgba(6,8,12,${(0.92 * o).toFixed(3)}) 0%,
            rgba(6,8,12,${(0.55 * o).toFixed(3)}) 30%,
            rgba(6,8,12,${(0.7 * o).toFixed(3)}) 65%,
            rgba(6,8,12,${(0.98 * o).toFixed(3)}) 100%
          )`,
        }}
      />

      {/* Hairline grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.065) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.065) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.18,
        }}
      />

      {/* Corner crosshairs */}
      <span className="absolute top-6 left-6 opacity-[0.35]">
        <Crosshair />
      </span>
      <span className="absolute top-6 right-6 opacity-[0.35]">
        <Crosshair />
      </span>
      <span className="absolute bottom-6 left-6 opacity-[0.35]">
        <Crosshair />
      </span>
      <span className="absolute bottom-6 right-6 opacity-[0.35]">
        <Crosshair />
      </span>
    </div>
  );
}
