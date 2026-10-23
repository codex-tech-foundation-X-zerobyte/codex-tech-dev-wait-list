# codex-waitlist

Public waitlist for the Codex Tech Developers Platform. React + TypeScript (Vite), Supabase backend, static build.
Part of `codex-tech-main-build`. See `../plan.md` and `../continue.md`.

## 1. Database (once)
1. Open the Supabase SQL Editor for the shared project.
2. Run `../codex-tech-developers-platform/supabase/migrations/0001_waitlist.sql`. It creates the `waitlist` schema, a locked-down `signups` table, and one public function, `join_waitlist`. (The platform repo owns all migrations.)
3. Check: in the SQL Editor run `select public.join_waitlist('test@example.com','typescript','paystack',null,true);` and expect `{"ok": true}`. Then `select * from waitlist.signups;`, and delete the test row.

## 2. Run locally
```
cp .env.example .env.local     # fill in the Supabase URL, anon key, and channel links
npm install
npm run dev
npm test
npm run build
```
Use only the **anon** key here. Never the service-role key.

## 3. Deploy (Vercel)
- Import the private GitHub repo in Vercel. Framework preset: Vite. Build command `npm run build`, output directory `dist` (already set in `vercel.json`).
- Add the four `VITE_` variables from `.env.example` under Project Settings > Environment Variables, then redeploy.
- `vercel.json` sets the security headers (CSP, frame blocking, referrer policy). The app uses hash routes (`#/privacy`), so no rewrite rules are needed.
- Vercel Hobby is for personal, non-commercial use and cannot deploy private repos owned by a GitHub organization; use Pro for a commercial launch. See `../continue.md`.

## 4. Logo
A working Codex mark is in place (master copy and PNG sizes in `../branding/`). To swap in a final logo, replace `src/assets/logo.svg`, `public/favicon.svg` and `public/apple-touch-icon.png`.

## What is done and what is not
Done: landing, success and privacy pages, validated signup form (honeypot, consent, duplicates hidden), tests for validation.
Not done yet: light theme (tokens are in `src/styles.css`), a CAPTCHA (rate limiting is now done in the database by migration 20261021000004; a CAPTCHA can still be added later), final privacy text (draft), analytics (none by design).
