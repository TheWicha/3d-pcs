'use client';

import { useVideoPlayer } from '@/hooks/useVideoPlayer';
import { Pause, Play } from 'lucide-react';

function VideoLoadingOverlay({ progress }: { progress: number }) {
  return (
    <div
      className="absolute inset-0 z-10 flex items-center justify-center"
      style={{ background: '#0a0d12', transition: 'opacity 0.5s', pointerEvents: 'none' }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          animation: 'video-grid-pulse 1.2s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: 'var(--font-mono, monospace)',
          fontWeight: 500,
          fontSize: 28,
          color: '#e5e7eb',
          textShadow: '0 2px 12px #000a',
          letterSpacing: '0.04em',
        }}
      >
        {Math.round(progress)}%
      </div>
      <style>{`
        @keyframes video-grid-pulse {
          0%, 100% { opacity: 0.32; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}

export default function Video() {
  const { videoRef, loading, displayedProgress, showVideo, paused, togglePause, onEnded } =
    useVideoPlayer();

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        onEnded={onEnded}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'grayscale(1) contrast(1.15) brightness(0.85)',
          opacity: showVideo ? 1 : 0,
          transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <source src="/video/port_507_smooth.mp4" type="video/mp4" />
      </video>

      {loading && <VideoLoadingOverlay progress={displayedProgress} />}

      {showVideo && (
        <button
          onClick={togglePause}
          onMouseDown={e => e.stopPropagation()}
          aria-label={paused ? 'Wznów wideo' : 'Zatrzymaj wideo'}
          style={{
            position: 'absolute',
            bottom: 16,
            right: 20,
            zIndex: 900,
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            background: 'rgba(6,8,12,0.55)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.45)',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 9,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '5px 8px',
            cursor: 'pointer',
            pointerEvents: 'auto',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            transition: 'color 0.15s, border-color 0.15s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.8)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.3)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.45)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.12)';
          }}
        >
          {paused ? <Play size={10} /> : <Pause size={10} />}
          {paused ? 'wznów' : 'pauza'}
        </button>
      )}
    </div>
  );
}
