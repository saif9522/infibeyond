import { useEffect, useMemo, useState } from 'react';
import { PRODUCTS } from '../data/products.js';
import { useShopFilters } from '../hooks/useShopFilters.js';
import { filterProducts } from '../utils/filterProducts.js';
import ShopHero from '../components/shop/ShopHero.jsx';
import FiltersSidebar from '../components/shop/FiltersSidebar.jsx';
import ShopToolbar from '../components/shop/ShopToolbar.jsx';
import ActiveFilters from '../components/shop/ActiveFilters.jsx';
import ProductGrid from '../components/product/ProductGrid.jsx';
import EmptyState from '../components/common/EmptyState.jsx';

export default function ShopPage() {
  const { filters, update, clear } = useShopFilters();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const products = useMemo(() => filterProducts(PRODUCTS, filters), [filters]);

  useEffect(() => { setDrawerOpen(false); }, [filters]);

  return (
    <>
      <ShopHero />
      <div className="wrap shop">
        <FiltersSidebar filters={filters} update={update} clear={clear} open={drawerOpen} />
        <section aria-label="Products">
          <ShopToolbar count={products.length} sort={filters.sort} onSort={sort => update({ sort })} onOpenFilters={() => setDrawerOpen(true)} />
          <ActiveFilters filters={filters} update={update} />
          {products.length
            ? <ProductGrid products={products} />
            : <EmptyState title="No products match these filters" text="Remove a filter or search a shorter term.">
                <button className="btn" onClick={clear}>Clear filters</button>
              </EmptyState>}
        </section>
      </div>
      <div className={`scrim${drawerOpen ? ' show' : ''}`} onClick={() => setDrawerOpen(false)} />
    </>
  );
}
