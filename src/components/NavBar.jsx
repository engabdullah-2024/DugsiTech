// src/components/Navbar.jsx
import React from "react";
import { FaHome, FaSignOutAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="bg-pink-600 text-white px-6 py-3 flex justify-between items-center shadow">
      <div className="text-xl font-bold flex items-center gap-2">
        <FaHome /> Student Management
      </div>
      <div className="flex gap-4 items-center">
        {!isLoggedIn ? (
          <>
            <a href="#login" className="flex items-center gap-1">
              <FaSignInAlt /> Login
            </a>
            <a href="#register" className="flex items-center gap-1">
              <FaUserPlus /> Register
            </a>
          </>
        ) : (
          <button
            onClick={onLogout}
            className="bg-white text-pink-600 px-3 py-1 rounded flex items-center gap-1"
          >
            <FaSignOutAlt /> Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
