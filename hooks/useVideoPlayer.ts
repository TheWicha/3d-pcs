'use client';

import { useEffect, useRef, useState } from 'react';

export function useVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const interactedRef = useRef(false);

  useEffect(() => {
    const stopLoopAndFinish = () => {
      const v = videoRef.current;
      if (!v || interactedRef.current) return;
      interactedRef.current = true;
      v.loop = false;
    };
    const events = ['keydown', 'mousedown', 'touchstart', 'wheel'] as const;
    events.forEach(e => window.addEventListener(e, stopLoopAndFinish, { passive: true }));
    return () => events.forEach(e => window.removeEventListener(e, stopLoopAndFinish));
  }, []);

  const togglePause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (paused) {
      interactedRef.current = false;
      v.loop = true;
      v.currentTime = 0;
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  useEffect(() => {
    if (displayedProgress === progress) return;
    let raf: number;
    const step = () => {
      setDisplayedProgress(prev => {
        if (Math.abs(progress - prev) < 0.5) return progress;
        return prev + (progress - prev) * 0.18 + (progress > prev ? 0.3 : -0.3);
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [progress, displayedProgress]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 1;
    const play = v.play();
    if (play !== undefined) play.catch(() => {});

    const updateProgress = () => {
      if (v.buffered.length > 0 && v.duration) {
        setProgress(Math.min(100, (v.buffered.end(v.buffered.length - 1) / v.duration) * 100));
      }
    };
    const onReady = () => { setProgress(100); setLoading(false); };

    v.addEventListener('progress', updateProgress);
    v.addEventListener('canplaythrough', onReady);
    if (v.readyState >= 4) onReady();
    return () => {
      v.removeEventListener('progress', updateProgress);
      v.removeEventListener('canplaythrough', onReady);
    };
  }, []);

  return { videoRef, loading, displayedProgress, paused, togglePause };
}
