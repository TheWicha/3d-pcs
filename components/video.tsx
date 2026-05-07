'use client';

import { Pause, Play } from 'lucide-react';
import type { VideoPlayPauseProps } from '@/types';

interface VideoProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  loading: boolean;
  displayedProgress: number;
}

function VideoLoadingOverlay({ progress }: { progress: number }) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-(--bg-2) transition-opacity duration-500">
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 will-change-[opacity] animate-[video-grid-pulse_1.2s_ease-in-out_infinite] bg-[linear-gradient(var(--border-2)_1px,transparent_1px),linear-gradient(90deg,var(--border-2)_1px,transparent_1px)] bg-size-[64px_64px]" />
      <div className="relative z-2 font-mono font-medium text-[28px] text-foreground tracking-[0.04em] [text-shadow:0_2px_12px_#000a]">
        {Math.round(progress)}%
      </div>
    </div>
  );
}

export function VideoPlayPause({ paused, togglePause }: VideoPlayPauseProps) {
  return (
    <button
      onClick={togglePause}
      onMouseDown={e => e.stopPropagation()}
      aria-pressed={paused}
      aria-label={paused ? 'Wznów animację tła' : 'Zatrzymaj animację tła'}
      className="absolute bottom-4 right-5 z-900 flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] uppercase text-(--fg-3) border border-(--border) px-2 py-1.25 pointer-events-auto transition-[color,border-color] duration-150 hover:text-foreground hover:border-accent bg-(--bg-3) backdrop-blur-sm"
    >
      {paused ? <Play size={10} aria-hidden="true" /> : <Pause size={10} aria-hidden="true" />}
      <span aria-hidden="true">{paused ? 'wznów' : 'pauza'}</span>
    </button>
  );
}

export default function Video({ videoRef, loading, displayedProgress }: VideoProps) {
  return (
    <div className="absolute inset-0 w-full h-full" aria-hidden="true">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        poster="/video/poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.85] transition-opacity duration-700 ease-in-out opacity-100"
      >
        <source src="/video/animacja.webm" type="video/webm" />
        <source src="/video/freecompress-animacja.mp4" type="video/mp4" />
      </video>
      {loading && <VideoLoadingOverlay progress={displayedProgress} />}
    </div>
  );
}
