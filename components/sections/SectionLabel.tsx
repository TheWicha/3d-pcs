export default function SectionLabel({ code, label }: { code: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-[12px] tracking-[0.12em] uppercase text-(--accent-dark)">
        {code}
      </span>
      <span className="w-8 h-px bg-(--border) inline-block" />
      <span className="font-mono text-[12px] tracking-[0.12em] uppercase text-foreground">
        {label}
      </span>
    </div>
  );
}
