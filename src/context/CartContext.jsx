import { createContext, useCallback, useContext, useMemo } from 'react';
import { getProduct } from '../data/products.js';
import { maxQty } from '../utils/format.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { useToast } from './ToastContext.jsx';

const CartContext = createContext(null);

export const FREE_SHIPPING_AT = 1000;
const SHIPPING_FEE = 25;
const TAX_RATE = 0.0825;

export function CartProvider({ children }) {
  // cart shape: { [productId]: quantity }
  const [cart, setCart] = useLocalStorage('ib_cart', {});
  const showToast = useToast();

  const addToCart = useCallback((id, qty = 1, { silent = false } = {}) => {
    const p = getProduct(id);
    if (!p) return;
    setCart(c => ({ ...c, [id]: Math.min(maxQty(p), (c[id] || 0) + qty) }));
    if (!silent) showToast(`Added ${qty} × ${p.n}`, true);
  }, [setCart, showToast]);

  const setQty = useCallback((id, qty) => {
    const p = getProduct(id);
    setCart(c => {
      const next = { ...c };
      const v = Math.min(maxQty(p), Math.max(0, qty || 0));
      if (v) next[id] = v; else delete next[id];
      return next;
    });
  }, [setCart]);

  const clearCart = useCallback(() => setCart({}), [setCart]);

  const items = useMemo(() =>
    Object.entries(cart)
      .map(([id, qty]) => ({ product: getProduct(id), qty }))
      .filter(i => i.product), [cart]);

  const totals = useMemo(() => {
    let subtotal = 0, savings = 0, quoted = 0;
    for (const { product: p, qty } of items) {
      if (p.price == null) { quoted += qty; continue; }
      subtotal += p.price * qty;
      if (p.compareAt) savings += (p.compareAt - p.price) * qty;
    }
    const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_AT ? 0 : SHIPPING_FEE;
    const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
    return { subtotal, savings, quoted, shipping, tax, total: subtotal + shipping + tax };
  }, [items]);

  const count = items.reduce((n, i) => n + i.qty, 0);

  const value = { items, count, totals, addToCart, setQty, clearCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
