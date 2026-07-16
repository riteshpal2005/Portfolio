import styles from './PhoneShell.module.css';
import { useRef, useEffect, useState } from 'react';

interface PhoneShellProps {
  /** The URL to load in the iframe. Defaults to the current page origin. */
  src?: string;
  /** Tilt in degrees from mouse movement */
  tiltX?: number;
  tiltY?: number;
}

/**
 * Renders a realistic phone shell on Desktop/Tablet containing a real <iframe>
 * of the portfolio itself.  On mobile the component returns null — the section
 * layout falls back to linear flow without a phone frame.
 */
export default function PhoneShell({ src, tiltX = 0, tiltY = 0 }: PhoneShellProps) {
  const iframeSrc = src ?? (typeof window !== 'undefined' ? window.location.origin + '/?embedded=1' : '/');
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const onLoad = () => setLoaded(true);
    iframe.addEventListener('load', onLoad);
    return () => iframe.removeEventListener('load', onLoad);
  }, []);

  return (
    <div
      className={styles.perspective}
      style={{
        transform: `perspective(1200px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`,
        transition: 'transform 0.12s ease',
      }}
    >
      <div className={styles.shell} aria-hidden="true">
        {/* Side buttons */}
        <div className={styles.btnPower} />
        <div className={styles.btnVolUp} />
        <div className={styles.btnVolDown} />
        <div className={styles.btnMute} />

        {/* Dynamic island */}
        <div className={styles.island}>
          <div className={styles.camera} />
          <div className={styles.speaker} />
        </div>

        {/* Screen */}
        <div className={styles.screen}>
          {/* Skeleton while loading */}
          {!loaded && (
            <div className={styles.skeleton} aria-label="Loading portfolio preview">
              <div className={styles.skeletonBar} style={{ width: '60%', height: 12 }} />
              <div className={styles.skeletonBar} style={{ width: '80%', height: 8, opacity: 0.5 }} />
              <div className={styles.skeletonBar} style={{ width: '45%', height: 8, opacity: 0.3 }} />
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={iframeSrc}
            title="Portfolio preview"
            className={[styles.iframe, loaded ? styles.iframeLoaded : ''].join(' ')}
            loading="eager"
            sandbox="allow-scripts allow-same-origin allow-forms"
            tabIndex={-1}
          />
        </div>

        {/* Screen glare overlay */}
        <div className={styles.glare} aria-hidden="true" />

        {/* Home indicator */}
        <div className={styles.homeBar} aria-hidden="true" />
      </div>
    </div>
  );
}
