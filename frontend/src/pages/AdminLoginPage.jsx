import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
     
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        username,
        password,
      });

     
      alert(response.data.message);
      navigate('/admin/dashboard'); 

    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      alert(error.response.data.message || 'An error occurred during login.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2>Admin Login</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ marginBottom: '10px', padding: '8px' }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: '20px', padding: '8px' }}
        />

        <button type="submit" style={{ padding: '10px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;