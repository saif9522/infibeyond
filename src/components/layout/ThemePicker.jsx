import { SKINS, useTheme } from '../../context/ThemeContext.jsx';

export default function ThemePicker() {
  const { skin, setSkin } = useTheme();
  return (
    <div className="skins" role="group" aria-label="Store theme">
      {SKINS.map(s => (
        <button key={s.id} aria-label={s.label} aria-pressed={skin === s.id} onClick={() => setSkin(s.id)}
          style={{ background: s.swatch, ...(s.border ? { borderColor: skin === s.id ? undefined : s.border } : {}) }} />
      ))}
    </div>
  );
}
