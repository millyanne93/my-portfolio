import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-teal-500 dark:bg-teal-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to={`${process.env.PUBLIC_URL}/#/`} className="text-xl font-semibold text-white dark:text-gray-200">
            Personal Portfolio
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to={`${process.env.PUBLIC_URL}/`} className="text-white dark:text-gray-300">Home</Link>
          <Link to={`${process.env.PUBLIC_URL}/about`} className="text-white dark:text-gray-300">About</Link>
          <Link to={`${process.env.PUBLIC_URL}/projects`} className="text-white dark:text-gray-300">Projects</Link>
          <Link to={`${process.env.PUBLIC_URL}/contact`} className="text-white dark:text-gray-300">Contact</Link>
          <button onClick={toggleDarkMode} className="ml-4 text-white dark:text-gray-300">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
