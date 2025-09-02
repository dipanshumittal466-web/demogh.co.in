# Mittal Electricals — Render Ready (Next.js 14 + Tailwind)

A premium 2025 demo website for an electrical contractor, optimized for Render deploy.

## Quick Start (Local)
```bash
npm install
npm run dev
```

## Deploy on Render (Recommended: Free Plan)
1. Create a **new GitHub repo** and push these files.
2. On **render.com** → *New* → *Web Service* → Connect your repo.
3. **Runtime:** Node
4. **Build Command:** `npm install && npm run build`
5. **Start Command:** `npm start`
6. Set **Environment** to `Node` and (optional) add env var `NODE_VERSION=18`.
7. Click **Create Web Service**. First build may take a few minutes.

> This uses `next start` which enables SSR and assets. For a static-only site, you can switch to `next export` and serve with static hosting.
