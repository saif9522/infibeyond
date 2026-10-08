import { CATEGORY, DEPARTMENTS, PRODUCTS } from '../../data/products.js';
import PriceRangeFilter from './PriceRangeFilter.jsx';

const countIn = d => PRODUCTS.filter(p => p.sub === d).length;
const AVAILABILITY = [['all', 'All items'], ['in', 'In stock'], ['out', 'Out of stock']];

export default function FiltersSidebar({ filters, update, clear, open }) {
  const toggleDept = d => update({
    depts: filters.depts.includes(d) ? filters.depts.filter(x => x !== d) : [...filters.depts, d],
  });

  return (
    <aside className={`filters${open ? ' open' : ''}`} aria-label="Filters">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Filters</h2>
        <button className="linkbtn" onClick={clear}>Clear all</button>
      </div>

      <div className="fgroup">
        <h3>Category</h3>
        <label className="check"><input type="checkbox" checked disabled readOnly /> {CATEGORY}<span className="n">{PRODUCTS.length}</span></label>
      </div>

      <div className="fgroup">
        <h3>Department</h3>
        {DEPARTMENTS.map(d => (
          <label className="check" key={d}>
            <input type="checkbox" checked={filters.depts.includes(d)} onChange={() => toggleDept(d)} /> {d}
            <span className="n">{countIn(d)}</span>
          </label>
        ))}
      </div>

      <div className="fgroup">
        <h3>Price (USD)</h3>
        <PriceRangeFilter min={filters.min} max={filters.max} onChange={(min, max) => update({ min, max })} />
      </div>

      <div className="fgroup">
        <h3>Availability</h3>
        {AVAILABILITY.map(([v, t]) => (
          <label className="check" key={v}>
            <input type="radio" name="avail" value={v} checked={filters.avail === v} onChange={() => update({ avail: v })} /> {t}
          </label>
        ))}
        <label className="check">
          <input type="checkbox" checked={filters.sale} onChange={e => update({ sale: e.target.checked })} /> On sale only
          <span className="n">{PRODUCTS.filter(p => p.compareAt).length}</span>
        </label>
      </div>
    </aside>
  );
}
