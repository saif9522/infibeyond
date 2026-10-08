import { useEffect, useState } from 'react';
import { loadJSON, saveJSON } from '../utils/storage.js';

/** useState that is remembered in the browser between visits. */
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => loadJSON(key, initial));
  useEffect(() => saveJSON(key, value), [key, value]);
  return [value, setValue];
}
