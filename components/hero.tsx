import Background from './Background';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section className="relative h-[calc(100dvh-5.25rem)] w-full overflow-x-hidden flex flex-col items-center justify-center bg-background">
      <Background />
      <HeroContent />
    </section>
  );
}
