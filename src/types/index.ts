// ─── Shared TypeScript Interfaces ─────────────────────────────────────────────

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  techStack: string[];
  features: string[];
  challenge: string;
  screens: AppScreen[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Live' | 'In Progress' | 'Planned';
}

export interface AppScreen {
  id: number;
  bg: string;
  icon: string;
  title: string;
  subtitle: string;
  accent: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Skill {
  name: string;
  url: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface JourneyItem {
  year: string;
  title: string;
  desc: string;
}

export interface Social {
  name: string;
  handle: string;
  href: string;
  color: string;
}

export type FormStatus = 'idle' | 'loading' | 'sent' | 'error';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
