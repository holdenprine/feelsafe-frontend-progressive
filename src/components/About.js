import React from 'react'

const About = () => {

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
      gap: '20px',
      maxWidth: '1000px',
      margin: 'auto',
    },
    textContainer: {
      flex: 1,
      padding: '20px',
      backgroundColor: '#f7f7f7',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.6',
      fontSize: '1rem',
    },
    imageContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      borderRadius: '10px',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '10px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>About Us</h1>
        <p>Feel Safe is a self-defense and awareness training company with a mission to empower women with the skills, confidence, and knowledge to feel secure in all aspects of life. Founded by seasoned experts in personal safety and empowerment, Feel Safe is committed to creating a supportive environment where women can develop essential self-protection skills.
        </p>
        <p>Our founders bring decades of experience, passion, and dedication to each program, helping participants overcome fears and build resilience. Through tailored training and practical, real-world techniques, we aim to equip every woman with the tools she needs to navigate life confidently and assertively.
        </p>
        <p>At Feel Safe, we believe in a world where women feel strong, safe, and comfortable wherever they go. Join us to take control of your safety, embrace confidence, and discover the power within.
        </p>
        <div style={styles.imageContainer}>
          <img
            src={require('../assets/images/temp-about-photo.jpg')} 
            alt="about us"
            style={styles.image} 
          />
        </div>
      </div>
    </div>
  )
}

export default About