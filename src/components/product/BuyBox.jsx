import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { maxQty, stockInfo } from '../../utils/format.js';
import QuantitySelector from '../common/QuantitySelector.jsx';

/** Quantity selector + Add to cart + Buy now. */
export default function BuyBox({ product: p }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const canBuy = stockInfo(p).canBuy;
  const quote = p.price == null;
  const n = parseInt(qty, 10) || 1;

  return (
    <>
      <div className="buyrow">
        <QuantitySelector value={qty} onChange={setQty} max={maxQty(p)} />
        <button className="btn" disabled={!canBuy} onClick={() => addToCart(p.id, n)}>
          {quote ? 'Add to quote' : 'Add to cart'}
        </button>
        <button className="btn ghost" disabled={!canBuy}
          onClick={() => { addToCart(p.id, n, { silent: true }); navigate('/checkout'); }}>
          {quote ? 'Request quote' : 'Buy now'}
        </button>
      </div>
      {p.age && <div className="note">Age-restricted product. Purchaser must be 21 or older; ID verification is required at checkout or delivery.</div>}
      {quote && <div className="note">A price for this item isn’t published yet. Add it to your order and we’ll confirm the price before anything is charged.</div>}
    </>
  );
}
