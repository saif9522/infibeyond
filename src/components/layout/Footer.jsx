import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext.jsx';

const STORE_EMAIL = 'infoinfibeyond@gmail.com';

export default function Footer() {
  const { toggleMode } = useTheme();
  return (
    <footer className="site">
      <div className="wrap fgrid">
        <div>
          <h4>infibeyond.com</h4>
          <p style={{ margin: 0, maxWidth: '46ch' }}>
            A store dedicated to general merchandise: automotive care, phone accessories, toys and novelties,
            household and personal care, and retail displays.
          </p>
          <button className="linkbtn theme-toggle" onClick={toggleMode}>Switch light / dark</button>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">All products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li>Prices in USD</li>
            <li>Wholesale quantities</li>
            <li>Some items require age verification (21+)</li>
          </ul>
        </div>
        <div>
          <h4>Contact us</h4>
          <ul>
            <li><a className="mail" href={`mailto:${STORE_EMAIL}`}>{STORE_EMAIL}</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
