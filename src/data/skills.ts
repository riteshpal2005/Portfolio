export interface Skill {
  name: string;
  url: string;
}

export interface SkillCategory {
  name: string;
  color: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Mobile',
    color: '#4F8EF7',
    icon: 'RN',
    skills: [
      { name: 'React Native', url: 'https://reactnative.dev' },
      { name: 'Expo', url: 'https://expo.dev' },
      { name: 'Expo Router', url: 'https://expo.dev/router' },
      { name: 'React Navigation', url: 'https://reactnavigation.org' },
    ],
  },
  {
    name: 'Language',
    color: '#A855F7',
    icon: 'TS',
    skills: [
      { name: 'TypeScript', url: 'https://typescriptlang.org' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    ],
  },
  {
    name: 'Backend & API',
    color: '#EC4899',
    icon: 'DB',
    skills: [
      { name: 'Supabase', url: 'https://supabase.com' },
      { name: 'Firebase', url: 'https://firebase.google.com' },
      { name: 'Axios', url: 'https://axios-http.com' },
    ],
  },
  {
    name: 'State Management',
    color: '#F59E0B',
    icon: 'ST',
    skills: [
      { name: 'Zustand', url: 'https://zustand-demo.pmnd.rs' },
      { name: 'React Context', url: 'https://react.dev/learn/passing-data-deeply-with-context' },
      { name: 'React Hook Form', url: 'https://react-hook-form.com' },
      { name: 'Zod', url: 'https://zod.dev' },
    ],
  },
  {
    name: 'Animation',
    color: '#22D3EE',
    icon: 'AN',
    skills: [
      { name: 'Reanimated', url: 'https://docs.swmansion.com/react-native-reanimated' },
      { name: 'Gesture Handler', url: 'https://docs.swmansion.com/react-native-gesture-handler' },
      { name: 'Framer Motion', url: 'https://www.framer.com/motion' },
    ],
  },
  {
    name: 'Tooling',
    color: '#6366F1',
    icon: 'GIT',
    skills: [
      { name: 'Git', url: 'https://git-scm.com' },
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'Expo EAS', url: 'https://expo.dev/eas' },
      { name: 'Vite', url: 'https://vitejs.dev' },
    ],
  },
];
