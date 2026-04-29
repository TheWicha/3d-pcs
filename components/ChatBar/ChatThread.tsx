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
      style={{
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
        marginBottom: 16,
      }}
    >
      <div className="flex flex-col overflow-y-auto" style={{ maxHeight: 360, padding: '16px 0' }}>
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              display: 'flex',
              flexDirection: m.role === 'user' ? 'row-reverse' : 'row',
              gap: 14,
              padding: '12px 24px',
              borderBottom:
                i < messages.length - 1 || thinking ? '1px solid var(--border-2)' : 'none',
              alignItems: 'flex-start',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                flexShrink: 0,
                marginTop: 2,
                color: m.role === 'user' ? 'var(--fg-3)' : ACCENT,
              }}
            >
              {m.role === 'user' ? 'TY' : 'PCS'}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: 16,
                lineHeight: 1.6,
                color: m.role === 'user' ? 'var(--fg)' : 'var(--fg-2)',
              }}
            >
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
              style={{ display: 'flex', gap: 14, padding: '12px 24px', alignItems: 'center' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  flexShrink: 0,
                }}
              >
                PCS
              </span>
              <span style={{ display: 'flex', gap: 5 }}>
                {[0, 1, 2].map(dot => (
                  <motion.span
                    key={dot}
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: ACCENT,
                      display: 'inline-block',
                    }}
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
