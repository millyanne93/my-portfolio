import React, { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import profilePhoto from "../assets/images/me.jpeg";

// Skill Bar Component
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
              I’m a results-driven Full-Stack Developer with a strong foundation in software engineering 
  and a background in business development. I specialize in building <strong>scalable web applications</strong>, 
  optimizing <strong>DevOps workflows</strong>, and leveraging <strong>AI-powered solutions</strong>. My ability to merge 
  technical expertise with <strong>strategic problem-solving</strong> allows me to deliver high-quality digital products.
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
                  With experience in <strong>full-stack development, DevOps automation, and cloud services</strong>, 
                  I have contributed to <strong>building intelligent applications</strong> that bridge the gap between 
                  business and technology. I thrive in collaborative environments and continuously seek to 
                  innovate through code.
                </p>
              </div>
            )}

            {activeTab === "skills" && (
              <div>
                <SkillBar skill="React" percentage={90} color="#61dafb" />
                <SkillBar skill="Node.js" percentage={85} color="#3c873a" />
                <SkillBar skill="Python" percentage={80} color="#fdd835" />
                <SkillBar skill="Django & Flask" percentage={80} color="#092E20" />
                <SkillBar skill="MongoDB & MySQL" percentage={80} color="#4DB33D" />
                <SkillBar skill="DevOps (Docker, CI/CD, GitHub Actions)" percentage={85} color="#0db7ed" />
                <SkillBar skill="AI Data Labeling & Analysis" percentage={70} color="#A28DEC" />
              </div>
            )}

            {activeTab === "education" && (
              <div className="text-white">
                <p>📌 <strong>Bachelor's in Information Science</strong> - Maasai Mara University (2012 - 2016)</p>
                <p>📌 <strong>Software Engineering</strong> - ALX Africa (2023 - 2024)</p>
                <p>📌 <strong>Fundamentals of Project Management</strong> - Coursera (2022)</p>
                <p>📌 <strong>AWS Cloud Practitioner Certification (In Progress)</strong></p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Profile Image & Timeline */}
        <div className="flex flex-col items-center md:items-end">
          <img
            src={profilePhoto}
            alt="Profile"
            className="rounded-full w-72 h-72 object-cover shadow-lg border-4 border-purple-500"
          />

          {/* Timeline Section */}
          <div className="mt-8 w-full">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
            <div className="border-l-4 border-purple-500 pl-4 space-y-4">
              <div>
                <h4 className="text-white font-semibold">2024 - Present</h4>
                <p className="text-gray-400">Full-Stack Developer</p>
              </div>
              <div>
                <h4 className="text-white font-semibold">2023 - 2024</h4>
                <p className="text-gray-400">Software Engineering at ALX Africa</p>
              </div>
              <div>
                <h4 className="text-white font-semibold">2021-2023</h4>
                <p className="text-gray-400">Gen AI Data Labeling - Clickworker / Remotasks</p>
              </div>
              <div>
                <h4 className="text-white font-semibold">2018 - 2021</h4>
                <p className="text-gray-400">Business Development/Sales at AmoebaX Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
