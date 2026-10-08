import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useToast } from '../context/ToastContext.jsx';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { isValidEmail, money } from '../utils/format.js';
import { loadJSON, saveJSON } from '../utils/storage.js';
import CheckoutField from '../components/cart/CheckoutField.jsx';
import OrderSummary from '../components/cart/OrderSummary.jsx';

const REQUIRED = ['name', 'email', 'phone', 'addr', 'city', 'state', 'zip', 'country'];
const PAYMENTS = [
  ['invoice', 'Pay on invoice', 'We confirm stock and prices, then send an invoice.'],
  ['card', 'Card on confirmation', 'Visa, Mastercard, Amex or Discover, charged after we confirm the order.'],
  ['cod', 'Pay on pickup / delivery', 'For local orders.'],
];

export default function CheckoutPage() {
  const { items, totals, clearCart } = useCart();
  const showToast = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useLocalStorage('ib_checkout', { pay: 'invoice' });
  const [age, setAge] = useState(false);
  const [errors, setErrors] = useState({});

  if (!items.length) return <Navigate to="/cart" replace />;

  const set = (name, value) => {
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: false }));
  };
  const field = (name, label, type = 'text', required = true) => (
    <CheckoutField name={name} label={label} type={type} required={required} value={form[name]} error={errors[name]} onChange={set} />
  );

  const submit = e => {
    e.preventDefault();
    const errs = {};
    REQUIRED.forEach(k => { if (!(form[k] || '').trim()) errs[k] = true; });
    if (form.email && !isValidEmail(form.email)) errs.email = true;
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) { document.querySelector(`[name="${first}"]`)?.focus(); return; }
    if (!age) { showToast('Confirm the age statement to place the order'); return; }

    const order = {
      oid: 'IB-' + Date.now().toString(36).toUpperCase().slice(-6),
      at: new Date().toISOString(),
      customer: form,
      items: items.map(({ product: p, qty }) => ({ id: p.id, sku: p.sku, name: p.n, qty, price: p.price })),
      totals,
    };
    saveJSON('ib_orders', [order, ...loadJSON('ib_orders', [])].slice(0, 20));
    clearCart();
    navigate('/order-success', { state: { order }, replace: true });
  };

  return (
    <div className="wrap">
      <h1 className="page-title">Checkout</h1>
      <div className="cart-grid">
        <form className="co" onSubmit={submit} noValidate>
          <fieldset>
            <legend>Business &amp; contact</legend>
            <div className="frow">{field('name', 'Full name')}{field('company', 'Business name', 'text', false)}</div>
            <div className="frow" style={{ marginTop: 12 }}>{field('email', 'Email', 'email')}{field('phone', 'Phone', 'tel')}</div>
          </fieldset>
          <fieldset>
            <legend>Shipping address</legend>
            {field('addr', 'Street address')}
            <div className="frow" style={{ marginTop: 12 }}>{field('city', 'City')}{field('state', 'State / region')}</div>
            <div className="frow" style={{ marginTop: 12 }}>{field('zip', 'ZIP / postal code')}{field('country', 'Country')}</div>
          </fieldset>
          <fieldset>
            <legend>Payment</legend>
            {PAYMENTS.map(([v, title, text]) => (
              <label className="radio" key={v}>
                <input type="radio" name="pay" value={v} checked={form.pay === v} onChange={() => set('pay', v)} />
                <span><b>{title}</b><small>{text}</small></span>
              </label>
            ))}
            <label className="f" style={{ marginTop: 14 }}>
              <span>Order notes <span style={{ color: 'var(--muted)', fontWeight: 400 }}>(optional)</span></span>
              <textarea name="notes" placeholder="Flavors, colors or delivery instructions" value={form.notes || ''} onChange={e => set('notes', e.target.value)} />
            </label>
            <label className="check" style={{ marginTop: 10 }}>
              <input type="checkbox" checked={age} onChange={e => setAge(e.target.checked)} />
              I confirm I am 21 or older where age-restricted items are included.
            </label>
          </fieldset>
          <button className="btn block" style={{ height: 50 }} type="submit">Place order</button>
        </form>
        <div>
          <OrderSummary>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: 12, display: 'grid', gap: 8 }}>
              {items.map(({ product: p, qty }) => (
                <div className="srow" style={{ fontSize: 14 }} key={p.id}>
                  <span>{qty} × {p.n}</span><span>{p.price != null ? money(p.price * qty) : 'Quote'}</span>
                </div>
              ))}
            </div>
          </OrderSummary>
        </div>
      </div>
    </div>
  );
}
