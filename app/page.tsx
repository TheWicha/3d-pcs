import Hero from '@/components/hero';
import LaptopScroll from '@/components/LaptopScroll';
import TopNav from '@/components/TopNav';

export default function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      <LaptopScroll />
      <section
        style={{
          minHeight: '100vh',
          background: '#06080c',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.18)',
          }}
        >
          [03] · Następna sekcja
        </span>
      </section>
    </>
  );
}
