import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

export const SKINS = [
  { id: 'fresh', label: 'Teal and coral theme', swatch: 'linear-gradient(135deg,#0B3D3A 50%,#FF6B4A 50%)' },
  { id: 'night', label: 'Black and orange theme', swatch: 'linear-gradient(135deg,#000 50%,#F7931E 50%)' },
  { id: 'lime', label: 'White and lime theme', swatch: 'linear-gradient(135deg,#fff 50%,#C5F02F 50%)', border: '#ccc' },
];

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [skin, setSkin] = useLocalStorage('ib_skin', 'fresh');
  const [mode, setMode] = useLocalStorage('ib_theme', null); // null = follow the device

  useEffect(() => { document.documentElement.dataset.skin = skin; }, [skin]);
  useEffect(() => {
    if (mode) document.documentElement.dataset.theme = mode;
    else delete document.documentElement.dataset.theme;
  }, [mode]);

  const toggleMode = () => {
    const dark = mode ? mode === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setMode(dark ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ skin, setSkin, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
