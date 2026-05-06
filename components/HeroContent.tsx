'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import ChatBar from './ChatBar';

export default function HeroContent() {
  const shouldReduceMotion = useReducedMotion();
  const item: Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }
    : {
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
      };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={item}
      className="relative z-10 w-full px-4 flex flex-col items-center max-w-190"
    >
      <div className="w-full mb-5 max-w-180 px-4 py-3 border border-(--border) bg-[color-mix(in_srgb,var(--bg)_84%,transparent)] backdrop-blur-[2px]">
        <p className="font-michroma font-normal text-[clamp(18px,2.4vw,26px)] tracking-[0.04em] text-foreground mt-0 mb-2 uppercase">
          Sprawdź status kontenera
        </p>
        <p className="text-[clamp(13px,1.2vw,15px)] leading-relaxed text-(--fg-2) m-0">
          Wpisz numer kontenera (np. MSCU1234567), aby zobaczyć czy dopłynął.
        </p>
      </div>
      <ChatBar />
    </motion.div>
  );
}
