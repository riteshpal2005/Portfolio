import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const journey = [
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
    year: 'Now · 5-6 months in',
    title: 'Growing Fast',
    desc: 'Actively sharpening my skills every day. Open to opportunities where I can contribute, learn on the job, and grow with a team.',
  },
];

const learningChips = [
  { label: 'React Native', url: 'https://reactnative.dev' },
  { label: 'Expo Router', url: 'https://expo.dev/router' },
  { label: 'Reanimated', url: 'https://docs.swmansion.com/react-native-reanimated' },
  { label: 'Supabase', url: 'https://supabase.com' },
  { label: 'TypeScript', url: 'https://typescriptlang.org' },
  { label: 'Zustand', url: 'https://zustand-demo.pmnd.rs' },
  { label: 'Clean Architecture', url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div style={{
        position: 'absolute', left: -200, top: '50%', transform: 'translateY(-50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(79,142,247,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none', filter: 'blur(60px)',
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3" style={{ color: '#4F8EF7' }}>
            — My Story
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Developer <span className="gradient-text">Behind the Code</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            5–6 months in. Building mobile apps with React Native and Expo, growing fast, and open to my first opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Journey Timeline */}
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, #4F8EF7, #A855F7, transparent)' }} />

            <div className="flex flex-col gap-8">
              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="flex gap-5"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full glass-strong border flex items-center justify-center z-10 relative"
                      style={{ borderColor: 'rgba(79,142,247,0.4)', boxShadow: '0 0 20px rgba(79,142,247,0.3)' }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: '#4F8EF7' }} />
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="text-xs font-bold tracking-wider mb-1" style={{ color: '#4F8EF7' }}>
                      {item.year}
                    </div>
                    <h3 className="font-display font-bold text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Cards */}
          <div className="flex flex-col gap-6">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass-strong rounded-2xl p-8"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h3 className="font-display text-xl font-bold text-white mb-4">My Approach</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I believe great mobile apps are <span className="text-white font-medium">felt, not just used</span>. Every interaction,
                every transition, every tap should feel intentional and deliberate.
              </p>
              <p className="text-slate-400 leading-relaxed">
                As a fresher, I focus on writing <span className="text-white font-medium">clean, modular TypeScript</span> and
                building projects that solve real problems — even if small.
              </p>
            </motion.div>

            {/* Stats — top row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: 'Projects Built', color: '#4F8EF7' },
                { value: '100%', label: 'TypeScript', color: '#A855F7' },
                { value: 'RN + Expo', label: 'Mobile Stack', color: '#22D3EE' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="glass rounded-xl p-4 text-center"
                  style={{ border: `1px solid ${stat.color}25` }}
                >
                  <div className="font-display text-lg font-bold mb-1"
                    style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}60` }}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass rounded-xl p-5"
              style={{ border: '1px solid rgba(251,191,36,0.2)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
                <div className="text-sm font-bold text-white">Available For</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Freelancing', color: '#F59E0B' },
                  { label: 'Internship', color: '#4F8EF7' },
                  { label: 'Full-time Job', color: '#A855F7' },
                ].map(tag => (
                  <span key={tag.label}
                    className="text-xs px-3 py-1.5 rounded-full font-semibold"
                    style={{ background: `${tag.color}15`, border: `1px solid ${tag.color}35`, color: tag.color }}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass rounded-2xl p-6"
              style={{ border: '1px solid rgba(168,85,247,0.2)' }}
            >
              <h3 className="font-display font-bold text-white mb-3">Currently Learning</h3>
              <div className="flex flex-wrap gap-2">
                {learningChips.map(chip => (
                  <a
                    key={chip.label}
                    href={chip.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-chip"
                    style={{ textDecoration: 'none' }}
                  >
                    {chip.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
