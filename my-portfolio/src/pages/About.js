import React, { useEffect, useRef, useState } from 'react';
import {
  FaUser,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';
import { SiDjango, SiMongodb, SiMysql, SiFlask } from 'react-icons/si';
import profilePhoto from '../assets/images/me.jpeg';

const About = () => {
  const sectionsRef = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prevSections) => [...prevSections, entry.target.id]);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, { threshold: 0.1 });

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const sectionData = [
    {
      id: 'aboutMe',
      title: 'About Me',
      icon: <FaUser className="mr-2 text-[#A28DEC]" />,
      content: `I'm a passionate Full-Stack Developer with a deep love for building digital solutions that bridge the gap between technology and business. With experience in creating web applications and working on large-scale projects, I excel in delivering efficient, scalable, and user-friendly applications.

      I thrive on collaboration and have worked with teams across multiple time zones, ensuring seamless communication and high-quality deliverables. Let's create impactful solutions together.`,
    },
    {
      id: 'techstack',
      title: 'Best Skilled At:',
      icon: <FaLaptopCode className="mr-2 text-[#A28DEC]" />,
      content: (
        <ul className="mt-4 space-y-2 text-white dark:text-gray-300">
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
            <SiFlask className="ml-4 mr-2 text-black-500" /> Flask
          </li>
          <li className="flex items-center">
            <SiMongodb className="mr-2 text-green-500" /> MongoDB
            <SiMysql className="ml-4 mr-2 text-blue-600" /> MySQL
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section id="about" className="min-h-screen py-12 bg-gray-800 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="flex flex-col">
          {sectionData.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => (sectionsRef.current[index] = el)}
              className={`flex flex-col transition-opacity duration-700 ease-in-out ${
                visibleSections.includes(section.id) ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms`, marginBottom: index === 0 ? '2rem' : '0' }} // Add margin to space between sections
            >
              <h3 className="text-2xl font-bold text-white dark:text-white flex items-center mb-2 cursor-pointer hover:text-[#A28DEC]">
                {section.icon} {section.title}
              </h3>
              <div className="text-white dark:text-gray-300">{section.content}</div>
            </div>
          ))}
        </div>

        {/* Enlarged Profile Photo on the Right */}
        <div className="flex justify-center md:justify-end">
          <img
            src={profilePhoto}
            alt="Profile Photo"
            className="rounded-full w-96 h-96 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
