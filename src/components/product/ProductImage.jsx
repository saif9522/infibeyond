import { useState } from 'react';
import { drawProductArt } from '../../utils/productArt.js';

/**
 * Shows the product photo from /public/images.
 * Falls back to a built-in illustration if there is no photo or it fails to load.
 */
export default function ProductImage({ product, variant = 0 }) {
  const [failed, setFailed] = useState(false);

  if (product.img && variant === 0 && !failed) {
    return (
      <img className="photo" src={`images/${product.img}`} alt={product.n}
        loading="lazy" decoding="async" onError={() => setFailed(true)} />
    );
  }
  return <span className="art" dangerouslySetInnerHTML={{ __html: drawProductArt(product, variant) }} />;
}
