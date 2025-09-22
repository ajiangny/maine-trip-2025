# maine-trip-2025
For someone I cherish dearly

## Password Gate
This project now includes a lightweight password overlay to prevent casual access.

### Setup
1. Copy `.env.example` to `.env`.
2. Change the value of `VITE_ACCESS_PASSWORD` to your desired password.
3. Restart the dev server if it was running.

If `VITE_ACCESS_PASSWORD` is not set, the site loads normally without a prompt.

### Usage
On first visit (or after clearing localStorage) the overlay appears and requests the password. After a correct entry a flag `site_unlocked=true` is stored in `localStorage` so page reloads won't ask again.

### Reset / Relock
Open DevTools and run:
```js
localStorage.removeItem('site_unlocked'); location.reload();
```

### Notes & Limitations
- This is not strong security—assets are still downloadable if someone is motivated.
- For real protection you would need a backend + auth + gated asset serving.
- Password is embedded in the built client bundle (Vite env var), so change it after sharing if needed.

