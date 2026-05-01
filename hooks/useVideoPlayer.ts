'use client';

import { useEffect, useRef, useState } from 'react';

export function useVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [paused, setPaused] = useState(false);
  const interactedRef = useRef(false);

  const stopLoopAndFinish = () => {
    const video = videoRef.current;
    if (!video || interactedRef.current) return;
    interactedRef.current = true;
    video.loop = false;
  };

  useEffect(() => {
    const events = ['keydown', 'mousedown', 'touchstart', 'wheel'] as const;
    const handler = () => stopLoopAndFinish();
    events.forEach(e => window.addEventListener(e, handler, { passive: true }));
    return () => events.forEach(e => window.removeEventListener(e, handler));
  }, []);

  const togglePause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (paused) {
      interactedRef.current = false;
      video.loop = true;
      video.currentTime = 0;
      video.play();
      setPaused(false);
    } else {
      video.pause();
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
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.buffered.length > 0 && video.duration) {
        const end = video.buffered.end(video.buffered.length - 1);
        setProgress(Math.min(100, (end / video.duration) * 100));
      }
    };
    const onReady = () => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setShowVideo(true);
      }, 200);
    };
    video.addEventListener('progress', updateProgress);
    video.addEventListener('canplaythrough', onReady);
    if (video.readyState >= 4) onReady();
    return () => {
      video.removeEventListener('progress', updateProgress);
      video.removeEventListener('canplaythrough', onReady);
    };
  }, []);

  const onEnded = () => {
    videoRef.current?.pause();
    setPaused(true);
  };

  return {
    videoRef,
    loading,
    displayedProgress,
    showVideo,
    paused,
    togglePause,
    onEnded,
  };
}
