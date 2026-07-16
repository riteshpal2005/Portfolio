import styles from './TimelineItem.module.css';
import type { JourneyItem } from '../../../types';
import { motion } from 'framer-motion';
import { staggerItem } from '../../../animations/variants';

interface TimelineItemProps {
  item: JourneyItem;
  isLast?: boolean;
}

export default function TimelineItem({ item, isLast = false }: TimelineItemProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={styles.item}
    >
      {/* Timeline indicator */}
      <div className={styles.indicator}>
        <div className={styles.dot} />
        {!isLast && <div className={styles.line} />}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.year}>{item.year}</span>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.desc}>{item.desc}</p>
      </div>
    </motion.div>
  );
}
