import { PRODUCTS } from '../../data/products.js';
import { SORT_OPTIONS } from '../../utils/filterProducts.js';
import Icon from '../common/Icon.jsx';

export default function ShopToolbar({ count, sort, onSort, onOpenFilters }) {
  return (
    <div className="toolbar">
      <button className="btn ghost filters-toggle" onClick={onOpenFilters}><Icon name="filter" />Filters</button>
      <span className="count">{count} <span>of {PRODUCTS.length} products</span></span>
      <label className="sr" htmlFor="sort">Sort by</label>
      <select id="sort" value={sort} onChange={e => onSort(e.target.value)}>
        {SORT_OPTIONS.map(([v, t]) => <option key={v} value={v}>{t}</option>)}
      </select>
    </div>
  );
}
