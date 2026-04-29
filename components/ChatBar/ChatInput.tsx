import { ArrowRight } from 'lucide-react';
import type { RefObject as ReactRefObject } from 'react';

type ChatInputProps = {
  value: string;
  onChange: (v: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onSubmit: () => void;
  inputRef: ReactRefObject<HTMLInputElement>;
  hasInput: boolean;
  thinking: boolean;
  focused: boolean;
};

export function ChatInput({
  value,
  onChange,
  onFocus,
  onBlur,
  onSubmit,
  inputRef,
  hasInput,
  thinking,
  focused,
}: ChatInputProps) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex items-center gap-3 transition-all duration-200"
      style={{
        background: 'transparent',
        border: 'none',
        borderTop: focused ? `1px solid var(--accent)` : '1px solid var(--border)',
        boxShadow: focused ? `0 0 24px color-mix(in srgb, var(--accent) 12%, transparent)` : 'none',
        padding: '16px 0 0',
      }}
    >
      <input
        ref={inputRef}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
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
  );
}
