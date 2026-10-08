import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { discountPct, money } from '../../utils/format.js';
import Icon from '../common/Icon.jsx';
import ProductImage from './ProductImage.jsx';

/** Compact card with quick add-to-cart, used on the home page. */
export default function HomeProductCard({ product: p }) {
  const { addToCart } = useCart();
  const off = discountPct(p);
  const out = p.stock === 0;
  const low = !off && p.stock && p.stock <= 3;

  return (
    <div className="hcard">
      <Link className="im" to={`/product/${p.id}`} aria-label={p.n}>
        <ProductImage product={p} />
        {off > 0 ? <span className="tagx sale">-{off}%</span> : low ? <span className="tagx low">Low stock</span> : null}
      </Link>
      <span className="sku">{p.sku ? `SKU ${p.sku}` : p.sub}</span>
      <Link className="nm" to={`/product/${p.id}`}>{p.n}</Link>
      <span className={`st${out ? ' out' : ''}`}>
        {out ? 'Out of stock' : p.stock === null ? 'Available in options' : `In stock: ${p.stock}`}
      </span>
      <div className="row2">
        <div className="pr">
          {p.price != null
            ? <><b>{money(p.price)}</b>{p.compareAt && <s>{money(p.compareAt)}</s>}</>
            : <span className="q">Price on request</span>}
        </div>
        <button className="qadd" disabled={out} onClick={() => addToCart(p.id, 1)} aria-label={`Add ${p.n} to cart`}>
          <Icon name="plus" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
