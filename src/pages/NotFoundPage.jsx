import { Link } from 'react-router-dom';
import EmptyState from '../components/common/EmptyState.jsx';

export default function NotFoundPage() {
  return (
    <div className="wrap">
      <EmptyState title="This page doesn’t exist" text="Head back to the store to keep shopping." style={{ margin: '40px 0' }}>
        <Link className="btn" to="/">Go to the home page</Link>
      </EmptyState>
    </div>
  );
}
