import { Link, Navigate, useLocation } from 'react-router-dom';
import { money } from '../utils/format.js';
import { loadJSON } from '../utils/storage.js';
import Icon from '../components/common/Icon.jsx';

export default function OrderSuccessPage() {
  const { state } = useLocation();
  const order = state?.order || loadJSON('ib_orders', [])[0];
  if (!order) return <Navigate to="/" replace />;
  const { customer: c, totals: t } = order;

  return (
    <div className="wrap">
      <div className="success">
        <div className="tick"><Icon name="check" size={32} strokeWidth={3} /></div>
        <h1 style={{ margin: 0, fontStretch: '80%' }}>Order placed</h1>
        <div className="oid">{order.oid}</div>
        <p>
          Thanks, {c.name.split(' ')[0]}. We’ll confirm availability{t.quoted ? ' and prices for items on request' : ''} by
          email at <b>{c.email}</b>.
        </p>
        <div style={{ textAlign: 'left', margin: '18px 0' }}>
          {order.items.map(i => (
            <div className="srow" style={{ fontSize: 14 }} key={i.id}>
              <span>{i.qty} × {i.name}</span><span>{i.price != null ? money(i.price * i.qty) : 'Quote'}</span>
            </div>
          ))}
          <div className="srow total"><span>Total</span><span>{money(t.total)}</span></div>
        </div>
        <Link className="btn" to="/shop">Continue shopping</Link>
      </div>
    </div>
  );
}
