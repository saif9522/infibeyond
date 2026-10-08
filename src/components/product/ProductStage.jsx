import ProductImage from './ProductImage.jsx';

/** A fanned group of product photos, used inside banners. */
export default function ProductStage({ products }) {
  return (
    <div className="stage">
      {products.map(p => <div className="pt" key={p.id}><ProductImage product={p} /></div>)}
    </div>
  );
}
