import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate(); // Hook to handle navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', { email, password });
            setMessage('Login successful');
            setToken(response.data.token);
            // Save the token (e.g., in localStorage or state)
            localStorage.setItem('token', response.data.token);
            // Redirect to homepage after successful login
            navigate('/');
        } catch (error) {
          console.error('Login failed:', error.response ? error.response.data : error.message);
            setMessage('Login failed');


            if (error.response) {
              setMessage(error.response.data.message || 'Something went wrong');
          } else {
              setMessage('Network error or backend down');
        }
      }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
            {token && <p>Your token: {token}</p>}
        </div>
    );
};

export default Login;
