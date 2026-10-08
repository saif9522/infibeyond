import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { shopUrl } from '../../hooks/useShopFilters.js';
import Pill from '../common/Pill.jsx';
import ProductStage from '../product/ProductStage.jsx';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** slides: [{ pill, title, text, cta, dept, products }] */
export default function HeroCarousel({ slides, interval = 6000 }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = n => setCurrent((n + slides.length) % slides.length);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const t = setInterval(() => { if (!document.hidden) setCurrent(c => (c + 1) % slides.length); }, interval);
    return () => clearInterval(t);
  }, [paused, interval, slides.length]);

  return (
    <div className="hero-car" aria-roledescription="carousel" aria-label="Featured"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, i) => (
        <div key={s.title} className={`slide${i === current ? ' on' : ''}`} role="group"
          aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`} aria-hidden={i !== current}>
          <div className="copy">
            <Pill>{s.pill}</Pill>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
            <Link className="btn-or" to={shopUrl({ dept: s.dept })} tabIndex={i === current ? 0 : -1}>{s.cta}</Link>
          </div>
          <ProductStage products={s.products} />
        </div>
      ))}
      <div className="car-ctrl">
        <button className="arrow" onClick={() => go(current - 1)} aria-label="Previous slide">‹</button>
        <div className="dots">
          {slides.map((s, i) => (
            <button key={s.title} aria-label={`Slide ${i + 1}`} aria-current={i === current ? 'true' : undefined} onClick={() => go(i)} />
          ))}
        </div>
        <button className="arrow" onClick={() => go(current + 1)} aria-label="Next slide">›</button>
      </div>
    </div>
  );
}
