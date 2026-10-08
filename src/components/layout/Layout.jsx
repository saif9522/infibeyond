import { Outlet } from 'react-router-dom';
import TopBar from './TopBar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Header />
      <main id="app"><Outlet /></main>
      <Footer />
    </>
  );
}
