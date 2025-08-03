import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import DashboardLayout from './components/DashboardLayout';


import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import StudentRegisterPage from './pages/StudentRegisterPage';
import StudentLoginPage from './pages/StudentLoginPage';
import StudentDashboard from './pages/StudentDashboard';
import FacultyLoginPage from './pages/FacultyLoginPage';
import FacultyRegisterPage from './pages/FacultyRegisterPage';
import FacultyDashboard from './pages/FacultyDashboard';

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/student-login" element={<StudentLoginPage />} />
        <Route path="/student-register" element={<StudentRegisterPage />} />
        <Route path="/faculty-login" element={<FacultyLoginPage />} />
        <Route path="/faculty-register" element={<FacultyRegisterPage />} />

     
        <Route path="/admin" element={<DashboardLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
         </Route>

       
        <Route path="/student" element={<DashboardLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
        </Route>

        <Route path="/faculty" element={<DashboardLayout />}>
          <Route path="dashboard" element={<FacultyDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;