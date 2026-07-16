// ─── Personal Data ────────────────────────────────────────────────────────────
// Single source of truth for all personal/contact information.

export const personal = {
  name: 'Ritesh Pal',
  role: 'React Native Developer',
  tagline: 'Building Mobile Experiences That Feel Alive.',
  bio: 'Final year student & aspiring mobile developer specializing in React Native and Expo. Building real-world apps with modern tooling, clean architecture, and performance-first thinking.',

  email: 'riteshks211@gmail.com',
  github: 'https://github.com/riteshpal2005',
  linkedin: 'https://www.linkedin.com/in/riteshpal2005/',

  // Swap this for your actual hosted resume URL (Google Drive, GitHub Releases, etc.)
  resumeUrl: null as string | null,

  availability: ['Freelancing', 'Internship', 'Full-time Job'] as const,

  stats: [
    { value: '3+', label: 'Projects Built' },
    { value: '5–6 mo', label: 'Experience' },
    { value: '100%', label: 'Passion' },
  ],

  journey: [
    {
      year: 'Early 2025',
      title: 'Started Coding',
      desc: 'Picked up programming seriously for the first time. Learned the fundamentals and got comfortable with JavaScript and TypeScript.',
    },
    {
      year: 'Mid 2025',
      title: 'Discovered React Native',
      desc: 'Found React Native and Expo. The idea of shipping to both iOS and Android from a single codebase was the hook that made everything click.',
    },
    {
      year: 'Late 2025',
      title: 'Building Real Projects',
      desc: 'Started building Expense Tracker and FitForge — real apps with real architecture. Exploring Reanimated, Zustand, and Supabase.',
    },
    {
      year: 'Now · 5–6 months in',
      title: 'Growing Fast',
      desc: 'Actively sharpening my skills every day. Open to opportunities where I can contribute, learn on the job, and grow with a team.',
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
