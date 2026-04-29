type MsgTextProps = { text: string };

export function MsgText({ text }: MsgTextProps) {
  const parts = text.split(/(\*\*[^*]+\*\*|\n)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p === '\n') return <br key={i} />;
        if (p.startsWith('**') && p.endsWith('**'))
          return (
            <strong key={i} style={{ color: 'var(--fg)', fontWeight: 600 }}>
              {p.slice(2, -2)}
            </strong>
          );
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}
