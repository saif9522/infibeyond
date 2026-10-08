import { stockInfo } from '../../utils/format.js';

export default function StockStatus({ product }) {
  const s = stockInfo(product);
  return <span className={`stock ${s.cls}`}>{s.text}</span>;
}
