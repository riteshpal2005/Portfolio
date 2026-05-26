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
  <img src="https://img.shields.io/badge/Status-In_Development-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/Made_with-❤️-red?style=flat-square" />
</p>

<br />

> **An award-worthy, cinematic developer portfolio** — built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.
> Featuring a live interactive phone mockup, particle animations, a glassmorphism UI, and a Node.js/Express backend for real email delivery.

<br />

**[🌐 Live Demo](#)** · **[📸 Screenshots](#-screenshots)** · **[🐛 Report Bug](https://github.com/riteshpal2005/portfolio/issues)** · **[✨ Request Feature](https://github.com/riteshpal2005/portfolio/issues)**

</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [📸 Screenshots](#-screenshots)
- [🏗️ Architecture](#️-architecture)
- [🗂️ Project Structure](#️-project-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
  - [Gmail App Password](#gmail-app-password)
- [⚙️ Environment Variables](#️-environment-variables)
- [📡 API Reference](#-api-reference)
- [🎨 Design System](#-design-system)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [📬 Contact](#-contact)

---

## ✨ Features

<table>
<tr>
<td>

### 🎯 Frontend
- **Interactive Phone Mockup** — live app screen rotations with 3D tilt tracking
- **Canvas Particle Background** — 80 particles with mouse repulsion + network lines
- **Custom Cursor** — trailing ring with magnetic hover state changes
- **Glassmorphism Cards** — blur, transparency, and animated gradient borders
- **Scroll Animations** — Framer Motion `useInView` reveal on every section
- **Sticky Navbar** — always pill-shaped, background fades in on scroll (zero layout jump)
- **Responsive** — fully mobile-optimised down to 375px

</td>
<td>

### ⚙️ Backend
- **Contact Form API** — Express endpoint handles form submissions
- **Dual Email System** — styled HTML email to Ritesh + auto-reply to sender
- **Input Validation** — server-side name/email/message checks
- **CORS Protected** — only allows your frontend origin
- **HTML Email Templates** — dark-theme, gradient emails matching the portfolio aesthetic
- **Nodemailer + Gmail** — reliable delivery via Gmail App Password

</td>
</tr>
</table>

### 🧩 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-screen with animated name reveal, rotating word cycling, parallax phone mockup, floating UI chips |
| 2 | **About** | Developer journey timeline, philosophy card, stats, "Currently Exploring" chips |
| 3 | **Skills** | Orbiting tech node visualizer + 8 color-coded category cards |
| 4 | **Projects** | Expense Tracker, FitForge & Health App — status badges, mini phone previews, click-to-expand detail |
| 5 | **Contact** | Animated form → backend → email delivery, social links, availability badge |

---

## 📸 Screenshots

> *(Add your screenshots here after deployment)*

| Hero Section | Projects Section |
|---|---|
| ![Hero](https://via.placeholder.com/600x340/080810/4F8EF7?text=Hero+Section) | ![Projects](https://via.placeholder.com/600x340/080810/A855F7?text=Projects+Section) |

| Skills Orbit | Contact |
|---|---|
| ![Skills](https://via.placeholder.com/600x340/080810/22D3EE?text=Skills+Section) | ![Contact](https://via.placeholder.com/600x340/080810/EC4899?text=Contact+Section) |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser (Client)                        │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              React + Vite App (Port 5173)           │   │
│  │                                                     │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │   │
│  │  │  Navbar  │  │  Cursor  │  │ ParticleCanvas   │  │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘  │   │
│  │                                                     │   │
│  │  ┌──────────────────────────────────────────────┐  │   │
│  │  │                  Sections                    │  │   │
│  │  │  Hero → About → Skills → Projects → Contact  │  │   │
│  │  └──────────────────────────────────────────────┘  │   │
│  │                                                     │   │
│  │  State: React Hooks (useState, useRef, useInView)   │   │
│  │  Animations: Framer Motion                          │   │
│  │  Styling: Tailwind CSS + Custom CSS Variables       │   │
│  └────────────────────────┬────────────────────────────┘   │
└───────────────────────────│─────────────────────────────────┘
                            │ POST /api/contact
                            │ (fetch + JSON)
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              Express Backend (Port 3001)                    │
│                                                             │
│  ┌───────────┐   ┌────────────────┐   ┌─────────────────┐  │
│  │   CORS    │→  │  Validation    │→  │   Nodemailer    │  │
│  │ Middleware│   │  (name/email/  │   │   Transport     │  │
│  └───────────┘   │   message)     │   └────────┬────────┘  │
│                  └────────────────┘            │            │
│                                                │            │
│                              ┌─────────────────┴──────────┐ │
│                              │      Gmail SMTP            │ │
│                              │  (App Password Auth)       │ │
│                              └──────────┬─────────────────┘ │
└─────────────────────────────────────────│───────────────────┘
                                          │
                    ┌─────────────────────┴──────────────────┐
                    │                                        │
                    ▼                                        ▼
          ┌─────────────────┐                    ┌─────────────────────┐
          │  Ritesh's Inbox │                    │  Sender's Inbox     │
          │                 │                    │                     │
          │ Dark HTML email │                    │ Auto-reply with     │
          │ + Reply button  │                    │ GitHub & LinkedIn   │
          └─────────────────┘                    └─────────────────────┘
```

### Data Flow — Contact Form

```
User fills form
      │
      ▼
React validates (required fields)
      │
      ▼
POST http://localhost:3001/api/contact
{ name, email, subject, message }
      │
      ▼
Express: validate → nodemailer.sendMail()
      │
      ├──► To: riteshks211@gmail.com  (notification email)
      │
      └──► To: sender@email.com       (auto-reply)
      │
      ▼
Response: { success: true }
      │
      ▼
Frontend shows ✅ success state
```

---

## 🗂️ Project Structure

```
portfolio/
│
├── 📄 index.html                    # Entry HTML with SEO meta tags + Google Fonts
├── 📄 vite.config.ts                # Vite + React plugin config
├── 📄 tailwind.config.js            # Custom tokens, animations, fonts
├── 📄 tsconfig.json                 # TypeScript config (strict mode)
├── 📄 postcss.config.js             # Tailwind + autoprefixer
├── 📄 .gitignore
│
├── 📁 public/
│   └── 📄 favicon.svg               # Gradient "R" SVG favicon
│
├── 📁 src/
│   ├── 📄 main.tsx                  # React root render
│   ├── 📄 App.tsx                   # Section assembly + global components
│   ├── 📄 index.css                 # Design system: tokens, glass, glow, phone frame
│   │
│   ├── 📁 components/               # Reusable UI primitives
│   │   ├── 📄 CustomCursor.tsx      # Trailing cursor ring + magnetic hover
│   │   ├── 📄 Navbar.tsx            # Sticky pill navbar, active section tracking
│   │   ├── 📄 MobileFrame.tsx       # Interactive phone with rotating app screens
│   │   └── 📄 ParticleBackground.tsx # Canvas particles with mouse repulsion
│   │
│   ├── 📁 sections/                 # Full-page sections
│   │   ├── 📄 Hero.tsx              # Full-screen hero: name, animated word, phone
│   │   ├── 📄 About.tsx             # Journey timeline + stats + philosophy
│   │   ├── 📄 Skills.tsx            # Orbit visualizer + category cards
│   │   ├── 📄 Projects.tsx          # Project cards + expandable detail panel
│   │   └── 📄 Contact.tsx           # Form + backend integration + social links
│   │
│   └── 📁 data/                     # Static content data
│       ├── 📄 projects.ts           # Project definitions, screens, tech stack
│       └── 📄 skills.ts             # Skill categories + colors
│
└── 📁 backend/
    ├── 📄 server.js                 # Express + Nodemailer API server
    ├── 📄 package.json
    ├── 📄 .env                      # 🔒 Secret — never commit this
    ├── 📄 .env.example              # Template for contributors
    └── 📄 .gitignore
```

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18.3 | UI component framework |
| [TypeScript](https://typescriptlang.org) | 5.5 | Type-safe JavaScript |
| [Vite](https://vitejs.dev) | 5.3 | Lightning-fast dev server & bundler |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Utility-first styling |
| [Framer Motion](https://framer.com/motion) | 11 | Animations & spring physics |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | — | Display / heading font |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Body / UI font |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| [Node.js](https://nodejs.org) | 22+ | JavaScript runtime |
| [Express](https://expressjs.com) | 4.19 | HTTP server framework |
| [Nodemailer](https://nodemailer.com) | 6.9 | Email delivery |
| [dotenv](https://github.com/motdotla/dotenv) | 16.4 | Environment variable loading |
| [cors](https://github.com/expressjs/cors) | 2.8 | Cross-origin request handling |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

```bash
node --version   # v18.0.0 or higher
npm --version    # v9.0.0 or higher
```

### Frontend Setup

```bash
# 1. Clone the repository
git clone https://github.com/riteshpal2005/portfolio.git
cd portfolio

# 2. Install frontend dependencies
npm install

# 3. Start the development server
npm run dev
```

🎉 Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### Backend Setup

```bash
# In a new terminal tab / window
cd portfolio/backend

# 1. Install backend dependencies
npm install

# 2. Create your environment file
cp .env.example .env

# 3. Fill in your credentials (see below)
# Edit backend/.env

# 4. Start the backend server
node server.js
```

✅ Backend runs on **[http://localhost:3001](http://localhost:3001)**

### Gmail App Password

The backend uses Gmail via Nodemailer. Your regular password **will not work** — you need an App Password.

| Step | Action |
|---|---|
| 1 | Go to [myaccount.google.com](https://myaccount.google.com) |
| 2 | **Security** → **2-Step Verification** → ensure it's **ON** |
| 3 | Search **"App Passwords"** in the search bar |
| 4 | Select **Mail** → **Other** → name it `"Portfolio"` |
| 5 | Copy the 16-character password |
| 6 | Paste it into `backend/.env` as `EMAIL_PASS` |
| 7 | Restart the backend |

> [!CAUTION]
> **Never commit your `.env` file.** It's already in `.gitignore` — keep it that way.

---

## ⚙️ Environment Variables

### `backend/.env`

```env
# Gmail account used to send emails
EMAIL_USER=your_gmail@gmail.com

# Gmail App Password (NOT your Gmail login password)
# Generate at: Google Account → Security → App Passwords
EMAIL_PASS=xxxx xxxx xxxx xxxx

# Backend server port
PORT=3001

# Frontend URL (for CORS whitelist)
FRONTEND_URL=http://localhost:5173
```

> Copy `backend/.env.example` to `backend/.env` and fill in the values.

---

## 📡 API Reference

### `GET /api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Portfolio backend is running 🚀"
}
```

---

### `POST /api/contact`

Submit a contact form message. Sends an email to Ritesh and an auto-reply to the sender.

**Request Body:**

```json
{
  "name": "John Doe",         // required
  "email": "john@email.com",  // required — valid email format
  "subject": "Internship",    // optional
  "message": "Hi Ritesh!"     // required
}
```

**Success Response `200`:**

```json
{
  "success": true,
  "message": "Email sent successfully."
}
```

**Error Response `400` (validation):**

```json
{
  "error": "Name, email, and message are required."
}
```

**Error Response `500` (email failure):**

```json
{
  "error": "Failed to send email. Please try again."
}
```

---

## 🎨 Design System

The entire design is built on CSS custom properties defined in [`src/index.css`](src/index.css).

### Color Tokens

```css
--bg-primary:      #080810   /* near-black background */
--bg-secondary:    #0d0d1a   /* card surface */
--accent-blue:     #4F8EF7   /* primary accent */
--accent-purple:   #A855F7   /* secondary accent */
--accent-cyan:     #22D3EE   /* tertiary accent */
--accent-pink:     #EC4899   /* highlight accent */
--text-primary:    #F8FAFC   /* headings */
--text-muted:      #94A3B8   /* body text */
```

### Utility Classes

| Class | Effect |
|---|---|
| `.glass` | Glassmorphism — `rgba(255,255,255,0.04)` + blur |
| `.glass-strong` | Stronger glass — `rgba(255,255,255,0.08)` + blur |
| `.gradient-text` | Animated shimmer gradient text |
| `.gradient-text-alt` | Cyan → blue gradient text |
| `.glow-blue` | Box shadow glow in blue |
| `.glow-purple` | Box shadow glow in purple |
| `.skill-chip` | Pill-shaped tech tag with hover glow |
| `.float-anim` | Floating Y-axis CSS animation |
| `.nav-link` | Navbar link with underline hover |

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Headings | Space Grotesk | 700–800 |
| Body / UI | Inter | 300–600 |

---

## 🤝 Contributing

Contributions are **more than welcome**! Whether you're fixing a typo, suggesting a new feature, or overhauling an animation — every bit counts.

### Getting Started

```bash
# 1. Fork the repository
# (Click "Fork" in the top-right on GitHub)

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 3. Create a feature branch
git checkout -b feature/your-amazing-feature

# 4. Install dependencies
npm install
cd backend && npm install && cd ..

# 5. Make your changes

# 6. Commit using conventional commits (see below)
git add .
git commit -m "feat: add dark mode toggle"

# 7. Push your branch
git push origin feature/your-amazing-feature

# 8. Open a Pull Request on GitHub 🎉
```

### Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use for |
|---|---|
| `feat:` | New feature or section |
| `fix:` | Bug fix |
| `style:` | Visual/CSS changes with no logic change |
| `refactor:` | Code restructure with no behaviour change |
| `docs:` | README or comment updates |
| `chore:` | Config, tooling, or dependency updates |
| `perf:` | Performance improvement |

**Examples:**
```bash
git commit -m "feat: add dark/light mode toggle"
git commit -m "fix: navbar flicker on first scroll"
git commit -m "style: improve mobile card layout"
git commit -m "docs: update backend setup instructions"
```

### Areas Open for Contribution

- 🌗 **Theme switcher** — dark / light mode toggle
- 🔊 **Sound design** — subtle hover / click sounds
- 🌐 **i18n** — multi-language support (Hindi, etc.)
- ♿ **Accessibility** — keyboard navigation, ARIA labels
- 🧪 **Tests** — unit tests for utility functions
- 📊 **Analytics** — privacy-respecting view counter
- 🎞️ **Lottie animations** — richer loading / micro-interactions
- 📱 **Real app previews** — embed actual screenshots from your apps

### Code Style

- All code must be **TypeScript** — no `any` without justification
- Use **functional components** with hooks only — no class components
- Follow the existing file structure (`components/`, `sections/`, `data/`)
- Keep components **focused and reusable**
- Run `npx tsc --noEmit` before opening a PR — must pass with **zero errors**

### Opening Issues

When reporting a bug, please include:
- Your OS & browser
- Steps to reproduce
- Expected vs. actual behaviour
- Screenshot or screen recording if applicable

---

## 📜 License

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

## 📬 Contact

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

**⭐ Star this repo if you found it useful!**

Made with 💙 by [Ritesh Pal](https://github.com/riteshpal2005)

</div>
