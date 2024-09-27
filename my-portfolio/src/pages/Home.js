import React, { useState, useEffect } from 'react';
import profilePhoto from '../assets/images/profile-photo.jpg';

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Crafting', 'Digital', 'Experiences', 'with', 'Precision', 'and', 'Power'];

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timeout = setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
      }, 500); // Adjust the delay to control how fast each word appears (500ms here)
      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex, words.length]);

  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center">
      {/* Container for the layout */}
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center justify-center">

        {/* Profile Section */}
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
            {/* Profile Photo on the Left */}
            <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
              <img
                src={profilePhoto}
                alt="Profile Photo"
                className="rounded-full w-64 h-64 object-cover shadow-lg"
              />
            </div>

            {/* Text Content in the Center */}
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-5xl font-bold text-[#A28DEC]">
                {words.slice(0, currentWordIndex).join(' ')} {/* Revealing words one by one */}
              </h1>
              <p className="text-xl text-gray-500">
                I'm Millyanne, a Full-Stack Developer creating seamless web applications. Based in Kenya, I combine creativity with technology to build innovative solutions.
              </p>
              <a
                href="/my-portfolio/#/projects"
                className="inline-block mt-6 px-8 py-3 bg-[#A28DEC] hover:bg-[#9687E3] text-white rounded-full transition-all duration-300"
              >
                See My Projects
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="w-full mt-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Web Development Box */}
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-4">&#127760;</span>
                  <h3 className="text-lg font-semibold text-black-700 dark:text-gray-300">Web Development</h3>
                </div>
                <p className="text-black-600 dark:text-gray-400">
                  I design responsive websites using HTML, CSS, JavaScript, and React.
                </p>
              </div>

              {/* Backend Services Box */}
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-4">&#128187;</span>
                  <h3 className="text-lg font-semibold text-black-700 dark:text-gray-300">Backend Services</h3>
                </div>
                <p className="text-black-600 dark:text-gray-400">
                  I build scalable backend systems with Node.js and Python.
                </p>
              </div>

              {/* DevOps Box */}
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-4">&#9881;</span>
                  <h3 className="text-lg font-semibold text-black-700 dark:text-gray-300">DevOps</h3>
                </div>
                <p className="text-black-600 dark:text-gray-400">
                  I optimize application deployment using CI/CD and cloud services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
