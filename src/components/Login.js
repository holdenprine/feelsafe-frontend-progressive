import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:5001/api/users/login', {email, password});
        // save token to local storage
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
      } catch (error) {
        alert('Error logging in');
      }
    }

    // form submission handling
    const handleSubmit = async (e) => {
        e.preventDefault();

        // send login request to backend
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });

        if(response.ok) {
            const user = await response.json();
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');
        } else {
            alert('Invalid login Credentials');
        }
    };

    const styles = {
      body: {
        margin: 0,
        fontFamily: 'Arial, sans-serif',
      },
      loginContainer: {
        maxWidth: '480px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
      },
      headerImage: {
        width: '100%',
        height: 'auto',
        marginBottom: '20px',
      },
      loginMain: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      loginForm: {
        marginBottom: '20px',
      },
      formGroup: {
        marginBottom: '15px',
      },
      input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginTop: '5px',
      },
      loginButton: {
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '4px',
        width: '100%',
        cursor: 'pointer',
      },
      links: {
        color: '#007bff',
        marginBottom: '10px',
        textDecoration: 'none',
      },
      reviewLink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      stars: {
        marginLeft: '10px',
        color: '#ffa500',
      },
      featuresSection: {
        marginTop: '20px',
      },
      featuresImage: {
        width: '100%',
        height: 'auto',
        marginBottom: '10px',
      },
      exploreButton: {
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '4px',
        width: '100%',
        cursor: 'pointer',
      },
    };

  return (
    <div style={styles.loginContainer}>
    <header style={styles.headerImage}>
      <img
        src="src/assets/images/feelsafe-online-course-image.png" // Replace with the image URL for "Online Feel Safe Course"
        alt="Feel Safe Course"
        style={styles.headerImage}
      />
    </header>
    <main style={styles.loginMain}>
      <form style={styles.loginForm}>
        <div style={styles.formGroup}>
          <label htmlFor="email">Email/Username</label>
          <input type="text" id="email" placeholder="Email/Username" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" style={styles.input} />
        </div>
        <button type="submit" style={styles.loginButton} onClick={handleSubmit}>Login</button>
      </form>
      <div style={styles.links}>
        <a href="/forgot-password" style={styles.links}>Forgot Password?</a>
        <a href="/sign-up" style={styles.links}>Don't have an account? Sign up</a>
        <a href="/google-review" style={{ ...styles.links, ...styles.reviewLink }}>
          Share a Google Review!
          <span style={styles.stars}>★★★★☆</span>
        </a>
      </div>
      <div style={styles.featuresSection}>
        <img
          src="features-image-url" // Replace with the image URL for the training scene
          alt="Exciting Features"
          style={styles.featuresImage}
        />
        <button style={styles.exploreButton}>Discover Our Exciting Features</button>
      </div>
    </main>
  </div>
  )
}

export default Login