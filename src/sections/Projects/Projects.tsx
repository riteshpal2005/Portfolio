import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import ProjectCard from '../../components/ui/ProjectCard/ProjectCard';
import Tag from '../../components/common/Tag/Tag';
import Button from '../../components/common/Button/Button';
import { projects } from '../../data/projects';
import { techUrls } from '../../data/techUrls';
import { staggerContainer, fadeUp, viewportOnce } from '../../animations/variants';

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setSelectedId((cur) => (cur === id ? null : id));

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className={['section', styles.section].join(' ')} aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeader
          eyebrow="My Projects"
          heading="Apps I'm Building"
          accentWord="Building"
          subtext="Real projects I'm actively developing — from concept to code. Each one sharpens a skill."
        />

        {/* Project cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={styles.grid}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedId === project.id}
              onToggle={toggle}
            />
          ))}
        </motion.div>

        {/* Expanded detail panel */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={styles.detailWrapper}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className={styles.detail}
                style={{ '--project-color': selectedProject.color } as React.CSSProperties}
              >
                {/* Detail header */}
                <div className={styles.detailHeader}>
                  <div>
                    <h3 className={styles.detailName}>{selectedProject.name}</h3>
                    <p className={styles.detailTagline}>{selectedProject.tagline}</p>
                  </div>
                  <button
                    className={styles.closeBtn}
                    onClick={() => setSelectedId(null)}
                    aria-label="Close project details"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className={styles.detailGrid}>
                  {/* Left */}
                  <div>
                    <p className={styles.detailDescription}>{selectedProject.description}</p>

                    <h4 className={styles.detailSubheading}>Key Features</h4>
                    <ul className={styles.featureList}>
                      {selectedProject.features.map((f) => (
                        <li key={f} className={styles.featureItem}>
                          <span className={styles.featureCheck} aria-hidden="true">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right */}
                  <div>
                    <div className={styles.challengeCard}>
                      <h4 className={styles.detailSubheading}>Engineering Focus</h4>
                      <p className={styles.challengeText}>{selectedProject.challenge}</p>
                    </div>

                    <h4 className={styles.detailSubheading} style={{ marginTop: 'var(--space-5)' }}>Tech Stack</h4>
                    <div className={styles.techTags}>
                      {selectedProject.techStack.map((tech) => (
                        <Tag
                          key={tech}
                          href={techUrls[tech]}
                          target="_blank"
                          rel="noopener noreferrer"
                          color={selectedProject.color}
                        >
                          {tech}
                        </Tag>
                      ))}
                    </div>

                    {selectedProject.githubUrl && (
                      <div style={{ marginTop: 'var(--space-5)' }}>
                        <Button
                          variant="ghost"
                          size="sm"
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                          View on GitHub
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
