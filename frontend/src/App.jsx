
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLoginPage from './pages/AdminLoginPage';

function App() {
  return (
    <Routes>
      <Route path="/admin-login" element={<AdminLoginPage />} />
    </Routes>
  );
}

export default App;