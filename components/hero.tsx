'use client';

import { useVideoPlayer } from '@/hooks/useVideoPlayer';
import Background from './Background';
import HeroContent from './HeroContent';
import { VideoPlayPause } from './video';

export default function Hero() {
  const { videoRef, loading, displayedProgress, paused, togglePause } = useVideoPlayer();

  return (
    <section className="relative h-[calc(100dvh-5.25rem)] w-full overflow-x-hidden flex flex-col items-center justify-center bg-background">
      <Background videoRef={videoRef} loading={loading} displayedProgress={displayedProgress} />
      <HeroContent />
      {!loading && <VideoPlayPause paused={paused} togglePause={togglePause} />}
    </section>
  );
}
