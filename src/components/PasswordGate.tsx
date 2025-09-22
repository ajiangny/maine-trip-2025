import { useEffect, useState } from 'react';

// Simple password gate overlay. Uses Vite env var VITE_ACCESS_PASSWORD.
// Persists success in localStorage under key 'site_unlocked'.

const STORAGE_KEY = 'site_unlocked';

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const expected = import.meta.env.VITE_ACCESS_PASSWORD as string | undefined;
  const [input, setInput] = useState('');
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
        <h1 style={{ margin: 0, fontSize: '1.4rem' }}>Enter Password</h1>
        <input
          type="password"
            autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={inputStyle}
          placeholder="Password"
        />
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
  background: 'rgba(0,0,0,0.55)',
  padding: '2.2rem 2.4rem 2rem',
  borderRadius: '18px',
  width: 'min(90%, 420px)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  boxShadow: '0 8px 32px -4px rgba(0,0,0,0.6)',
  border: '1px solid rgba(255,255,255,0.15)'
};

const inputStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  borderRadius: '10px',
  border: '1px solid rgba(255,255,255,0.25)',
  background: 'rgba(255,255,255,0.08)',
  color: '#fff',
  outline: 'none'
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
