import { Link } from 'react-router-dom';

export default function SectionHeader({ title, text, linkTo, linkText }) {
  return (
    <div className="sec-head">
      <h2>{title}</h2>
      {text && <p>{text}</p>}
      {linkTo && <Link to={linkTo}>{linkText}</Link>}
    </div>
  );
}
