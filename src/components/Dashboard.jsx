// src/pages/Dashboard.jsx
import React from 'react';
import { FaUserShield, FaSchool, FaGraduationCap, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
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
            Welcome, {user?.name}
          </h2>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-red-600 hover:underline"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Info Section */}
          <div className="bg-pink-100 p-6 rounded-xl text-center shadow-md space-y-4">
            <div className="flex items-center justify-start space-x-4">
              <FaUserShield className="text-4xl text-pink-500" />
              <div className="text-left">
                <h3 className="text-xl font-semibold">Role</h3>
                <p>{user?.role}</p>
              </div>
            </div>

            <div className="flex items-center justify-start space-x-4">
              <FaSchool className="text-4xl text-pink-500" />
              <div className="text-left">
                <h3 className="text-xl font-semibold">School</h3>
                <p>{user?.school}</p>
              </div>
            </div>

            <div className="flex items-center justify-start space-x-4">
              <FaGraduationCap className="text-4xl text-pink-500" />
              <div className="text-left">
                <h3 className="text-xl font-semibold">Grade</h3>
                <p>{user?.grade}</p>
              </div>
            </div>

            <div className="flex items-center justify-start space-x-4">
              <FaEnvelope className="text-4xl text-pink-500" />
              <div className="text-left">
                <h3 className="text-xl font-semibold">Email</h3>
                <p>{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Dashboard Info Section */}
          <div className="bg-pink-100 p-6 rounded-xl text-center shadow-md">
            <h3 className="text-xl font-semibold">Dashboard Access</h3>
            <p>Manage your profile and view updates here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
