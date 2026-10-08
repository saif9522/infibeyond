import { Link, useParams } from 'react-router-dom';
import { CATEGORY, PRODUCTS, getProduct } from '../data/products.js';
import { shopUrl } from '../hooks/useShopFilters.js';
import { discountPct, money } from '../utils/format.js';
import ProductGallery from '../components/product/ProductGallery.jsx';
import PriceTag from '../components/product/PriceTag.jsx';
import StockStatus from '../components/product/StockStatus.jsx';
import BuyBox from '../components/product/BuyBox.jsx';
import ProductSpecs from '../components/product/ProductSpecs.jsx';
import ProductGrid from '../components/product/ProductGrid.jsx';
import EmptyState from '../components/common/EmptyState.jsx';

export default function ProductPage() {
  const { id } = useParams();
  const p = getProduct(id);

  if (!p) {
    return (
      <div className="wrap">
        <EmptyState title="This product isn’t in the catalog" style={{ margin: '40px 0' }}>
          <Link className="btn" to="/shop">Browse all products</Link>
        </EmptyState>
      </div>
    );
  }

  const off = discountPct(p);
  const related = PRODUCTS.filter(x => x.sub === p.sub && x.id !== p.id).slice(0, 4);

  return (
    <div className="wrap">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link> / <Link to="/shop">{CATEGORY}</Link> / <Link to={shopUrl({ dept: p.sub })}>{p.sub}</Link> / {p.n}
      </nav>
      <div className="detail">
        <ProductGallery product={p} key={p.id} />
        <div className="dinfo">
          <span className="pcat">{CATEGORY} / {p.sub}</span>
          <h1>{p.n}</h1>
          <div className="meta-row">
            <span>SKU <b>{p.sku || '—'}</b></span>
            <span>Item <b>{p.id.toUpperCase()}</b></span>
            {p.brand && <span>Brand <b>{p.brand}</b></span>}
          </div>
          <StockStatus product={p} />
          <div className="dprice"><PriceTag product={p} large /></div>
          {p.compareAt && (
            <p className="saving">Original price {money(p.compareAt)} · {off}% discount · You save {money(p.compareAt - p.price)}</p>
          )}
          <p className="lead">{p.d}</p>
          <BuyBox product={p} key={p.id} />
          <ProductSpecs product={p} />
        </div>
      </div>
      {related.length > 0 && (
        <section className="related" style={{ paddingBottom: 50 }}>
          <h2>More in {p.sub}</h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
