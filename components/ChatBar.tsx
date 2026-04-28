'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';

const ACCENT = '#3b82f6';

const CHIPS = [
  { code: '01', tag: 'KONTENER', label: 'Sprawdź status MSKU7834521' },
  { code: '02', tag: 'TRACKING', label: 'Gdzie jest mój kontener?' },
  { code: '03', tag: 'OPERACJE', label: 'Jak wygląda kolejka w porcie?' },
  { code: '04', tag: 'MAKLERSKI', label: 'Dokumenty maklerskie' },
];

const MOCK: Record<string, string> = {
  'Sprawdź status MSKU7834521':
    '📦 Kontener **MSKU7834521** · Terminal T2, nabrzeże 7\n— Status: **Oczekuje na rozładunek**\n— Szac. czas operacji: 3–4 h\n— Armator: Maersk Line · Przyjazd: 27.04.2026',
  'Gdzie jest mój kontener?':
    'Podaj numer kontenera (np. MSKU7834521) lub numer B/L, a sprawdzę aktualną lokalizację. Aktualnie monitoruję **3 421** jednostek w ruchu.',
  'Jak wygląda kolejka w porcie?':
    '🚛 Brama wjazdowa: **12 pojazdów** · czas oczekiwania ~25 min\n— Terminal T1: bez opóźnień ✓\n— Terminal T2: spowolnienie +45 min ⚠\n— Dane odświeżone: 28.04.2026 · 14:32',
  'Dokumenty maklerskie':
    'Dostępne dokumenty:\n— **SAD** (Jednolity Dokument Administracyjny)\n— **List przewozowy CMR**\n— **Świadectwo fitosanitarne**\n\nCzy chcesz pobrać dokument lub złożyć nowe zlecenie?',
};

type Msg = { role: 'user' | 'assistant'; text: string };

interface ChatBarProps {
  onSend?: (value: string) => void;
}

function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 16,
        height: 16,
        padding: '0 4px',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.15)',
        fontFamily: 'var(--font-mono, monospace)',
        fontSize: 10,
        fontWeight: 500,
        color: 'rgba(255,255,255,0.7)',
        borderRadius: 0,
      }}
    >
      {children}
    </kbd>
  );
}

