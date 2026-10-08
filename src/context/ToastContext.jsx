import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ msg: '', cartLink: false, show: false });
  const timer = useRef();

  const showToast = useCallback((msg, cartLink = false) => {
    setToast({ msg, cartLink, show: true });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 2600);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className={`toast${toast.show ? ' show' : ''}`} role="status" aria-live="polite" aria-hidden={!toast.show}>
        {toast.msg && <>
          {toast.msg}
          {toast.cartLink && <Link to="/cart">View cart</Link>}
        </>}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
