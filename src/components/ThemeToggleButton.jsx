// ThemeToggleButton.js
import React from 'react';
import { useTheme } from '../components/ThemeContext ';
import { MdDarkMode, MdLightMode } from 'react-icons/md'; // Importing icons

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-600 text-white rounded-full flex items-center gap-2"
    >
      {isDarkMode ? (
        <MdLightMode size={24} /> // Sun icon for light mode
      ) : (
        <MdDarkMode size={24} /> // Moon icon for dark mode
      )}
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
