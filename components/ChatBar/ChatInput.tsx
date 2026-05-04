import { cn } from '@/utils/cn';
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
      className={cn(
        'flex items-center gap-3 transition-all duration-200 bg-transparent border-0 pt-4 border-t border-(--border)',
        focused &&
          'border-t border-accent shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_12%,transparent)]'
      )}
    >
      <input
        ref={inputRef}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Wpisz numer kontenera lub zadaj pytanie…"
        className="flex-1 bg-transparent outline-none min-w-0 font-sans text-base font-normal text-foreground"
        maxLength={240}
      />
      <button
        type="submit"
        aria-label="Wyślij"
        disabled={thinking}
        className={cn(
          'flex items-center gap-2 font-sans text-[15px] font-semibold px-5 py-2.5 border-0 shrink-0 transition-[background,color,opacity] duration-200 focus-visible:outline-none',
          hasInput && !thinking ? 'cursor-pointer' : 'cursor-default',
          hasInput ? 'bg-accent text-accent-fg' : 'bg-surface text-(--fg-3)',
          thinking ? 'opacity-50' : 'opacity-100'
        )}
      >
        <span>Wyślij</span>
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
