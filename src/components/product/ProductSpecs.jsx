import { CATEGORY } from '../../data/products.js';
import { discountPct, money, stockInfo } from '../../utils/format.js';

export default function ProductSpecs({ product: p }) {
  const off = discountPct(p);
  const rows = [
    ['Category', CATEGORY],
    ['Department', p.sub],
    p.brand && ['Brand', p.brand],
    ['SKU / UPC', p.sku || 'Not listed'],
    ['Pack / format', p.pack || 'Each'],
    ['Original price', p.compareAt ? money(p.compareAt) : p.price != null ? money(p.price) : 'On request'],
    ['Discount', off ? `${off}%` : 'None'],
    ['Final price', p.price != null ? money(p.price) : 'On request'],
    ['Availability', stockInfo(p).text],
  ].filter(Boolean);

  return (
    <table className="specs">
      <tbody>{rows.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody>
    </table>
  );
}
