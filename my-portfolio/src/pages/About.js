import React, { useEffect, useRef, useState } from "react";
import {
  FaUser,
} from "react-icons/fa";
import profilePhoto from "../assets/images/me.jpeg";

const SkillBar = ({ skill, percentage, color }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-white">{skill}</span>
      <span className="text-white">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="h-2.5 rounded-full transition-all duration-1000"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
  </div>
);

const About = () => {
  const sectionsRef = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);
  const [activeTab, setActiveTab] = useState("background");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prevSections) => [...prevSections, entry.target.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id="about" className="min-h-screen py-12 bg-gray-800 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Left Column: About Info & Skills */}
        <div className="flex flex-col">
          <div
            id="aboutMe"
            ref={(el) => (sectionsRef.current[0] = el)}
            className={`transition-opacity duration-700 ease-in-out ${
              visibleSections.includes("aboutMe") ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-2xl font-bold text-white flex items-center mb-4 cursor-pointer hover:text-[#A28DEC]">
              <FaUser className="mr-2 text-[#A28DEC]" /> About Me
            </h3>
            <p className="text-white">
              I'm a passionate Full-Stack Developer with a deep love for building digital solutions
              that bridge the gap between technology and business.
            </p>
          </div>

          {/* Tabs for Background, Skills, Education */}
          <div className="mt-8">
            <div className="flex space-x-4 mb-6">
              {["background", "skills", "education"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md transition ${
                    activeTab === tab
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-white hover:bg-purple-500"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "background" && (
              <div className="text-white">
                <p>
                  I have experience working on web applications, DevOps pipelines, and AI-powered
                  platforms. I specialize in full-stack development, creating seamless user
                  experiences.
                </p>
              </div>
            )}

            {activeTab === "skills" && (
              <div>
                <SkillBar skill="React" percentage={90} color="#61dafb" />
                <SkillBar skill="Node.js" percentage={85} color="#3c873a" />
                <SkillBar skill="Python" percentage={80} color="#fdd835" />
                <SkillBar skill="MongoDB" percentage={75} color="#4DB33D" />
                <SkillBar skill="Tailwind CSS" percentage={85} color="#06B6D4" />
              </div>
            )}

            {activeTab === "education" && (
              <div className="text-white">
                <p>Bachelor's in Information Science (Records Management) - Maasai Mara University</p>
                <p>Software Engineering - ALX Africa</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Profile Image & Timeline */}
        <div className="flex flex-col items-center md:items-end">
          <img
            src={profilePhoto}
            alt="Profile Photo"
            className="rounded-full w-72 h-72 object-cover shadow-lg border-4 border-purple-500"
          />

          {/* Timeline Section */}
          <div className="mt-8 w-full">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
            <div className="border-l-4 border-purple-500 pl-4 space-y-4">
              <div>
                <h4 className="text-white font-semibold">2024 - Present</h4>
                <p className="text-gray-400">Freelance Full-Stack Developer</p>
              </div>
              <div>
                <h4 className="text-white font-semibold">2023</h4>
                <p className="text-gray-400">Software Engineering at ALX Africa</p>
              </div>
              <div>
                <h4 className="text-white font-semibold">2018 - 2022</h4>
                <p className="text-gray-400">Business Development & Customer Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
