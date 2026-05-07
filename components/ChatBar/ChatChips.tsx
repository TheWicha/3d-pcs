import Chip from '@/components/ui/Chip';
import { CHIPS } from '@/constants';

type ChatChipsProps = {
  onChipClick: (label: string) => void;
};

export function ChatChips({ onChipClick }: ChatChipsProps) {
  return (
    <div className="flex flex-col gap-2 mb-3">
      {CHIPS.map((chip, i) => (
        <Chip key={i} onClick={() => onChipClick(chip.label)}>
          {chip.label}
        </Chip>
      ))}
    </div>
  );
}
