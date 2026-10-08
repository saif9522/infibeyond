import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../data/products.js';
import { shopUrl } from '../../hooks/useShopFilters.js';
import SectionHeader from './SectionHeader.jsx';

const BRANDS = Object.entries(
  PRODUCTS.reduce((m, p) => { if (p.brand) m[p.brand] = (m[p.brand] || 0) + 1; return m; }, {}),
).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

export default function BrandWall() {
  const navigate = useNavigate();
  return (
    <section className="sec">
      <SectionHeader title="Brands we carry" text="Tap a brand to see its products." />
      <div className="brandwall">
        {BRANDS.map(([brand, n]) => (
          <button className="brand" key={brand} onClick={() => navigate(shopUrl({ q: brand }))}>
            {brand}<small>{n}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
