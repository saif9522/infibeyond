export const money = v =>
  '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const esc = s =>
  String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

/** Discount percentage, or 0 when the product isn't on sale. */
export const discountPct = p =>
  p.compareAt && p.price ? Math.round((1 - p.price / p.compareAt) * 100) : 0;

/** Most a customer can order: the stock count, or 99 when stock isn't tracked. */
export const maxQty = p => (p.stock && p.stock > 0 ? p.stock : 99);

export function stockInfo(p) {
  if (p.stock === 0) return { cls: 'out', text: 'Out of stock', canBuy: false };
  if (p.stock === null) return { cls: 'var', text: 'Available in options', canBuy: true };
  if (p.stock <= 3) return { cls: 'low', text: `Only ${p.stock} left`, canBuy: true };
  return { cls: 'in', text: `In stock · ${p.stock}`, canBuy: true };
}

export const isValidEmail = v => /^\S+@\S+\.\S+$/.test(v);
