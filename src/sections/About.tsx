import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const journey = [
  {
    year: '2022',
    title: 'Discovered Web Dev',
    desc: 'Started learning HTML, CSS and JavaScript. Fell in love with building things that run in the browser.',
    icon: '🌱',
  },
  {
    year: '2023',
    title: 'React & Frontend',
    desc: 'Levelled up to React. Built my first component-driven projects and understood state, props, and UI architecture.',
    icon: '⚛️',
  },
  {
    year: '2024',
    title: 'Went Mobile',
    desc: 'Discovered React Native and Expo. The idea of writing one codebase for iOS & Android was impossible to ignore.',
    icon: '📱',
  },
  {
    year: 'Now',
    title: 'Building Real Apps',
    desc: 'Final year, actively building Expense Tracker and FitForge while exploring Reanimated, Supabase, and clean architecture.',
    icon: '🚀',
  },
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
    <section id="about" className="py-32 relative">
      <div style={{
        position: 'absolute', left: -200, top: '50%', transform: 'translateY(-50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(79,142,247,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none', filter: 'blur(60px)',
      }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
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
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            The Developer <span className="gradient-text">Behind the Code</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A final-year student on a mission to ship beautiful, performant mobile apps using React Native and Expo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                    <div className="w-10 h-10 rounded-full glass-strong border flex items-center justify-center text-base z-10 relative"
                      style={{ borderColor: 'rgba(79,142,247,0.4)', boxShadow: '0 0 20px rgba(79,142,247,0.3)' }}>
                      {item.icon}
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
              <h3 className="font-display text-xl font-bold text-white mb-4">My Philosophy</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I believe great mobile apps are <span className="text-white font-medium">felt, not just used</span>. Every interaction,
                every transition, every tap should feel intentional and delightful.
              </p>
              <p className="text-slate-400 leading-relaxed">
                As a fresher, I focus on writing <span className="text-white font-medium">clean, modular TypeScript</span> code and
                building projects that solve real problems — even if small.
              </p>
            </motion.div>

            {/* Stats for fresher */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '3+', label: 'Projects Built', icon: '📦', color: '#4F8EF7' },
                { value: '100%', label: 'TypeScript', icon: '🔷', color: '#A855F7' },
                { value: 'RN + Expo', label: 'Mobile Stack', icon: '📱', color: '#22D3EE' },
                { value: 'Open', label: 'To Opportunities', icon: '🤝', color: '#F59E0B' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="glass rounded-xl p-5 text-center"
                  style={{ border: `1px solid ${stat.color}25` }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-display text-xl font-bold mb-1"
                    style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}60` }}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass rounded-2xl p-6"
              style={{ border: '1px solid rgba(168,85,247,0.2)' }}
            >
              <h3 className="font-display font-bold text-white mb-3">Currently Exploring</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React Native', 'Expo Router', 'Reanimated', 'Supabase',
                  'TypeScript', 'Zustand', 'React Native Skia', 'Clean Architecture',
                ].map(area => (
                  <span key={area} className="skill-chip">{area}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
