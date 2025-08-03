import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const FacultyLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const toastId = toast.loading('Logging in...');
    try {
      const response = await axios.post('http://localhost:5000/api/faculty/login', { email, password });
      toast.success(response.data.message, { id: toastId });
      navigate('/faculty/dashboard'); // Navigate to faculty dashboard
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred.', { id: toastId });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Faculty Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email and Password Inputs (same as student login) */}
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>
          <div>
            <label htmlFor="password"  className="text-sm font-semibold text-gray-700">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-purple-600 rounded-md hover:bg-purple-700">Login</button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/faculty-register" className="font-semibold text-purple-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FacultyLoginPage;