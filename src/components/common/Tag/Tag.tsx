import styles from './Tag.module.css';
import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  /** Hex color — used for tinted background and text */
  color?: string;
  href?: string;
  target?: string;
  rel?: string;
  size?: 'sm' | 'md';
}

export default function Tag({
  children,
  color,
  href,
  target,
  rel,
  size = 'sm',
}: TagProps) {
  const inlineStyle = color
    ? ({
        '--tag-color': color,
        '--tag-bg': `${color}18`,
        '--tag-border': `${color}30`,
      } as React.CSSProperties)
    : undefined;

  const cls = [styles.tag, styles[size]].join(' ');

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cls}
        style={inlineStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <span className={cls} style={inlineStyle}>
      {children}
    </span>
  );
}
