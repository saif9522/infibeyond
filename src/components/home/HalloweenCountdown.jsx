import { Link } from 'react-router-dom';
import { pickProducts } from '../../data/products.js';
import { useCountdown } from '../../hooks/useCountdown.js';
import { shopUrl } from '../../hooks/useShopFilters.js';
import Pill from '../common/Pill.jsx';
import ProductStage from '../product/ProductStage.jsx';

const year = new Date().getFullYear();
const HALLOWEEN = new Date(year, 9, 31, 23, 59, 59);

export default function HalloweenCountdown() {
  const t = useCountdown(HALLOWEEN);
  const units = [[t.days, 'days'], [t.hours, 'hours'], [t.mins, 'mins'], [t.secs, 'secs']];
  return (
    <section className="countdown" aria-label="Halloween countdown">
      <div>
        <Pill>Halloween {year}</Pill>
        <h2>Stock the spooky shelf before the 31st</h2>
        <p>Squishy pumpkins, sugar dumplings and spinners, in counter-ready displays.</p>
        <Link className="btn-or" to={shopUrl({ dept: 'Toys & Novelties' })}>Shop Halloween toys</Link>
      </div>
      <div className="timer">
        {units.map(([v, label]) => <div key={label}><b>{String(v).padStart(2, '0')}</b><span>{label}</span></div>)}
      </div>
      <ProductStage products={pickProducts('Toy Big Cheese', 'Toy Halloween Sugar Dumpling', 'Toy Bead Orbit')} />
    </section>
  );
}
