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
          className="text-left bg-surface border border-(--border) text-(--fg-2) font-sans text-base px-4.5 py-3 cursor-pointer transition-[background,color,border-color] duration-150 hover:border-accent hover:text-foreground"
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
}
