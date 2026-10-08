import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { CATEGORY, DEPARTMENTS, PRODUCTS } from '../../data/products.js';
import { shopUrl } from '../../hooks/useShopFilters.js';
import MoreMenu from './MoreMenu.jsx';

const ITEMS = [
  { key: '__all', label: `All ${CATEGORY}`, dept: undefined, count: PRODUCTS.length },
  ...DEPARTMENTS.map(d => ({ key: d, label: d, dept: d, count: PRODUCTS.filter(p => p.sub === d).length })),
];
const GAP = 4; // must match .catnav gap

/**
 * Department bar: shows as many departments as fit on one line,
 * and puts the rest in a "More" dropdown. Re-measures when the screen size changes.
 */
export default function DepartmentNav() {
  const { pathname } = useLocation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const measureRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS.length);

  const depts = pathname === '/shop' ? params.getAll('dept') : [];
  const onShop = pathname === '/shop';
  const isActive = item => (item.dept ? depts.length === 1 && depts[0] === item.dept : onShop && depts.length === 0);

  const measure = useCallback(() => {
    const nav = navRef.current, box = measureRef.current;
    if (!nav || !box) return;
    const widths = [...box.querySelectorAll('[data-measure="item"]')].map(el => el.offsetWidth);
    const moreWidth = box.querySelector('[data-measure="more"]').offsetWidth;
    const available = nav.clientWidth;

    const total = widths.reduce((a, w) => a + w + GAP, -GAP);
    if (total <= available) { setVisibleCount(ITEMS.length); return; }

    let used = moreWidth, count = 0;
    for (const w of widths) {
      if (used + GAP + w > available) break;
      used += GAP + w; count++;
    }
    setVisibleCount(Math.max(1, count));
  }, []);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(navRef.current);
    document.fonts?.ready.then(measure); // widths change once the web font loads
    return () => ro.disconnect();
  }, [measure]);

  const go = dept => { navigate(shopUrl({ dept })); window.scrollTo({ top: 0 }); };
  const visible = ITEMS.slice(0, visibleCount);
  const hidden = ITEMS.slice(visibleCount);

  return (
    <nav className="catnav" ref={navRef} aria-label={`${CATEGORY} departments`}>
      {visible.map(item => (
        <button key={item.key} className="chip" aria-pressed={isActive(item)} onClick={() => go(item.dept)}>
          {item.label}
        </button>
      ))}

      {hidden.length > 0 && (
        <MoreMenu items={hidden} isActive={isActive} onSelect={go} />
      )}

      {/* invisible copy used only to measure each button's width */}
      <div className="catnav-measure" ref={measureRef} aria-hidden="true">
        {ITEMS.map(item => <span key={item.key} className="chip" data-measure="item">{item.label}</span>)}
        <span className="chip more-btn" data-measure="more">More <span className="caret" /></span>
      </div>
    </nav>
  );
}
