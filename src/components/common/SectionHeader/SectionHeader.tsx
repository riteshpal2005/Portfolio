import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  /** Text inside heading to wrap with accent color */
  accentWord?: string;
  subtext?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  accentWord,
  subtext,
}: SectionHeaderProps) {
  const headingWithAccent = accentWord
    ? heading.replace(
        accentWord,
        `<span class="${styles.accent}">${accentWord}</span>`
      )
    : heading;

  return (
    <div className={styles.wrapper}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2
        className={styles.heading}
        dangerouslySetInnerHTML={{ __html: headingWithAccent }}
      />
      {subtext && <p className={styles.subtext}>{subtext}</p>}
    </div>
  );
}
