import Text from '@/components/ui/Text';

export default function SectionLabel({ code, label }: { code: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <Text variant="mono" color="accent-text" as="span">
        {code}
      </Text>
      <span className="w-8 h-px bg-(--border) inline-block" />
      <Text variant="mono" as="span">
        {label}
      </Text>
    </div>
  );
}
