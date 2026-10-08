import { PRODUCTS, pickProducts } from '../data/products.js';
import { shopUrl } from '../hooks/useShopFilters.js';
import { discountPct, money } from '../utils/format.js';
import HeroCarousel from '../components/home/HeroCarousel.jsx';
import PromoTile from '../components/home/PromoTile.jsx';
import Perks from '../components/home/Perks.jsx';
import DepartmentGrid from '../components/home/DepartmentGrid.jsx';
import HalloweenCountdown from '../components/home/HalloweenCountdown.jsx';
import ProductTabs from '../components/home/ProductTabs.jsx';
import BrandWall from '../components/home/BrandWall.jsx';
import Newsletter from '../components/home/Newsletter.jsx';

const auto = PRODUCTS.filter(p => p.sub === 'Automotive Care');

const SLIDES = [
  { pill: 'New season stock', title: 'Jet torches, ready for the counter', text: 'Refillable butane torches and 12-count displays, from $9.75.',
    cta: 'Shop torches', dept: 'Torches', products: pickProducts('Turbo Curve Torch', 'AK47 Torch', 'Spark Cloud Torch 12CT') },
  { pill: `${auto.length} automotive products`, title: 'Keep every engine running', text: 'STP fuel treatments, brake and steering fluids, motor oil and gas cans.',
    cta: 'Shop auto care', dept: 'Automotive Care', products: pickProducts('STP Octane Booster', 'STP Super Concentrated Fuel Cleaner', 'STP Gas Treatment') },
  { pill: 'Halloween edition', title: 'Squishies and spinners for spooky season', text: 'Pumpkins, sugar dumplings, big cheese and light-up spinners.',
    cta: 'Shop toys', dept: 'Toys & Novelties', products: pickProducts('Toy Halloween Sugar Dumpling', 'Toy Light Spinner', 'Toy Big Spinner') },
];

const TABS = {
  'New arrivals': pickProducts('Toy Light Spinner', 'Spark Pixels Torch 12CT', 'Spark Cloud Torch 12CT', 'Tyson Eye Drop',
    'Toy Halloween Sugar Dumpling', 'Toy Big Butter', 'Wegacell Display 9936', 'Eyez Sport Sunglass'),
  'Deals & under $10': [
    ...PRODUCTS.filter(p => p.compareAt),
    ...PRODUCTS.filter(p => !p.compareAt && p.price != null && p.price <= 10).sort((a, b) => a.price - b.price),
  ].slice(0, 8),
  'Auto care': auto.slice(0, 8),
  Torches: PRODUCTS.filter(p => p.sub === 'Torches'),
  'Best stocked': PRODUCTS.filter(p => p.stock).sort((a, b) => b.stock - a.stock).slice(0, 8),
};

export default function HomePage() {
  const [energy] = pickProducts('5 Hour Energy Extra Strength');
  return (
    <div className="home">
      <div className="wrap">
        <div className="bento">
          <HeroCarousel slides={SLIDES} />
          <PromoTile to={`/product/${energy.id}`} color="var(--h2)" pill="On sale" title="5-hour Energy Extra Strength"
            big={`-${discountPct(energy)}%`} text={`Now ${money(energy.price)}, was ${money(energy.compareAt)}`}
            linkText="Shop the deal" products={[energy]} />
          <PromoTile to={shopUrl({ dept: 'Electronics & Charging' })} color="var(--h3)" pill="Phone accessories"
            title="Wegacell chargers and cables" text={`Cables from ${money(3)}, plus LED countertop displays.`}
            linkText="Shop charging" products={pickProducts('Wegacell Type C Lightning Charger', 'Wegacell USB Car Charger', 'Wegacell USB Wall Charger')} />
        </div>
        <Perks />
        <DepartmentGrid />
        <HalloweenCountdown />
        <ProductTabs title="Popular right now" tabs={TABS} />
        <BrandWall />
        <Newsletter />
      </div>
    </div>
  );
}
