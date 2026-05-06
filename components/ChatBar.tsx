'use client';

import { CHIPS } from '@/constants';
import { useChatMessages } from '@/hooks/useChatMessages';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function MsgText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\n)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p === '\n') return <br key={i} />;
        if (p.startsWith('**') && p.endsWith('**'))
          return (
            <strong key={i} className="text-foreground font-semibold">
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
    <div className="w-full max-w-180 bg-(--bg-3) backdrop-blur-xl border border-(--border) p-6">
      {!hasMessages && (
        <div className="flex flex-col gap-2 mb-3">
          {CHIPS.map((chip, i) => (
            <button
              key={i}
              onClick={() => sendMessage(chip.label)}
              className="text-left bg-surface border border-(--border) text-(--fg-2) font-sans text-base px-4.5 py-3 cursor-pointer transition-[background,color,border-color] duration-150 hover:border-accent hover:text-foreground"
            >
              {chip.label}
            </button>
          ))}
        </div>
      )}

      {hasMessages && (
        <div className="overflow-hidden border-b border-(--border) mb-4">
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
                <span
                  className={cn(
                    'font-mono text-[12px] tracking-widest uppercase shrink-0 mt-0.5',
                    msg.role === 'user' ? 'text-(--fg-3)' : 'text-accent'
                  )}
                >
                  {msg.role === 'user' ? 'TY' : 'PCS'}
                </span>
                <span
                  className={cn(
                    'font-sans text-base leading-[1.6]',
                    msg.role === 'user' ? 'text-foreground' : 'text-(--fg-2)'
                  )}
                >
                  <MsgText text={msg.text} />
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
                  <span
                    aria-hidden="true"
                    className="font-mono text-[12px] tracking-widest uppercase text-accent shrink-0"
                  >
                    PCS2
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
        </div>
      )}

      <form
        onSubmit={e => {
          e.preventDefault();
          sendMessage(value);
        }}
        className={cn(
          'flex items-center gap-3 transition-all duration-200 bg-transparent border-0 pt-4',
          focused
            ? 'border-t border-accent shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_12%,transparent)]'
            : 'border-t border-(--border)'
        )}
      >
        <input
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-label="Wpisz numer kontenera lub zadaj pytanie"
          placeholder="Wpisz numer kontenera lub zadaj pytanie…"
          className="flex-1 bg-transparent outline-none min-w-0 font-sans text-base font-normal text-foreground"
          maxLength={240}
        />
        <button
          type="submit"
          aria-label="Wyślij"
          disabled={thinking}
          className={cn(
            'flex items-center gap-2 font-sans text-[15px] font-semibold px-5 py-2.5 border-0 shrink-0 transition-[background,color,opacity] duration-200',
            hasInput && !thinking ? 'cursor-pointer' : 'cursor-default',
            hasInput ? 'bg-accent text-accent-fg' : 'bg-surface text-(--fg-3)',
            thinking ? 'opacity-50' : 'opacity-100'
          )}
        >
          <span>Wyślij</span>
          <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}
