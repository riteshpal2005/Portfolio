import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';
import PhoneShell from '../../components/ui/PhoneShell/PhoneShell';
import Button from '../../components/common/Button/Button';
import { personal, socials } from '../../data/personal';
import { fadeUp, fadeLeft, fadeRight } from '../../animations/variants';

const ROTATING_WORDS = ['Mobile', 'Native', 'Beautiful', 'Fast'];

// SVG icons for socials
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="18" height="18">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="18" height="18">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  // Rotate words
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % ROTATING_WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  // Subtle tilt on mouse move — desktop only
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setTiltX(((e.clientX - cx) / cx) * 5);
      setTiltY(((e.clientY - cy) / cy) * -3);
    };
    if (window.matchMedia('(min-width: 1024px)').matches) {
      window.addEventListener('mousemove', onMove, { passive: true });
    }
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className={styles.section} aria-label="Hero">
      <div className={['container', styles.inner].join(' ')}>

        {/* ── Left: Text Content ── */}
        <div className={styles.content}>
          {/* Availability badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={styles.badge}
          >
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>Open to Opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <p className={styles.greeting}>Hi, I'm</p>
            <h1 className={styles.name}>{personal.name}</h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className={styles.headline}
          >
            Building{' '}
            <span className={styles.rotatingWordWrapper} aria-live="polite" aria-atomic="true">
              {/* Hidden sizer: sizes the wrapper to the current word's natural width */}
              <span className={styles.rotatingWordSizer} aria-hidden="true">
                {ROTATING_WORDS[wordIndex]}
              </span>
              {/* Visible animated word: absolutely overlaid on the sizer */}
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={wordIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.rotatingWord}
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            {' '}Experiences
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className={styles.bio}
          >
            {personal.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className={styles.ctas}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollTo('projects')}
              id="hero-view-projects-btn"
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollTo('contact')}
              id="hero-contact-btn"
            >
              Get In Touch
            </Button>
            {personal.resumeUrl && (
              <Button
                variant="ghost"
                size="lg"
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-resume-btn"
              >
                Resume
              </Button>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className={styles.stats}
            aria-label="Quick stats"
          >
            {personal.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.55 }}
            className={styles.socialLinks}
            aria-label="Social links"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={`${social.name} — ${social.handle}`}
              >
                {SOCIAL_ICONS[social.name]}
                <span className={styles.socialHandle}>{social.handle}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Phone Shell (Desktop/Tablet only) ── */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.7 }}
          className={styles.phoneWrapper}
          aria-hidden="true"
        >
          <PhoneShell tiltX={tiltX} tiltY={tiltY} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className={styles.scrollIndicator}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className={styles.scrollDot}
        />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
