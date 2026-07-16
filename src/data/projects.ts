import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'expense-tracker',
    name: 'Expense Tracker',
    tagline: 'Smart Personal Finance App',
    description:
      'A clean, intuitive expense tracking app built with React Native and Expo. Track daily spending, categorise expenses, and visualise where your money goes with beautiful charts.',
    color: '#4F8EF7',
    status: 'In Progress',
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Expo Router',
    ],
    features: [
      'Add, edit & delete expenses',
      'Category-based organisation',
      'Monthly budget tracking',
      'Visual spending charts',
      'Local data persistence',
      'Clean minimal UI',
    ],
    challenge:
      'Designing a UI that makes entering expenses feel fast and effortless — optimising form flows so adding a transaction takes under 3 taps.',
    metrics: [
      { label: 'Status',    value: 'Active'     },
      { label: 'Platform',  value: 'iOS & Android' },
      { label: 'Built with', value: 'Expo'      },
    ],
    screens: [
      { id: 1, bg: '#050f2e', icon: '$',  title: 'Expense Tracker', subtitle: '₹12,450 spent',          accent: '#4F8EF7' },
      { id: 2, bg: '#0a1a0a', icon: '%',  title: 'Analytics',       subtitle: 'Food: 40% this month',   accent: '#22D3EE' },
      { id: 3, bg: '#1a0a2e', icon: '+',  title: 'Add Expense',     subtitle: 'Quick & easy entry',     accent: '#A855F7' },
    ],
    githubUrl: 'https://github.com/riteshpal2005/',
  },
  {
    id: 'fitforge',
    name: 'FitForge',
    tagline: 'Workout Tracking & Fitness App',
    description:
      "A long-term fitness companion app I'm building to keep my GitHub active and sharpen my React Native skills. Tracks workouts, logs exercises, and keeps you accountable.",
    color: '#A855F7',
    status: 'In Progress',
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Zustand',
      'Reanimated',
      'Expo Router',
      'Firebase',
    ],
    features: [
      'Workout plan creation',
      'Exercise logging per set/rep',
      'Progress tracking over time',
      'Animated exercise previews',
      'Streak & consistency tracking',
      'GitHub activity driven dev',
    ],
    challenge:
      "Building a modular workout architecture that's easy to extend — each exercise, set, and session is a composable data unit making future features straightforward to add.",
    metrics: [
      { label: 'Status',   value: 'Active'    },
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Focus',    value: 'Long-term' },
    ],
    screens: [
      { id: 1, bg: '#1a0a2e', icon: 'F', title: 'FitForge',  subtitle: 'Day 7 Streak',       accent: '#A855F7' },
      { id: 2, bg: '#0a1a0a', icon: 'W', title: 'Workout',   subtitle: '3 sets remaining',   accent: '#22D3EE' },
      { id: 3, bg: '#2e0a1a', icon: 'P', title: 'Progress',  subtitle: 'Keep going!',         accent: '#EC4899' },
    ],
    githubUrl: 'https://github.com/riteshpal2005/FitForge',
  },
  {
    id: 'health-app',
    name: 'Health & Medicine App',
    tagline: 'Coming Soon — Next Big Project',
    description:
      'My next planned project — a health and medicine companion app. Will focus on medicine reminders, health logging, and doctor appointment tracking.',
    color: '#22D3EE',
    status: 'Planned',
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Supabase',
      'Clerk',
      'React Native Notifications',
      'Expo Router',
    ],
    features: [
      'Medicine reminder notifications',
      'Health metrics logging',
      'Doctor appointment calendar',
      'Medical history tracking',
      'Emergency contact quick-dial',
      'Offline-first architecture',
    ],
    challenge:
      'Planning the notification architecture — reliable medicine reminders need to work even when the app is closed, requiring deep native integration via Expo Notifications.',
    metrics: [
      { label: 'Status', value: 'Planned'         },
      { label: 'Stack',  value: 'Supabase + Clerk' },
      { label: 'Focus',  value: 'Healthcare'       },
    ],
    screens: [
      { id: 1, bg: '#00161a', icon: 'H', title: 'Health App',   subtitle: '3 meds today',       accent: '#22D3EE' },
      { id: 2, bg: '#001a10', icon: 'A', title: 'Appointments', subtitle: 'Dr. Sharma — Fri',   accent: '#4F8EF7' },
      { id: 3, bg: '#0a001a', icon: 'R', title: 'Reminders',    subtitle: '8 PM: Take medication', accent: '#A855F7' },
    ],
    githubUrl: 'https://github.com/riteshpal2005',
  },
];
