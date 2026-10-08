import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Infibeyond home">
      <span className="mark">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round">
          <path d="M6 12c0-2.2 1.6-4 3.6-4 3.6 0 4.8 8 8.4 8 2 0 3.6-1.8 3.6-4s-1.6-4-3.6-4c-3.6 0-4.8 8-8.4 8C7.6 16 6 14.2 6 12z" transform="translate(-3 0)" />
        </svg>
      </span>
      <span>infibeyond<small>General Merchandise</small></span>
    </Link>
  );
}
