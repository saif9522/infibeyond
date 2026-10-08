import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import CartLine from '../components/cart/CartLine.jsx';
import OrderSummary from '../components/cart/OrderSummary.jsx';
import EmptyState from '../components/common/EmptyState.jsx';

export default function CartPage() {
  const { items } = useCart();
  return (
    <div className="wrap">
      <h1 className="page-title">Your cart</h1>
      {items.length === 0 ? (
        <EmptyState title="Your cart is empty" text="Browse the catalog and add products to start an order." style={{ marginBottom: 60 }}>
          <Link className="btn" to="/shop">Shop general merchandise</Link>
        </EmptyState>
      ) : (
        <div className="cart-grid">
          <div>
            {items.map(({ product, qty }) => <CartLine key={product.id} product={product} qty={qty} />)}
            <Link className="linkbtn" to="/shop">Continue shopping</Link>
          </div>
          <OrderSummary><Link className="btn block" to="/checkout">Go to checkout</Link></OrderSummary>
        </div>
      )}
    </div>
  );
}
