import React, { useState } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-xl font-semibold text-gray-900 dark:text-white">Millyanne Wanjala</a>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="text-gray-700 dark:text-gray-300">Home</a>
          <a href="/about" className="text-gray-700 dark:text-gray-300">About</a>
          <a href="/projects" className="text-gray-700 dark:text-gray-300">Projects</a>
          <a href="/contact" className="text-gray-700 dark:text-gray-300">Contact</a>
          <button onClick={toggleDarkMode} className="ml-4">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
