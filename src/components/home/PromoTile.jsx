import { Link } from 'react-router-dom';
import Pill from '../common/Pill.jsx';
import ProductStage from '../product/ProductStage.jsx';

/** Small feature banner beside the hero. `color` is a CSS color or variable. */
export default function PromoTile({ to, color, pill, title, big, text, linkText, products }) {
  return (
    <Link className="tile" to={to}
      style={{ background: `radial-gradient(circle at 80% 60%,color-mix(in srgb,var(--acc) 30%,transparent),transparent 55%),${color}` }}>
      <div>
        <Pill>{pill}</Pill>
        <h3>{title}</h3>
        {big && <div className="big">{big}</div>}
        <p>{text}</p>
        <span className="go">{linkText}</span>
      </div>
      <ProductStage products={products} />
    </Link>
  );
}
