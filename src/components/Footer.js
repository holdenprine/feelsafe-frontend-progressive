import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.links}>
          <Link to="/settings" style={styles.footerLink}>
            Settings
          </Link>
          <Link to="/contact" style={styles.footerLink}>
            Contact
          </Link>
        </div>
        <div style={styles.socialIcons}>
          {/* Replace these with actual icons if desired */}
          <span style={styles.icon}>🐦</span>
          <span style={styles.icon}>📸</span>
          <span style={styles.icon}>🔗</span>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--primary-color)',  // Primary color
    padding: '20px 0',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  footerContent: {
    width: '90%',
    maxWidth: '1200px',  // Optional to limit footer width on large screens
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  footerLinkHover: {
    color: 'var(--secondary-color)',  // Secondary color for hover effect
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    fontSize: '24px',  // Icon size
    color: '#fff',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
};

export default Footer;
