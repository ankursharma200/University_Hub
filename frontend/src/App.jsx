
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard'; 
import StudentRegisterPage from './pages/StudentRegisterPage';

function App() {
  return (
    <Routes>
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student-register" element={<StudentRegisterPage />} />
    </Routes>
  );
}

export default App;