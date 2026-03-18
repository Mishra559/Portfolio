# Anshul Mishra — Portfolio

> Built with React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## 🏗️ Build for production

```bash
npm run build      # Outputs to /dist
npm run preview    # Preview the production build locally
```

## 📦 Deploy to Vercel (recommended)

```bash
npm install -g vercel
vercel            # Follow the prompts — done in 30 seconds
```

Or drag the `/dist` folder to [netlify.com/drop](https://app.netlify.com/drop).

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Cursor.tsx          # Custom magnetic cursor
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx            # Hero with glitch + typing effect
│   ├── Marquee.tsx         # Scrolling skill ticker
│   ├── About.tsx           # About + live GitHub stats
│   ├── Skills.tsx          # Bento grid skill layout
│   ├── ProjectCard.tsx     # 3D tilt card component
│   ├── Projects.tsx        # Filterable projects grid
│   ├── Experience.tsx      # Timeline experience card
│   ├── Achievements.tsx    # Achievement cards
│   ├── Education.tsx       # Education card
│   ├── Contact.tsx         # Contact links + form
│   ├── Footer.tsx
│   └── SectionHeader.tsx   # Reusable section header
├── hooks/
│   ├── useTyping.ts        # Typing animation hook
│   ├── useGitHub.ts        # Live GitHub API hook
│   ├── useParticles.ts     # Canvas particle system
│   ├── useTilt.ts          # 3D mouse tilt hook
│   └── useScrollReveal.ts  # IntersectionObserver reveal
├── data/
│   └── index.ts            # All static content (edit here)
├── types/
│   └── index.ts            # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css               # Tailwind + glitch animations
```

## ✏️ Customisation

### Update your content
All static data lives in **`src/data/index.ts`** — edit projects, skills, achievements there.

### Add your resume
In `src/components/Navbar.tsx`, replace the `alert(...)` with:
```tsx
window.open('/resume.pdf', '_blank')
```
Then drop your `resume.pdf` in the `/public` folder.

### Update LinkedIn URL
In `src/components/Contact.tsx`, update the LinkedIn `href`.

---

## 🎨 Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Bebas Neue · Bricolage Grotesque · Azeret Mono |

## ✨ Features

- 🖱️ Custom magnetic cursor with trailing ring
- 🌌 Mouse-reactive particle constellation (canvas)
- 🔤 Glitch text animation on hero name
- 🃏 3D perspective tilt on project cards with shine
- 📡 Live GitHub API stats (repos, stars, followers, language bars)
- 🎬 Framer Motion scroll-triggered section reveals
- ⌨️ Typing animation cycling through terminal phrases
- 📺 Scanline sweep animation on hero
- 🔢 Marquee ticker with skill names
- 🌙 Cyberpunk-Brutalist design (acid green on near-black)
- 📱 Fully responsive with mobile nav menu
- ♿ Semantic HTML + accessible labels
