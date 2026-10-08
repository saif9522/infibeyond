import { useState } from 'react';
import ProductImage from './ProductImage.jsx';

export default function ProductGallery({ product }) {
  const [view, setView] = useState(0);
  return (
    <div>
      <div className="gallery-main"><ProductImage product={product} variant={view} key={view} /></div>
      {!product.img && (
        <div className="thumbs">
          {[0, 1, 2].map(v => (
            <button key={v} className="thumb" aria-pressed={v === view} aria-label={`Image ${v + 1}`} onClick={() => setView(v)}>
              <ProductImage product={product} variant={v} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
