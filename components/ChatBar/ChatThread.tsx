import { cn } from '@/utils/cn';
import { ACCENT } from '@/constants';
import type { Msg } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import type { RefObject as ReactRefObject } from 'react';
import { MsgText } from './MsgText';

type ChatThreadProps = {
  messages: Msg[];
  thinking: boolean;
  bottomRef: ReactRefObject<HTMLDivElement>;
};

export function ChatThread({ messages, thinking, bottomRef }: ChatThreadProps) {
  return (
    <motion.div
      key="thread"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="overflow-hidden border-b border-(--border) mb-4"
    >
      <div className="flex flex-col overflow-y-auto max-h-90 py-4">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className={`flex gap-3.5 px-6 py-3 items-start ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'} ${i < messages.length - 1 || thinking ? 'border-b border-(--border-2)' : ''}`}
          >
            <span className={`font-mono text-[12px] tracking-widest uppercase shrink-0 mt-0.5 ${m.role === 'user' ? 'text-(--fg-3)' : 'text-accent'}`}>
              {m.role === 'user' ? 'TY' : 'PCS'}
            </span>
            <span className={`font-sans text-base leading-[1.6] ${m.role === 'user' ? 'text-foreground' : 'text-(--fg-2)'}`}>
              <MsgText text={m.text} />
            </span>
          </motion.div>
        ))}
        <AnimatePresence>
          {thinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-3.5 px-6 py-3 items-center"
            >
              <span className="font-mono text-[12px] tracking-widest uppercase text-accent shrink-0">
                PCS
              </span>
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
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
}
