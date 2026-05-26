import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import MobileFrame from '../components/MobileFrame';

const statusColors: Record<string, { bg: string; text: string; dot: string }> = {
  'Live': { bg: 'rgba(34,197,94,0.15)', text: '#4ade80', dot: '#4ade80' },
  'In Progress': { bg: 'rgba(79,142,247,0.15)', text: '#93c5fd', dot: '#4F8EF7' },
  'Planned': { bg: 'rgba(168,85,247,0.15)', text: '#c4b5fd', dot: '#A855F7' },
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<string | null>(null);

  const selectedProject = projects.find(p => p.id === selected);

  return (
    <section id="projects" className="py-32 relative">
      <div style={{
        position: 'absolute', left: '10%', bottom: '20%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#22D3EE' }}>
            — My Projects
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Apps I'm <span className="gradient-text">Building</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Real projects I'm actively developing — from concept to code. Each one sharpens a skill.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {projects.map((project, i) => {
            const status = statusColors[project.status];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(selected === project.id ? null : project.id)}
                className="glass rounded-2xl overflow-hidden group relative cursor-pointer"
                style={{ border: `1px solid ${project.color}20` }}
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

                {/* Mini phone preview */}
                <div className="flex justify-center pt-8 pb-4"
                  style={{ background: `radial-gradient(circle, ${project.color}08 0%, transparent 70%)` }}>
                  <div style={{ transform: 'scale(0.52)', transformOrigin: 'top center', height: 140 }}>
                    <MobileFrame screens={project.screens} />
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h3 className="font-display font-bold text-white text-lg">{project.name}</h3>
                        {/* Status badge */}
                        <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: status.bg, color: status.text }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: status.dot, boxShadow: `0 0 6px ${status.dot}` }} />
                          {project.status}
                        </span>
                      </div>
                      <p className="text-xs font-medium" style={{ color: project.color }}>{project.tagline}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: selected === project.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${project.color}15`, color: project.color }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map(m => (
                      <div key={m.label} className="text-center p-2 rounded-lg"
                        style={{ background: `${project.color}08`, border: `1px solid ${project.color}15` }}>
                        <div className="text-xs font-bold truncate" style={{ color: project.color }}>{m.value}</div>
                        <div className="text-xs text-slate-500 mt-0.5 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${project.color}06 0%, transparent 100%)` }} />
              </motion.div>
            );
          })}
        </div>

        {/* Expanded project detail */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: 20 }}
                transition={{ duration: 0.4 }}
                className="glass-strong rounded-2xl p-8"
                style={{ border: `1px solid ${selectedProject.color}30` }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left — info */}
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-6">
                      <h3 className="font-display text-3xl font-bold text-white">{selectedProject.name}</h3>
                      <span className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ background: `${selectedProject.color}20`, color: selectedProject.color }}>
                        {selectedProject.tagline}
                      </span>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-8">{selectedProject.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-display font-bold text-white mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProject.features.map(f => (
                          <div key={f} className="flex items-start gap-2 text-sm text-slate-300">
                            <span style={{ color: selectedProject.color, flexShrink: 0, marginTop: 2 }}>✓</span>
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="glass rounded-xl p-4 mb-6"
                      style={{ border: `1px solid ${selectedProject.color}20` }}>
                      <h4 className="font-bold text-white text-sm mb-2">⚡ Engineering Focus</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.challenge}</p>
                    </div>

                    {/* Tech stack */}
                    <div className="mb-6">
                      <h4 className="font-display font-bold text-white mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map(t => (
                          <span key={t} className="text-xs px-3 py-1 rounded-full font-medium"
                            style={{
                              background: `${selectedProject.color}10`,
                              border: `1px solid ${selectedProject.color}25`,
                              color: selectedProject.color,
                            }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* GitHub link */}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        View on GitHub
                      </a>
                    )}
                  </div>

                  {/* Right — phone */}
                  <div className="flex justify-center">
                    <div style={{ position: 'relative' }}>
                      <div style={{
                        position: 'absolute', inset: -40,
                        background: `radial-gradient(circle, ${selectedProject.color}25 0%, transparent 70%)`,
                        borderRadius: '50%', filter: 'blur(20px)',
                      }} />
                      <MobileFrame screens={selectedProject.screens} scale={1.1} />
                    </div>
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
