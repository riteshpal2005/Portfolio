import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', right: -200, top: '30%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
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
          <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#A855F7' }}>
            — Tech Stack
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            The Tools I <span className="gradient-text">Master</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Strictly the technologies that matter for building world-class mobile experiences.
          </p>
        </motion.div>

        {/* Orbit visualizer */}
        <div className="flex justify-center mb-20">
          <SkillOrbit inView={inView} />
        </div>

        {/* Skill category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-5 group"
              style={{ border: `1px solid ${cat.color}20` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}>
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-white text-sm">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.08 + j * 0.04, duration: 0.4 }}
                    className="text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300 group-hover:border-opacity-50"
                    style={{
                      background: `${cat.color}10`,
                      border: `1px solid ${cat.color}25`,
                      color: cat.color,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillOrbit({ inView }: { inView: boolean }) {
  const coreSkills = ['RN', 'Expo', 'TS', 'Vite'];
  const orbitSkills1 = ['Firebase', 'Supabase', 'Zustand', 'Clerk', 'Zod', 'Axios'];
  const orbitSkills2 = ['Reanimated', 'Framer', 'Lottie', 'Skia', 'GSRH'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'relative', width: 340, height: 340 }}
    >
      {/* Outer orbit ring */}
      <div style={{
        position: 'absolute', inset: 0,
        border: '1px dashed rgba(79,142,247,0.2)',
        borderRadius: '50%',
        animation: 'spin 30s linear infinite',
      }} />
      {/* Middle orbit ring */}
      <div style={{
        position: 'absolute', inset: 50,
        border: '1px dashed rgba(168,85,247,0.25)',
        borderRadius: '50%',
        animation: 'spin 20s linear infinite reverse',
      }} />
      {/* Inner orbit ring */}
      <div style={{
        position: 'absolute', inset: 100,
        border: '1px dashed rgba(34,211,238,0.2)',
        borderRadius: '50%',
        animation: 'spin 12s linear infinite',
      }} />

      {/* Outer orbit nodes */}
      {orbitSkills1.map((skill, i) => {
        const angle = (i / orbitSkills1.length) * 360;
        const rad = (angle * Math.PI) / 180;
        const r = 160;
        const x = 170 + r * Math.cos(rad) - 28;
        const y = 170 + r * Math.sin(rad) - 14;
        return (
          <div
            key={skill}
            style={{
              position: 'absolute',
              left: x, top: y,
              background: 'rgba(79,142,247,0.1)',
              border: '1px solid rgba(79,142,247,0.3)',
              borderRadius: 999,
              padding: '3px 10px',
              fontSize: 10,
              fontWeight: 600,
              color: '#93c5fd',
              whiteSpace: 'nowrap',
              backdropFilter: 'blur(8px)',
              animation: `spin 30s linear infinite reverse`,
              transformOrigin: `${28 - (170 + r * Math.cos(rad) - x - 28)}px ${14 - (170 + r * Math.sin(rad) - y - 14)}px`,
            }}
          >
            {skill}
          </div>
        );
      })}

      {/* Middle orbit nodes */}
      {orbitSkills2.map((skill, i) => {
        const angle = (i / orbitSkills2.length) * 360 + 36;
        const rad = (angle * Math.PI) / 180;
        const r = 110;
        const x = 170 + r * Math.cos(rad) - 28;
        const y = 170 + r * Math.sin(rad) - 12;
        return (
          <div
            key={skill}
            style={{
              position: 'absolute',
              left: x, top: y,
              background: 'rgba(168,85,247,0.1)',
              border: '1px solid rgba(168,85,247,0.3)',
              borderRadius: 999,
              padding: '3px 10px',
              fontSize: 10,
              fontWeight: 600,
              color: '#c4b5fd',
              whiteSpace: 'nowrap',
              backdropFilter: 'blur(8px)',
            }}
          >
            {skill}
          </div>
        );
      })}

      {/* Center core */}
      <div style={{
        position: 'absolute',
        inset: '50%',
        transform: 'translate(-50%, -50%)',
        width: 110,
        height: 110,
        background: 'radial-gradient(circle, rgba(79,142,247,0.25) 0%, rgba(168,85,247,0.15) 50%, transparent 70%)',
        borderRadius: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(79,142,247,0.3)',
        boxShadow: '0 0 40px rgba(79,142,247,0.3)',
        backdropFilter: 'blur(10px)',
        gap: 2,
        left: '50%',
        top: '50%',
      }}>
        <div style={{ fontSize: 22 }}>📱</div>
        <div style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 11,
          color: 'white',
          letterSpacing: '0.05em',
          textAlign: 'center',
          lineHeight: 1.3,
        }}>
          REACT<br />NATIVE
        </div>
      </div>
    </motion.div>
  );
}
