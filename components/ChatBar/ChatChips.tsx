import { CHIPS } from '@/constants';

type ChatChipsProps = {
  onChipClick: (label: string) => void;
};

export function ChatChips({ onChipClick }: ChatChipsProps) {
  return (
    <div className="flex flex-col gap-2 mb-3">
      {CHIPS.map((chip, i) => (
        <button
          key={i}
          onClick={() => onChipClick(chip.label)}
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
    </div>
  );
}
