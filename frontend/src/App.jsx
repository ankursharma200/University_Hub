
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage'; 
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard'; 
import StudentRegisterPage from './pages/StudentRegisterPage';
import StudentLoginPage from './pages/StudentLoginPage'; 
import FacultyLoginPage from './pages/FacultyLoginPage';
import FacultyRegisterPage from './pages/FacultyRegisterPage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student-register" element={<StudentRegisterPage />} />
        <Route path="/student-login" element={<StudentLoginPage />} />
         <Route path="/faculty-login" element={<FacultyLoginPage />}/>
        <Route path="/faculty-register" element={<FacultyRegisterPage />} /> 
    </Routes>
  );
}

export default App;