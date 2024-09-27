import React, { useEffect, useRef, useState } from 'react';
import {
  FaUser, FaGraduationCap, FaLaptopCode, FaBriefcase, FaHeart, FaHandshake,
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython
} from 'react-icons/fa';
import { SiDjango, SiMongodb, SiMysql, SiFlask } from 'react-icons/si';

const About = () => {
  const sectionsRef = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prevSections) => [...prevSections, entry.target.id]);
          observer.unobserve(entry.target);  // Stop observing once it's visible
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
      content: `As a full-stack developer, I bridge the gap between technology and business. I'm driven to create innovative web solutions that solve real-world problems. My flexibility with time zones ensures seamless collaboration, and I prioritize open communication to build strong partnerships with clients.`,
    },
    {
      id: 'education',
      title: 'My Education Journey',
      icon: <FaGraduationCap className="mr-2 text-[#A28DEC]" />,
      content: (
        <ul className="mt-4 space-y-2 text-black-700 dark:text-gray-300">
          <li>BSc. Information Sciences-Maasai Mara University</li>
          <li>Software Engineering Program- African Leadership Experience(ALX-SE)</li>
          <li>Project Management Fundamentals-Coursera</li>
        </ul>
      ),
    },
    {
      id: 'techstack',
      title: 'My Techstack',
      icon: <FaLaptopCode className="mr-2 text-[#A28DEC]" />,
      content: (
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
            <SiFlask className="ml-4 mr-2 text-black-500" /> Flask
          </li>
          <li className="flex items-center">
            <SiMongodb className="mr-2 text-green-500" /> MongoDB
            <SiMysql className="ml-4 mr-2 text-blue-600" /> MySQL
          </li>
        </ul>
      ),
    },
    {
      id: 'experience',
      title: 'Experience Highlights',
      icon: <FaBriefcase className="mr-2 text-[#A28DEC]" />,
      content: (
        <ul className="mt-4 space-y-2 text-black-700 dark:text-gray-300">
          <li>I  have collaborated on various projects, including developing meaningful solutions like an equipment tracking system and contributing to platforms like EduAdapt and tele-thrive.</li>
          <li>I worked in business development and sales for over 3 years, which helped shape my transition into software engineering.</li>
          <li>I provided support and reviewed code for other students in the SE program, fostering growth and collaboration.</li>
          <li>I have experience in project management and actively participated in community activities to drive positive change.</li>
        </ul>
      ),
    },
    {
      id: 'hobbies',
      title: 'Hobbies and Interests',
      icon: <FaHeart className="mr-2 text-[#A28DEC]" />,
      content: 'Tech trends, travel, community service, and creative projects.',
    },
    {
      id: 'connect',
      title: 'Let\'s Connect',
      icon: <FaHandshake className="mr-2 text-[#A28DEC]" />,
      content: (
        <>
          Interested in working together? <a href="/my-portfolio/#/contact" className="text-[#A28DEC]">Reach Out</a>.
        </>
      ),
    },
  ];

  return (
    <section className="min-h-screen py-12 bg-custom-black flex flex-col justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {sectionData.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => sectionsRef.current[index] = el}
            className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col transition-opacity duration-700 ease-in-out ${
              visibleSections.includes(section.id) ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              {section.icon} {section.title}
            </h3>
            <div className="mt-4 text-black-700 dark:text-gray-300">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
