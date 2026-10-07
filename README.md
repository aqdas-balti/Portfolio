# Aqdas Ali · Portfolio

Next.js 16 + TypeScript + Tailwind CSS v4. Single-page portfolio, dark/light mode system ke hisaab se automatic.

## Content edit karna

Saara content **`src/data/profile.ts`** mein hai: naam, links, experience, projects, skills, education.

- `github` / `linkedin`: apna profile URL daalo (khaali ho to button hide rehta hai)
- `resumeUrl`: CV ki PDF `public/resume.pdf` mein rakho aur yahan `"/resume.pdf"` likho
- Projects mein `link` (live demo) aur `repo` (GitHub) optional hain

## Local chalana

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Vercel par deploy

1. GitHub par naya repo banao (e.g. `portfolio`) aur code push karo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/portfolio.git
   git push -u origin main
   ```
2. [vercel.com/new](https://vercel.com/new) par jao, GitHub se login karo aur repo **Import** karo.
3. Framework khud **Next.js** detect ho jayega. Koi setting change nahi karni, bas **Deploy** dabao.
4. Iske baad har `git push` par site khud update ho jayegi.

CLI se bhi kar sakte ho: `npx vercel` (pehli baar), phir `npx vercel --prod`.
