<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=Ritesh%20Pal&fontSize=70&fontColor=fff&animation=twinkling&fontAlignY=35&desc=React%20Native%20Developer%20Portfolio&descAlignY=60&descSize=20" />

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

> A glassmorphism developer portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.
> Features an interactive phone mockup, canvas particle background, a Node.js/Express email backend, and full responsiveness across phone, tablet, and desktop.

<br />

**[Live Demo](#)** · **[Report Bug](https://github.com/riteshpal2005/portfolio/issues)** · **[Request Feature](https://github.com/riteshpal2005/portfolio/issues)**

</div>

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Environment Variables Reference](#environment-variables-reference)
- [API Reference](#api-reference)
- [Design System](#design-system)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

<table>
<tr>
<td>

### Frontend
- **Interactive Phone Mockup** — live app screen carousel with 3D tilt on desktop
- **Canvas Particle Background** — 80 particles with mouse repulsion and network lines
- **Custom Cursor** — trailing ring with magnetic hover effect
- **Glassmorphism Cards** — blur, transparency, animated gradient borders
- **Scroll Animations** — Framer Motion `useInView` reveal on every section
- **Sticky Navbar** — pill-shaped, glass background fades in on scroll, zero layout jump
- **Fully Responsive** — phone (375px), tablet (768px), desktop (1280px+)
- **Clickable Skill Chips** — every skill tag links to its official documentation site

</td>
<td>

### Backend
- **Contact Form API** — Express endpoint processes form submissions
- **Dual Email System** — styled HTML email to Ritesh + auto-reply to sender
- **Input Validation** — server-side name/email/message checks
- **CORS Protected** — only allows whitelisted frontend origins
- **HTML Email Templates** — dark-theme, gradient emails matching portfolio aesthetic
- **Nodemailer + Gmail** — reliable delivery via Gmail App Password

</td>
</tr>
</table>

### Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-screen with animated name reveal, cycling word, parallax phone, floating UI chips |
| 2 | **About** | 2025 developer journey timeline, philosophy card, stats, availability tags |
| 3 | **Skills** | Orbiting tech visualizer (tablet+) + 6 clickable skill category cards |
| 4 | **Projects** | 3 project cards with phone preview on top, text below, click-to-expand detail panel |
| 5 | **Contact** | Animated form, backend email delivery, social links, availability badge |

---

## Screenshots

> Add your screenshots here after deployment.

| Hero Section | Projects Section |
|---|---|
| ![Hero](https://via.placeholder.com/600x340/080810/4F8EF7?text=Hero+Section) | ![Projects](https://via.placeholder.com/600x340/080810/A855F7?text=Projects+Section) |

| Skills Section | Contact Section |
|---|---|
| ![Skills](https://via.placeholder.com/600x340/080810/22D3EE?text=Skills+Section) | ![Contact](https://via.placeholder.com/600x340/080810/EC4899?text=Contact+Section) |

---

## Architecture

```
Browser (Client)
  |
  +-- React + Vite App (Port 5173)
  |     |
  |     +-- Navbar, CustomCursor, ParticleBackground
  |     |
  |     +-- Sections: Hero -> About -> Skills -> Projects -> Contact
  |     |
  |     +-- State: React Hooks (useState, useRef, useInView)
  |     +-- Animations: Framer Motion
  |     +-- Styling: Tailwind CSS + Custom CSS Variables
  |
  |  POST /api/contact  (fetch + JSON)
  |
  v
Express Backend (Port 3001)
  |
  +-- CORS Middleware
  +-- Input Validation (name / email / message)
  +-- Nodemailer Transport
        |
        +-- To: riteshks211@gmail.com    (notification email with Reply button)
        +-- To: sender@email.com         (auto-reply with GitHub + LinkedIn links)
```

### Contact Form Data Flow

```
User fills form
  -> React validates required fields
  -> POST /api/contact { name, email, subject, message }
  -> Express validates -> nodemailer.sendMail()
  -> Response { success: true }
  -> Frontend shows success state
```

---

## Project Structure

```
portfolio/
|
+-- .env.example                  # Frontend env template — copy to .env
+-- .gitignore
+-- index.html                    # Entry HTML (SEO meta + Google Fonts)
+-- vite.config.ts
+-- tailwind.config.js
+-- tsconfig.json
+-- postcss.config.js
|
+-- public/
|   +-- favicon.svg
|
+-- src/
|   +-- main.tsx
|   +-- App.tsx
|   +-- index.css                 # Design tokens, glass, glow, phone frame CSS
|   +-- vite-env.d.ts             # VITE_API_URL type declaration
|   |
|   +-- components/
|   |   +-- CustomCursor.tsx
|   |   +-- MobileFrame.tsx       # Phone with cycling app screens
|   |   +-- Navbar.tsx
|   |   +-- ParticleBackground.tsx
|   |
|   +-- sections/
|   |   +-- Hero.tsx
|   |   +-- About.tsx
|   |   +-- Skills.tsx
|   |   +-- Projects.tsx
|   |   +-- Contact.tsx
|   |
|   +-- data/
|       +-- projects.ts           # Project definitions, screens, tech stack
|       +-- skills.ts             # Skill categories with name + documentation URL
|
+-- backend/
    +-- server.js                 # Express + Nodemailer API
    +-- package.json
    +-- .env.example              # Backend env template — copy to .env
    +-- .gitignore
```

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18.3 | UI components |
| [TypeScript](https://typescriptlang.org) | 5.5 | Type safety |
| [Vite](https://vitejs.dev) | 5.3 | Dev server and bundler |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Utility styling |
| [Framer Motion](https://framer.com/motion) | 11 | Animations and spring physics |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | — | Display / heading font |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Body / UI font |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| [Node.js](https://nodejs.org) | 18+ | JavaScript runtime |
| [Express](https://expressjs.com) | 4.19 | HTTP server |
| [Nodemailer](https://nodemailer.com) | 6.9 | Email delivery |
| [dotenv](https://github.com/motdotla/dotenv) | 16.4 | Environment variable loading |
| [cors](https://github.com/expressjs/cors) | 2.8 | Cross-origin request handling |

---

## Running Locally

### Prerequisites

```bash
node --version   # v18.0.0 or higher
npm --version    # v9.0.0 or higher
```

### 1. Clone and install frontend

```bash
git clone https://github.com/riteshpal2005/portfolio.git
cd portfolio
npm install
```

### 2. Configure frontend environment

```bash
cp .env.example .env
```

Open `.env` — for local development the default value works without any changes:

```env
VITE_API_URL=http://localhost:3001
```

### 3. Start the frontend dev server

```bash
npm run dev
```

Open **http://localhost:5173**. The contact form will not send emails unless the backend is also running, but all other sections work without it.

### 4. Set up the backend

In a second terminal window:

```bash
cd backend
npm install
cp .env.example .env
```

Open `backend/.env` and fill in your credentials (see step 5), then:

```bash
node server.js
```

Backend runs at **http://localhost:3001**.

### 5. Gmail App Password

The backend uses Gmail via Nodemailer. Your regular password will not work — you need a Gmail App Password.

| Step | Action |
|---|---|
| 1 | Go to [myaccount.google.com](https://myaccount.google.com) |
| 2 | Security > 2-Step Verification > confirm it is ON |
| 3 | Search "App Passwords" in the Google Account search bar |
| 4 | Create one, name it `Portfolio` |
| 5 | Copy the 16-character password |
| 6 | Paste it as `EMAIL_PASS` in `backend/.env` |
| 7 | Restart the backend |

> **Never commit `backend/.env`.** It is already listed in `.gitignore`.

---

## Deployment

### Frontend — Vercel or Netlify

1. Push the repository to GitHub.
2. Import it on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Set **Build command** to `npm run build` and **Output directory** to `dist`.
4. Add the following environment variable in the hosting dashboard:

   | Key | Value |
   |---|---|
   | `VITE_API_URL` | `https://your-backend-domain.com` |

5. Deploy.

> `VITE_API_URL` must be set in the hosting platform's env vars UI — the `.env` file is gitignored and will not be deployed.

### Backend — Railway or Render

1. Create a new service on [Railway](https://railway.app) or [Render](https://render.com).
2. Point it to the `backend/` directory (start command: `node server.js`).
3. Set these environment variables in the hosting dashboard:

   | Key | Value |
   |---|---|
   | `EMAIL_USER` | `your_gmail@gmail.com` |
   | `EMAIL_PASS` | 16-character Gmail App Password |
   | `PORT` | `3001` (Railway sets this automatically) |
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

## API Reference

### GET /api/health

Health check endpoint.

**Response:**

```json
{
  "status": "ok",
  "message": "Portfolio backend is running"
}
```

---

### POST /api/contact

Submits a contact form message. Sends a notification email to Ritesh and an auto-reply to the sender.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@email.com",
  "subject": "Internship",
  "message": "Hi Ritesh!"
}
```

Fields `name`, `email`, and `message` are required. `subject` is optional.

**Success — 200:**

```json
{
  "success": true,
  "message": "Email sent successfully."
}
```

**Validation error — 400:**

```json
{
  "error": "Name, email, and message are required."
}
```

**Server error — 500:**

```json
{
  "error": "Failed to send email. Please try again."
}
```

---

## Design System

Built on CSS custom properties in [`src/index.css`](src/index.css).

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
| `.gradient-text-alt` | Cyan to blue gradient text |
| `.glow-blue` | Box shadow glow in blue |
| `.glow-purple` | Box shadow glow in purple |
| `.skill-chip` | Pill-shaped tech tag with hover glow, renders as `<a>` for links |
| `.float-anim` | Floating Y-axis CSS animation |
| `.nav-link` | Navbar link with underline hover effect |

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Headings | Space Grotesk | 700–800 |
| Body / UI | Inter | 300–600 |

---

## Contributing

Contributions are welcome. Whether you are fixing a bug, improving animations, or adding a section — all help is appreciated.

### Getting Started

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Install dependencies
npm install
cd backend && npm install && cd ..

# 5. Make your changes and test locally (npm run dev)

# 6. Commit using conventional commits
git add .
git commit -m "feat: describe your change"

# 7. Push and open a Pull Request on GitHub
git push origin feature/your-feature-name
```

### Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use for |
|---|---|
| `feat:` | New feature or section |
| `fix:` | Bug fix |
| `style:` | Visual or CSS changes with no logic change |
| `refactor:` | Code restructure with no behaviour change |
| `docs:` | README or comment updates |
| `chore:` | Config, tooling, or dependency updates |
| `perf:` | Performance improvement |

### Code Style

- All code must be TypeScript — no `any` without justification
- Use functional components with hooks only — no class components
- Follow the existing file structure (`components/`, `sections/`, `data/`)
- Keep components focused and reusable
- Run `npx tsc --noEmit` before opening a PR — must pass with zero errors

### Areas Open for Contribution

- Theme switcher — dark / light mode toggle
- Accessibility — keyboard navigation, ARIA labels
- Tests — unit tests for utility functions
- Real app screenshots — embed actual screenshots from your apps
- Analytics — privacy-respecting view counter

### Opening Issues

When reporting a bug, include:
- Your OS and browser
- Steps to reproduce
- Expected vs actual behaviour
- Screenshot or recording if applicable

---

## License

Distributed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Ritesh Pal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED.
```

See [`LICENSE`](LICENSE) for the full text.

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

**Star this repo if you found it useful.**

Made with care by [Ritesh Pal](https://github.com/riteshpal2005)

</div>
