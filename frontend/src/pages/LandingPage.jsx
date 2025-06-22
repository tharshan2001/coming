import React from 'react';
import VideoBackground from '../components/VideoBackground';

const LandingPage = () => {
  return (
    <VideoBackground videoSrc="/landing-video.mp4">

    </VideoBackground>
  );
};

const styles = {
  heading: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    marginBottom: '1rem',
  },
  tagline: {
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    marginBottom: '2rem',
  },
  button: {
    marginTop: 20,
    padding: '12px 30px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#007bff',
    color: 'white',
  }
};

export default LandingPage;