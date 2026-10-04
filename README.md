# Sairam Furnitures — Web & Mobile App

Modern furniture showroom experience for **Sairam Furnitures**, Salem — built with **React**, **Vite**, **Tailwind CSS**, and **Capacitor** for iOS/Android.

## Features

- Home page aligned with brand flyer (categories, offers, hero, trust badges)
- Shop by category + product detail pages
- Instant quote flow → WhatsApp
- Store locator with embedded map & directions
- Smart furniture assistant (local catalog search)
- Wishlist (persisted in browser)
- Mobile bottom nav + floating WhatsApp
- Capacitor-ready for native builds

## Quick start

```bash
npm install
npm run dev
```

If `npm install` fails with SSL/certificate errors on your network, the project includes `.npmrc` with `strict-ssl=false` for local installs only — remove it once npm works normally.

Open [http://localhost:5173](http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Capacitor (Android / iOS)

After first build:

```bash
npm run build
npx cap add android   # and/or: npx cap add ios
npm run cap:sync
npm run cap:android   # opens Android Studio
```

Update `src/types/index.ts` → `STORE` with your real phone, WhatsApp number, and exact address.

## Deploy web

### GitHub Pages (automated)

Pushes to `main` deploy via GitHub Actions.

Live site: **https://trueverseoil.github.io/sairam-furnitures/**

One-time (if Pages is not enabled): GitHub repo → Settings → Pages → Source: **GitHub Actions**.

### Manual

```bash
npm run build
```

Upload `dist/` to Vercel, Netlify, or Cloudflare Pages. Use SPA rewrites (`vercel.json` / `netlify.toml` included).

## Stack

- React 19 + TypeScript + Vite 6
- Tailwind CSS 4
- Framer Motion
- React Router 7
- Zustand
- Capacitor 7
