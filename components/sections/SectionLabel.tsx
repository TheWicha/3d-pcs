export default function SectionLabel({ code, label }: { code: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}
      >
        {code}
      </span>
      <span
        style={{
          width: 32,
          height: 1,
          background: 'var(--border)',
          display: 'inline-block',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--fg-3)',
        }}
      >
        {label}
      </span>
    </div>
  );
}
