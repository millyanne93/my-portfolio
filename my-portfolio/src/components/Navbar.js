import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get the saved preference from local storage or default to true
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; // Convert string to boolean
  });

  useEffect(() => {
    // Apply dark mode class based on the state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true'); // Save preference
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false'); // Save preference
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle the mode
  };

  return (
    <nav className="bg-teal-500 dark:bg-teal-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          <Link
            to={`${process.env.PUBLIC_URL}/`}
            className="bg-white dark:bg-gray-800 text-teal-500 dark:text-white py-2 px-4 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Home
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/about`}
            className="bg-white dark:bg-gray-800 text-teal-500 dark:text-white py-2 px-4 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            About
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/projects`}
            className="bg-white dark:bg-gray-800 text-teal-500 dark:text-white py-2 px-4 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Projects
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/contact`}
            className="bg-white dark:bg-gray-800 text-teal-500 dark:text-white py-2 px-4 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Contact
          </Link>
          <button onClick={toggleDarkMode} className="ml-4 text-white dark:text-gray-300">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
