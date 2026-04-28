'use client';
import { useEffect, useRef, useState } from 'react';

// Modern loading overlay for video background
function VideoLoadingOverlay({ progress }: { progress: number }) {
  return (
    <div
      className="absolute inset-0 z-10 flex items-center justify-center"
      style={{ background: '#0a0d12', transition: 'opacity 0.5s', pointerEvents: 'none' }}
    >
      {/* Pulsing grid */}
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
      {/* Centered progress */}
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  // Animate displayedProgress towards progress
  useEffect(() => {
    if (displayedProgress === progress) return;
    let raf: number;
    const step = () => {
      setDisplayedProgress(prev => {
        if (Math.abs(progress - prev) < 0.5) return progress;
        // Ease towards target
        return prev + (progress - prev) * 0.18 + (progress > prev ? 0.3 : -0.3);
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [progress, displayedProgress]);

  // Set playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.49;
    }
  }, []);

  // Listen for video loading progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.buffered.length > 0 && video.duration) {
        const end = video.buffered.end(video.buffered.length - 1);
        setProgress(Math.min(100, (end / video.duration) * 100));
      }
    };
    const onCanPlay = () => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setShowVideo(true);
      }, 200); // short delay for fade
    };
    video.addEventListener('progress', updateProgress);
    video.addEventListener('canplay', onCanPlay);
    return () => {
      video.removeEventListener('progress', updateProgress);
      video.removeEventListener('canplay', onCanPlay);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Video with fade-in */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'grayscale(1) contrast(1.15) brightness(0.85)',
          opacity: showVideo ? 1 : 0,
          transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <source src="/video/port_animation_fast.mp4" type="video/mp4" />
      </video>
      {/* Loading overlay */}
      {loading && <VideoLoadingOverlay progress={displayedProgress} />}
    </div>
  );
}
