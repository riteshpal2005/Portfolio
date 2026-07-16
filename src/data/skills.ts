export interface Skill {
  name: string;
  url: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Mobile',
    skills: [
      { name: 'React Native', url: 'https://reactnative.dev' },
      { name: 'Expo', url: 'https://expo.dev' },
      { name: 'Expo Router', url: 'https://expo.dev/router' },
      { name: 'React Navigation', url: 'https://reactnavigation.org' },
    ],
  },
  {
    name: 'Languages',
    skills: [
      { name: 'TypeScript', url: 'https://typescriptlang.org' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    ],
  },
  {
    name: 'Backend & API',
    skills: [
      { name: 'Node.js', url: 'https://nodejs.org' },
      { name: 'Express', url: 'https://expressjs.com' },
      { name: 'Nodemailer', url: 'https://nodemailer.com' },
      { name: 'Axios', url: 'https://axios-http.com' },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'Supabase', url: 'https://supabase.com' },
      { name: 'Firebase', url: 'https://firebase.google.com' },
    ],
  },
  {
    name: 'State Management',
    skills: [
      { name: 'Zustand', url: 'https://zustand-demo.pmnd.rs' },
      { name: 'React Context', url: 'https://react.dev/learn/passing-data-deeply-with-context' },
    ],
  },
  {
    name: 'UI & Animation',
    skills: [
      { name: 'Reanimated', url: 'https://docs.swmansion.com/react-native-reanimated' },
      { name: 'Gesture Handler', url: 'https://docs.swmansion.com/react-native-gesture-handler' },
    ],
  },
  {
    name: 'Validation',
    skills: [
      { name: 'Zod', url: 'https://zod.dev' },
      { name: 'React Hook Form', url: 'https://react-hook-form.com' },
    ],
  },
  {
    name: 'Tooling & DevOps',
    skills: [
      { name: 'Git', url: 'https://git-scm.com' },
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'Expo EAS', url: 'https://expo.dev/eas' },
      { name: 'ESLint', url: 'https://eslint.org' },
    ],
  },
];
