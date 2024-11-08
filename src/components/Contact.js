import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Here, you'd typically handle form submission (e.g., send data to an API)
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Contact Us</h2>
        <input
          type="text"
          style={styles.input}
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <input
          type="email"
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <textarea
          style={{ ...styles.input, ...styles.textArea }}
          placeholder="Message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
        />
        <button style={styles.button} onClick={handleSubmit}>
          <span style={styles.buttonText}>Submit</span>
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    height: '100vh',
  },
  card: {
    width: '100%',
    maxWidth: '500px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: '50px',
    borderColor: '#ccc',
    borderWidth: '1px',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '15px',
  },
  textArea: {
    height: '100px',
  },
  button: {
    backgroundColor: '#5F6D46',
    padding: '15px',
    borderRadius: '10px',
    width: '100%',
    border: 'none',
    cursor: 'pointer',
  },
  buttonText: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default Contact;
