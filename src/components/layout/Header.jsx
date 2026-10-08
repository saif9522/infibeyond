import Logo from '../common/Logo.jsx';
import SearchBar from './SearchBar.jsx';
import ThemePicker from './ThemePicker.jsx';
import CartButton from './CartButton.jsx';
import DepartmentNav from './DepartmentNav.jsx';

export default function Header() {
  return (
    <header className="site">
      <div className="wrap">
        <div className="hrow">
          <Logo />
          <SearchBar />
          <ThemePicker />
          <CartButton />
        </div>
        <DepartmentNav />
      </div>
    </header>
  );
}
