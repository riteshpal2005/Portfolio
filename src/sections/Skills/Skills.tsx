import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import SkillCard from '../../components/ui/SkillCard/SkillCard';
import { skillCategories } from '../../data/skills';
import { staggerContainer, viewportOnce } from '../../animations/variants';

export default function Skills() {
  return (
    <section id="skills" className={['section', styles.section].join(' ')} aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Tech Stack"
          heading="Tools I'm Working With"
          accentWord="Working With"
          subtext="Technologies I've been building with over the past 5–6 months — across mobile, backend, and tooling."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={styles.grid}
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.name} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
