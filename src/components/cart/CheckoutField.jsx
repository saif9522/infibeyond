export default function CheckoutField({ name, label, type = 'text', required = true, value, error, onChange }) {
  return (
    <label className={`f${error ? ' invalid' : ''}`}>
      <span>{label}{!required && <span style={{ color: 'var(--muted)', fontWeight: 400 }}> (optional)</span>}</span>
      <input name={name} type={type} value={value || ''} required={required} onChange={e => onChange(name, e.target.value)}
        aria-invalid={!!error} />
      <span className="err">Enter {label.toLowerCase()}.</span>
    </label>
  );
}
