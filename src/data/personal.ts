// ─── Personal Data ────────────────────────────────────────────────────────────
// Single source of truth for all personal/contact information.

export const personal = {
  name: 'Ritesh Pal',
  role: 'React Native Developer',
  tagline: 'Building Mobile Experiences That Feel Alive.',
  bio: 'Not new to coding — started on a phone with Lua back in 2019. Final year student specializing in React Native & Expo, now building production-grade mobile apps with offline-first architecture and performance-first thinking.',

  email: 'riteshks211@gmail.com',
  github: 'https://github.com/riteshpal2005',
  linkedin: 'https://www.linkedin.com/in/riteshpal2005/',

  // Swap this for your actual hosted resume URL (Google Drive, GitHub Releases, etc.)
  resumeUrl: null as string | null,

  availability: ['Freelancing', 'Internship', 'Full-time Job'] as const,

  stats: [
    { value: '3+', label: 'Projects Built' },
    { value: '3–4 mo', label: 'Experience' },
    { value: '100%', label: 'Passion' },
  ],

  journey: [
    {
      year: 'Nov 2025',
      title: 'Picked Up React Native',
      desc: 'Not my first time coding — had years of Lua, web dev, Android Kotlin, and C# behind me. Decided to go all-in on React Native and Expo for cross-platform mobile.',
    },
    {
      year: 'Dec 2025 – Jan 2026',
      title: 'Built an Uno Card App',
      desc: 'First real RN project — a full Uno card game. Tackled complex multiplayer state, turn logic, and deck management. Got genuinely hard. Stepped back to regroup.',
    },
    {
      year: 'Feb – Apr 2026',
      title: 'Kotlin, Flutter & Back Again',
      desc: "Revisited Android Kotlin (already tried in 2024), then spent a few weeks with Flutter. Dart felt like a dead-end — a separate ecosystem just for mobile. TypeScript's reach across RN, web, and backend pulled me back.",
    },
    {
      year: 'May 2026',
      title: 'Started LedgerLite',
      desc: 'Returned to React Native with clarity. Built LedgerLite — an offline-first personal finance app with a custom Smart Merge sync engine and full data portability.',
    },
    {
      year: 'Now · 3–4 mo RN',
      title: 'Building & Growing',
      desc: 'Deep in LedgerLite architecture while spinning up MedTrack and SyncMediaPlayer. Sharpening skills every day and open to my first professional opportunity.',
    },
  ],

  approach: {
    heading: 'My Approach',
    body: [
      'I believe great mobile apps are felt, not just used. Every interaction, every transition, every tap should feel intentional and deliberate.',
      'As a fresher, I focus on writing clean, modular TypeScript and building projects that solve real problems — even if small.',
    ],
  },
} as const;

export const socials = [
  {
    name: 'GitHub',
    handle: '@riteshpal2005',
    href: personal.github,
    color: '#f0f6fc',
  },
  {
    name: 'LinkedIn',
    handle: 'Ritesh Pal',
    href: personal.linkedin,
    color: '#0A66C2',
  },
] as const;
