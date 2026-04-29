'use client';

import { ACCENT, CHIPS } from '@/constants';
import { useChatMessages } from '@/hooks/useChatMessages';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Activity } from 'react';

function MsgText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\n)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p === '\n') return <br key={i} />;
        if (p.startsWith('**') && p.endsWith('**'))
          return (
            <strong key={i} style={{ color: 'var(--fg)', fontWeight: 600 }}>
              {p.slice(2, -2)}
            </strong>
          );
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

export default function ChatBar({ onSend }: { onSend?: (v: string) => void }) {
  const {
    value,
    setValue,
    messages,
    thinking,
    focused,
    setFocused,
    inputRef,
    bottomRef,
    sendMessage,
    hasInput,
    hasMessages,
  } = useChatMessages(onSend);

  return (
    <div
      className="w-full"
      style={{
        maxWidth: 720,
        background: 'var(--bg-3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--border)',
        padding: '24px',
      }}
    >
      <AnimatePresence>
        <Activity mode={hasMessages ? 'hidden' : 'visible'}>
          <motion.div
            key="chips"
            initial={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex flex-col gap-2 mb-3"
          >
            {CHIPS.map((chip, i) => (
              <button
                key={i}
                onClick={() => sendMessage(chip.label)}
                style={{
                  textAlign: 'left',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--fg-2)',
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 16,
                  padding: '12px 18px',
                  cursor: 'pointer',
                  transition: 'background 0.15s, color 0.15s, border-color 0.15s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--fg)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--fg-2)';
                }}
              >
                {chip.label}
              </button>
            ))}
          </motion.div>
        </Activity>
      </AnimatePresence>

      <AnimatePresence>
        <Activity mode={hasMessages ? 'visible' : 'hidden'}>
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
            <div
              className="flex flex-col overflow-y-auto"
              style={{ maxHeight: 360, padding: '16px 0' }}
            >
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
        </Activity>
      </AnimatePresence>

      <form
        onSubmit={e => {
          e.preventDefault();
          sendMessage(value);
        }}
        className="flex items-center gap-3 transition-all duration-200"
        style={{
          background: 'transparent',
          border: 'none',
          borderTop: focused ? `1px solid var(--accent)` : '1px solid var(--border)',
          boxShadow: focused
            ? `0 0 24px color-mix(in srgb, var(--accent) 12%, transparent)`
            : 'none',
          padding: '16px 0 0',
        }}
      >
        <input
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Wpisz numer kontenera lub zadaj pytanie…"
          aria-label="Konsola asystenta PCS"
          className="flex-1 bg-transparent outline-none min-w-0"
          style={{
            fontFamily: 'var(--font-sans, sans-serif)',
            fontSize: 16,
            fontWeight: 400,
            color: 'var(--fg)',
          }}
          maxLength={240}
        />
        <button
          type="submit"
          aria-label="Wyślij"
          disabled={thinking}
          className="flex items-center gap-2 transition-all duration-200 focus-visible:outline-none"
          style={{
            fontFamily: 'var(--font-sans, sans-serif)',
            fontSize: 15,
            fontWeight: 600,
            padding: '10px 20px',
            cursor: hasInput && !thinking ? 'pointer' : 'default',
            background: hasInput ? 'var(--accent)' : 'var(--surface)',
            border: 'none',
            color: hasInput ? 'var(--accent-fg)' : 'var(--fg-3)',
            flexShrink: 0,
            opacity: thinking ? 0.5 : 1,
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          <span>Wyślij</span>
          <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}
