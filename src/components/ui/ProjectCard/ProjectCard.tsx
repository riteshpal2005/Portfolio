import styles from './ProjectCard.module.css';
import Tag from '../../common/Tag/Tag';
import type { Project } from '../../../types';
import { techUrls } from '../../../data/techUrls';
import { motion } from 'framer-motion';
import { staggerItem } from '../../../animations/variants';

interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

const STATUS_CONFIG = {
  'Live':        { color: '#4ade80', label: 'Live' },
  'In Progress': { color: '#a855f7', label: 'In Progress' },
  'Planned':     { color: '#60a5fa', label: 'Planned' },
} as const;

export default function ProjectCard({ project, isSelected, onToggle }: ProjectCardProps) {
  const status = STATUS_CONFIG[project.status];

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={[styles.card, isSelected ? styles.cardSelected : ''].join(' ')}
      onClick={() => onToggle(project.id)}
      style={{ '--card-color': project.color } as React.CSSProperties}
      aria-expanded={isSelected}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onToggle(project.id)}
    >
      {/* Color accent line */}
      <div className={styles.accentLine} style={{ background: project.color }} />

      {/* Card body */}
      <div className={styles.body}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.meta}>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.tagline}>{project.tagline}</p>
          </div>
          <div className={styles.statusBadge} style={{ '--status-color': status.color } as React.CSSProperties}>
            <span className={styles.statusDot} />
            {status.label}
          </div>
        </div>

        {/* Description */}
        <p className={styles.description}>{project.description}</p>

        {/* Tech tags */}
        <div className={styles.tags}>
          {project.techStack.slice(0, 4).map((tech) => (
            <Tag
              key={tech}
              href={techUrls[tech]}
              target="_blank"
              rel="noopener noreferrer"
              color={project.color}
            >
              {tech}
            </Tag>
          ))}
          {project.techStack.length > 4 && (
            <Tag color={project.color}>+{project.techStack.length - 4}</Tag>
          )}
        </div>

        {/* Metrics */}
        <div className={styles.metrics}>
          {project.metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              <span className={styles.metricValue} style={{ color: project.color }}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
            </div>
          ))}
        </div>

        {/* Expand hint */}
        <div className={styles.expandHint}>
          <span>{isSelected ? 'Collapse' : 'View Details'}</span>
          <motion.svg
            animate={{ rotate: isSelected ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
      </div>
    </motion.article>
  );
}
