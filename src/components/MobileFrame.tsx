import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AppScreen {
  id: number;
  bg: string;
  icon: string;
  title: string;
  subtitle: string;
  accent: string;
}

interface MobileFrameProps {
  screens: AppScreen[];
  tiltX?: number;
  tiltY?: number;
  scale?: number;
}

export default function MobileFrame({ screens, tiltX = 0, tiltY = 0, scale = 1 }: MobileFrameProps) {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentScreen(prev => (prev + 1) % screens.length);
        setIsTransitioning(false);
      }, 300);
    }, 2800);

    return () => clearInterval(intervalRef.current);
  }, [screens.length]);

  const screen = screens[currentScreen];

  return (
    <div
      style={{
        transform: `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(${scale})`,
        transition: 'transform 0.1s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="phone-frame float-anim">
        {/* Buttons */}
        <div className="phone-button-right" />
        <div className="phone-button-left-1" />
        <div className="phone-button-left-2" />
        <div className="phone-button-left-3" />

        {/* Notch */}
        <div className="phone-notch">
          <div className="phone-camera" />
          <div style={{ width: 28, height: 4, background: '#111', borderRadius: 2 }} />
        </div>

        {/* Screen */}
        <div className="phone-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: screen.bg,
                display: 'flex',
                flexDirection: 'column',
                padding: '52px 16px 16px',
              }}
            >
              {/* Status bar */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                paddingTop: 8,
              }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>9:41</span>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  {[4, 3, 2].map(w => (
                    <div key={w} style={{ width: w * 2, height: 8, background: 'rgba(255,255,255,0.7)', borderRadius: 1 }} />
                  ))}
                  <div style={{ width: 16, height: 9, border: '1px solid rgba(255,255,255,0.5)', borderRadius: 2, marginLeft: 3, display: 'flex', alignItems: 'center', padding: '0 1px' }}>
                    <div style={{ width: '75%', height: 5, background: '#4CAF50', borderRadius: 1 }} />
                  </div>
                </div>
              </div>

              {/* App content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: 20 }}>
                {/* Header */}
                <div>
                  <div style={{
                    fontSize: 28,
                    marginBottom: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                    <span>{screen.icon}</span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif' }}>
                      {screen.title}
                    </span>
                  </div>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: screen.accent,
                    fontFamily: 'Space Grotesk, sans-serif',
                    textShadow: `0 0 20px ${screen.accent}80`,
                  }}>
                    {screen.subtitle}
                  </div>
                </div>

                {/* Mock content bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[80, 60, 45, 70].map((width, i) => (
                    <div key={i} style={{
                      height: i === 0 ? 8 : 5,
                      width: `${width}%`,
                      background: i === 0
                        ? `linear-gradient(90deg, ${screen.accent}, ${screen.accent}40)`
                        : 'rgba(255,255,255,0.1)',
                      borderRadius: 4,
                      animation: `shimmer 2s ease infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }} />
                  ))}
                </div>

                {/* Bottom tab bar */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  paddingTop: 10,
                  marginTop: 16,
                }}>
                  {['🏠', '📊', '🔍', '👤'].map((icon, i) => (
                    <div key={i} style={{
                      fontSize: i === 0 ? 18 : 14,
                      opacity: i === 0 ? 1 : 0.4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                      {icon}
                      {i === 0 && (
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: screen.accent }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Screen indicator dots */}
        <div style={{
          position: 'absolute',
          bottom: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 5,
          zIndex: 10,
        }}>
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentScreen(i)}
              style={{
                width: i === currentScreen ? 16 : 6,
                height: 6,
                borderRadius: 3,
                background: i === currentScreen ? screen.accent : 'rgba(255,255,255,0.25)',
                transition: 'all 0.3s ease',
                border: 'none',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Reflection overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 38,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  );
}
