import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MobileFrame from '../components/MobileFrame';

const heroScreens = [
  { id: 1, bg: '#05050f', icon: 'RN', title: 'React Native', subtitle: 'Building for iOS & Android', accent: '#4F8EF7' },
  { id: 2, bg: '#0a0520', icon: 'EX', title: 'Expo SDK', subtitle: 'Shipping fast & clean', accent: '#A855F7' },
  { id: 3, bg: '#00141a', icon: '60', title: 'Motion First', subtitle: '60fps animations always', accent: '#22D3EE' },
];

const words = ['Mobile', 'Native', 'Beautiful', 'Alive'];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(i => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setTiltX(((e.clientX - cx) / cx) * 8);
      setTiltY(((e.clientY - cy) / cy) * -5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const nameChars = 'Ritesh Pal'.split('');

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '10%', left: '15%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(40px)',
          animation: 'floatY 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '15%', right: '10%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(40px)',
          animation: 'floatY 6s ease-in-out infinite reverse',
        }} />
        <div style={{
          position: 'absolute', top: '40%', right: '30%',
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(40px)',
          animation: 'floatY 10s ease-in-out infinite',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-24 pb-16 lg:pt-0 lg:pb-0 relative z-10">
        {/* Left — Text */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-2 w-fit"
          >
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: '0 0 8px #4ade80' }} />
              <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">Open to Opportunities</span>
            </div>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-medium text-slate-400 mb-1 tracking-widest uppercase"
            >
              Hi, I'm
            </motion.div>
            <div className="flex flex-wrap font-display font-bold text-5xl lg:text-7xl text-white leading-none tracking-tight">
              {nameChars.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'inline-block', width: char === ' ' ? '0.4em' : 'auto' }}
                >
                  {char !== ' ' ? char : '\u00A0'}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Headline with animated word */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="font-display text-2xl lg:text-4xl font-semibold text-white leading-tight"
          >
            Building{' '}
            <span className="relative inline-block">
              <motion.span
                key={wordIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="gradient-text inline-block"
              >
                {words[wordIndex]}
              </motion.span>
            </span>
            {' '}Experiences
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="text-slate-400 text-lg leading-relaxed max-w-xl"
          >
            Final year student & aspiring mobile developer specializing in{' '}
            <span className="text-white font-medium">React Native</span> and{' '}
            <span className="text-white font-medium">Expo</span>. Building real-world apps
            with modern tooling, clean architecture, and performance-first thinking.
          </motion.p>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7 }}
            className="flex flex-wrap gap-2"
          >
            {['React Native', 'Expo', 'TypeScript', 'Framer Motion'].map(tech => (
              <span key={tech} className="skill-chip">{tech}</span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="magnetic-btn px-7 py-3.5 rounded-xl font-semibold text-white text-sm relative overflow-hidden group"
              style={{ background: 'linear-gradient(135deg, #4F8EF7, #A855F7)' }}
              id="hero-view-work-btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #3B7FF7, #9333EA)' }} />
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="magnetic-btn px-7 py-3.5 rounded-xl font-semibold text-white text-sm glass border border-white/10"
              id="hero-contact-btn"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Fresher stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex gap-8 mt-2"
          >
            {[
              { value: '3+', label: 'Projects Built' },
              { value: '∞', label: 'Things to Learn' },
              { value: '100%', label: 'Passion' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Phone */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative">
            {/* Floating UI elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-16 top-16 glass px-3 py-2 rounded-xl hidden lg:flex items-center gap-2"
              style={{ border: '1px solid rgba(79,142,247,0.3)' }}
            >
              <div style={{ width: 24, height: 24, borderRadius: 6, background: 'rgba(79,142,247,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color: '#4F8EF7' }}>60</div>
              <div>
                <div className="text-xs font-bold text-white">60 FPS</div>
                <div className="text-xs text-slate-400">Smooth UI</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-16 top-24 glass px-3 py-2 rounded-xl hidden lg:flex items-center gap-2"
              style={{ border: '1px solid rgba(168,85,247,0.3)' }}
            >
              <div style={{ width: 24, height: 24, borderRadius: 6, background: 'rgba(168,85,247,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 800, color: '#A855F7' }}>RN</div>
              <div>
                <div className="text-xs font-bold text-white">Cross-platform</div>
                <div className="text-xs text-slate-400">iOS & Android</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute -right-12 bottom-24 glass px-3 py-2 rounded-xl hidden lg:flex items-center gap-2"
              style={{ border: '1px solid rgba(34,211,238,0.3)' }}
            >
              <div style={{ width: 24, height: 24, borderRadius: 6, background: 'rgba(34,211,238,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 800, color: '#22D3EE' }}>TS</div>
              <div>
                <div className="text-xs font-bold text-white">TypeScript</div>
                <div className="text-xs text-slate-400">Type-safe</div>
              </div>
            </motion.div>

            {/* Glow behind phone */}
            <div style={{
              position: 'absolute', inset: -40,
              background: 'radial-gradient(circle, rgba(79,142,247,0.2) 0%, rgba(168,85,247,0.1) 50%, transparent 70%)',
              borderRadius: '50%', filter: 'blur(20px)',
              animation: 'floatY 4s ease-in-out infinite',
            }} />

            <MobileFrame screens={heroScreens} tiltX={tiltX} tiltY={tiltY} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
