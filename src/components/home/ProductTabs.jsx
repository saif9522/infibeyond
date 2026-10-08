import { useState } from 'react';
import HomeProductCard from '../product/HomeProductCard.jsx';
import SectionHeader from './SectionHeader.jsx';

/** tabs: { [tabName]: Product[] } */
export default function ProductTabs({ title, tabs }) {
  const names = Object.keys(tabs);
  const [active, setActive] = useState(names[0]);
  return (
    <section className="sec">
      <SectionHeader title={title} linkTo="/shop" linkText="View all" />
      <div className="tabs" role="tablist">
        {names.map(n => (
          <button key={n} role="tab" aria-selected={n === active} onClick={() => setActive(n)}>{n}</button>
        ))}
      </div>
      <div className="showcase" role="tabpanel" aria-label={active}>
        {tabs[active].map(p => <HomeProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
