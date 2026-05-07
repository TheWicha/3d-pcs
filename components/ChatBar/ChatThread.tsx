import Text from '@/components/ui/Text';
import ThinkingDots from '@/components/ui/ThinkingDots';
import type { Msg } from '@/types';
import { cn } from '@/utils/cn';
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
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className={cn(
              'flex gap-3.5 px-6 py-3 items-start',
              msg.role === 'user' ? 'flex-row-reverse' : 'flex-row',
              (i < messages.length - 1 || thinking) && 'border-b border-(--border-2)'
            )}
          >
            <Text
              variant="mono"
              color={msg.role === 'user' ? 'subtle' : 'accent'}
              as="span"
              className="shrink-0 mt-0.5"
            >
              {msg.role === 'user' ? 'TY' : 'PCS'}
            </Text>
            <Text
              variant="body"
              color={msg.role === 'user' ? 'default' : 'muted'}
              as="span"
            >
              <MsgText text={msg.text} />
            </Text>
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
              <Text variant="mono" color="accent" as="span" className="shrink-0" aria-hidden="true">
                PCS
              </Text>
              <ThinkingDots />
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
}
