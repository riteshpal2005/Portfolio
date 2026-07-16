import styles from './Footer.module.css';
import { personal } from '../../../data/personal';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={['container', styles.inner].join(' ')}>
        <p className={styles.text}>
          Designed &amp; built by{' '}
          <span className={styles.name}>{personal.name}</span>
        </p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} — React Native Developer
        </p>
      </div>
    </footer>
  );
}
