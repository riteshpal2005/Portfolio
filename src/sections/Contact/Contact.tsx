import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import Button from '../../components/common/Button/Button';
import { personal, socials } from '../../data/personal';
import { staggerContainer, staggerItem, viewportOnce } from '../../animations/variants';
import type { ContactForm, FormStatus } from '../../types';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

const API_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? 'http://localhost:3001';

const EMPTY_FORM: ContactForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [focusedField, setFocusedField] = useState<keyof ContactForm | null>(null);

  const update = (field: keyof ContactForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm(EMPTY_FORM);
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className={['section', styles.section].join(' ')} aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Let's Connect"
          heading="Let's Build Something Together"
          accentWord="Together"
          subtext="I'm actively looking for internships, freelance work, and full-time roles. Got an idea or opportunity? Let's talk."
        />

        <div className={styles.grid}>
          {/* ── Form ── */}
          <div className={styles.formCard}>
            {status === 'sent' ? (
              <div className={styles.successState} role="status" aria-live="polite">
                <div className={styles.successIcon} aria-hidden="true">✓</div>
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successText}>
                  Thanks! I'll get back to you at{' '}
                  <a href={`mailto:${personal.email}`} className={styles.emailLink}>
                    {personal.email}
                  </a>{' '}
                  soon.
                </p>
              </div>
            ) : status === 'error' ? (
              <div className={styles.errorState} role="alert" aria-live="assertive">
                <div className={styles.errorIcon} aria-hidden="true">!</div>
                <p className={styles.errorText}>
                  Something went wrong. Email me directly at{' '}
                  <a href={`mailto:${personal.email}`} className={styles.emailLink}>
                    {personal.email}
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      className={[styles.input, focusedField === 'name' ? styles.inputFocused : ''].join(' ')}
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={update('name')}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      className={[styles.input, focusedField === 'email' ? styles.inputFocused : ''].join(' ')}
                      type="email"
                      placeholder="hello@example.com"
                      value={form.email}
                      onChange={update('email')}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    className={[styles.input, focusedField === 'subject' ? styles.inputFocused : ''].join(' ')}
                    type="text"
                    placeholder="Internship / Freelance / Collaboration..."
                    value={form.subject}
                    onChange={update('subject')}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    autoComplete="off"
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className={[styles.input, styles.textarea, focusedField === 'message' ? styles.inputFocused : ''].join(' ')}
                    placeholder="Tell me about the opportunity or just say hi..."
                    value={form.message}
                    onChange={update('message')}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'loading'}
                  id="contact-submit-btn"
                  className={styles.submitBtn}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className={styles.spinner} viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* ── Right Info ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className={styles.info}
          >
            {/* Direct email */}
            <motion.div variants={staggerItem} className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>Direct Email</h3>
              <p className={styles.infoCardSub}>Preferred — I check this daily</p>
              <a href={`mailto:${personal.email}`} className={styles.emailLink}>
                {personal.email}
              </a>
            </motion.div>

            {/* Availability */}
            <motion.div variants={staggerItem} className={styles.infoCard}>
              <div className={styles.availHeader}>
                <span className={styles.availDot} aria-hidden="true" />
                <h3 className={styles.infoCardTitle}>Open to Opportunities</h3>
              </div>
              <div className={styles.availTags}>
                {['Freelancing', 'Internship', 'Full-time Job'].map((label) => (
                  <span key={label} className={styles.availTag}>{label}</span>
                ))}
              </div>
              <p className={styles.infoCardSub} style={{ marginTop: 'var(--space-3)' }}>
                Final year student ready to contribute and grow.
              </p>
            </motion.div>

            {/* Socials */}
            <div className={styles.socialsList}>
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  variants={staggerItem}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                  aria-label={`${social.name} — ${social.handle}`}
                >
                  <div className={styles.socialIcon}>{SOCIAL_ICONS[social.name]}</div>
                  <div className={styles.socialText}>
                    <span className={styles.socialName}>{social.name}</span>
                    <span className={styles.socialHandle}>{social.handle}</span>
                  </div>
                  <svg className={styles.socialArrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
