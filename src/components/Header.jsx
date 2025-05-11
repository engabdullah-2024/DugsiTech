import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // For the mobile menu icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu visibility

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo Section */}
       <Link to='/'> <h1 className="text-2xl font-bold text-pink-600">
          Dugsi <span className="text-gray-800">Hub</span>
        </h1></Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/" className="text-gray-700 hover:text-pink-600 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-pink-600 transition duration-300">
            About
          </Link>
          <Link to="/dev" className="text-gray-700 hover:text-pink-600 transition duration-300">
            Dev
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-pink-600 transition duration-300">
            Contact
          </Link>
         
          <Link to="/dashboard" className="text-gray-700 hover:text-pink-600 transition duration-300">
            Dashboard
          </Link>
          <Link to="/answers" className="text-gray-700 hover:text-pink-600 transition duration-300">
            Answers
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <FaBars 
            size={30} 
            className="text-gray-700 cursor-pointer"
            onClick={toggleMenu} // Toggle the mobile menu on click
          />
        </div>
      </div>

      {/* Mobile Navigation (Sliding from the left) */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white/90 backdrop-blur-lg shadow-lg transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-6 py-10">
          <Link to="/" className="text-gray-700 hover:text-pink-600 text-xl" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-pink-600 text-xl" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/dev" className="text-gray-700 hover:text-pink-600 text-xl" onClick={toggleMenu}>
            Dev
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-pink-600 text-xl" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-pink-600 text-xl" onClick={toggleMenu}>
            Dashboard
          </Link>
          <Link to="/answers" className="text-gray-700 hover:text-pink-600 text-xl" onClick={toggleMenu}>
            Answers
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
