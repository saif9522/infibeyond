import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scroll to the top whenever the page (not just the filters) changes. */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname]);
  return null;
}
