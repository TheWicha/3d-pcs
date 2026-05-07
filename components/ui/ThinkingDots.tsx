'use client';

import { motion } from 'framer-motion';

export default function ThinkingDots() {
  return (
    <span className="flex gap-1.25">
      {[0, 1, 2].map(dot => (
        <motion.span
          key={dot}
          className="w-1.25 h-1.25 rounded-full bg-accent inline-block"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
        />
      ))}
    </span>
  );
}
