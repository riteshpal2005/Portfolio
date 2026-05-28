<div align="center">

<!-- Animated Banner -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=Ritesh%20Pal&fontSize=70&fontColor=fff&animation=twinkling&fontAlignY=35&desc=React%20Native%20Developer%20Portfolio&descAlignY=60&descSize=20" />

<!-- Badges -->
<p>
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-4.19-000000?style=for-the-badge&logo=express&logoColor=white" />
</p>

<p>
  <img src="https://img.shields.io/badge/Status-Active-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" />
</p>

<br />

> A glassmorphism portfolio built with React + Vite + TypeScript + Tailwind CSS + Framer Motion.
> Features an interactive phone mockup, particle canvas, a Node.js/Express email backend, and full responsiveness across phone, tablet, and desktop.

<br />

**[Live Demo](#)** · **[Report Bug](https://github.com/riteshpal2005/portfolio/issues)** · **[Request Feature](https://github.com/riteshpal2005/portfolio/issues)**

</div>

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Running Locally](#running-locally)
  - [1. Clone & install frontend](#1-clone--install-frontend)
  - [2. Configure frontend env](#2-configure-frontend-env)
  - [3. Start frontend dev server](#3-start-frontend-dev-server)
  - [4. Set up backend](#4-set-up-backend)
  - [5. Gmail App Password](#5-gmail-app-password)
- [Deployment](#deployment)
  - [Frontend (Vercel / Netlify)](#frontend-vercel--netlify)
  - [Backend (Railway / Render)](#backend-railway--render)
- [Environment Variables Reference](#environment-variables-reference)
- [Design System](#design-system)
- [License](#license)
- [Contact](#contact)

---

## Features

### Frontend
- **Interactive Phone Mockup** — live app screen carousel with 3D tilt on desktop
- **Canvas Particle Background** — 80 particles with mouse repulsion + network lines
- **Custom Cursor** — trailing ring with magnetic hover effect
- **Glassmorphism Cards** — blur, transparency, animated gradient borders
- **Scroll Animations** — Framer Motion `useInView` reveal on every section
- **Sticky Navbar** — pill-shaped, glass background fades in on scroll
- **Fully Responsive** — phone (375px), tablet (768px), desktop (1280px+)
- **Project Expand Panel** — click any project card to reveal full details

### Backend
- **Contact Form API** — Express endpoint processes form submissions
- **Dual Email System** — styled HTML email to Ritesh + auto-reply to sender
- **Input Validation** — server-side name/email/message checks
- **CORS Protected** — only allows whitelisted frontend origins
- **Nodemailer + Gmail** — reliable delivery via Gmail App Password

### Sections
| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-screen with animated name reveal, rotating word, parallax phone, floating chips |
| 2 | **About** | 2025 developer journey timeline, philosophy card, stats, availability tags |
| 3 | **Skills** | Orbiting tech visualizer + 6 color-coded skill categories |
| 4 | **Projects** | 3 project cards (phone preview top, text below) + expandable detail panel |
| 5 | **Contact** | Animated form → backend → email, social links, availability badge |

---

## Project Structure

```
portfolio/
│
├── .env.example                  # Frontend env template — copy to .env
├── .gitignore
├── index.html                    # Entry HTML (SEO meta + Google Fonts)
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css                 # Design tokens, glass, glow, phone frame CSS
│   │
│   ├── components/
│   │   ├── CustomCursor.tsx
│   │   ├── MobileFrame.tsx       # Phone with cycling app screens
│   │   ├── Navbar.tsx
│   │   └── ParticleBackground.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   │
│   └── data/
│       ├── projects.ts
│       └── skills.ts
│
└── backend/
    ├── server.js                 # Express + Nodemailer API
    ├── package.json
    ├── .env.example              # Backend env template — copy to .env
    └── .gitignore
```

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| React | 18.3 | UI components |
| TypeScript | 5.5 | Type safety |
| Vite | 5.3 | Dev server & bundler |
| Tailwind CSS | 3.4 | Utility styling |
| Framer Motion | 11 | Animations |
| Space Grotesk | — | Display / heading font |
| Inter | — | Body / UI font |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| Node.js | 18+ | Runtime |
| Express | 4.19 | HTTP server |
| Nodemailer | 6.9 | Email delivery |
| dotenv | 16.4 | Environment variables |
| cors | 2.8 | Cross-origin requests |

---

## Running Locally

### 1. Clone & install frontend

```bash
git clone https://github.com/riteshpal2005/portfolio.git
cd portfolio
npm install
```

### 2. Configure frontend env

```bash
# Copy the example file
cp .env.example .env
```

Open `.env` and set:
```env
# Points to your local backend — no change needed for local dev
VITE_API_URL=http://localhost:3001
```

### 3. Start frontend dev server

```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

> The contact form will silently fail if the backend isn't running — everything else works without it.

### 4. Set up backend

Open a **second terminal**:

```bash
cd backend
npm install

# Copy the env template
cp .env.example .env

# Fill in your credentials — see step 5 below
# Then start the server:
node server.js
```

Backend runs on **http://localhost:3001**.

### 5. Gmail App Password

The contact form sends real email via Gmail. Your regular Gmail password will **not** work — you need an App Password.

| Step | Action |
|---|---|
| 1 | Go to [myaccount.google.com](https://myaccount.google.com) |
| 2 | Security → 2-Step Verification → make sure it is **ON** |
| 3 | Search **"App Passwords"** in the Google Account search bar |
| 4 | Create one, name it `Portfolio` |
| 5 | Copy the 16-character password |
| 6 | Paste it into `backend/.env` as `EMAIL_PASS` |
| 7 | Restart the backend server |

> [!CAUTION]
> Never commit `backend/.env`. It is already in `.gitignore` — keep it that way.

---

## Deployment

### Frontend (Vercel / Netlify)

1. Push your code to GitHub.
2. Import the repo on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Set the **Build command** to `npm run build` and **Output directory** to `dist`.
4. Add this environment variable in the hosting dashboard:

   | Key | Value |
   |---|---|
   | `VITE_API_URL` | `https://your-backend-domain.com` |

5. Deploy — done.

> [!IMPORTANT]
> `VITE_API_URL` must be set in the hosting platform's env vars UI. It cannot be committed in `.env` since that file is gitignored.

### Backend (Railway / Render)

1. Create a new service on [Railway](https://railway.app) or [Render](https://render.com).
2. Point it to the `backend/` folder (or use the root with `Start command: node backend/server.js`).
3. Add these environment variables in the hosting dashboard:

   | Key | Value |
   |---|---|
   | `EMAIL_USER` | `your_gmail@gmail.com` |
   | `EMAIL_PASS` | Your 16-character Gmail App Password |
   | `PORT` | `3001` (or leave blank — Railway sets it automatically) |
   | `FRONTEND_URL` | `https://your-vercel-app.vercel.app` |

4. Deploy and copy the public URL into the frontend's `VITE_API_URL`.

---

## Environment Variables Reference

### Frontend — `.env` (copy from `.env.example`)

```env
# Backend API base URL — no trailing slash
VITE_API_URL=http://localhost:3001
```

### Backend — `backend/.env` (copy from `backend/.env.example`)

```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx
PORT=3001
FRONTEND_URL=http://localhost:5173
```

---

## Design System

The entire design is built on CSS custom properties in [`src/index.css`](src/index.css).

### Color Tokens

```css
--bg-primary:    #080810   /* near-black background */
--bg-secondary:  #0d0d1a   /* card surface */
--accent-blue:   #4F8EF7   /* primary accent */
--accent-purple: #A855F7   /* secondary accent */
--accent-cyan:   #22D3EE   /* tertiary accent */
--accent-pink:   #EC4899   /* highlight accent */
--text-primary:  #F8FAFC   /* headings */
--text-muted:    #94A3B8   /* body text */
```

### Utility Classes

| Class | Effect |
|---|---|
| `.glass` | Glassmorphism — `rgba(255,255,255,0.04)` + blur |
| `.glass-strong` | Stronger glass — `rgba(255,255,255,0.08)` + blur |
| `.gradient-text` | Animated shimmer gradient text |
| `.glow-blue / .glow-purple` | Box shadow glow |
| `.skill-chip` | Pill-shaped tech tag with hover glow |
| `.float-anim` | Floating Y-axis CSS animation |
| `.nav-link` | Navbar link with underline hover |

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Headings | Space Grotesk | 700–800 |
| Body / UI | Inter | 300–600 |

---

## License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

## Contact

<div align="center">

**Ritesh Pal** — Aspiring React Native Developer

[![Email](https://img.shields.io/badge/Email-riteshks211%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:riteshks211@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-riteshpal2005-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/riteshpal2005/)
[![GitHub](https://img.shields.io/badge/GitHub-riteshpal2005-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/riteshpal2005)

*"Building mobile experiences that feel alive."*

</div>

---

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer" />

**Star this repo if you found it useful!**

Made with by [Ritesh Pal](https://github.com/riteshpal2005)

</div>
