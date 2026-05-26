export interface SkillCategory {
  name: string;
  color: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Mobile Core',
    color: '#4F8EF7',
    icon: '📱',
    skills: ['React Native', 'Expo', 'TypeScript', 'JavaScript', 'Expo Router', 'React Navigation'],
  },
  {
    name: 'Animation',
    color: '#A855F7',
    icon: '✨',
    skills: ['Framer Motion', 'React Native Reanimated', 'Gesture Handler', 'Lottie React Native', 'React Native Skia'],
  },
  {
    name: 'Styling',
    color: '#22D3EE',
    icon: '🎨',
    skills: ['Tailwind CSS', 'NativeWind', 'Styled Components', 'CSS Modules'],
  },
  {
    name: 'Backend & API',
    color: '#EC4899',
    icon: '⚡',
    skills: ['Firebase', 'Supabase', 'Node.js', 'Express', 'TanStack Query', 'Axios'],
  },
  {
    name: 'State & Forms',
    color: '#F59E0B',
    icon: '🗃️',
    skills: ['Zustand', 'React Context', 'React Hook Form', 'Zod'],
  },
  {
    name: 'Auth & Database',
    color: '#14B8A6',
    icon: '🔐',
    skills: ['Clerk', 'Firebase Auth', 'Supabase Auth', 'PostgreSQL', 'Firestore'],
  },
  {
    name: 'Tooling & Build',
    color: '#6366F1',
    icon: '🛠️',
    skills: ['Vite', 'Metro', 'ESLint', 'Prettier', 'Git', 'GitHub', 'Expo EAS'],
  },
  {
    name: 'Design & UI',
    color: '#10B981',
    icon: '🎯',
    skills: ['Figma', 'Radix UI', 'shadcn/ui', 'React Native SVG', 'Tamagui'],
  },
];
