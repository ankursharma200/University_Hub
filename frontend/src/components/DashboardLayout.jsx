import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const DashboardLayout = () => {
  const location = useLocation();
  const userRole = location.pathname.split('/')[1];

  
  const navLinks = {
    admin: [
      { name: 'Dashboard', path: '/admin/dashboard' },
      { name: 'Profile', path: '/admin/profile' },
      { name: 'Manage Students', path: '/admin/students' },
      { name: 'Manage Faculty', path: '/admin/faculty' },
    ],
    student: [
      { name: 'Dashboard', path: '/student/dashboard' },
      { name: 'Profile', path: '/student/profile' },
      { name: 'My Courses', path: '/student/courses' },
      { name: 'My Grades', path: '/student/grades' },
    ],
    faculty: [
      { name: 'Dashboard', path: '/faculty/dashboard' },
      { name: 'Profile', path: '/faculty/profile' },
      { name: 'My Classes', path: '/faculty/classes' },
      { name: 'Upload Marks', path: '/faculty/marks' },
    ],
  };

  const links = navLinks[userRole] || [];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          {userRole.charAt(0).toUpperCase() + userRole.slice(1)} Portal
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-2 rounded-md hover:bg-gray-700 ${
                location.pathname === link.path ? 'bg-gray-900' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Link to="/" className="block px-4 py-2 rounded-md hover:bg-red-700 bg-red-600 text-center">
            Logout
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <Outlet /> {/* Child routes will be rendered here */}
      </div>
    </div>
  );
};

export default DashboardLayout;