export default function EmptyState({ title, text, children, style }) {
  return (
    <div className="empty" style={style}>
      <h3>{title}</h3>
      {text && <p style={{ color: 'var(--muted)' }}>{text}</p>}
      {children}
    </div>
  );
}
