import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

/**
 * Shop filters live in the URL (e.g. #/shop?dept=Torches&sort=price-asc),
 * so filtered views can be bookmarked and shared.
 */
export function useShopFilters() {
  const [params, setParams] = useSearchParams();

  const filters = useMemo(() => ({
    q: params.get('q') || '',
    depts: params.getAll('dept'),
    min: params.get('min') || '',
    max: params.get('max') || '',
    avail: params.get('avail') || 'all',
    sale: params.get('sale') === '1',
    sort: params.get('sort') || 'featured',
  }), [params]);

  const update = useCallback(patch => {
    const next = { ...filters, ...patch };
    const p = new URLSearchParams();
    if (next.q) p.set('q', next.q);
    next.depts.forEach(d => p.append('dept', d));
    if (next.min) p.set('min', next.min);
    if (next.max) p.set('max', next.max);
    if (next.avail !== 'all') p.set('avail', next.avail);
    if (next.sale) p.set('sale', '1');
    if (next.sort !== 'featured') p.set('sort', next.sort);
    setParams(p, { replace: true });
  }, [filters, setParams]);

  const clear = useCallback(() => setParams(new URLSearchParams(), { replace: true }), [setParams]);

  return { filters, update, clear };
}

/** Build a shop link, e.g. shopUrl({ dept: 'Torches' }) */
export function shopUrl({ dept, q } = {}) {
  const p = new URLSearchParams();
  if (q) p.set('q', q);
  if (dept) p.set('dept', dept);
  const s = p.toString();
  return '/shop' + (s ? '?' + s : '');
}
