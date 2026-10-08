import { useNavigate } from 'react-router-dom';
import { DEPARTMENTS, PRODUCTS } from '../../data/products.js';
import { shopUrl } from '../../hooks/useShopFilters.js';
import ProductImage from '../product/ProductImage.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function DepartmentGrid() {
  const navigate = useNavigate();
  return (
    <section className="sec">
      <SectionHeader title="Shop by department"
        text={`${PRODUCTS.length} general merchandise products across ${DEPARTMENTS.length} departments.`}
        linkTo="/shop" linkText="See all products" />
      <div className="depts">
        {DEPARTMENTS.map(d => {
          const list = PRODUCTS.filter(p => p.sub === d);
          const cover = list.find(p => p.img && p.stock) || list.find(p => p.img) || list[0];
          return (
            <button className="dept" key={d} onClick={() => navigate(shopUrl({ dept: d }))}>
              <span className="di"><ProductImage product={cover} /></span>
              <b>{d}</b>
              <span>{list.length} product{list.length > 1 ? 's' : ''}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
