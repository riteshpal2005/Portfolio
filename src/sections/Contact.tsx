import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const socials = [
  {
    name: 'GitHub',
    handle: '@riteshpal2005',
    href: 'https://github.com/riteshpal2005',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: '#f0f0f0',
  },
  {
    name: 'LinkedIn',
    handle: 'Ritesh Pal',
    href: 'https://www.linkedin.com/in/riteshpal2005/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#0A66C2',
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: focused === field ? 'rgba(79,142,247,0.06)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused === field ? 'rgba(79,142,247,0.5)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: 12,
    padding: '14px 16px',
    color: 'white',
    fontSize: 14,
    outline: 'none',
    transition: 'all 0.3s',
    fontFamily: 'Inter, sans-serif',
    boxShadow: focused === field ? '0 0 20px rgba(79,142,247,0.15)' : 'none',
  });

  return (
    <section id="contact" className="py-32 relative">
      <div style={{
        position: 'absolute', left: '50%', top: '20%', transform: 'translateX(-50%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse, rgba(79,142,247,0.07) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#EC4899' }}>
            — Let's Connect
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            I'm actively looking for internships, entry-level roles, and collaborative projects.
            Got an idea or opportunity? Let's talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-2xl p-8" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              {status === 'sent' ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                    style={{ background: 'rgba(34,211,238,0.15)', border: '2px solid rgba(34,211,238,0.4)' }}>
                    ✅
                  </div>
                  <h3 className="font-display font-bold text-white text-xl">Message Sent!</h3>
                  <p className="text-slate-400 text-center">Thanks! I'll get back to you at <span className="text-white">riteshks211@gmail.com</span> soon.</p>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4"
                >
                  <div className="text-3xl">⚠️</div>
                  <p className="text-slate-400 text-center">Something went wrong. Email me directly at <a href="mailto:riteshks211@gmail.com" className="text-blue-400 underline">riteshks211@gmail.com</a></p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-slate-400">Your Name</label>
                      <input
                        style={inputStyle('name')}
                        placeholder="John Doe"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        required
                        id="contact-name-input"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-slate-400">Email Address</label>
                      <input
                        type="email"
                        style={inputStyle('email')}
                        placeholder="hello@example.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        required
                        id="contact-email-input"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-slate-400">Subject</label>
                    <input
                      style={inputStyle('subject')}
                      placeholder="Internship Opportunity / Collaboration / Just Saying Hi..."
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                      id="contact-subject-input"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-slate-400">Message</label>
                    <textarea
                      style={{ ...inputStyle('message'), resize: 'none', height: 130 }}
                      placeholder="Tell me about the opportunity or just say hi..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      required
                      id="contact-message-input"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                    className="w-full py-4 rounded-xl font-semibold text-white text-sm relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #4F8EF7, #A855F7)',
                      opacity: status === 'loading' ? 0.7 : 1,
                    }}
                    id="contact-submit-btn"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right — info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Direct email */}
            <div className="glass rounded-2xl p-6" style={{ border: '1px solid rgba(79,142,247,0.2)' }}>
              <h3 className="font-display font-bold text-white mb-1">Direct Email</h3>
              <p className="text-xs text-slate-400 mb-3">Preferred — I check this daily</p>
              <a
                href="mailto:riteshks211@gmail.com"
                className="gradient-text font-semibold text-sm break-all"
              >
                riteshks211@gmail.com
              </a>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-6" style={{ border: '1px solid rgba(34,211,238,0.2)' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" style={{ boxShadow: '0 0 8px #4ade80' }} />
                <h3 className="font-display font-bold text-white">Open to Opportunities</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Looking for <span className="text-white">internships</span>, entry-level mobile developer roles,
                and open-source collaborations. Final year student ready to contribute.
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.03, x: 4 }}
                  className="glass rounded-xl p-4 flex items-center gap-3 group"
                  style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'white', textDecoration: 'none' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${social.color}18`, color: social.color, border: `1px solid ${social.color}30` }}>
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{social.name}</div>
                    <div className="text-xs text-slate-400">{social.handle}</div>
                  </div>
                  <svg className="w-4 h-4 ml-auto text-slate-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-20 text-slate-600 text-sm"
      >
        <p>Designed & built by <span className="gradient-text font-semibold">Ritesh Pal</span></p>
        <p className="mt-1">© {new Date().getFullYear()} — Aspiring React Native Developer</p>
      </motion.div>
    </section>
  );
}