function MsgText({ text }: { text: string }) {
  // Very light markdown: **bold** and newlines
  const parts = text.split(/(\*\*[^*]+\*\*|\n)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p === '\n') return <br key={i} />;
        if (p.startsWith('**') && p.endsWith('**'))
          return (
            <strong key={i} style={{ color: '#fff', fontWeight: 600 }}>
              {p.slice(2, -2)}
            </strong>
          );
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

export default function ChatBar({ onSend }: ChatBarProps) {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);
  const [thinking, setThinking] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-cycle only when no conversation yet
  useEffect(() => {
    if (messages.length > 0) {
      if (cycleRef.current) clearInterval(cycleRef.current);
      return;
    }
    cycleRef.current = setInterval(() => setActiveIndex(i => (i + 1) % CHIPS.length), 2800);
    return () => {
      if (cycleRef.current) clearInterval(cycleRef.current);
    };
  }, [messages.length]);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, thinking]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;
    setMessages(prev => [...prev, { role: 'user', text: trimmed }]);
    setValue('');
    setThinking(true);
    onSend?.(trimmed);
    setTimeout(() => {
      const key = Object.keys(MOCK).find(k => trimmed.toLowerCase().includes(k.toLowerCase()));
      const reply = key
        ? MOCK[key]
        : 'Rozumiem pytanie. Trwa przetwarzanie — zaraz wrócę z odpowiedzią systemu portowego.';
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setThinking(false);
    }, 1100);
  };

  const handleChipClick = (label: string) => {
    sendMessage(label);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(value);
  };

  const hasInput = value.length > 0;
  const hasMessages = messages.length > 0;

  return (
    <div
      className="relative z-10 mx-auto w-full"
      style={{ maxWidth: 1280, padding: '0 56px 32px' }}
    >
      {/* ── Label row ── */}
      <div
        className="flex items-center justify-between mb-3.5"
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '10.5px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
        }}
      >
        <span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>[INPUT/02]</span>
          {'  '}Konsola asystenta
        </span>
        <span className="flex items-center gap-2">
          <span
            className="relative flex items-center justify-center"
            style={{ width: 8, height: 8 }}
          >
            <span
              className="absolute inset-0 rounded-full bg-green-400"
              style={{ animation: 'chat-ping 2s ease-out infinite' }}
            />
            <span className="relative rounded-full bg-green-400" style={{ width: 8, height: 8 }} />
          </span>
          <span>Online · &lt; 2 s avg</span>
        </span>
      </div>

      {/* ── Chips grid (hidden once chat started) ── */}
      <AnimatePresence>
        {!hasMessages && (
          <motion.div
            key="chips"
            initial={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div
              className="max-sm:flex max-sm:overflow-x-auto max-sm:snap-x"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderBottom: 'none',
              }}
            >
              {CHIPS.map((chip, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={chip.code}
                    onClick={() => handleChipClick(chip.label)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className="flex flex-col gap-1.5 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-accent max-sm:snap-start max-sm:min-w-50"
                    style={{
                      padding: '14px 16px',
                      borderRight:
                        i < CHIPS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                      background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                      borderTop: isActive ? `2px solid ${ACCENT}` : '2px solid transparent',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: '9.5px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        gap: 6,
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ color: 'rgba(255,255,255,0.3)' }}>[{chip.code}]</span>
                      <span style={{ color: isActive ? ACCENT : 'rgba(255,255,255,0.5)' }}>
                        {chip.tag}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans, sans-serif)',
                        fontSize: 13,
                        fontWeight: 500,
                        color: isActive ? '#fff' : 'rgba(255,255,255,0.85)',
                      }}
                    >
                      {chip.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Chat thread ── */}
      <AnimatePresence>
        {hasMessages && (
          <motion.div
            key="thread"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              borderBottom: 'none',
              background: 'rgba(6,8,12,0.6)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div
              className="chat-thread flex flex-col gap-0 overflow-y-auto"
              style={{ maxHeight: 320, padding: '12px 0' }}
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: 'flex',
                    flexDirection: m.role === 'user' ? 'row-reverse' : 'row',
                    gap: 12,
                    padding: '10px 20px',
                    borderBottom:
                      i < messages.length - 1 || thinking
                        ? '1px solid rgba(255,255,255,0.04)'
                        : 'none',
                    alignItems: 'flex-start',
                  }}
                >
                  {/* Avatar tag */}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: 9,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      flexShrink: 0,
                      marginTop: 3,
                      color: m.role === 'user' ? 'rgba(255,255,255,0.35)' : ACCENT,
                      opacity: 0.8,
                    }}
                  >
                    {m.role === 'user' ? 'TY' : 'PCS'}
                  </span>
                  <span
                    style={{
                      fontFamily:
                        m.role === 'user'
                          ? 'var(--font-sans, sans-serif)'
                          : 'var(--font-mono, monospace)',
                      fontSize: m.role === 'user' ? 14 : 13,
                      lineHeight: 1.55,
                      color: m.role === 'user' ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.75)',
                    }}
                  >
                    <MsgText text={m.text} />
                  </span>
                </motion.div>
              ))}

              {/* Thinking indicator */}
              <AnimatePresence>
                {thinking && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', gap: 12, padding: '10px 20px', alignItems: 'center' }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: 9,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: ACCENT,
                        flexShrink: 0,
                      }}
                    >
                      PCS
                    </span>
                    <span style={{ display: 'flex', gap: 4 }}>
                      {[0, 1, 2].map(dot => (
                        <motion.span
                          key={dot}
                          style={{
                            width: 4,
                            height: 4,
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
        )}
      </AnimatePresence>

      {/* ── Console bar ── */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3.5 transition-all duration-200"
        style={{
          background: 'rgba(10,13,18,0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: focused ? `1px solid ${ACCENT}` : '1px solid rgba(255,255,255,0.18)',
          boxShadow: focused ? `0 0 0 1px ${ACCENT}, 0 -8px 40px ${ACCENT}25` : 'none',
          padding: '18px 20px',
          borderRadius: 0,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 13,
            color: ACCENT,
            flexShrink: 0,
            userSelect: 'none',
          }}
        >
          pcs &gt;
        </span>
        <input
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="wpisz numer kontenera lub zadaj pytanie…"
          aria-label="Konsola asystenta PCS"
          className="flex-1 bg-transparent text-white placeholder-white/30 outline-none min-w-0"
          style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: 14, fontWeight: 400 }}
          maxLength={240}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '10.5px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            flexShrink: 0,
          }}
        >
          {value.length}/240
        </span>
        <button
          type="submit"
          aria-label="Wyślij wiadomość"
          disabled={thinking}
          className="flex items-center gap-1.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '9px 16px',
            borderRadius: 0,
            cursor: hasInput && !thinking ? 'pointer' : 'default',
            background: hasInput ? ACCENT : 'rgba(255,255,255,0.08)',
            border: hasInput ? `1px solid ${ACCENT}` : '1px solid rgba(255,255,255,0.18)',
            color: hasInput ? '#fff' : 'rgba(255,255,255,0.5)',
            flexShrink: 0,
            opacity: thinking ? 0.5 : 1,
          }}
        >
          Wyślij
          <ArrowRight size={12} />
        </button>
      </form>

      {/* ── Footer row ── */}
      <div
        className="flex items-center justify-between pt-2.5 flex-wrap gap-2"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '10.5px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5">
            <Kbd>⏎</Kbd>
            <span>wyślij</span>
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          <span style={{ color: ACCENT }}>◆</span>
          powered by PCS
        </span>
      </div>
    </div>
  );
}
