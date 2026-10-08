import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { discountPct, maxQty, money } from '../../utils/format.js';
import ProductImage from '../product/ProductImage.jsx';
import QuantitySelector from '../common/QuantitySelector.jsx';

export default function CartLine({ product: p, qty }) {
  const { setQty } = useCart();
  return (
    <div className="cline">
      <Link className="ci" to={`/product/${p.id}`}><ProductImage product={p} /></Link>
      <div>
        <h3><Link to={`/product/${p.id}`} style={{ textDecoration: 'none' }}>{p.n}</Link></h3>
        <div className="sub">{p.sku ? `SKU ${p.sku}` : p.id.toUpperCase()} · {p.sub}</div>
        <div className="sub">
          {p.price != null ? <>
            {money(p.price)} each
            {p.compareAt && <> <s>{money(p.compareAt)}</s> <b style={{ color: 'var(--sale)' }}>-{discountPct(p)}%</b></>}
          </> : 'Price on request'}
        </div>
      </div>
      <div className="right">
        <QuantitySelector value={qty} min={0} max={maxQty(p)} onChange={v => v !== '' && setQty(p.id, v)} />
        <b>{p.price != null ? money(p.price * qty) : 'Quote'}</b>
        <button className="linkbtn" onClick={() => setQty(p.id, 0)}>Remove</button>
      </div>
    </div>
  );
}
