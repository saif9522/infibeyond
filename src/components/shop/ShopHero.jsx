import { DEPARTMENTS, PRODUCTS } from '../../data/products.js';

export default function ShopHero() {
  const available = PRODUCTS.filter(p => p.stock !== 0).length;
  const facts = [[PRODUCTS.length, 'products'], [DEPARTMENTS.length, 'departments'], [available, 'available now']];
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>General merchandise, stocked for your shelves.</h1>
          <p>Automotive care, phone accessories, toys, household and personal care, and ready-to-sell displays. One department, nothing else.</p>
        </div>
        <div className="hero-facts">
          {facts.map(([n, label]) => <div className="fact" key={label}><b>{n}</b><span>{label}</span></div>)}
        </div>
      </div>
    </section>
  );
}
