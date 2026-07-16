import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { personal } from '../../../data/personal';
import useActiveSection from '../../../hooks/useActiveSection';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTIONS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')} role="banner">
      <nav className={[styles.nav, 'container'].join(' ')} aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          aria-label="Ritesh Pal — Home"
        >
          <span className={styles.logoMark} aria-hidden="true">RP</span>
          <span className={styles.logoName}>{personal.name}</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.links} role="list">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={[styles.link, isActive ? styles.linkActive : ''].join(' ')}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${personal.email}`}
          className={styles.cta}
          aria-label="Send email to Ritesh Pal"
          id="nav-contact-cta"
        >
          Hire Me
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={[styles.bar, menuOpen ? styles.barTop : ''].join(' ')} />
          <span className={[styles.bar, menuOpen ? styles.barMid : ''].join(' ')} />
          <span className={[styles.bar, menuOpen ? styles.barBot : ''].join(' ')} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={[styles.mobileMenu, menuOpen ? styles.mobileMenuOpen : ''].join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <ul className={styles.mobileLinks} role="list">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={[styles.mobileLink, isActive ? styles.mobileLinkActive : ''].join(' ')}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={`mailto:${personal.email}`}
              className={styles.mobileCta}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
