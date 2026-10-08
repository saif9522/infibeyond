import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import Icon from '../common/Icon.jsx';

export default function CartButton() {
  const { count } = useCart();
  return (
    <Link className="hbtn" to="/cart" aria-label={`Cart, ${count} items`}>
      <Icon name="cart" />
      <span className="lbl">Cart</span>
      <span className="badge-count">{count}</span>
    </Link>
  );
}
