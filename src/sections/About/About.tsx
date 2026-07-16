import { motion } from 'framer-motion';
import styles from './About.module.css';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import TimelineItem from '../../components/ui/TimelineItem/TimelineItem';
import Tag from '../../components/common/Tag/Tag';
import { personal } from '../../data/personal';
import { staggerContainer, staggerItem, fadeLeft, fadeRight, viewportOnce } from '../../animations/variants';

const LEARNING_CHIPS = [
  { label: 'React Native', url: 'https://reactnative.dev' },
  { label: 'Expo Router', url: 'https://expo.dev/router' },
  { label: 'Reanimated', url: 'https://docs.swmansion.com/react-native-reanimated' },
  { label: 'Supabase', url: 'https://supabase.com' },
  { label: 'TypeScript', url: 'https://typescriptlang.org' },
  { label: 'Zustand', url: 'https://zustand-demo.pmnd.rs' },
  { label: 'Clean Architecture', url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html' },
];

const AVAILABILITY_COLORS: Record<string, string> = {
  Freelancing: '#f59e0b',
  Internship:  '#a855f7',
  'Full-time Job': '#60a5fa',
};

export default function About() {
  return (
    <section id="about" className={['section', styles.section].join(' ')} aria-labelledby="about-heading">
      <div className="container">
        <SectionHeader
          eyebrow="My Story"
          heading="The Developer Behind the Code"
          accentWord="Behind the Code"
          subtext="5–6 months in. Building mobile apps with React Native and Expo, growing fast, and open to my first opportunity."
        />

        <div className={styles.grid}>
          {/* ── Left: Journey Timeline ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {personal.journey.map((item, i) => (
              <TimelineItem
                key={item.year}
                item={item}
                isLast={i === personal.journey.length - 1}
              />
            ))}
          </motion.div>

          {/* ── Right: Cards ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className={styles.cards}
          >
            {/* Approach card */}
            <motion.div variants={staggerItem} className={styles.approachCard}>
              <h3 className={styles.cardHeading}>{personal.approach.heading}</h3>
              {personal.approach.body.map((para, i) => (
                <p key={i} className={styles.cardBody}>{para}</p>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div variants={staggerItem} className={styles.statsRow}>
              {[
                { value: '3+',      label: 'Projects Built' },
                { value: '100%',    label: 'TypeScript'    },
                { value: 'RN+Expo', label: 'Mobile Stack'  },
              ].map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Available for */}
            <motion.div variants={staggerItem} className={styles.availCard}>
              <div className={styles.availHeader}>
                <span className={styles.availDot} aria-hidden="true" />
                <span className={styles.availTitle}>Available For</span>
              </div>
              <div className={styles.availTags}>
                {personal.availability.map((a) => (
                  <Tag key={a} color={AVAILABILITY_COLORS[a]}>{a}</Tag>
                ))}
              </div>
            </motion.div>

            {/* Currently learning */}
            <motion.div variants={staggerItem} className={styles.learningCard}>
              <h3 className={styles.cardHeading}>Currently Learning</h3>
              <div className={styles.chips}>
                {LEARNING_CHIPS.map((chip) => (
                  <Tag
                    key={chip.label}
                    href={chip.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="#a855f7"
                  >
                    {chip.label}
                  </Tag>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
