import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-4">
      <div className="container mx-auto text-center text-gray-700 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Millyanne Wanjala. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
