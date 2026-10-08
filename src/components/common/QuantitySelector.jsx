export default function QuantitySelector({ value, onChange, max = 99, min = 1, label = 'Quantity' }) {
  const clamp = v => Math.min(max, Math.max(min, parseInt(v, 10) || min));
  return (
    <div className="qty" role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(clamp(value - 1))} aria-label="Decrease">−</button>
      <input type="number" inputMode="numeric" min={min} max={max} value={value} aria-label={label}
        onChange={e => onChange(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
        onBlur={e => onChange(clamp(e.target.value))} />
      <button type="button" onClick={() => onChange(clamp(value + 1))} aria-label="Increase">+</button>
    </div>
  );
}
