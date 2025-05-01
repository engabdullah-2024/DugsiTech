// src/pages/Dashboard.jsx
import React from 'react';
import { FaUserShield, FaBookOpen, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('auth'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-pink-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 mt-32">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-pink-600">
            Welcome, {user?.username}
          </h2>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-red-600 hover:underline"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-pink-100 p-6 rounded-xl text-center shadow-md">
            <FaUserShield className="text-4xl mx-auto text-pink-500 mb-2" />
            <h3 className="text-xl font-semibold">Role: {user?.role}</h3>
          </div>
          <div className="bg-pink-100 p-6 rounded-xl text-center shadow-md">
            <FaBookOpen className="text-4xl mx-auto text-pink-500 mb-2" />
            <h3 className="text-xl font-semibold">Dashboard Access</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
