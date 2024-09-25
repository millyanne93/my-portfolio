import React from 'react';
import {
  FaUser, FaGraduationCap, FaLaptopCode, FaBriefcase, FaHeart, FaHandshake,
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython
} from 'react-icons/fa';
import { SiDjango, SiMongodb, SiMysql } from 'react-icons/si';
import FadeInSection from '../components/FadeInSection';

const About = () => {
  return (
    <section className="min-h-screen py-12 bg-custom-black flex flex-col justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">

        {/* About Me Box */}
        <FadeInSection delay={100}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <FaUser className="mr-2 text-teal-500" /> About Me
            </h3>
            <p className="mt-4 text-black-700 dark:text-gray-300">
              I am a Full-stack developer combining tech and business expertise. Passionate about building smart web solutions.
            </p>
          </div>
        </FadeInSection>

        {/* Education Box */}
        <FadeInSection delay={300}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <FaGraduationCap className="mr-2 text-teal-500" /> My Education Journey
            </h3>
            <ul className="mt-4 space-y-2 text-black-700 dark:text-gray-300">
              <li>BSc. Information Sciences</li>
              <li>Software Engineering Program</li>
              <li>Project Management Fundamentals</li>
            </ul>
          </div>
        </FadeInSection>

        {/* Techstack Box */}
        <FadeInSection delay={500}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <FaLaptopCode className="mr-2 text-teal-500" /> My Techstack
            </h3>
            <ul className="mt-4 space-y-2 text-black-700 dark:text-gray-300">
              <li className="flex items-center">
                <FaHtml5 className="mr-2 text-orange-500" /> HTML
                <FaCss3Alt className="ml-4 mr-2 text-blue-500" /> CSS
                <FaJsSquare className="ml-4 mr-2 text-yellow-500" /> JavaScript
                <FaReact className="ml-4 mr-2 text-blue-500" /> React
              </li>
              <li className="flex items-center">
                <FaNodeJs className="mr-2 text-green-500" /> Node.js
                <FaPython className="ml-4 mr-2 text-blue-500" /> Python
                <SiDjango className="ml-4 mr-2 text-green-700" /> Django
              </li>
              <li className="flex items-center">
                <SiMongodb className="mr-2 text-green-500" /> MongoDB
                <SiMysql className="ml-4 mr-2 text-blue-600" /> MySQL
              </li>
            </ul>
          </div>
        </FadeInSection>

        {/* Other Sections */}
        <FadeInSection delay={700}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <FaBriefcase className="mr-2 text-teal-500" /> Experience Highlights
            </h3>
            <ul className="mt-4 space-y-2 text-black-700 dark:text-gray-300">
              <li>Developed an equipment tracking system improving asset management.</li>
              <li>Contributed to EduAdapt, an AI-driven learning platform.</li>
              <li>Worked on tele-thrive, a virtual mental health platform.</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection delay={900}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <FaHeart className="mr-2 text-teal-500" /> Hobbies and Interests
            </h3>
            <p className="mt-4 text-black-700 dark:text-gray-300">
              Tech trends, travel, community service, and creative projects.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={1100}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <FaHandshake className="mr-2 text-teal-500" /> Let's Connect
            </h3>
            <p className="mt-4 text-black-700 dark:text-gray-300">
              Interested in working together? <a href="/contact" className="text-teal-500">Hire me</a>.
            </p>
          </div>
        </FadeInSection>
        
      </div>
    </section>
  );
};

export default About;
