import { discountPct, money } from '../../utils/format.js';

export default function PriceTag({ product: p, large = false }) {
  const cls = `pricetag${large ? ' lg' : ''}`;
  if (p.price == null) {
    return <div className={cls + ' quote'}><span className="now">Price on request</span></div>;
  }
  return (
    <div className={cls}>
      <span className="now">{money(p.price)}</span>
      {p.compareAt && <>
        <span className="was">{money(p.compareAt)}</span>
        <span className="off">-{discountPct(p)}%</span>
      </>}
    </div>
  );
}
