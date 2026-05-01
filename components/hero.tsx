'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import Background from './Background';
import ChatBar from './ChatBar';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const item: Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }
    : {
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
      };

  return (
    <main
      className="relative h-dvh w-full overflow-x-hidden flex flex-col items-center justify-center"
      style={{ background: 'var(--bg)' }}
    >
      <Background />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={item}
        className="relative z-10 w-full px-4 flex flex-col items-center"
        style={{ maxWidth: 760 }}
      >
        <div
          className="w-full mb-5"
          style={{ maxWidth: 720 }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-michroma, serif)',
              fontSize: 'clamp(18px, 2.4vw, 26px)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: '#ffffff',
              margin: '0 0 8px',
              textTransform: 'uppercase',
            }}
          >
            Sprawdź status kontenera
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: 'clamp(13px, 1.2vw, 15px)',
              lineHeight: 1.6,
              color: '#ffffff',
              margin: 0,
            }}
          >
            Wpisz numer kontenera (np. MSCU1234567), aby zobaczyć czy dopłynął.
          </p>
        </div>
        <ChatBar />
      </motion.div>
    </main>
  );
}
