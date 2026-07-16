import styles from './SkillCard.module.css';
import Tag from '../../common/Tag/Tag';
import type { SkillCategory } from '../../../types';
import { motion } from 'framer-motion';
import { staggerItem } from '../../../animations/variants';

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={styles.card}
    >
      <h3 className={styles.categoryName}>{category.name}</h3>
      <div className={styles.skills}>
        {category.skills.map((skill) => (
          <Tag
            key={skill.name}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            {skill.name}
          </Tag>
        ))}
      </div>
    </motion.div>
  );
}
