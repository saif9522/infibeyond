import { Link, useNavigate } from 'react-router-dom';
import { CATEGORY } from '../../data/products.js';
import { discountPct, stockInfo } from '../../utils/format.js';
import ProductImage from './ProductImage.jsx';
import PriceTag from './PriceTag.jsx';
import StockStatus from './StockStatus.jsx';

/** Product card used in the shop grid and "More in …" lists. */
export default function ProductCard({ product: p }) {
  const navigate = useNavigate();
  const off = discountPct(p);
  const s = stockInfo(p);
  const open = () => navigate(`/product/${p.id}`);

  return (
    <article className="pcard">
      <div className="pimg" onClick={open} role="link" tabIndex={-1} aria-label={p.n}>
        <ProductImage product={p} />
        <div className="ribbon">
          {off > 0 && <span className="rb sale">{off}% off</span>}
          {p.stock === 0 && <span className="rb oos">Out of stock</span>}
          {p.stock !== 0 && s.cls === 'low' && <span className="rb low">Low stock</span>}
        </div>
      </div>
      <div className="pbody">
        <span className="pcat">{CATEGORY} / {p.sub}</span>
        <h3 className="pname" onClick={open}>{p.n}</h3>
        <span className="psku">{p.sku ? `SKU ${p.sku}` : `Item ${p.id.toUpperCase()}`}</span>
        <p className="pdesc">{p.d}</p>
        <StockStatus product={p} />
        <div className="pfoot">
          <PriceTag product={p} />
          <Link className="btn ghost block" to={`/product/${p.id}`}>View details</Link>
        </div>
      </div>
    </article>
  );
}
