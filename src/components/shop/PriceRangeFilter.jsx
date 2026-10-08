import { useEffect, useState } from 'react';

/** Min / max price inputs; applies the filter shortly after typing stops. */
export default function PriceRangeFilter({ min, max, onChange }) {
  const [lo, setLo] = useState(min);
  const [hi, setHi] = useState(max);
  useEffect(() => { setLo(min); setHi(max); }, [min, max]);
  useEffect(() => {
    if (lo === min && hi === max) return;
    const t = setTimeout(() => onChange(lo, hi), 450);
    return () => clearTimeout(t);
  }, [lo, hi]); // eslint-disable-line react-hooks/exhaustive-deps

  const clean = v => v.replace(/[^0-9.]/g, '');
  return (
    <>
      <div className="prange">
        <input inputMode="decimal" placeholder="Min" aria-label="Minimum price" value={lo} onChange={e => setLo(clean(e.target.value))} />
        <span>–</span>
        <input inputMode="decimal" placeholder="Max" aria-label="Maximum price" value={hi} onChange={e => setHi(clean(e.target.value))} />
      </div>
      <p style={{ fontSize: 12, color: 'var(--muted)', margin: '8px 0 0' }}>A price filter hides items without a published price.</p>
    </>
  );
}
