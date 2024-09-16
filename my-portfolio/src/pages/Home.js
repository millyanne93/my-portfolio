import React from 'react';
import profilePhoto from '../assets/images/profile-photo.jpg';

const Home = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      {/* Container for the layout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">

        {/* Text Content on the Left */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white transition-all duration-500 ease-in-out transform hover:scale-110">
            Hello, I'm Millyanne Wanjala
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            A Full-Stack Developer with experience in building web applications. Based in Kenya, I specialize in creating seamless user experiences using modern technologies.
          </p>
          <a
            href="/projects"
            role="button"
            className="mt-12 px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            See My Projects
          </a>
        </div>

        {/* Photo on the Right */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={profilePhoto}
            alt="Profile Photo"
            className="rounded-lg w-64 h-64 object-cover shadow-lg"
          />
        </div>
      </div>
      
      {/* Services Section - Aligned Left with Bullet Points and Symbols */}
      <section className="py-12 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-start">
          {/* Left side with Title */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold">What I Do</h2>
            <ul className="mt-8 space-y-4">
              {/* Each point with a symbol */}
              <li className="flex items-center">
                <span className="text-2xl mr-4">&#127760;</span> {/* Globe with Meridians for Web Development */}
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Web Development</p>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">&#128187;</span> {/* Desktop Computer for Backend Services */}
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Backend Services</p>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">&#9881;</span> {/* Gear for DevOps */}
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">DevOps</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;

