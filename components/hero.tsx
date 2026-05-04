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
    <main className="relative h-[calc(100dvh-5.25rem)] w-full overflow-x-hidden flex flex-col items-center justify-center bg-background">
      <Background />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={item}
        className="relative z-10 w-full px-4 flex flex-col items-center max-w-190"
      >
        <div className="w-full mb-5 max-w-180">
          <h2 className="text-shadow-2xs font-michroma font-normal text-[clamp(18px,2.4vw,26px)] tracking-[0.04em] text-white mt-0 mb-2 uppercase">
            Sprawdź status kontenera
          </h2>
          <p className="text-shadow-2xs text-[clamp(13px,1.2vw,15px)] leading-relaxed text-white m-0">
            Wpisz numer kontenera (np. MSCU1234567), aby zobaczyć czy dopłynął.
          </p>
        </div>
        <ChatBar />
      </motion.div>
    </main>
  );
}
