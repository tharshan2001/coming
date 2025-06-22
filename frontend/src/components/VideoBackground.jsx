import React, { useRef, useEffect, useState } from 'react';

const VideoBackground = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [showSoundPrompt, setShowSoundPrompt] = useState(false);

  // Try to enable sound after component mounts
  useEffect(() => {
    const tryEnableSound = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        // Check if playback is happening
        videoRef.current.play().then(() => {
          setShowSoundPrompt(false);
        }).catch(error => {
          setShowSoundPrompt(true);
        });
      }
    };

    // Attempt to enable sound after a short delay
    const soundTimer = setTimeout(tryEnableSound, 1000);

    return () => clearTimeout(soundTimer);
  }, []);

  const handleUserInteraction = () => {
    if (!userInteracted && videoRef.current) {
      setUserInteracted(true);
      videoRef.current.muted = false;
      videoRef.current.play().catch(console.error);
      setShowSoundPrompt(false);
    }
  };

  return (
    <div 
      style={styles.container}
      onClick={handleUserInteraction}
    >
      <video
        ref={videoRef}
        style={styles.video}
        src={videoSrc}
        autoPlay
        muted={true} // Start muted to allow autoplay
        loop
        playsInline
        controls={false}
      />
      
      {/* Stylish Heading */}
      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>
          <span style={styles.letterW}>W</span>
          <span style={styles.letterE}>E</span>
          <span style={styles.apostrophe}>'</span>
          <span style={styles.letterR}>R</span>
          <span style={styles.letterE2}>E</span>
          <span style={styles.space}> </span>
          <span style={styles.letterC}>C</span>
          <span style={styles.letterO}>O</span>
          <span style={styles.letterM}>M</span>
          <span style={styles.letterI}>I</span>
          <span style={styles.letterN}>N</span>
          <span style={styles.letterG}>G</span>
        </h1>
      </div>

      {/* Teal Banner */}
      <div style={styles.banner}>
        <div style={styles.bannerContent}>
          THE COUNTDOWN BEGINS • COMING SOON • STAY TUNED FOR THE UNVEILING • SOMETHING NEW IS BREWING • COMING SOON • KEEP WATCHING • STAY TUNED
        </div>
      </div>

      {/* Sound prompt (only shows if needed) */}
      {showSoundPrompt && (
        <div style={styles.soundPrompt} onClick={handleUserInteraction}>
          <div style={styles.soundPromptContent}>
            <svg style={styles.soundIcon} viewBox="0 0 24 24">
              <path fill="currentColor" d="M3,9H7L12,4V20L7,15H3V9M16.5,12A4.5,4.5 0 0,0 12,7.5V8A4,4 0 0,1 16,12A4,4 0 0,1 12,16V16.5A4.5,4.5 0 0,0 16.5,12Z" />
            </svg>
            <span>Click anywhere to enable sound</span>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  },
  headingContainer: {
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    zIndex: 1,
    textAlign: 'center',
    pointerEvents: 'none' // Allows clicks to pass through to video
  },
  heading: {
    fontSize: 'clamp(3rem, 10vw, 6rem)',
    fontWeight: 800,
    margin: 0,
    letterSpacing: '-0.03em',
    display: 'inline-block',
  },
  // Individual letter styling
  letterW: { color: '#fff', textShadow: '0 0 10px rgba(255,255,255,0.7)' },
  letterE: { color: '#33EED5', textShadow: '0 0 15px rgba(51,238,213,0.8)' },
  apostrophe: { color: '#fff', fontSize: '0.8em' },
  letterR: { color: '#33EED5', textShadow: '0 0 15px rgba(51,238,213,0.8)' },
  letterE2: { color: '#fff' },
  space: { padding: '0 0.2em' },
  letterC: { color: '#33EED5', textShadow: '0 0 15px rgba(51,238,213,0.8)' },
  letterO: { color: '#fff' },
  letterM: { color: '#33EED5', textShadow: '0 0 15px rgba(51,238,213,0.8)' },
  letterI: { color: '#fff' },
  letterN: { color: '#33EED5', textShadow: '0 0 15px rgba(51,238,213,0.8)' },
  letterG: { color: '#fff', textShadow: '0 0 10px rgba(255,255,255,0.7)' },
  // Banner styles
  banner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#33EED5',
    padding: '10px 0',
    zIndex: 2,
    overflow: 'hidden',
    pointerEvents: 'none'
  },
  bannerContent: {
    color: '#000',
    fontSize: 'clamp(1rem, 2vw, 1rem)',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    animation: 'scrollText 20s linear infinite',
    display: 'inline-block',
    paddingLeft: '100%',
  },
  // Sound prompt styles
  soundPrompt: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(2px)',
  },
  soundPromptContent: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '20px 30px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  soundIcon: {
    width: '24px',
    height: '24px',
  },
};

// Add global styles for the animation
const styleElement = document.createElement('style');
styleElement.textContent = `
  @keyframes scrollText {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }
`;
document.head.appendChild(styleElement);

export default VideoBackground;