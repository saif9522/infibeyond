import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { shopUrl } from '../../hooks/useShopFilters.js';
import Icon from '../common/Icon.jsx';

/** Header search. Typing opens the shop filtered by the search text. */
export default function SearchBar() {
  const { pathname } = useLocation();
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const urlQ = pathname === '/shop' ? params.get('q') || '' : '';
  const [value, setValue] = useState(urlQ);
  const typing = useRef(false);

  // keep the box in sync when the URL changes (e.g. a filter tag is removed)
  useEffect(() => { if (!typing.current) setValue(urlQ); }, [urlQ]);

  useEffect(() => {
    if (!typing.current) return;
    const t = setTimeout(() => {
      typing.current = false;
      if (pathname === '/shop') {
        const p = new URLSearchParams(params);
        value ? p.set('q', value) : p.delete('q');
        setParams(p, { replace: true });
      } else if (value) {
        navigate(shopUrl({ q: value }));
      }
    }, 250);
    return () => clearTimeout(t);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <label className="search">
      <span className="sr">Search products</span>
      <Icon name="search" />
      <input type="search" placeholder="Search by name, SKU or brand" autoComplete="off" value={value}
        onChange={e => { typing.current = true; setValue(e.target.value); }} />
    </label>
  );
}
