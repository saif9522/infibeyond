import { money } from '../../utils/format.js';

/** Removable tags for every filter that is switched on. */
export default function ActiveFilters({ filters: f, update }) {
  const tags = [
    ...f.depts.map(d => [d, () => update({ depts: f.depts.filter(x => x !== d) })]),
    f.q && [`“${f.q}”`, () => update({ q: '' })],
    (f.min || f.max) && [`${f.min ? money(+f.min) : '$0'} – ${f.max ? money(+f.max) : 'any'}`, () => update({ min: '', max: '' })],
    f.avail !== 'all' && [f.avail === 'in' ? 'In stock' : 'Out of stock', () => update({ avail: 'all' })],
    f.sale && ['On sale', () => update({ sale: false })],
  ].filter(Boolean);

  if (!tags.length) return null;
  return (
    <div className="active-tags">
      {tags.map(([label, remove]) => (
        <span className="atag" key={label}>{label}<button onClick={remove} aria-label={`Remove filter ${label}`}>×</button></span>
      ))}
    </div>
  );
}
