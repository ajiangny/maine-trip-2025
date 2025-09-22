import { useEffect, useState } from 'react';

// Simple password gate overlay. Uses Vite env var VITE_ACCESS_PASSWORD.
// Persists success in localStorage under key 'site_unlocked'.

const STORAGE_KEY = 'site_unlocked';

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const expected = import.meta.env.VITE_ACCESS_PASSWORD as string | undefined;
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);
  const [unlocked, setUnlocked] = useState<boolean>(() => {
    if (!expected) return true; // no password configured
    return localStorage.getItem(STORAGE_KEY) === 'true';
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (unlocked) {
      setError('');
    }
  }, [unlocked]);

  if (unlocked) {
    return <>{children}</>;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!expected) {
      setUnlocked(true);
      return;
    }
    if (input === expected) {
      localStorage.setItem(STORAGE_KEY, 'true');
      setUnlocked(true);
    } else {
      setError('Incorrect password');
    }
  }

  return (
    <div style={overlayStyle}>
      <form onSubmit={submit} style={panelStyle}>
        <h1 style={{ margin: 0, fontSize: '1.35rem', letterSpacing: '.5px' }}>Enter Password</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          <input
            type={show ? 'text' : 'password'}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={inputStyle}
            placeholder="Password"
          />
          <label style={toggleRowStyle}>
            <input
              type="checkbox"
              checked={show}
              onChange={() => setShow(s => !s)}
              style={checkboxStyle}
            />
            <span style={{ fontSize: '.75rem', opacity: 0.85 }}>
              {show ? 'Hide password' : 'Show password'}
            </span>
          </label>
        </div>
        {error && <div style={errorStyle}>{error}</div>}
        <button type="submit" style={buttonStyle}>Unlock</button>
      </form>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), rgba(0,0,0,0.9))',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  fontFamily: 'system-ui, sans-serif',
  color: '#fff'
};

const panelStyle: React.CSSProperties = {
  background: 'rgba(0,0,0,0.50)',
  padding: '1.9rem 2rem 1.6rem',
  borderRadius: '20px',
  width: 'min(90%, 400px)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  boxShadow: '0 6px 28px -6px rgba(0,0,0,0.55)',
  border: '1px solid rgba(255,255,255,0.12)',
  backdropFilter: 'blur(2px)'
};

const inputStyle: React.CSSProperties = {
  padding: '0.70rem 0.85rem',
  fontSize: '0.95rem',
  borderRadius: '12px',
  border: '1px solid rgba(255,255,255,0.22)',
  background: 'rgba(255,255,255,0.10)',
  color: '#fff',
  outline: 'none'
};

const toggleRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  userSelect: 'none'
};

const checkboxStyle: React.CSSProperties = {
  width: '14px',
  height: '14px',
  cursor: 'pointer'
};

const buttonStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  borderRadius: '10px',
  border: '1px solid rgba(255,255,255,0.3)',
  background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: 600,
  letterSpacing: '0.5px'
};

const errorStyle: React.CSSProperties = {
  color: '#f87171',
  fontSize: '0.85rem',
  marginTop: '-0.25rem'
};
