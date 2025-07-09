import React from 'react';

export default function About() {
  return (
    <div className="about-container" style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
        Welcome to <strong>Polaroid Creator</strong> – your creative space to design stylish polaroid images with custom taglines and effects.
      </p>
      <p style={styles.text}>
        This project was built with a focus on simplicity and creativity. It allows users to upload photos, choose between different styles like "Original" or "Gibble Cartoon", and download personalized polaroid-style images.
      </p>
      <p style={styles.text}>
        Our goal is to provide an intuitive and fun way for people to express memories through creative digital design. Whether you're capturing a moment for a digital scrapbook or creating something unique for social media – we’ve got you covered.
      </p>
      <p style={styles.text}>
        This app was built using React, HTML2Canvas, and AI-powered cartoon filters. More features like filters, frames, and text customization are coming soon!
      </p>
      <p style={{ ...styles.text, fontStyle: 'italic' }}>
        Thank you for visiting. Keep creating!
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    background: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    lineHeight: '1.6',
    fontFamily: "'Segoe UI', sans-serif",
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '15px',
    color: '#444',
  },
};
