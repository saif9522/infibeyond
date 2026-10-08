import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/** "More" button with a dropdown of the departments that didn't fit in the bar. */
export default function MoreMenu({ items, isActive, onSelect }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const btnRef = useRef(null);
  const closeTimer = useRef();
  const hoverOpenedAt = useRef(0);
  const { pathname, search } = useLocation();
  const activeInside = items.some(isActive);

  // close when the page or filters change
  useEffect(() => setOpen(false), [pathname, search]);

  // close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onDown = e => { if (!wrapRef.current?.contains(e.target)) setOpen(false); };
    const onKey = e => { if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); } };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const focusItem = idx => {
    const els = wrapRef.current?.querySelectorAll('[role="menuitem"]');
    if (els?.length) els[(idx + els.length) % els.length].focus();
  };

  const onMenuKey = e => {
    const els = [...wrapRef.current.querySelectorAll('[role="menuitem"]')];
    const i = els.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); focusItem(i + 1); }
    if (e.key === 'ArrowUp') { e.preventDefault(); focusItem(i - 1); }
    if (e.key === 'Home') { e.preventDefault(); focusItem(0); }
    if (e.key === 'End') { e.preventDefault(); focusItem(els.length - 1); }
    if (e.key === 'Tab') setOpen(false);
  };

  const hoverOpen = () => {
    if (!canHover()) return;
    clearTimeout(closeTimer.current);
    if (!open) hoverOpenedAt.current = Date.now();
    setOpen(true);
  };
  const hoverClose = () => { if (canHover()) closeTimer.current = setTimeout(() => setOpen(false), 180); };

  return (
    <div className="more" ref={wrapRef} onMouseEnter={hoverOpen} onMouseLeave={hoverClose}>
      <button ref={btnRef} type="button" className={`chip more-btn${activeInside ? ' has-active' : ''}`}
        aria-haspopup="menu" aria-expanded={open}
        onClick={() => {
          // a click right after hover-open should keep the menu open, not toggle it shut
          if (Date.now() - hoverOpenedAt.current < 600) setOpen(true); else setOpen(o => !o);
        }}
        onKeyDown={e => { if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setTimeout(() => focusItem(0)); } }}>
        More <span className="caret" aria-hidden="true" />
      </button>

      {open && (
        <div className="more-menu" role="menu" aria-label="More departments" onKeyDown={onMenuKey}>
          {items.map(item => (
            <button key={item.key} type="button" role="menuitem" className={`more-item${isActive(item) ? ' on' : ''}`}
              onClick={() => { setOpen(false); onSelect(item.dept); }}>
              <span>{item.label}</span>
              <small>{item.count}</small>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
