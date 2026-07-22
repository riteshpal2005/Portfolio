import type { Project } from '../types';

// ─── Projects ─────────────────────────────────────────────────────────────────
// Source of truth: projects/<folder>/project.md

export const projects: Project[] = [
  // ── LedgerLite ──────────────────────────────────────────────────────────────
  {
    id: 'ledger-lite',
    name: 'LedgerLite',
    tagline: 'Offline-First Personal Finance Tracker',
    description:
      'LedgerLite is a high-performance, offline-first personal finance management application. Track expenses, manage multiple localised wallets, categorise transactions dynamically, and securely sync your local database to the cloud via a custom Smart Merge engine.',
    color: '#10B981',
    status: 'Live',
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Redux',
      'Firebase',
      'NativeWind',
    ],
    features: [
      'Offline-First by Design — Completely functional without internet, zero network latency',
      'Multi-Account & Wallet Tracking — Custom accounts with isolated running balances',
      'Dual-Sync Cloud Backup — Sync SQLite database to the cloud via Firebase Authentication',
      'Smart Merge Engine — Restores missing records and skips duplicates on restoration',
      'Complete Data Portability — Export as Raw JSON, Excel (.xlsx), or CSV',
      'NativeWind Theme Engine — Instant, flawless Light/Dark Mode transitions',
    ],
    challenge:
      'Engineered a custom Dual-Sync Cloud Backup & Smart Merge algorithm for offline-first SQLite persistence. Seamlessly synchronises local data to Firebase Firestore, injecting missing records and deduplicating offline entries on restoration without blocking the JS thread.',
    metrics: [
      { label: 'Platform',  value: 'iOS & Android' },
      { label: 'Built With', value: 'Expo'         },
      { label: 'Stage',     value: 'Production'    },
    ],
    screens: [
      { id: 1, bg: '#001a0a', icon: '₹', title: 'LedgerLite',  subtitle: '₹0 balance today',      accent: '#10B981' },
      { id: 2, bg: '#001a0a', icon: '📊', title: 'Analytics',   subtitle: 'Food: 40% this month',  accent: '#34D399' },
      { id: 3, bg: '#00100a', icon: '+',  title: 'Add Entry',   subtitle: 'Quick & easy entry',    accent: '#6EE7B7' },
    ],
    githubUrl: 'https://github.com/riteshpal2005/LedgerLite',
  },

  // ── MedTrack ─────────────────────────────────────────────────────────────────
  {
    id: 'med-track',
    name: 'MedTrack',
    tagline: 'Offline-First Medication & Dosage Tracker',
    description:
      'MedTrack is a high-reliability, offline-first mobile platform designed to help users track medication schedules, log daily dosages, and manage reminders seamlessly — even in environments with poor or zero network connectivity.',
    color: '#22D3EE',
    status: 'In Progress',
    techStack: [
      'React Native',
      'TypeScript',
      'Zustand',
      'NativeWind',
      'PostgreSQL',
    ],
    features: [
      'Zero-Latency Mobile UI — Instant reads and writes via local MMKV persistence',
      'Offline-First Synchronization — Background task queue syncs mutations on network restoration',
      'Deterministic Conflict Resolution — UTC-based Last-Write-Wins (LWW) engine',
      'Secure Dual-Token Auth — JWT access & refresh tokens stored via native SecureStore',
      'Scheduled Local Notifications — On-device dosage reminders regardless of server reachability',
    ],
    challenge:
      'Engineered an offline-first sync engine with deterministic conflict resolution. Utilised a UTC-based Last-Write-Wins (LWW) algorithm and client transaction IDs to automatically resolve conflicts between local MMKV storage and the central PostgreSQL database.',
    metrics: [
      { label: 'Status',   value: 'In Progress'   },
      { label: 'Platform', value: 'iOS & Android'  },
      { label: 'Type',     value: 'Mobile App'     },
    ],
    screens: [
      { id: 1, bg: '#00161a', icon: '💊', title: 'MedTrack',    subtitle: '3 meds today',          accent: '#22D3EE' },
      { id: 2, bg: '#00161a', icon: '🔔', title: 'Reminders',   subtitle: '8 PM: Take medication', accent: '#38BDF8' },
      { id: 3, bg: '#001a1a', icon: '📋', title: 'Dosage Log',  subtitle: 'All doses on track',    accent: '#67E8F9' },
    ],
    githubUrl: 'https://github.com/riteshpal2005/MedTrack',
  },

  // ── SyncMediaPlayer ──────────────────────────────────────────────────────────
  {
    id: 'sync-media-player',
    name: 'SyncMediaPlayer',
    tagline: 'Cross-Platform Media & Audio Player',
    description:
      'SyncMediaPlayer is a high-performance, cross-platform media playback application built with React Native. It uses the Expo Video SDK and Media Library to deliver seamless video and audio playback with intuitive local file management.',
    color: '#A855F7',
    status: 'In Progress',
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Zustand',
      'NativeWind',
    ],
    features: [
      'High-Performance Playback — Seamless video and audio via native Expo Video SDK',
      'Local Media Library — Access and manage on-device files via Expo Media Library',
      'Modern UI/UX — Dynamic interface powered by NativeWind & Reanimated at 60 FPS',
      'Custom Media Controls — Playback controls, scrubbing, and timeline tracking',
      'Lightweight State — Reactive global state via Zustand, no unnecessary re-renders',
    ],
    challenge:
      'Integrated Expo Video and Media Library with React Native Reanimated to ensure smooth playback alongside fluid UI interactions. Utilised Zustand for performant state management, explicitly avoiding re-renders during rapid playback state changes and timeline scrubbing.',
    metrics: [
      { label: 'Status',   value: 'In Progress'  },
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Type',     value: 'Mobile App'    },
    ],
    screens: [
      { id: 1, bg: '#1a0a2e', icon: '▶', title: 'SyncPlayer',  subtitle: 'Now Playing',           accent: '#A855F7' },
      { id: 2, bg: '#1a0a2e', icon: '🎵', title: 'Library',    subtitle: '24 files found',         accent: '#C084FC' },
      { id: 3, bg: '#2e0a1a', icon: '⏭', title: 'Controls',   subtitle: 'Scrub & seek',           accent: '#E879F9' },
    ],
    githubUrl: 'https://github.com/riteshpal2005/SyncMediaPlayer',
  },
];
