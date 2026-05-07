'use client';

import Card from '@/components/ui/Card';
import Text from '@/components/ui/Text';
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
      <Card variant="bordered" padding="sm" accentBar className="w-full mb-5 max-w-180">
        <Text variant="hero" as="h1" className="mt-0 mb-2">
          Sprawdź status kontenera
        </Text>
        <Text variant="caption" color="muted" className="m-0">
          Wpisz numer kontenera (np. MSCU1234567), aby zobaczyć czy dopłynął.
        </Text>
      </Card>
      <ChatBar />
    </motion.div>
  );
}
