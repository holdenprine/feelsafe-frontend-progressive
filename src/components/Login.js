import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleLogin} type="submit">Login</button>
      <p onClick={() => navigate('/')}>Forgot Password?</p>
      <p onClick={navigate('/signup')}>Don't have an account? Sign up</p>
      <img 
        src={require('../assets/images/logo.jpeg')}
        alt='placeholder'
      />
    </form>
  </div>
  )
}

export default Login