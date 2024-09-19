import React from 'react';
import profilePhoto from '../assets/images/profile-photo.jpg';

const Home = () => {
  return (
    <section className="relative bg-custom-bg bg-cover bg-center min-h-screen flex items-center justify-center">
      {/* Container for the layout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">

        {/* Text Content on the Left */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white transition-all duration-500 ease-in-out transform hover:scale-110">
            Hi there, I'm Millyanne Wanjala
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

        {/* Photo on the Right with Blended Background */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative rounded-full bg-gradient-to-br from-white/40 via-transparent to-gray-900/40 p-2 shadow-2xl">
            <img
              src={profilePhoto}
              alt="Profile Photo"
              className="rounded-full w-64 h-64 object-cover opacity-90 mix-blend-overlay shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Services Section - Aligned Left with Bullet Points and Descriptions */}
      <section className="py-12 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-start">
          {/* Left side with Title */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold">What I Do</h2>
            <ul className="mt-8 space-y-6">
              {/* Each point with a symbol and description */}
              <li className="flex flex-col items-start">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">&#127760;</span> {/* Globe with Meridians for Web Development */}
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Web Development</p>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  I design and build responsive, user-friendly websites using modern web technologies like HTML, CSS, JavaScript, and React. My focus is on creating seamless experiences that work across all devices and browsers.
                </p>
              </li>

              <li className="flex flex-col items-start">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">&#128187;</span> {/* Desktop Computer for Backend Services */}
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Backend Services</p>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  I develop robust and scalable backend systems using technologies like Node.js and Python. I handle server-side logic, database management, and API development to ensure smooth data flow and application functionality.
                </p>
              </li>

              <li className="flex flex-col items-start">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">&#9881;</span> {/* Gear for DevOps */}
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">DevOps</p>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  I work on automating and optimizing the deployment, monitoring, and scaling of applications using CI/CD pipelines and cloud services. My goal is to streamline development processes and ensure systems are running efficiently.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
