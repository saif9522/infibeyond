import { useState } from 'react';
import { useToast } from '../../context/ToastContext.jsx';
import { isValidEmail } from '../../utils/format.js';
import { loadJSON, saveJSON } from '../../utils/storage.js';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const showToast = useToast();

  const submit = e => {
    e.preventDefault();
    if (!isValidEmail(email)) { showToast('Enter a valid email address'); return; }
    saveJSON('ib_news', [...loadJSON('ib_news', []), email]);
    setEmail('');
    showToast('Subscribed. Watch your inbox for weekly deals.');
  };

  return (
    <section className="news">
      <div className="box">
        <div>
          <h2>Get the weekly deals list</h2>
          <p>New general merchandise, restocks and price drops, once a week.</p>
        </div>
        <form onSubmit={submit} noValidate>
          <label className="sr" htmlFor="nEmail">Email</label>
          <input id="nEmail" type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
