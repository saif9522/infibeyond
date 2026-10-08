import { discountPct } from './format.js';

export const SORT_OPTIONS = [
  ['featured', 'Featured'],
  ['price-asc', 'Price: low to high'],
  ['price-desc', 'Price: high to low'],
  ['discount', 'Biggest discount'],
  ['stock', 'Most in stock'],
  ['name-asc', 'Name: A to Z'],
  ['name-desc', 'Name: Z to A'],
];

const priceOrMax = p => (p.price == null ? Infinity : p.price);

const SORTERS = {
  featured: (a, b) => a.order - b.order,
  'price-asc': (a, b) => priceOrMax(a) - priceOrMax(b),
  'price-desc': (a, b) => (b.price ?? -1) - (a.price ?? -1),
  'name-asc': (a, b) => a.n.localeCompare(b.n),
  'name-desc': (a, b) => b.n.localeCompare(a.n),
  stock: (a, b) => (b.stock ?? 50) - (a.stock ?? 50),
  discount: (a, b) => discountPct(b) - discountPct(a) || a.order - b.order,
};

export function filterProducts(products, f) {
  const q = f.q.trim().toLowerCase();
  const min = parseFloat(f.min);
  const max = parseFloat(f.max);
  const hasPrice = !isNaN(min) || !isNaN(max);

  return products
    .filter(p => {
      if (q && !`${p.n} ${p.sku} ${p.brand || ''} ${p.sub}`.toLowerCase().includes(q)) return false;
      if (f.depts.length && !f.depts.includes(p.sub)) return false;
      if (hasPrice) {
        if (p.price == null) return false;
        if (!isNaN(min) && p.price < min) return false;
        if (!isNaN(max) && p.price > max) return false;
      }
      if (f.avail === 'in' && p.stock === 0) return false;
      if (f.avail === 'out' && p.stock !== 0) return false;
      if (f.sale && !p.compareAt) return false;
      return true;
    })
    .sort(SORTERS[f.sort] || SORTERS.featured);
}
