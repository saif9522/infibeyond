import { FREE_SHIPPING_AT, useCart } from '../../context/CartContext.jsx';
import { money } from '../../utils/format.js';

export default function OrderSummary({ children }) {
  const { totals: t } = useCart();
  const left = Math.max(0, FREE_SHIPPING_AT - t.subtotal);
  return (
    <div className="summary">
      <h2>Order summary</h2>
      <div className="srow"><span>Subtotal</span><span>{money(t.subtotal)}</span></div>
      {t.savings > 0 && <div className="srow" style={{ color: 'var(--sale)' }}><span>Discounts</span><span>−{money(t.savings)}</span></div>}
      <div className="srow"><span>Shipping</span><span>{t.shipping ? money(t.shipping) : 'Free'}</span></div>
      <div className="srow"><span>Estimated tax (8.25%)</span><span>{money(t.tax)}</span></div>
      {t.quoted > 0 && <div className="srow"><span>Items priced on request</span><span>{t.quoted}</span></div>}
      <div className="srow total"><span>Total</span><span>{money(t.total)}</span></div>
      <div className="ship-bar"><i style={{ width: `${Math.min(100, (t.subtotal / FREE_SHIPPING_AT) * 100)}%` }} /></div>
      <p style={{ fontSize: 13, color: 'var(--muted)', margin: '0 0 14px' }}>
        {left ? `Add ${money(left)} more for free shipping.` : 'Your order ships free.'}
      </p>
      {children}
    </div>
  );
}
