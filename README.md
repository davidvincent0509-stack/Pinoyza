# Pinoyza

Company website for [pinoyza.com](https://pinoyza.com) — a job matching platform connecting Filipino job seekers with employers.

## Tech Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **react-hook-form + zod** (application form validation)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Job seeker homepage |
| `/apply` | Multi-step application form |
| `/employers` | Employer landing page |
| `/about` | About Pinoyza |
| `/contact` | Contact form |
| `/faq` | Frequently asked questions |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Add your custom domain `pinoyza.com` in **Project Settings → Domains**.

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Build

```bash
npm run build
npm start
```
