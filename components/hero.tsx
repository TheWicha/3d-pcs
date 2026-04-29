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
        className="relative z-10 w-full px-4"
        style={{ maxWidth: 760 }}
      >
        <ChatBar />
      </motion.div>
    </main>
  );
}
