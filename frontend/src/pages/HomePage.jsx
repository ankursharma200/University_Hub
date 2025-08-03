import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the College Portal</h1>
      <div className="flex space-x-4">
        <Link to="/student-login">
          <button className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            Student Portal
          </button>
        </Link>
         <Link to="/faculty-login">
          <button className="px-8 py-4 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75">
            Faculty Portal
          </button>
        </Link>
        <Link to="/admin-login">
          <button className="px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75">
            Admin Portal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;