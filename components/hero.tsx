'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import Background from './Background';
import ChatBar from './ChatBar';
import HeroBody from './HeroBody';
import TopNav from './TopNav';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const item: Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }
    : {
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: 'easeOut' },
        },
      };

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <main
      className="relative min-h-dvw w-full overflow-x-hidden flex flex-col"
      style={{ background: '#06080c' }}
    >
      <Background />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col flex-1"
      >
        <motion.div variants={item}>
          <TopNav />
        </motion.div>

        <motion.div variants={item} className="flex-1">
          <HeroBody />
        </motion.div>

        <motion.div variants={item}>
          <ChatBar />
        </motion.div>
      </motion.div>
    </main>
  );
}
