import React from 'react';

const VideoBackground = ({ videoSrc }) => {
  return (
    <div style={styles.container}>
      <video
        style={styles.video}
        src={videoSrc}
        autoPlay
        muted={false}
        loop
        playsInline
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
THE COUNTDOWN BEGINS • COMING SOON • STAY TUNED FOR THE UNVEILING • SOMETHING NEW IS BREWING • COMING SOON • KEEP WATCHING • STAY TUNED        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
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
  },
  heading: {
    fontSize: 'clamp(3rem, 10vw, 6rem)',
    fontWeight: 800,
    margin: 0,
    letterSpacing: '-0.03em',
    display: 'inline-block',
  },
  // Individual letter styling for a dynamic look
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
  // Teal banner styles
  banner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#33EED5',
    padding: '10px 0',
    zIndex: 2,
    overflow: 'hidden',
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
  // Animation for scrolling text
  '@keyframes scrollText': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-100%)' },
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