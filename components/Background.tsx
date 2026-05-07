'use client';

import type { BackgroundProps } from '@/types';
import Video from './video';

function Crosshair() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <line x1="7" y1="0" x2="7" y2="14" stroke="white" strokeWidth="1" />
      <line x1="0" y1="7" x2="14" y2="7" stroke="white" strokeWidth="1" />
    </svg>
  );
}

export default function Background({
  overlay = 0.7,
  videoRef,
  loading,
  displayedProgress,
}: BackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Video videoRef={videoRef} loading={loading} displayedProgress={displayedProgress} />
      <div
        aria-hidden="true"
        className="absolute inset-0 overlay-gradient"
        style={{ '--overlay-o': overlay } as React.CSSProperties}
      />
      <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(255,255,255,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.065)_1px,transparent_1px)] bg-size-[80px_80px]" />
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
