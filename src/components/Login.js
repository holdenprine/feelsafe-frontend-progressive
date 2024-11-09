import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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
      <button type="submit">Login</button>
      <a>Forgot Password?</a>
      <a onClick={navigate('/signup')}>Don't have an account? Sign up</a>
      <img 
        src={require('../assets/images/logo.jpeg')}
        alt='placeholder'
      />
    </form>
  </div>
  )
}

export default Login