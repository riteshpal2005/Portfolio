export interface SkillCategory {
  name: string;
  color: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Mobile',
    color: '#4F8EF7',
    icon: 'RN',
    skills: ['React Native', 'Expo', 'Expo Router', 'React Navigation'],
  },
  {
    name: 'Language',
    color: '#A855F7',
    icon: 'TS',
    skills: ['TypeScript', 'JavaScript'],
  },
  {
    name: 'Backend & API',
    color: '#EC4899',
    icon: 'DB',
    skills: ['Supabase', 'Firebase', 'Axios'],
  },
  {
    name: 'State Management',
    color: '#F59E0B',
    icon: 'ST',
    skills: ['Zustand', 'React Context', 'React Hook Form', 'Zod'],
  },
  {
    name: 'Animation',
    color: '#22D3EE',
    icon: 'AN',
    skills: ['Reanimated', 'Gesture Handler', 'Framer Motion'],
  },
  {
    name: 'Tooling',
    color: '#6366F1',
    icon: 'GIT',
    skills: ['Git', 'GitHub', 'Expo EAS', 'Vite'],
  },
];
